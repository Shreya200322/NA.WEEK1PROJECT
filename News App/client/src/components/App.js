import React, { useEffect, useState } from 'react';
import './styles/App.css';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/news')
      .then(response => response.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>News Application</h1>
      </header>
      <div className="container">
        {news.map(item => (
          <div key={item.id} className="news-item">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

