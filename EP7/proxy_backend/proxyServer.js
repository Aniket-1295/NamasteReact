import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app =express();

const PORT = 8080;

app.use(cors());

app.get("/api/menu", async (req, res) => {
    const { restaurantId } = req.query;
  
    if (!restaurantId) {
      return res.status(400).json({ error: "restaurantId is required" });
    }
  
    const swiggyURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${restaurantId}`;
  
    try {
      const response = await fetch(swiggyURL);
      const text = await response.text();
  
      // Try parsing JSON
      try {
        const json = JSON.parse(text);
        res.json(json);
      } catch (err) {
        console.error("Invalid JSON:", text.slice(0, 200));
        res.status(500).json({ error: "Failed to parse Swiggy response" });
      }
    } catch (error) {
      console.error("Error fetching Swiggy API:", error);
      res.status(500).json({ error: "Failed to fetch from Swiggy API" });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });

