import { Link } from 'react-router-dom'


const Header = (props) => {

    return (
        <div className="navBar">
            <div className="links">
                <Link to="/">
                   <h1>BRIGHTER</h1> 
                </Link>
                <Link to="/create">
                    <h2>Post</h2>
                </Link>
            </div>
        </div>
    );
};


export default Header;