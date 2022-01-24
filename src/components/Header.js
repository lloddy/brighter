import { Link } from 'react-router-dom'


const Header = (props) => {

    return (
        <div className="navBar">
            <Link to="/">
                <h1 className='logo'>BRIGHTER</h1> 
            </Link>
            <div className="links">
                <Link to="/create">
                    <h2>Post</h2>
                </Link>
            </div>
        </div>
    );
};


export default Header;