import React, { useState } from 'react';
import { useTranslation } from '../i18n/context';
import { companionCrops } from '../data/estateData';

export const Orchard: React.FC = () => {
  const { t } = useTranslation();
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="orchard section-pad" id="orchard" aria-labelledby="orchard-title">
      <div className="shell">
        <div className="section-heading orchard-heading">
          <div>
            <p className="kicker">
              <span>04 /</span> {t('GROWN BETTER TOGETHER')}
            </p>
            <h2 id="orchard-title">
              {t('A garden full')}<br />
              <em>{t('of good company.')}</em>
            </h2>
          </div>
          <p>
            {t('Every crop has a part to play. Explore the companions that bring colour, resilience and flavour to the landscape.')}
          </p>
        </div>

        <div className="crop-grid" aria-label={t('Companion crops')}>
          {companionCrops.map((crop) => {
            const isOpen = openCardId === crop.id;
            return (
              <button
                key={crop.id}
                className={`crop-card ${crop.bgClass} ${isOpen ? 'is-open' : ''}`}
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleCard(crop.id)}
              >
                <span className="crop-no">{t(crop.number)}</span>
                <span className="crop-art">{crop.art}</span>
                <span className="crop-name">{t(crop.name)}</span>
                <span className="crop-desc">{t(crop.desc)}</span>
                <span className="crop-more">
                  {t('DISCOVER')} <b>↗</b>
                </span>
              </button>
            );
          })}
        </div>

        <p className="crop-hint">
          {t('HOVER, FOCUS OR TAP A CROP TO DISCOVER MORE')} <span>✦</span> {t('CROP PLANS MAY EVOLVE')}
        </p>
      </div>
    </section>
  );
};
