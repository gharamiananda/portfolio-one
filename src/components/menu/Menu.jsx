import './Menu.scss';

const Menu = ({ menuOpen, setMenuOpen }) => {

    const menuItems = [
        "Home",
        "Intro",
        "Portfolio",
        "Works",
        "Testimonial",
        "Contact",
    ]

    return (
        <div className={`menu ${menuOpen && 'active'}`}>
            <ul>
                {menuItems.map(item =>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href={`#${item.toLowerCase()}`}>{item}</a> </li>
                )}

            </ul>
        </div>
    );
};

export default Menu;