import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory, setSearchVisible, setSearchTerm } from '../hooks/navbarSlice';
import ThemeToggle, { useTheme } from "./ThemeToggle";

const Navbar = ({ setCategory, onSearch }) => {
    const dispatch = useDispatch();
    const { selectedCategory, searchTerm, searchVisible } = useSelector((state) => state.navbar);
    const { theme } = useTheme();

    const handleSearchClick = () => {
        dispatch(setSearchVisible(!searchVisible));
    };

    const handleSearchChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
        onSearch(e.target.value.trim());
    };

    const handleCategoryClick = (category) => {
        dispatch(setSelectedCategory(category));
        setCategory(category);
    };

    return (
        <div className="navbar bg-zinc-900">
            <div className="navbar-start text-white">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="bg-zinc-900 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
                    >
                        {[
                            { name: "General", value: "general" },
                            { name: "Business", value: "business" },
                            { name: "Technology", value: "technology" },
                            { name: "Entertainment", value: "entertainment" },
                            { name: "Sports", value: "sports" },
                            { name: "Science", value: "science" },
                            { name: "Health", value: "health" },
                        ].map((category) => (
                            <li key={category.value}>
                                <a
                                    onClick={() => handleCategoryClick(category.value)}
                                    className={
                                        selectedCategory === category.value
                                            ? "bg-primary text-white"
                                            : ""
                                    }
                                >
                                    {category.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={handleSearchClick}
                    className="btn btn-primary rounded-3xl"
                >
                    <a className="text-2xl">Media Varsity</a>
                </button>
            </div>
            <div className="navbar-center hidden lg:flex text-white">
                <ul className="menu menu-horizontal px-1">
                    {[
                        { name: "General", value: "general" },
                        { name: "Business", value: "business" },
                        { name: "Technology", value: "technology" },
                        { name: "Entertainment", value: "entertainment" },
                        { name: "Sports", value: "sports" },
                        { name: "Science", value: "science" },
                        { name: "Health", value: "health" },
                    ].map((category) => (
                        <li key={category.value}>
                            <a
                                onClick={() => handleCategoryClick(category.value)}
                                className={
                                    selectedCategory === category.value
                                        ? "bg-primary text-black"
                                        : ""
                                }
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Search and Theme Toggle */}
            <div className="navbar-end search">
                {searchVisible && (
                    <form className="mr-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="input input-bordered input-primary"
                            style={{ color: theme === "dark" ? "text-white" : "text-black" }}
                        />
                    </form>
                )}
                <button
                    onClick={handleSearchClick}
                    className="btn btn-ghost btn-circle text-white"
                >
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </a>
                </button>
                <div className="text-white">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;