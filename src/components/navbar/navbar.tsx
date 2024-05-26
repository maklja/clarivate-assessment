import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
                    ? `${styles['navbar-link']} ${styles['navbar-link--active']}`
                    : styles['navbar-link']
            }
        >
            {name}
        </NavLink>
    );
}

export function Navbar() {
    const { t, i18n } = useTranslation();

    async function changeLang(lang: string) {
        await i18n.changeLanguage(lang);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-brand']}>{t('clarivate.brand')}</div>
            <ul className={styles['navbar-menu']}>
                <li className={styles['navbar-item']}>
                    <NavbarLink to="/" name={t('clarivate.links.dashboard')} />
                </li>
                <li className={styles['navbar-item']}>
                    <NavbarLink
                        to="/list"
                        name={t('clarivate.links.elements-list')}
                    />
                </li>
                <li className={styles['navbar-item']}>
                    <span
                        className={`${styles['navbar-lang']} ${
                            i18n.language === 'en'
                                ? styles['navbar-lang--active']
                                : ''
                        }`}
                        onClick={() => changeLang('en')}
                    >
                        en |
                    </span>
                    <span
                        className={`${styles['navbar-lang']} ${
                            i18n.language === 'sr'
                                ? styles['navbar-lang--active']
                                : ''
                        }`}
                        onClick={() => changeLang('sr')}
                    >
                        {' '}
                        sr
                    </span>
                </li>
            </ul>
        </nav>
    );
}
