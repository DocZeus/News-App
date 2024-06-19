import { useEffect, useState } from 'react';
import config from '../config'
import NewsList from './NewsList'

const NewsBoard = () => {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchArticles = async () => {
            const apiKey = config.apiKey;
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data = await response.json();
                console.log('Fetched data:', data); // Log the fetched data
                setArticles(data.articles);
                setError(null); // Clear any previous error
            } catch (error) {
                setError(error.message);
                setArticles([]); // Clear articles on error
            }
        };
        fetchArticles();
    }, []);

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
