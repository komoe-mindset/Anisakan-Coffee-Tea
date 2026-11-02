import React from 'react';
import { useTranslation } from '../i18n/context';
import { ArrowIcon, ArrowDiagonalIcon } from './Icons';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero relative isolate overflow-hidden" id="home" aria-labelledby="hero-title">
      <div
        className="hero-image"
        role="img"
        aria-label={t('Concept image of mist over green highland coffee and tea fields')}
      />
      <div className="hero-shade" />
      <div className="hero-content shell">
        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          {t('PYIN OO LWIN, MYANMAR')} <span className="eyebrow-dot">✦</span> {t('A PLACE TO BREATHE')}
        </div>
        <h1 id="hero-title">
          {t('A Highland Sanctuary')}<br />
          {t('of Coffee, Tea &')} <em>{t('Pure Air')}</em>
        </h1>
        <p>
          {t('Where Pyin Oo Lwin’s misty hills meet the quiet rhythm of the land. Come a little closer to nature, and a little further from the everyday.')}
        </p>
        <div className="hero-actions">
          <a className="button button-cream" href="#estate">
            {t('Explore 360° Interactive Estate')} <ArrowIcon />
          </a>
          <a className="button button-outline-light" href="#planner">
            {t('Book Your Experience')} <ArrowDiagonalIcon />
          </a>
        </div>
      </div>
      <div className="hero-bottom shell">
        <a href="#intro" className="scroll-cue">
          <span className="scroll-line" /> {t('SCROLL TO DISCOVER')}
        </a>
        <span>
          {t('THE HIGHLANDS ARE CALLING')} <span className="gold">✦</span>
        </span>
      </div>
      <span className="hero-image-note">{t('Concept imagery')}</span>
    </section>
  );
};
