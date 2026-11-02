import React, { useState, forwardRef } from 'react';
import { useTranslation } from '../i18n/context';
import { ContactMode } from '../types';
import { ArrowIcon } from './Icons';

interface ContactSectionProps {
  contactMode: ContactMode;
  setContactMode: (mode: ContactMode) => void;
  message: string;
  setMessage: (msg: string) => void;
}

export const ContactSection = forwardRef<HTMLInputElement, ContactSectionProps>(
  ({ contactMode, setContactMode, message, setMessage }, ref) => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [volume, setVolume] = useState('');
    const [mailtoLink, setMailtoLink] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const title = t(
        contactMode === 'wholesale'
          ? 'B2B Green Coffee & Wholesale Supply'
          : 'Vacation & Day Trip Booking'
      );

      const details =
        contactMode === 'wholesale'
          ? [
              `${t('Company:')} ${company || t('Not provided')}`,
              `${t('Requested volume (kg):')} ${volume || t('Not provided')}`
            ]
          : [
              `${t('Preferred date:')} ${date || t('Not provided')}`,
              `${t('Phone:')} ${phone || t('Not provided')}`
            ];

      const body = [
        `${t('Enquiry type:')} ${title}`,
        `${t('Name:')} ${name}`,
        `${t('Email:')} ${email}`,
        ...details,
        '',
        t('Message:'),
        message
      ].join('\n');

      const mailto = `mailto:umyohtut1971@gmail.com?subject=${encodeURIComponent(
        `${t('Anisakan enquiry:')} ${title}`
      )}&body=${encodeURIComponent(body)}`;

      setMailtoLink(mailto);
      window.location.href = mailto;
    };

    return (
      <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
        <div className="shell contact-layout">
          <div className="contact-intro">
            <p className="kicker kicker-light">
              <span>07 /</span> {t('COME SAY HELLO')}
            </p>
            <h2 id="contact-title">
              {t('Every good journey')}<br />
              <em>{t('starts with a hello.')}</em>
            </h2>
            <p>
              {t('Whether you’re dreaming of a highland escape or sourcing exceptional coffee, we’d love to hear from you.')}
            </p>

            <div className="contact-details">
              <a href="mailto:umyohtut1971@gmail.com">
                <span>{t('EMAIL US')}</span>
                <strong>umyohtut1971@gmail.com</strong>
                <b>↗</b>
              </a>
              <a href="tel:+9595095208">
                <span>{t('CALL US')}</span>
                <strong>+95 9 509 5208</strong>
                <b>↗</b>
              </a>
              <div>
                <span>{t('FIND US')}</span>
                <strong>
                  {t('Near Aung Chan Thar Village')}<br />
                  {t('Pyin Oo Lwin, Myanmar')}
                </strong>
              </div>
            </div>

            <div className="contact-illustration" aria-hidden="true">
              ✳ <span>{t('GROW WITH PURPOSE')}</span>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="form-head">
              <span>{t('LET’S CONNECT')}</span>
              <span>✦</span>
            </div>
            <h3>{t('How can we help?')}</h3>
            <p>{t('Choose the conversation you’d like to start.')}</p>

            <div className="contact-toggle" role="group" aria-label={t('Enquiry type')}>
              <button
                type="button"
                className={contactMode === 'visit' ? 'active' : ''}
                aria-pressed={contactMode === 'visit'}
                onClick={() => setContactMode('visit')}
              >
                {t('Vacation & Day Trip Booking')}
              </button>
              <button
                type="button"
                className={contactMode === 'wholesale' ? 'active' : ''}
                aria-pressed={contactMode === 'wholesale'}
                onClick={() => setContactMode('wholesale')}
              >
                {t('B2B Green Coffee & Wholesale Supply')}
              </button>
            </div>

            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  {t('Your name')} <span>*</span>
                  <input
                    ref={ref}
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    required
                    placeholder={t('Name')}
                  />
                </label>
                <label>
                  {t('Email address')} <span>*</span>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="form-grid">
                {contactMode === 'wholesale' ? (
                  <>
                    <label id="detail-label">
                      {t('Company / organisation')}
                      <input
                        name="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        autoComplete="organization"
                        placeholder={t('Optional')}
                      />
                    </label>
                    <label id="company-label">
                      {t('Volume required (kg)')}
                      <input
                        name="volume"
                        type="number"
                        min="1"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        placeholder={t('Optional')}
                      />
                    </label>
                  </>
                ) : (
                  <>
                    <label id="detail-label">
                      {t('Preferred date')}
                      <input
                        name="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </label>
                    <label id="company-label">
                      {t('Phone')}
                      <input
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="tel"
                        placeholder={t('Optional')}
                      />
                    </label>
                  </>
                )}
              </div>

              <label>
                {t('Your message')} <span>*</span>
                <textarea
                  name="message"
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t(
                    contactMode === 'wholesale'
                      ? 'Tell us about the green coffee or wholesale supply you need...'
                      : 'Tell us a little about your plans...'
                  )}
                />
              </label>

              <p className="form-explainer">
                {t(
                  'This opens a pre-addressed email draft in your email app. Sending requires an email app and internet connection.'
                )}
              </p>

              <button className="button button-dark" type="submit">
                {t('Open email draft')} <ArrowIcon />
              </button>

              {mailtoLink && (
                <p className="form-status" id="form-status" role="status">
                  {t('Your email draft is ready. If it did not open, ')}
                  <a href={mailtoLink}>{t('open the draft again')}</a>
                  {t('. Please send it from your email app.')}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    );
  }
);

ContactSection.displayName = 'ContactSection';
