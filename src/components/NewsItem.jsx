import fallbackImage from '../assets/image_not_found.jpg'

const NewsItem = ({ title, description, src, url }) => {
    const truncatedTitle =
        typeof title === "string" && title.length > 50
            ? `${title.slice(0, 50)}...`
            : title;
    return (
        <div className="card w-96 bg-base-100 shadow-xl inline-block my-3 mx-3 px-2 py-2">
            <figure className="px-10 pt-10">
                <img
                    src={src || fallbackImage}
                    style={{ height: "200px", width: "500px" }}
                    alt={title}
                    className="rounded-xl"
                    onError={(e) => {e.target.src = fallbackImage;}}
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{truncatedTitle}</h2>
                <p>{description?.slice(0, 100)}</p>
                <div className="card-actions">
                    <a href={url} className="btn btn-primary">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;