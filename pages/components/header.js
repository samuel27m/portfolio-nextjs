export default function Header() {
    return (
        <nav className="navbar navbar-expand-md main-header">
            <div className="container">
                <div className="mx-auto order-0">
                    <div className="logo-wrapper">
                        <img src="/logo.svg" alt="logo" />
                    </div>
                    {/* TODO: responsive menu */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse w-100 order-1 dual-collapse2">
                    <ul className="navbar-nav ml-auto link-wrapper">
                        <li className="nav-item">
                            {/* <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink> */}
                            About
                        </li>
                        <li className="nav-item">
                            {/* <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink> */}
                            Portfolio
                        </li>
                        <li className="nav-item">
                            {/* <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink> */}
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
