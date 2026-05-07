// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAIApi(new Configuration({ apiKey: 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 }));

app.post("/chat", async (req, res) => {
  const { message, department } = req.body;
  const prompt = `You are an expert in ${department}. Answer this user query clearly:\n\n${message}`;
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    res.json({ reply: completion.data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ reply: "Server error. Try WhatsApp support instead." });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
