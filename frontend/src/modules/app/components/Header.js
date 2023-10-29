import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div style={{
                color: '#2973CA', fontSize: 35, fontFamily: 'Actor', fontWeight: '700',
                wordWrap: 'break-word'
            }}>
                <Link className="navbar-brand" to="/">Podcaster</Link>
            </div>
            <hr />
        </header>
    )
};

export default Header;