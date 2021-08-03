import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset !== 0);
        return () => (window.onscroll = null);
    }

    return (
        <div className={ isScrolled ? "navbar scrolled" : "navbar" }>
            <div className="container">
                <div className="left">
                    <img
                        src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                        alt="Logo"
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img
                        src="https://shaker-hamdi.github.io/scoutmee-static/images/placeholders/user-avatar-2.jpg"
                        alt="Avatar"
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;