import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/context';
import { ArrowIcon, ArrowDiagonalIcon } from './Icons';

export const ProjectProposal: React.FC = () => {
  const { t } = useTranslation();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [coverError, setCoverError] = useState(false);
  const [showPresentationModal, setShowPresentationModal] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleToggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        setStatusMessage('');
      } else {
        await document.documentElement.requestFullscreen();
        setStatusMessage('');
      }
    } catch (_) {
      // In iframes, fullscreen might be blocked, so open the presentation view modal
      setShowPresentationModal(true);
      setStatusMessage('');
    }
  };

  return (
    <section className="proposal section-pad" id="proposal" aria-labelledby="proposal-title">
      <div className="shell proposal-grid">
        <div className="proposal-cover">
          <div style={{ position: 'relative', overflow: 'hidden', background: '#dce6d5', minHeight: '260px' }}>
            <img
              src={
                coverError
                  ? 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
                  : '/assets/proposal-cover.webp'
              }
              onError={() => setCoverError(true)}
              alt="Cover of the original Anisakan project presentation | အနီးစခန်း ကော်ဖီနှင့် လက်ဖက်ခြံ အပန်းဖြေစခန်း စီမံကိန်း စာအုပ်မျက်နှာဖုံး"
              width={1200}
              height={675}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
          </div>
          <span>{t('THE ORIGINAL PROJECT PRESENTATION · 13 PAGES')}</span>
        </div>

        <div className="proposal-copy">
          <p className="kicker">
            <span>05 /</span> {t('THE VISION IN DETAIL')}
          </p>
          <h2 id="proposal-title">
            {t('A closer look')}<br />
            <em>{t('at the vision.')}</em>
          </h2>
          <p>
            {t('Explore the original project presentation, including the location, estate zones, companion crops and the coffee process. The PDF is in Myanmar language and has been optimized for easy download.')}
          </p>

          <div className="proposal-actions">
            <a
              href="/assets/resort-proposal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-dark"
            >
              {t('Open project PDF')} <ArrowDiagonalIcon />
            </a>
            <a
              href="/assets/resort-proposal.pdf"
              download="ANISAKAN-Project-Presentation.pdf"
              className="button button-outline-dark"
            >
              {t('Download PDF')} <ArrowIcon />
            </a>
          </div>

          <p className="proposal-note">
            {t('Optimized presentation · 13 pages · 10.2 MB')}
          </p>

          <button
            type="button"
            id="presentation-toggle"
            className="presentation-toggle"
            onClick={handleToggleFullscreen}
          >
            {t(isFullscreen ? 'Exit full screen' : 'Present full screen')}
          </button>
          {statusMessage && (
            <span id="presentation-status" className="proposal-status" role="status">
              {statusMessage}
            </span>
          )}
        </div>
      </div>

      {showPresentationModal && (
        <div className="presentation-modal" role="dialog" aria-modal="true" aria-label={t('Project PDF')}>
          <div className="presentation-modal-header">
            <div>
              <strong style={{ fontSize: '18px', fontFamily: 'var(--serif)' }}>ANISAKAN</strong>
              <span style={{ fontSize: '12px', marginLeft: '12px', opacity: 0.8 }}>
                {t('THE ORIGINAL PROJECT PRESENTATION · 13 PAGES')}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowPresentationModal(false)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#fff',
                padding: '6px 14px',
                fontSize: '12px'
              }}
            >
              ✕ {t('Close navigation')}
            </button>
          </div>

          <div className="presentation-modal-body">
            <div
              style={{
                background: '#244a37',
                padding: '30px',
                border: '1px solid #79907c',
                maxWidth: '680px',
                width: '100%',
                textAlign: 'left'
              }}
            >
              <p className="kicker kicker-light"><span>✦</span> {t('THE VISION IN DETAIL')}</p>
              <h3 style={{ fontSize: '36px', color: '#f8f5e9', marginBottom: '14px' }}>
                {t('ANISAKAN COFFEE & TEA GARDEN RESORT')}
              </h3>
              <p style={{ color: '#d0dbcd', fontSize: '14px', lineHeight: 1.8 }}>
                {t('Explore 4.4 acres with approximately 3,000 Arabica trees, intercropped with tea, macadamia, papaya, dragon fruit and passion fruit.')}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', margin: '24px 0' }}>
                <div style={{ background: '#173727', padding: '14px', border: '1px solid #4a6855' }}>
                  <small style={{ fontSize: '9px', color: '#b9a77d' }}>{t('ACRES OF')}</small>
                  <strong style={{ display: 'block', fontSize: '20px' }}>9 {t('HIGHLANDS')}</strong>
                </div>
                <div style={{ background: '#173727', padding: '14px', border: '1px solid #4a6855' }}>
                  <small style={{ fontSize: '9px', color: '#b9a77d' }}>{t('COFFEE FARM')}</small>
                  <strong style={{ display: 'block', fontSize: '20px' }}>4.4 {t('ACRES OF')}</strong>
                </div>
                <div style={{ background: '#173727', padding: '14px', border: '1px solid #4a6855' }}>
                  <small style={{ fontSize: '9px', color: '#b9a77d' }}>{t('ARABICA')}</small>
                  <strong style={{ display: 'block', fontSize: '20px' }}>3,000 {t('COFFEE TREES')}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <a
                  href="/assets/resort-proposal.pdf"
                  download="ANISAKAN-Project-Presentation.pdf"
                  className="button button-cream"
                >
                  {t('Download PDF')} <ArrowIcon />
                </a>
                <button
                  type="button"
                  className="button button-outline-light"
                  onClick={() => setShowPresentationModal(false)}
                >
                  {t('Exit full screen')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
