import fs from "fs";
import path from "path";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DynamicProjectsGrid } from "@/components/DynamicProjectsGrid";

export default function ProjectsPage() {
  // Read the directory server-side
  const projectsDir = path.join(process.cwd(), 'public', 'large scale projects');
  let largeProjects: { name: string; images: string[] }[] = [];

  try {
    const entries = fs.readdirSync(projectsDir, { withFileTypes: true });
    
    // Filter out only directories, ignore hidden files like .DS_Store
    let projectDirs = entries.filter(entry => entry.isDirectory() && !entry.name.startsWith('.'));
    
    // Custom sort: force 'Monsoon Breeze sec 78 gurugram' to top, sort rest alphabetically
    projectDirs.sort((a, b) => {
      const targetName = "Monsoon Breeze sec 78 gurugram";
      if (a.name === targetName) return -1;
      if (b.name === targetName) return 1;
      return a.name.localeCompare(b.name);
    });
    
    largeProjects = projectDirs.map(entry => {
      const dirPath = path.join(projectsDir, entry.name);
      let images: string[] = [];
      
      try {
        const files = fs.readdirSync(dirPath);
        // Find all image files
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
        images = imageFiles.map(file => `/large scale projects/${entry.name}/${file}`);
      } catch (err) {
        console.error(`Error reading directory ${dirPath}:`, err);
      }
      
      return {
        name: entry.name,
        images
      };
    });
  } catch (error) {
    console.error("Error reading projects directory:", error);
    largeProjects = [];
  }

  return (
    <>
      <Navbar />
      <main>
        <DynamicProjectsGrid projects={largeProjects} />
      </main>
      <Footer />
    </>
  );
}
