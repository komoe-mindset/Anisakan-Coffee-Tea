import React from 'react';
import { useTranslation } from '../i18n/context';
import { LeafIcon } from './Icons';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">
              <LeafIcon />
            </span>
            <span className="brand-words">
              <strong>ANISAKAN</strong>
              <small>{t('COFFEE & TEA GARDEN RESORT')}</small>
            </span>
          </a>
          <p>
            {t('A quieter kind of beautiful.')}<br />
            <em>{t('In the heart of the highlands.')}</em>
          </p>
          <a href="#home" className="back-top">
            {t('BACK TO THE TOP ↑')}
          </a>
        </div>

        <div className="footer-bottom">
          <span>
            © {currentYear} {t('ANISAKAN COFFEE & TEA GARDEN RESORT')}
          </span>
          <span>
            {t('GROW WITH PURPOSE')} <span className="gold">✦</span> {t('PYIN OO LWIN, MYANMAR')}
          </span>
        </div>
      </div>
    </footer>
  );
};
