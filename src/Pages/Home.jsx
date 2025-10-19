import { useState } from "react";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import NewsGrid from "../components/NewsGrid";
import { useFetchNews } from "../hooks/useFetchNews";

export default function Home() {
    const [category, setCategory] = useState('general');
    const { news, loading } = useFetchNews(category == 'all' ? 'general' : category);

    return (
        <> 
            <Header />
            <CategoryNav activeCategory={category} onSelectCategory={setCategory} />
            <main className="news-section">
                <div className="container">
                    <h2 className="section-title">
                        {category.charAt(0).toUpperCase() + category.slice(1)} News
                    </h2>

                    <NewsGrid news={news} loading={loading} />
                </div>
            </main>
        </>
    );
}