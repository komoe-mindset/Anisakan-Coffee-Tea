import React, { useState } from 'react';
import { useTranslation } from '../i18n/context';
import { estateZones } from '../data/estateData';

export const InteractiveEstate: React.FC = () => {
  const { t } = useTranslation();
  const [selectedZoneKey, setSelectedZoneKey] = useState<'farm' | 'factory' | 'relax'>('farm');
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const zone = estateZones[selectedZoneKey];

  return (
    <section className="estate section-pad" id="estate" aria-labelledby="estate-title">
      <div className="shell">
        <div className="section-heading estate-heading">
          <div>
            <p className="kicker">
              <span>02 /</span> {t('THE INTERACTIVE ESTATE')}
            </p>
            <h2 id="estate-title">
              {t('A little world,')}<br />
              <em>{t('beautifully connected.')}</em>
            </h2>
          </div>
          <p>
            {t('Follow the journey from the growing fields to the factory, then find your own quiet corner in the hills.')}
          </p>
        </div>

        <div className="estate-layout">
          <div className="map-card">
            <div className="map-top">
              <span>{t('THE ESTATE EXPLORER')}</span>
              <span>{t('9 ACRES')} <span className="map-north">↗ N</span></span>
            </div>

            <div
              className="map-canvas"
              aria-label={t('Illustrative estate map. Select a zone to explore.')}
            >
              <svg className="map-art" viewBox="0 0 600 480" preserveAspectRatio="none" aria-hidden="true">
                <rect width="600" height="480" fill="#d9dfcb" />
                <path d="M-30 414C38 313 41 160 137 84 245-1 409 6 516 83c91 65 107 186 124 294L571 501H-20Z" fill="#b3c6a3" />
                <path d="M-25 318C72 294 63 189 147 134c91-61 168-45 229-100-33 87-56 154-28 220 21 51 51 87 43 166l-206 83H-30Z" fill="#8eae82" />
                <path d="M345 33c88 10 183 46 232 119 43 65 48 143 64 211-87-5-168-48-228-94-58-46-99-118-68-236Z" fill="#bdcba8" />
                <path d="M-20 410C81 382 135 376 203 403c82 32 142 50 235 18 63-22 124-16 191 17v60H-20Z" fill="#c2c6a9" />
                <g fill="none" stroke="#e8ecd9" strokeWidth="2" opacity=".53">
                  <path d="M-30 249C73 228 94 137 179 108S289 91 351 52" />
                  <path d="M-28 276C86 255 108 158 194 130s111-17 171-53" />
                  <path d="M-28 303C95 281 121 180 207 151s111-18 171-49" />
                  <path d="M-28 330C108 307 134 202 221 173s110-20 170-47" />
                  <path d="M-28 357C120 333 147 224 235 194s108-19 168-43" />
                  <path d="M-28 384C132 359 160 247 248 216s107-20 167-40" />
                  <path d="M-28 411C145 385 173 269 262 237s105-20 165-37" />
                  <path d="M-28 438C157 411 186 291 276 259s104-22 164-34" />
                </g>
                <path d="M70 458c61-55 151-56 213-74 69-20 84-65 90-113 7-53 26-77 76-86" fill="none" stroke="#f6f0de" strokeWidth="12" strokeLinecap="round" strokeDasharray="2 19" opacity=".9" />
                <g fill="#f7f2df" opacity=".8">
                  <path d="m402 180 39-20 38 19-39 23z" />
                  <path d="M424 202h40v24h-40z" />
                  <path d="m176 359 31-17 32 17-31 18z" />
                  <path d="M190 376h35v20h-35z" />
                </g>
                <path d="M470 350c33-13 75-3 84 18 9 23-34 42-66 36-27-5-42-33-18-54Z" fill="#9bbfc0" opacity=".8" />
              </svg>

              <span className="map-label label-growing">{t('THE GROWING FIELDS')}</span>
              <span className="map-label label-factory">{t('THE FACTORY')}</span>
              <span className="map-label label-relax">{t('THE RELAX ZONE')}</span>

              <button
                type="button"
                className={`map-pin pin-farm ${selectedZoneKey === 'farm' ? 'active' : ''}`}
                data-zone="farm"
                aria-label={t('Explore the farming zone')}
                aria-pressed={selectedZoneKey === 'farm'}
                onClick={() => setSelectedZoneKey('farm')}
              >
                <span>01</span>
              </button>
              <button
                type="button"
                className={`map-pin pin-factory ${selectedZoneKey === 'factory' ? 'active' : ''}`}
                data-zone="factory"
                aria-label={t('Explore the factory zone')}
                aria-pressed={selectedZoneKey === 'factory'}
                onClick={() => setSelectedZoneKey('factory')}
              >
                <span>02</span>
              </button>
              <button
                type="button"
                className={`map-pin pin-relax ${selectedZoneKey === 'relax' ? 'active' : ''}`}
                data-zone="relax"
                aria-label={t('Explore the relax zone')}
                aria-pressed={selectedZoneKey === 'relax'}
                onClick={() => setSelectedZoneKey('relax')}
              >
                <span>03</span>
              </button>
              <span className="map-compass">✳</span>
            </div>

            <div className="map-bottom">
              <span>{t('SELECT A ZONE TO EXPLORE')}</span>
              <span>{t('ILLUSTRATIVE MAP · NOT A PANORAMA')}</span>
            </div>

            <div className="zone-tabs" role="group" aria-label={t('Estate zones')}>
              <button
                type="button"
                className={selectedZoneKey === 'farm' ? 'active' : ''}
                aria-pressed={selectedZoneKey === 'farm'}
                onClick={() => setSelectedZoneKey('farm')}
              >
                <span>01</span> {t('Farming')}
              </button>
              <button
                type="button"
                className={selectedZoneKey === 'factory' ? 'active' : ''}
                aria-pressed={selectedZoneKey === 'factory'}
                onClick={() => setSelectedZoneKey('factory')}
              >
                <span>02</span> {t('Factory')}
              </button>
              <button
                type="button"
                className={selectedZoneKey === 'relax' ? 'active' : ''}
                aria-pressed={selectedZoneKey === 'relax'}
                onClick={() => setSelectedZoneKey('relax')}
              >
                <span>03</span> {t('Relax')}
              </button>
            </div>
          </div>

          <article className="zone-detail" id="zone-detail" aria-live="polite">
            <div className="zone-photo-wrap">
              <img
                id="zone-image"
                src={imageError[zone.key] ? zone.fallbackImage : zone.image}
                onError={() => setImageError(prev => ({ ...prev, [zone.key]: true }))}
                alt={t(zone.alt)}
              />
              <span className="zone-photo-label" id="zone-photo-label">{t(zone.label)}</span>
              <span className="photo-note">{t('CONCEPT IMAGERY')}</span>
            </div>
            <div className="zone-copy">
              <div className="zone-title-row">
                <div>
                  <p className="kicker" id="zone-kicker">{t(zone.kicker)}</p>
                  <h3 id="zone-title">{t(zone.title)}</h3>
                </div>
                <span className="zone-number" id="zone-number">{zone.number}</span>
              </div>
              <p id="zone-description">{t(zone.description)}</p>
              <div className="zone-highlights" id="zone-highlights">
                {zone.highlights.map((item, idx) => (
                  <span key={idx}>{t(item)}</span>
                ))}
              </div>
              <div className="activities-heading">
                {t('A MOMENT TO ENJOY')} <span>↗</span>
              </div>
              <div className="activity-list" id="zone-activities">
                {zone.activities.map((act, idx) => (
                  <div key={idx}>
                    <b>{String(idx + 1).padStart(2, '0')}</b>
                    <span>{t(act)}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
