export default function CategoryNav({ activeCategory, onSelectCategory }) {
    const categories = [
        'general',
        'business',
        'entertainment',
        'health',
        'science',
        'sports',
        'technology'
    ];

    return (
        <nav className="category-nav">
            <div className="container">
                <div className="category-buttons">
                    {
                        categories.map((cat) => (
                            <button 
                                key={cat} 
                                className={`category-btn ${activeCategory === cat ? "active" : ""}`} 
                                data-category={cat} 
                                onClick={() => {onSelectCategory(cat)}}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
}