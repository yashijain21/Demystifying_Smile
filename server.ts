import express from "express";
import path from "path";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";
import dns from "dns";

// Fix Node warning about localhost dns lookup delays
dns.setDefaultResultOrder && dns.setDefaultResultOrder("ipv4first");

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Local JSON Storage Directories & Files
const DATA_DIR = path.join(process.cwd(), "data");
const APPOINTMENTS_FILE = path.join(DATA_DIR, "appointments.json");
const REVIEWS_FILE = path.join(DATA_DIR, "reviews.json");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initial seed reviews from the clinic's real Google Reviews
const seedReviews = [
  {
    id: "review-1",
    author: "Karan Sharma",
    rating: 5,
    comment: "Amazing experience with Demystifying Smiles! Visited for root canal and crown. The process was completely painless, very professional, and staff was polite. Highly recommend this clinic in Sector 53, Noida!",
    dateStr: "1 week ago",
    isVerified: true,
    avatarInitials: "KS"
  },
  {
    id: "review-2",
    author: "Naureen Khan",
    rating: 5,
    comment: "I got my clear aligners from here and the results are amazing. Dr. and team are extremely detail oriented and explained every step of the journey. Clean and hygienic clinic!",
    dateStr: "2 weeks ago",
    isVerified: true,
    avatarInitials: "NK"
  },
  {
    id: "review-3",
    author: "Arunima Nundy",
    rating: 5,
    comment: "Super smooth extraction and deep cleaning. It's the most trustworthy and hygienic dental clinic in Noida. Very polite staff and no hidden costs.",
    dateStr: "1 month ago",
    isVerified: true,
    avatarInitials: "AN"
  }
];

const seedAppointments = [
  {
    id: "apt-1",
    name: "Rohan Verma",
    phone: "+91 9988776655",
    email: "rohan@example.com",
    service: "Dental Implants",
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], // 2 days from now
    time: "11:30 AM",
    notes: "Checking out if I am eligible for titanium implant",
    status: "Confirmed",
    createdAt: new Date().toISOString()
  },
  {
    id: "apt-2",
    name: "Pooja Malhotra",
    phone: "+91 9812345678",
    email: "pooja.m@example.com",
    service: "Teeth Whitening",
    date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0], // 5 days from now
    time: "04:30 PM",
    notes: "Looking for maximum shade improvement before high-profile family wedding next weekend.",
    status: "Pending",
    createdAt: new Date().toISOString()
  }
];

function readData(filePath: string, seed: any) {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(seed, null, 2));
      return seed;
    }
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return seed;
  }
}

function writeData(filePath: string, data: any) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(`Error writing to ${filePath}:`, err);
  }
}

// Ensure files are ready
readData(REVIEWS_FILE, seedReviews);
readData(APPOINTMENTS_FILE, seedAppointments);

// API: List Appointments
app.get("/api/appointments", (req, res) => {
  const appointments = readData(APPOINTMENTS_FILE, seedAppointments);
  // Sort descending by creation or nearest date
  res.json(appointments);
});

// API: Create Appointment
app.post("/api/appointments", (req, res) => {
  const { name, phone, email, service, date, time, notes } = req.body;
  
  if (!name || !phone || !service || !date || !time) {
    return res.status(400).json({ error: "Missing required fields for appointment" });
  }

  const appointments = readData(APPOINTMENTS_FILE, seedAppointments);
  const newApt = {
    id: `apt-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    name,
    phone,
    email: email || "",
    service,
    date,
    time,
    notes: notes || "",
    status: "Pending" as const,
    createdAt: new Date().toISOString()
  };

  appointments.unshift(newApt); // Prepend to show immediately
  writeData(APPOINTMENTS_FILE, appointments);
  res.status(201).json(newApt);
});

// API: Update Appointment (Reschedule or change status)
app.put("/api/appointments/:id", (req, res) => {
  const { id } = req.params;
  const { date, time, status, notes, service } = req.body;

  const appointments = readData(APPOINTMENTS_FILE, seedAppointments);
  const index = appointments.findIndex((a: any) => a.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Appointment not found" });
  }

  if (date) appointments[index].date = date;
  if (time) appointments[index].time = time;
  if (status) appointments[index].status = status;
  if (notes !== undefined) appointments[index].notes = notes;
  if (service) appointments[index].service = service;

  writeData(APPOINTMENTS_FILE, appointments);
  res.json(appointments[index]);
});

// API: Delete (Cancel) Appointment
app.delete("/api/appointments/:id", (req, res) => {
  const { id } = req.params;
  const appointments = readData(APPOINTMENTS_FILE, seedAppointments);
  const filtered = appointments.filter((a: any) => a.id !== id);

  if (appointments.length === filtered.length) {
    return res.status(404).json({ error: "Appointment not found" });
  }

  writeData(APPOINTMENTS_FILE, filtered);
  res.json({ success: true, message: "Appointment cancelled successfully" });
});

// API: List Reviews
app.get("/api/reviews", (req, res) => {
  const reviews = readData(REVIEWS_FILE, seedReviews);
  res.json(reviews);
});

// API: Add Review
app.post("/api/reviews", (req, res) => {
  const { author, rating, comment } = req.body;
  if (!author || !rating || !comment) {
    return res.status(400).json({ error: "Missing review parameters" });
  }

  const reviews = readData(REVIEWS_FILE, seedReviews);
  
  // Extract initials
  const parts = author.trim().split(/\s+/);
  const initials = parts.map((p: string) => p[0]?.toUpperCase() || "").slice(0, 2).join("") || "P";

  const newReview = {
    id: `review-${Date.now()}`,
    author,
    rating: Number(rating),
    comment,
    dateStr: "Just now",
    isVerified: true,
    avatarInitials: initials
  };

  reviews.unshift(newReview); // Prepend to see the newest review at top
  writeData(REVIEWS_FILE, reviews);
  res.status(201).json(newReview);
});

// Lazy initialize Gemini API client safely
let geminiAiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!geminiAiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is not defined in Secrets.");
    }
    geminiAiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiAiClient;
}

// API: AI Virtual Consultation Assistant Chat
app.post("/api/consultation", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "No user instruction message supplied" });
    }

    // Verify key availability gracefully before executing
    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        text: "👋 Hello! I am the Demystifying Smiles Virtual Assistant. To enable my fully functional AI Consultation capabilities, please add a valid `GEMINI_API_KEY` in the **Settings > Secrets** panel in AI Studio! For now, how can I help guide your appointment booking or treatment inquiries?"
      });
    }

    const client = getGeminiClient();

    // Map conversation history to the standard model-ready format
    const formattedHistory = (history || []).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.text }]
    }));

    // Instruct Gemini on its persona as a warm, highly-professional dental assistant
    const systemInstruction = 
      "You are a friendly, compassionate, and highly professional Senior Dental Consultant and Assistant at Demystifying Smiles " +
      "Dental Clinic located in Sector 53, Noida. Your goal is to explain dental questions, suggest appropriate treatments with " +
      "reassurance, and encourage appointment scheduling. Keep answers informative, reassuring, and concise (under 200 words). " +
      "Crucially: highlight that while you can offer preliminary guidance, a clinical checkup is required for an active treatment plan. " +
      "Clinic contacts: Phone/WhatsApp +91 98910 73008, Location H-42 Sector 53 Noida, Hours Mon-Sat 10:30 AM - 8 PM.";

    const chatInstance = client.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction,
        temperature: 0.7
      },
      history: formattedHistory
    });

    const response = await chatInstance.sendMessage({ message });
    res.json({ text: response.text });
  } catch (err: any) {
    console.error("Gemini API Consultation Error:", err);
    res.json({
      text: `My apologies, I ran into an error processing that: ${err.message || "Unknown error"}. Feel free to ask again or call us directly at +91 98910 73008!`
    });
  }
});

// Serve static assets or use Vite's Dev Server
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Demystifying Smiles Backend] running on http://localhost:${PORT}`);
  });
}

setupServer();
