import { NavLink } from 'react-router-dom';
import styles from './navbar.module.scss';

export interface NavbarLinkProps {
    name: string;
    to: string;
}

function NavbarLink({ name, to }: NavbarLinkProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? `${styles['navbar-link']} ${styles['active']}`
                    : styles['navbar-link']
            }
        >
            {name}
        </NavLink>
    );
}

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-brand']}>Clarivate</div>
            <ul className={styles['navbar-menu']}>
                <li className={styles['navbar-item']}>
                    <NavbarLink to="/" name="Dashboard" />
                </li>
                <li className={styles['navbar-item']}>
                    <NavbarLink to="/list" name="Elements list" />
                </li>
            </ul>
        </nav>
    );
}
