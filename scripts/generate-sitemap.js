// scripts/generate-sitemap.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { SitemapStream, streamToPromise } from "sitemap";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://sbdkhl.com";
const projectsDataPath = path.join(__dirname, "../src/data/projects.ts");

// Extract IDs from projects.ts using regex
function getProjectIds() {
  try {
    const tsContent = fs.readFileSync(projectsDataPath, "utf-8");
    // Regex to match: id: 'some-id' or id: "some-id"
    const idRegex = /id:\s*['"]([\w-]+)['"]/g;
    const ids = [];
    let match;
    while ((match = idRegex.exec(tsContent)) !== null) {
      ids.push(match[1]);
    }
    return ids;
  } catch (err) {
    console.error("Error reading projects.ts:", err);
    return [];
  }
}

function getRoutes() {
  // Static routes
  const routes = ["/", "/about", "/contact", "/projects"];

  // Dynamic project routes
  const projectIds = getProjectIds();
  projectIds.forEach((id) => {
    routes.push(`/projects/${id}`);
  });

  return routes;
}

(async () => {
  try {
    const routes = getRoutes();
    const sitemap = new SitemapStream({ hostname: BASE_URL });

    routes.forEach((route) => {
      sitemap.write({ url: route, changefreq: "weekly", priority: 0.7 });
    });

    sitemap.end();
    const data = await streamToPromise(sitemap);
    
    fs.writeFileSync(
      path.join(__dirname, "../public/sitemap.xml"),
      data.toString()
    );
    
    console.log("✅ sitemap.xml generated successfully with correct project IDs!");
    console.log(`Generated ${routes.length} routes.`);
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    process.exit(1);
  }
})();
