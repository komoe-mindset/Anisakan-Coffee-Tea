import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/context';
import { LeafIcon } from './Icons';
import { Language } from '../types';

interface LanguageOption {
  code: Language;
  badge: string;
  label: string;
  native: string;
}

const languages: LanguageOption[] = [
  { code: 'en', badge: 'EN', label: 'English', native: 'English' },
  { code: 'my', badge: 'MY', label: 'Myanmar', native: 'မြန်မာ' },
  { code: 'zh', badge: 'ZH', label: 'Chinese', native: '中文' }
];

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (langMenuOpen) setLangMenuOpen(false);
        if (mobileMenuOpen) setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, langMenuOpen]);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    if (langMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

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

        {/* Cute Glassmorphism Language Switcher Pill */}
        <div className="lang-switcher-container" ref={langDropdownRef}>
          <button
            type="button"
            className="lang-pill-btn"
            onClick={() => setLangMenuOpen((prev) => !prev)}
            aria-label={t('Change language')}
            aria-haspopup="listbox"
            aria-expanded={langMenuOpen}
            aria-controls="header-language-menu"
          >
            {/* Cute accent active emerald pulse dot */}
            <span className="lang-pulse-dot" aria-hidden="true" />
            <span className="lang-current-code">{currentLang.badge}</span>
            <span className="lang-current-native">{currentLang.native}</span>
            <span
              className={`lang-chevron ${langMenuOpen ? 'is-open' : ''}`}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>

          {/* Frosted Dropdown Menu */}
          {langMenuOpen && (
            <ul
              id="header-language-menu"
              className="lang-dropdown-menu"
              role="listbox"
              aria-label={t('Select language')}
            >
              {languages.map((item) => {
                const isSelected = item.code === language;
                return (
                  <li key={item.code} role="presentation">
                    <button
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      className={`lang-dropdown-item ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => {
                        setLanguage(item.code);
                        setLangMenuOpen(false);
                      }}
                    >
                      <span className="lang-item-left">
                        <span className="lang-badge">{item.badge}</span>
                        <span>{item.native}</span>
                      </span>
                      {isSelected && (
                        <span className="lang-item-check" aria-hidden="true">
                          ✓
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

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

        {/* Quick Language Selection inside mobile drawer */}
        <div
          style={{
            marginTop: '18px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px'
          }}
        >
          <span
            style={{
              fontSize: '11px',
              color: '#d4e3d3',
              letterSpacing: '0.08em',
              fontWeight: 700,
              textTransform: 'uppercase'
            }}
          >
            {t('Language')}
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {languages.map((item) => {
              const isSelected = item.code === language;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLanguage(item.code);
                    closeMenu();
                  }}
                  style={{
                    minHeight: '44px',
                    minWidth: '44px',
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    fontSize: '11px',
                    fontWeight: 700,
                    border: isSelected
                      ? '1px solid #34d399'
                      : '1px solid rgba(255, 255, 255, 0.3)',
                    background: isSelected
                      ? '#34d399'
                      : 'rgba(255, 255, 255, 0.15)',
                    color: isSelected ? '#10291d' : '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {item.native}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};
