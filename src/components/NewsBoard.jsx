import { useEffect, useState } from 'react';
import config from '../config'
import NewsList from './NewsList'

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState(null)

    const fetchArticles = async () => {
        const apiKey = config.apiKey;
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.status === 'ok') {
                setArticles(data.articles);
            } else {
                setError('Error fetching news');
            }
        } catch (err) {
            setError('Error fetching news');
        }
    };

    useEffect(() => {
        fetchArticles();
    }, [category]);

    return (
        <div className='text-center p-20'>
            <h1 className="text-2xl p-5 badge badge-secondary badge-outline">Latest News</h1>
            {error ? (
                <div className="error">Error: {error}</div>
            ) : (
                <NewsList articles={articles} />
            )}
        </div>
    )
};

export default NewsBoard;
