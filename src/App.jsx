import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <nav class="category-nav">
        <div class="container">
          <div class="category-buttons">
            <button class="category-btn active" data-category="all">
              All News
            </button>
            <button class="category-btn" data-category="technology">
              Technology
            </button>
            <button class="category-btn" data-category="science">
              Science
            </button>
            <button class="category-btn" data-category="business">
              Business
            </button>
            <button class="category-btn" data-category="sports">
              Sports
            </button>
            <button class="category-btn" data-category="entertainment">
              Entertainment
            </button>
            <button class="category-btn" data-category="health">
              Health
            </button>
          </div>
        </div>
      </nav>

      <main class="news-section">
        <div class="container">
          <h2 class="section-title">Latest News</h2>
          <div class="news-grid" id="newsGrid">
            Technology News
            <article class="news-card" data-category="technology">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="News"
                class="news-image"
              />
              <div class="news-content">
                <span class="news-category technology">Technology</span>
                <h3 class="news-title">
                  AI Revolution: New Breakthrough in Machine Learning
                </h3>
                <p class="news-description">
                  Researchers unveil groundbreaking AI model that can understand
                  context better than ever before.
                </p>
                <div class="news-meta">
                  <span class="news-date">📅 2 hours ago</span>
                  <span>5 min read</span>
                </div>
              </div>
            </article>
            Science News
            <article class="news-card" data-category="science">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="News"
                class="news-image"
              />
              <div class="news-content">
                <span class="news-category science">Science</span>
                <h3 class="news-title">
                  New Planet Discovered in Habitable Zone
                </h3>
                <p class="news-description">
                  Astronomers find Earth-like planet that could potentially
                  support life in distant solar system.
                </p>
                <div class="news-meta">
                  <span class="news-date">📅 5 hours ago</span>
                  <span>4 min read</span>
                </div>
              </div>
            </article>
            Business News
            <article class="news-card" data-category="business">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="News"
                class="news-image"
              />
              <div class="news-content">
                <span class="news-category business">Business</span>
                <h3 class="news-title">
                  Tech Stocks Surge Amid Economic Recovery
                </h3>
                <p class="news-description">
                  Major technology companies see significant gains as market
                  confidence returns.
                </p>
                <div class="news-meta">
                  <span class="news-date">📅 1 hour ago</span>
                  <span>3 min read</span>
                </div>
              </div>
            </article>
            Sports News
            <article class="news-card" data-category="sports">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="News"
                class="news-image"
              />
              <div class="news-content">
                <span class="news-category sports">Sports</span>
                <h3 class="news-title">
                  Championship Finals: Underdog Team Makes History
                </h3>
                <p class="news-description">
                  Against all odds, the underdog team secures their first
                  championship title in decades.
                </p>
                <div class="news-meta">
                  <span class="news-date">📅 3 hours ago</span>
                  <span>6 min read</span>
                </div>
              </div>
            </article>
            Entertainment News
            <article class="news-card" data-category="entertainment">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="News"
                class="news-image"
              />
              <div class="news-content">
                <span class="news-category entertainment">Entertainment</span>
                <h3 class="news-title">
                  Blockbuster Film Breaks Box Office Records
                </h3>
                <p class="news-description">
                  Latest superhero movie shatters opening weekend records
                  worldwide.
                </p>
                <div class="news-meta">
                  <span class="news-date">📅 4 hours ago</span>
                  <span>4 min read</span>
                </div>
              </div>
            </article>
            Health News
            <article class="news-card" data-category="health">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="News"
                class="news-image"
              />
              <div class="news-content">
                <span class="news-category health">Health</span>
                <h3 class="news-title">
                  New Study Reveals Benefits of Mediterranean Diet
                </h3>
                <p class="news-description">
                  Research shows significant health improvements from following
                  Mediterranean eating patterns.
                </p>
                <div class="news-meta">
                  <span class="news-date">📅 6 hours ago</span>
                  <span>5 min read</span>
                </div>
              </div>
            </article>
            More Technology
            <article class="news-card" data-category="technology">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="News"
                class="news-image"
              />
              <div class="news-content">
                <span class="news-category technology">Technology</span>
                <h3 class="news-title">
                  Next-Gen Smartphones Feature Revolutionary Battery
                </h3>
                <p class="news-description">
                  New battery technology promises week-long charge on single
                  power cycle.
                </p>
                <div class="news-meta">
                  <span class="news-date">📅 7 hours ago</span>
                  <span>3 min read</span>
                </div>
              </div>
            </article>
            More Science
            <article class="news-card" data-category="science">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="News"
                class="news-image"
              />
              <div class="news-content">
                <span class="news-category science">Science</span>
                <h3 class="news-title">
                  Breakthrough in Quantum Computing Achieved
                </h3>
                <p class="news-description">
                  Scientists successfully demonstrate quantum supremacy with new
                  processor design.
                </p>
                <div class="news-meta">
                  <span class="news-date">📅 8 hours ago</span>
                  <span>7 min read</span>
                </div>
              </div>
            </article>
            More Business
            <article class="news-card" data-category="business">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="News"
                class="news-image"
              />
              <div class="news-content">
                <span class="news-category business">Business</span>
                <h3 class="news-title">
                  Startup Unicorn Announces Major Expansion
                </h3>
                <p class="news-description">
                  Fast-growing tech startup valued at $1B plans to enter new
                  markets.
                </p>
                <div class="news-meta">
                  <span class="news-date">📅 9 hours ago</span>
                  <span>4 min read</span>
                </div>
              </div>
            </article>
          </div>

          <div class="empty-state" id="emptyState">
            <h3>No news found</h3>
            <p>Try selecting a different category</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
