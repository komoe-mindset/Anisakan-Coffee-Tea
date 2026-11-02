import React, { useState, useRef } from 'react';
import { useTranslation } from './i18n/context';
import { tripOptions } from './data/estateData';
import { ContactMode } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { InteractiveEstate } from './components/InteractiveEstate';
import { CoffeeProcess } from './components/CoffeeProcess';
import { Orchard } from './components/Orchard';
import { Interlude } from './components/Interlude';
import { ProjectProposal } from './components/ProjectProposal';
import { TripPlanner } from './components/TripPlanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTrip, setSelectedTrip] = useState<'harvest' | 'villa' | 'cupping'>('harvest');
  const [guests, setGuests] = useState<number>(2);
  const [contactMode, setContactMode] = useState<ContactMode>('visit');
  const [contactMessage, setContactMessage] = useState<string>('');

  const nameInputRef = useRef<HTMLInputElement>(null);

  const formatMoney = (val: number) => new Intl.NumberFormat('en-US').format(val);

  const handleEnquireTrip = () => {
    const trip = tripOptions[selectedTrip];
    setContactMode('visit');

    const greeting = t('Hello, I would like to enquire about the {trip} for {count} {guests}.')
      .replace('{trip}', t(trip.name))
      .replace('{count}', String(guests))
      .replace('{guests}', t(guests === 1 ? 'guest' : 'guests'));

    const estimate = t(
      'The planner showed an illustrative estimate of {amount} MMK. Please let me know the actual availability, itinerary and price.'
    ).replace('{amount}', formatMoney(trip.total(guests)));

    const fullMessage = [greeting, estimate, t('Thank you.')].join('\n\n');
    setContactMessage(fullMessage);

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    }

    setTimeout(() => {
      nameInputRef.current?.focus({ preventScroll: true });
    }, 450);
  };

  return (
    <div className="antialiased">
      <a className="skip-link" href="#main">
        {t('Skip to content')}
      </a>

      <Header />

      <main id="main" className="w-full">
        <Hero />
        <Intro />
        <InteractiveEstate />
        <CoffeeProcess />
        <Orchard />
        <Interlude />
        <ProjectProposal />
        <TripPlanner
          selectedTrip={selectedTrip}
          setSelectedTrip={setSelectedTrip}
          guests={guests}
          setGuests={setGuests}
          onEnquire={handleEnquireTrip}
        />
        <ContactSection
          ref={nameInputRef}
          contactMode={contactMode}
          setContactMode={setContactMode}
          message={contactMessage}
          setMessage={setContactMessage}
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;
