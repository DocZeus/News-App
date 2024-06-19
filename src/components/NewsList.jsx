import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ articles }) => {
    return (
        <div className="news-list">
            {articles.map((article, idx) => (
                <NewsItem
                    key={idx}
                    title={article.title}
                    description={article.description}
                    src={article.urlToImage}
                    url={article.url}
                />
            ))}
        </div>
    );
};

export default NewsList;