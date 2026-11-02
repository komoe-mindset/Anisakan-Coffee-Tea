import React from 'react';
import { useTranslation } from '../i18n/context';
import { ArrowIcon } from './Icons';

export const Interlude: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="interlude" aria-label={t('A moment in the highlands')}>
      <div className="interlude-image" />
      <div className="interlude-shade" />
      <div className="interlude-content">
        <p>{t('THE LUXURY OF A LITTLE LESS')}</p>
        <h2>
          {t('Make room for')}<br />
          <em>{t('the moments that matter.')}</em>
        </h2>
        <a href="#planner" className="text-link text-link-light">
          {t('FIND YOUR EXPERIENCE')} <ArrowIcon />
        </a>
      </div>
      <span className="interlude-note">{t('CONCEPT IMAGERY')}</span>
    </section>
  );
};
