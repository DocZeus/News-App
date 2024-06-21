const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const allowedOrigins = ['http://your-frontend-url.com', 'https://your-frontend-url.com'];
app.use(cors({
    origin: allowedOrigins
}));

app.get('/api/news', async (req, res) => {
    const { category, pageSize, page, q } = req.query;
    const apiKey = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}&q=${q}`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ status: 'error', message: 'Failed to fetch news' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});