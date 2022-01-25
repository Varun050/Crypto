import '../App.css'
export default function Header(props) {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#">
                    <img src="crr.png" alt="logo" style={{ width: "66px", borderRadius: "30px" }} />
                </a>
                <form className="form-inline" >
                    <input className="form-control mr-sm-2" type="text" name="search" onChange={props.handleChange} placeholder="Search by MarketName" />
                </form>
            </nav>
        </div>
    )
}