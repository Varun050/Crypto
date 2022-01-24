import react from 'react';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#">
                    <img src="crr.png" alt="logo" style={{ width: "66px", borderRadius: "30px" }} />
                </a>
                <form className="form-inline" >
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-success" type="submit">Search</button>
                </form>
            </nav>
        </div>
    );
}
export default Header;