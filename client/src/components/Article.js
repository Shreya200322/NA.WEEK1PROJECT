import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/news/${id}`)
            .then(response => setArticle(response.data))
            .catch(error => console.error('Error fetching article:', error));
    }, [id]);

    if (!article) return <div>Loading...</div>;

    return (
        <div className="container">
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
};

export default Article;