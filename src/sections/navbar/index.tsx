import { ReactElement } from "react";

export const Navbar = (): ReactElement => (
    <>
        <button className="menu-button">
            <span className="material-symbols-outlined nav--menu-icon">menu</span>
        </button>
        <nav id="navbar" className="hide">
            <button className="close-menu-button" id="close-menu-button">
                <span className="material-symbols-outlined nav--menu-icon">close</span>
            </button>
            <button className="button-container">
                <span className="material-symbols-outlined">home</span>
                <a href="#home" className="nav--label">início</a>
            </button>
            <button className="button-container">
                <span className="material-symbols-outlined">person</span>
                <a href="#person" className="nav--label">sobre mim</a>
            </button>
            <button className="button-container">
                <span className="material-symbols-outlined">menu_book</span>
                <a href="#menu_book" className="nav--label">portifólio</a>
            </button>
            <button className="button-container">
                <span className="material-symbols-outlined">contact_page</span>
                <a href="#contact_page" className="nav--label">currículo</a>
            </button>
            <button className="button-container">
                <span className="material-symbols-outlined">contact_phone</span>
                <a href="#contact_phone" className="nav--label">contato</a>
            </button>
        </nav>
    </>
)