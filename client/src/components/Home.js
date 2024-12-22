import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/news')
            .then(response => setArticles(response.data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <div className="container">
            <h1>News Articles</h1>
            {articles.map(article => (
                <div key={article.id} className="article">
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;