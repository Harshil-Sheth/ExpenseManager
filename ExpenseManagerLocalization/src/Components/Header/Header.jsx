import React, {useEffect} from 'react'
import { useI18n } from '../../i18n';


export const Header = () => {
    const { t, setLanguage } = useI18n();
  
    const handleSetLanguage = (e) => {
        const lang = e.target.value;
        setLanguage(lang)
    }
    return (
        <div>
        <select onChange={handleSetLanguage}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="nl">Dutch</option>
        </select>
            <h2>{t('heading_name')}</h2>
        </div>
    )
}
