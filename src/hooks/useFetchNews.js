import { useEffect, useState } from "react";
import { fetchNews } from "../services/newsApi";

export const useFetchNews = (category, country) => {
    // Custom hook logic to fetch news based on category and country
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetchNews(category, country).then((articles) => {
            setNews(articles);
            setLoading(false);
        });
    
    }, [category, country]);

    return {news, loading};
}