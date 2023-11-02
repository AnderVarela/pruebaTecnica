import {Link} from "react-router-dom";

const Header = () => {


    // ESTILOS ----------------------------------------------------------------
    const headerStyle = {
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#2973CA',
        fontSize: 35,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word'
    }


    // RETURN -----------------------------------------------------------------
    return (
        <div style={headerStyle}>

            <Link className="navbar-brand" to="/">Podcaster</Link>
            <hr/>
        </div>
    )
};

export default Header;