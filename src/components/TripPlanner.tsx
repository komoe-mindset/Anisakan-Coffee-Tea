import React from 'react';
import { useTranslation } from '../i18n/context';
import { tripOptions } from '../data/estateData';
import { LeafIcon, SunIcon, CupIcon, ArrowIcon } from './Icons';

interface TripPlannerProps {
  selectedTrip: 'harvest' | 'villa' | 'cupping';
  setSelectedTrip: (trip: 'harvest' | 'villa' | 'cupping') => void;
  guests: number;
  setGuests: (guests: number | ((prev: number) => number)) => void;
  onEnquire: () => void;
}

export const TripPlanner: React.FC<TripPlannerProps> = ({
  selectedTrip,
  setSelectedTrip,
  guests,
  setGuests,
  onEnquire,
}) => {
  const { t } = useTranslation();
  const trip = tripOptions[selectedTrip];

  const formatMoney = (val: number) => new Intl.NumberFormat('en-US').format(val);

  const guestMinusDisabled = guests <= 1;
  const guestPlusDisabled = guests >= 12;

  return (
    <section className="planner section-pad" id="planner" aria-labelledby="planner-title">
      <div className="shell">
        <div className="section-heading planner-heading">
          <div>
            <p className="kicker">
              <span>06 /</span> {t('YOUR TIME, YOUR WAY')}
            </p>
            <h2 id="planner-title">
              {t('Let’s plan something')}<br />
              <em>{t('worth remembering.')}</em>
            </h2>
          </div>
          <p>
            {t('Imagine your perfect highland escape. Choose an experience and party size for a sample itinerary and estimate.')}
          </p>
        </div>

        <div className="planner-layout">
          <div className="planner-input">
            <div className="planner-step-label">
              <span>01</span>
              <div>
                <strong>{t('CHOOSE YOUR EXPERIENCE')}</strong>
                <small>{t('What brings you to the hills?')}</small>
              </div>
            </div>

            <div className="experience-options" role="group" aria-label={t('Visit type')}>
              <button
                type="button"
                className={`experience-option ${selectedTrip === 'harvest' ? 'active' : ''}`}
                data-trip="harvest"
                aria-pressed={selectedTrip === 'harvest'}
                onClick={() => setSelectedTrip('harvest')}
              >
                <span className="option-icon">
                  <LeafIcon />
                </span>
                <span>
                  <strong>{t('Day Harvest Tour')}</strong>
                  <small>{t('A day among the growing fields')}</small>
                </span>
                <i>↗</i>
              </button>

              <button
                type="button"
                className={`experience-option ${selectedTrip === 'villa' ? 'active' : ''}`}
                data-trip="villa"
                aria-pressed={selectedTrip === 'villa'}
                onClick={() => setSelectedTrip('villa')}
              >
                <span className="option-icon">
                  <SunIcon />
                </span>
                <span>
                  <strong>{t('Weekend Villa Stay')}</strong>
                  <small>{t('Two nights to truly unwind')}</small>
                </span>
                <i>↗</i>
              </button>

              <button
                type="button"
                className={`experience-option ${selectedTrip === 'cupping' ? 'active' : ''}`}
                data-trip="cupping"
                aria-pressed={selectedTrip === 'cupping'}
                onClick={() => setSelectedTrip('cupping')}
              >
                <span className="option-icon">
                  <CupIcon />
                </span>
                <span>
                  <strong>{t('Specialty Cupping Workshop')}</strong>
                  <small>{t('Follow the flavours in your cup')}</small>
                </span>
                <i>↗</i>
              </button>
            </div>

            <div className="guest-row">
              <div className="planner-step-label">
                <span>02</span>
                <div>
                  <strong>{t('NUMBER OF GUESTS')}</strong>
                  <small>{t('Who’s coming along?')}</small>
                </div>
              </div>

              <div className="guest-counter">
                <button
                  type="button"
                  id="guest-minus"
                  aria-label={t('Remove one guest')}
                  disabled={guestMinusDisabled}
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                >
                  −
                </button>
                <output id="guest-count" aria-live="polite">
                  {guests}
                </output>
                <button
                  type="button"
                  id="guest-plus"
                  aria-label={t('Add one guest')}
                  disabled={guestPlusDisabled}
                  onClick={() => setGuests((g) => Math.min(12, g + 1))}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <aside className="quote-card" aria-live="polite">
            <div className="quote-top">
              <span>{t('YOUR HIGHLAND MOMENT')}</span>
              <span>✦</span>
            </div>

            <p className="quote-tag" id="quote-tag">
              {t(trip.tag)} · {guests} {t(guests === 1 ? 'GUEST' : 'GUESTS')}
            </p>

            <h3
              id="quote-title"
              dangerouslySetInnerHTML={{
                __html: trip.title
                  .split('<br>')
                  .map((p) => {
                    if (p.includes('<em>')) {
                      const match = p.match(/<em>(.*?)<\/em>/);
                      if (match) {
                        return `<em>${t(match[1])}</em>`;
                      }
                    }
                    return t(p.replace(/<.*?>/g, ''));
                  })
                  .join('<br>')
              }}
            />

            <div className="quote-divider" />

            <div className="itinerary-heading">{t('YOUR SAMPLE ITINERARY')}</div>
            <ol className="itinerary" id="itinerary">
              {trip.itinerary.map((item, idx) => (
                <li key={idx}>
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                  {t(item)}
                </li>
              ))}
            </ol>

            <div className="quote-total">
              <div>
                <span>{t('ILLUSTRATIVE ESTIMATE')}</span>
                <strong id="quote-total">
                  {formatMoney(trip.total(guests))} <small>MMK</small>
                </strong>
              </div>
              <span id="quote-rate">{trip.rate(guests, t)}</span>
            </div>

            <p className="estimate-note">
              {t('Example rates and itinerary only—not official pricing or a confirmed booking. Availability and inclusions must be confirmed.')}
            </p>

            <button
              type="button"
              className="button button-gold"
              id="send-plan"
              onClick={onEnquire}
            >
              {t('Enquire about this trip')} <ArrowIcon />
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};
