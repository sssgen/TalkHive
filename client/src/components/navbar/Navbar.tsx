import {
    HomeIcon,
    MessageCircleIcon,
    SearchIcon,
    SettingsIcon,
} from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav
            className={`navbar ${
                location.pathname.includes("/sign") ? "hidden" : ""
            }`}
        >
            <NavbarLink href={"/"}>
                <HomeIcon />
            </NavbarLink>
            <NavbarLink href={"/chats"}>
                <MessageCircleIcon />
            </NavbarLink>
            <NavbarLink href={"/search"}>
                <SearchIcon />
            </NavbarLink>
            <NavbarLink href={"/settings"}>
                <SettingsIcon />
            </NavbarLink>
        </nav>
    );
};

export default memo(Navbar);

interface NavbarLinkProps {
    title?: string;
    href: string;
    className?: string;
    children?: React.ReactNode;
}

const NavbarLink = ({ title, href, className, children }: NavbarLinkProps) => {
    return (
        <Link to={href} className={`${className}`}>
            {title ? title : ""}
            {children}
        </Link>
    );
};
