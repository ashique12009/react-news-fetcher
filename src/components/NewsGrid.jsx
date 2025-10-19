import Loader from "./Loader";
import EmptyState from "./EmptyState";
import NewsCard from "./NewsCard";

export default function NewsGrid({ news, loading }) {
    if (loading) {
        return <Loader />;
    }

    if (!news.length) {
        return <EmptyState />;
    }

    return (
        <div className="news-grid" id="newsGrid">
            {
                news.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))
            }
        </div>
    );
}