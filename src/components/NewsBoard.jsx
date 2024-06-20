import { useEffect, useState } from "react";
import config from "../config";
import NewsList from "./NewsList";
import Pagination from "./Pagination";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const pageSize = 20;

    const fetchArticles = async (page = 1) => {
        const apiKey = import.meta.env.VITE_API_KEY;
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.status === "ok") {
                const filteredArticles = data.articles.filter(
                    (article) => article.title && article.description
                );
                setArticles(filteredArticles);
                setTotalResults(data.totalResults);
            } else {
                setError("Error fetching news");
            }
        } catch (err) {
            setError("Error fetching news");
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        fetchArticles(currentPage);
    }, [category, currentPage]);

    return (
        <div className="text-center p-20">
            <h1 className="text-2xl p-5 badge badge-secondary badge-outline">
                Latest News
            </h1>
            {error ? (
                <div className="error">Error: {error}</div>
            ) : (
                <>
                    <NewsList articles={articles} />
                    <Pagination
                        currentPage={currentPage}
                        totalResults={totalResults}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                    />
                </>
            )}
        </div>
    );
};

export default NewsBoard;
