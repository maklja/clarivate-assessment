import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            'clarivate.brand': 'Clarivate',
            'clarivate.links.dashboard': 'Dashboard',
            'clarivate.links.elements-list': 'Elements list',
            'clarivate.album.select': 'Select album',
            'clarivate.album.error':
                'Failed to load albums. Please try again later.',
            'clarivate.dashboard.no-favorite-photos': 'No favorites photos.',
            'clarivate.pages.scroll-to-top': 'Scroll to the top.',
            'clarivate.elements-list.error':
                'Failed to load photos. Please try again later.',
            'clarivate.elements-list.button-refresh': 'Refresh',
            'clarivate.elements-list.no-photos': 'No photos.',
            'clarivate.error-page':
                'Something went wrong. Please try again later.',
            'clarivate.not-found-page': 'Requested page is not found.',
        },
    },
    sr: {
        translation: {
            'clarivate.brand': 'Clarivate',
            'clarivate.links.dashboard': 'Dashboard',
            'clarivate.links.elements-list': 'Lista elemenata',
            'clarivate.album.select': 'Izaberi album',
            'clarivate.album.error':
                'Greška prilikom učitavanja albuma. Molim vas probajte opet kasnije.',
            'clarivate.dashboard.no-favorite-photos':
                'Nemate omiljene fotografije.',
            'clarivate.pages.scroll-to-top': 'Skoči na vrh stranice.',
            'clarivate.elements-list.error':
                'Greška prilikom učitavanja fotografija. Molim vas probajte opet kasnije.',
            'clarivate.elements-list.button-refresh': 'Osveži',
            'clarivate.elements-list.no-photos': 'Nema fotografija.',
            'clarivate.error-page':
                'Došlo je do greške. Molim vas pokušajte kasnije.',
            'clarivate.not-found-page': 'Stranica nije pronađena',
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
