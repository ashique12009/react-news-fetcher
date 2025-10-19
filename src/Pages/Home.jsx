import { useState } from "react";
import Header from "../Components/Header";
import CategoryNav from "../Components/CategoryNav";
import NewsGrid from "../Components/NewsGrid";
import { useFetchNews } from "../hooks/useFetchNews";

export default function Home() {
    const [category, setCategory] = useState('general');
    const { news, loading } = useFetchNews(category == 'all' ? 'general' : category);

    return (
        <> 
            <Header />
            <CategoryNav selectedCategory={category} onSelectCategory={setCategory} />
            <main class="news-section">
                <div class="container">
                    <h2 class="section-title">
                        {category.charAt(0).toUpperCase() + category.slice(1)} News
                    </h2>

                    <NewsGrid news={news} loading={loading} />
                </div>
            </main>
        </>
    );
}