const Header = (props) => {

    return (
        <div className="navBar">
            <h1>Brighter</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Entry</a>
            </div>
        </div>
    );
};

export default Header;