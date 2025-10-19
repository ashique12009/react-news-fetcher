import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        <>
            <main class="news-section">
                <div class="container">
                    <h2 class="section-title">Latest News</h2>
                    

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
