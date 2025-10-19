export default function NewsCard({ article }) {
    return (
        <article class="news-card" data-category="technology">
            <img
                src={article.urlToImage || "/placeholder.svg?height=200&width=400"}
                alt={article.title}
                class="news-image"
            />
            <div class="news-content">
                <span class="news-category technology">{article.source?.name}</span>
                <h3 class="news-title">
                    {article.title}
                </h3>
                <p class="news-description">
                    {article.description}
                </p>
                <div class="news-meta">
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="read-more"
                    >
                        Read more →
                    </a>
                    <span class="news-date">📅 {new Date(article.publishedAt).toLocaleString()}</span>
                    <span>5 min read</span>
                </div>
            </div>
        </article>
    );
}