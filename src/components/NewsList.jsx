import NewsItem from './NewsItem';

const NewsList = ({ articles }) => {
    return (
        <div className="news-list">
            {articles.map((news, idx) => (
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