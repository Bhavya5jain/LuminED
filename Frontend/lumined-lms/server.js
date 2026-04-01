import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "LuminEd LMS API is running" });
  });

  // Courses API
  app.get("/api/courses", (req, res) => {
    res.json([
      { id: 1, title: "Modern Web Development", instructor: "Sarah Drasner", price: 49.99, rating: 4.8, students: 1240, image: "https://picsum.photos/seed/web/800/600", category: "Development", level: "Beginner" },
      { id: 2, title: "UI/UX Design Masterclass", instructor: "Gary Simon", price: 59.99, rating: 4.9, students: 850, image: "https://picsum.photos/seed/design/800/600", category: "Design", level: "Intermediate" },
      { id: 3, title: "Machine Learning A-Z", instructor: "Andrew Ng", price: 89.99, rating: 4.7, students: 3200, image: "https://picsum.photos/seed/ai/800/600", category: "Data Science", level: "Advanced" },
      { id: 4, title: "Business Strategy 101", instructor: "Michael Porter", price: 39.99, rating: 4.5, students: 980, image: "https://picsum.photos/seed/business/800/600", category: "Business", level: "Beginner" },
      { id: 5, title: "Digital Marketing Pro", instructor: "Neil Patel", price: 29.99, rating: 4.6, students: 1500, image: "https://picsum.photos/seed/marketing/800/600", category: "Marketing", level: "Intermediate" },
      { id: 6, title: "Photography for Beginners", instructor: "Annie Leibovitz", price: 44.99, rating: 4.8, students: 600, image: "https://picsum.photos/seed/photo/800/600", category: "Creative", level: "Beginner" },
    ]);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
