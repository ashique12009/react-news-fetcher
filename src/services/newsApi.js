const API_KEY = import.meta.env.VITE_NEWS_API_KEY; // Your News API key here
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export async function fetchNews(category = 'general', country = 'us') {
    try {
        const url = `${BASE_URL}?category=${category}&country=${country}&apiKey=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error fetching news: ${response.statusText}`);
        }

        const data = await response.json();
        return data.articles || [];
    }
    catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}