import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/context';
import { LeafIcon } from './Icons';
import { Language } from '../types';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header" id="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label={t('Anisakan home')}>
          <span className="brand-mark">
            <LeafIcon />
          </span>
          <span className="brand-words">
            <strong>ANISAKAN</strong>
            <small>{t('COFFEE & TEA GARDEN RESORT')}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label={t('Primary navigation')}>
          <a href="#estate">{t('The Estate')}</a>
          <a href="#process">{t('Our Coffee')}</a>
          <a href="#orchard">{t('The Orchard')}</a>
          <a href="#proposal">{t('Project PDF')}</a>
          <a href="#planner">{t('Plan Your Visit')}</a>
        </nav>

        <label className="language-switch" htmlFor="language-select">
          <span aria-hidden="true">◎</span>
          <span className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
            {t('Language')}
          </span>
          <select
            id="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            aria-label={t('Language')}
          >
            <option value="en">EN</option>
            <option value="my">မြန်မာ</option>
            <option value="zh">中文</option>
          </select>
          <span aria-hidden="true">⌄</span>
        </label>

        <a className="header-cta" href="#contact">
          {t('Enquire')} <span aria-hidden="true">↗</span>
        </a>

        <button
          className="menu-toggle"
          id="menu-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? t('Close navigation') : t('Open navigation')}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <nav
        className="mobile-nav"
        id="mobile-nav"
        aria-label={t('Mobile navigation')}
        style={{ display: mobileMenuOpen ? 'block' : 'none' }}
      >
        <a href="#estate" onClick={closeMenu}>{t('The Estate')}</a>
        <a href="#process" onClick={closeMenu}>{t('Our Coffee')}</a>
        <a href="#orchard" onClick={closeMenu}>{t('The Orchard')}</a>
        <a href="#proposal" onClick={closeMenu}>{t('Project PDF')}</a>
        <a href="#planner" onClick={closeMenu}>{t('Plan Your Visit')}</a>
        <a href="#contact" onClick={closeMenu}>{t('Enquire')}</a>
      </nav>
    </header>
  );
};
