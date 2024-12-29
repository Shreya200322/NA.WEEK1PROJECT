import React, { useEffect, useState } from 'react';
import './styles/App.css';

function App() {
    const [news, setNews] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/news')
            .then(response => response.json())
            .then(data => setNews(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        })
            .then(response => response.json())
            .then(data => setNews([...news, data]));
    };

    return (
        <div className="App">
            <header className="header">
                <h1>News Application</h1>
            </header>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    <button type="submit">Add News</button>
                </form>
                {news.map(item => (
                    <div key={item._id} className="news-item">
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
