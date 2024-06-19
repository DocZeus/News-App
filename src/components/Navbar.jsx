import ThemeToggle from "./ThemeToggle";

const Navbar = ({ setCategory }) => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => setCategory("technology")}>Technology</a></li>
                        <li><a onClick={() => setCategory("health")}>Health</a></li>
                    </ul>
                </div>
                <button className="btn btn-primary rounded-3xl"><a className="text-2xl">Media Varsity</a></button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a onClick={() => setCategory("technology")}>Technology</a></li>
                    <li><a onClick={() => setCategory("health")}>Health</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeToggle />
                <button className="btn btn-ghost btn-circle">
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
