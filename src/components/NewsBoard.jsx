import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArticles, setError, setCurrentPage, setTotalResults } from "../hooks/newsSlice";
import NewsList from "./NewsList";
import Pagination from "./Pagination";

const NewsBoard = ({ category, searchTerm }) => {
    const dispatch = useDispatch();
    const { articles, error, currentPage, totalResults, pageSize } = useSelector((state) => state.news);

    const fetchArticles = async (page = 1) => {
        const apiUrl = import.meta.env.VITE_BACKEND_URL;
        const url = `${apiUrl}/api/news?category=${category}&pageSize=${pageSize}&page=${page}&q=${searchTerm || ''}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.status === "ok") {
                const filteredArticles = data.articles.filter(
                    (article) => article.title && article.description
                );
                dispatch(setArticles(filteredArticles));
                dispatch(setTotalResults(data.totalResults));
            } else {
                dispatch(setError('Error fetching news'));
            }
        } catch (err) {
            dispatch(setError('Error fetching news'));
        }
    };

    useEffect(() => {
        fetchArticles(currentPage);
    }, [category, currentPage]);

    useEffect(() => {
        if (searchTerm) {
            const filteredArticles = articles.filter(article =>
                article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            dispatch(setArticles(filteredArticles));
        } else {
            fetchArticles(currentPage);
        }
    }, [searchTerm]);

    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page));
    };

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
