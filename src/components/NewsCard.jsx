export default function NewsCard({ article }) {
    return (
        <article className="news-card" data-category="technology">
            <img
                src={article.urlToImage || "https://placehold.co/400x200?text=No+Image"}
                alt={article.title}
                className="news-image"
            />
            <div className="news-content">
                <span className="news-category technology">{article.source?.name}</span>
                <h3 className="news-title">
                    {article.title}
                </h3>
                <p className="news-description">
                    {article.description}
                </p>
                <div className="news-meta">
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="read-more"
                    >
                        Read more →
                    </a>
                    <span className="news-date">📅 {new Date(article.publishedAt).toLocaleString()}</span>
                    <span>5 min read</span>
                </div>
            </div>
        </article>
    );
}