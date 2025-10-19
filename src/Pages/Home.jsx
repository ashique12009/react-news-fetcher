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
            <CategoryNav activeCategory={category} onSelectCategory={setCategory} />
            <main className="news-section">
                <div className="container">
                    <h2 className="section-title">
                        {category.charAt(0).toUpperCase() + category.slice(1)} News
                    </h2>

                    {console.log('Rendering NewsGrid with news:', news, 'and loading:', loading)}

                    <NewsGrid news={news} loading={loading} />
                </div>
            </main>
        </>
    );
}