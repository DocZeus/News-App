import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ articles }) => {
    const filteredArticles = articles.filter(article => article.title && article.description && article.urlToImage);
    return (
        <div className="news-list">
            {filteredArticles.map((news, idx) => (
                <NewsItem
                    key={idx}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                />
            ))}
        </div>
    );
};

export default NewsList;