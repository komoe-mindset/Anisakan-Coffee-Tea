import React from 'react';
import { useTranslation } from '../i18n/context';
import { ArrowIcon } from './Icons';

export const Intro: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="intro section-pad" id="intro">
      <div className="shell intro-grid">
        <div>
          <p className="kicker">
            <span>01 /</span> {t('A DIFFERENT KIND OF GETAWAY')}
          </p>
          <h2>
            {t('Stay close to nature.')}<br />
            <em>{t('Leave feeling renewed.')}</em>
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            {t('In the cool highlands near Aung Chan Thar Village, a little world unfolds: coffee trees, tea gardens, thoughtful craftsmanship, and room to simply be.')}
          </p>
          <a className="text-link" href="#estate">
            {t('DISCOVER THE ESTATE')} <ArrowIcon />
          </a>
        </div>
      </div>

      <div className="shell intro-stats" aria-label={t('Estate highlights')}>
        <div>
          <strong>9</strong>
          <span>
            {t('ACRES OF')}<br />{t('HIGHLANDS')}
          </span>
        </div>
        <div>
          <strong>4.4</strong>
          <span>
            {t('ACRES OF')}<br />{t('COFFEE FARM')}
          </span>
        </div>
        <div>
          <strong>3,000</strong>
          <span>
            {t('ARABICA')}<br />{t('COFFEE TREES')}
          </span>
        </div>
        <p>
          {t('One beautiful landscape,')}<br />
          <em>{t('many ways to experience it.')}</em>
        </p>
      </div>
    </section>
  );
};
