import i18n from 'i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en_usTranslations from '@/app/locale/en_us.json';
import pt_brTranslations from '@/app/locale/pt_br.json';

i18n.use(initReactI18next).init({
    resources: {
        en_us:{ ...en_usTranslations},
        pt_br:{ ...pt_brTranslations}
    },
    lng: 'en_us',
});

// Example usage: replace 'array' with your actual translation key
i18n.t('array', { returnObjects: true });

export default i18n;