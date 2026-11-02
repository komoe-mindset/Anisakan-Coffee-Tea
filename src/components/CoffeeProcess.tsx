import React, { useState } from 'react';
import { useTranslation } from '../i18n/context';
import { processStages } from '../data/estateData';
import { LeafIcon } from './Icons';

export const CoffeeProcess: React.FC = () => {
  const { t } = useTranslation();
  const [currentStage, setCurrentStage] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const [factoryImgError, setFactoryImgError] = useState<boolean>(false);

  const stage = processStages[currentStage];

  const handleSelectStage = (idx: number) => {
    setAnimating(false);
    setCurrentStage((idx + processStages.length) % processStages.length);
    setTimeout(() => setAnimating(true), 20);
  };

  const progressPercent = ((currentStage + 1) / processStages.length) * 100;

  return (
    <section className="process section-pad" id="process" aria-labelledby="process-title">
      <div className="shell">
        <div className="process-heading">
          <div>
            <p className="kicker kicker-light">
              <span>03 /</span> {t('THE ART OF THE WASHED PROCESS')}
            </p>
            <h2 id="process-title">
              {t('Good things take')}<br />
              <em>{t('their own sweet time.')}</em>
            </h2>
          </div>
          <p>
            {t('From ripe cherry to a remarkably considered cup, every step is an invitation to slow down and appreciate the craft.')}
          </p>
        </div>

        <div className="process-card">
          <div className="process-image">
            <img
              src={
                factoryImgError
                  ? 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80'
                  : '/assets/factory.webp'
              }
              onError={() => setFactoryImgError(true)}
              alt={t('Concept image of coffee drying beds in a boutique facility')}
            />
            <span>
              {t('CRAFTED WITH CARE')} <span>✦</span>
            </span>
            <small>{t('CONCEPT IMAGERY')}</small>
          </div>

          <div className="process-content">
            <div className="process-topline">
              <span>{t('FROM SEED TO CUP')}</span>
              <span id="process-counter">
                {String(currentStage + 1).padStart(2, '0')} / 06
              </span>
            </div>

            <div className="step-buttons" role="group" aria-label={t('Coffee process stages')}>
              {processStages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={idx === currentStage ? 'active' : ''}
                  aria-label={`${t('Coffee process stages')} ${idx + 1}`}
                  aria-pressed={idx === currentStage}
                  onClick={() => handleSelectStage(idx)}
                >
                  {String(idx + 1).padStart(2, '0')}
                </button>
              ))}
            </div>

            <div className="step-line">
              <span style={{ width: `${progressPercent}%` }} id="step-progress" />
            </div>

            <div
              className={`process-stage ${animating ? 'animate' : ''}`}
              id="process-stage"
              aria-live="polite"
            >
              <span className="stage-label" id="stage-label">
                {t(stage.label)}
              </span>
              <h3
                id="stage-title"
                dangerouslySetInnerHTML={{
                  __html: stage.title
                    .split('<br>')
                    .map((part) => t(part.replace(/&amp;/g, '&')))
                    .join('<br>')
                }}
              />
              <p id="stage-description">{t(stage.description)}</p>
              <div className="stage-fact" id="stage-fact">
                <LeafIcon />
                <span>{t(stage.fact)}</span>
              </div>
            </div>

            <div className="process-controls">
              <span>{t('EXPLORE THE PROCESS')}</span>
              <div>
                <button
                  id="prev-step"
                  type="button"
                  aria-label={t('Previous process stage')}
                  onClick={() => handleSelectStage(currentStage - 1)}
                >
                  ←
                </button>
                <button
                  id="next-step"
                  type="button"
                  aria-label={t('Next process stage')}
                  onClick={() => handleSelectStage(currentStage + 1)}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
