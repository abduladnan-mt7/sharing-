import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickBooking from './components/QuickBooking';

// Lazy load components that are not immediately visible above the fold
const Features = lazy(() => import('./components/Features'));
const About = lazy(() => import('./components/About'));
const BookingSection = lazy(() => import('./components/BookingSection'));
const Services = lazy(() => import('./components/Services'));
const InternationalPatients = lazy(() => import('./components/InternationalPatients'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Gallery = lazy(() => import('./components/Gallery'));
const Blog = lazy(() => import('./components/Blog'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));
const BookingModal = lazy(() => import('./components/BookingModal'));
const FloatingContactButtons = lazy(() => import('./components/FloatingContactButtons'));
const LocationMap = lazy(() => import('./components/LocationMap'));

// Loading fallback component
const SectionLoader = () => <div className="w-full h-24 bg-slate-50 animate-pulse" />;

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden selection:bg-primary-200 selection:text-primary-900">
      <Header onBookClick={openBooking} />
      <main>
        {/* Critical Path Components (Loaded Immediately) */}
        <Hero onBookClick={openBooking} />
        <QuickBooking />

        {/* Deferred Components (Loaded on Demand) */}
        <Suspense fallback={<SectionLoader />}>
          <Features />
          <Testimonials />
          <About onBookClick={openBooking} />
          <Services />
          <Gallery />
          <InternationalPatients />
          <FAQ />
          <Blog />
          <BookingSection />
          <LocationMap />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
        <FloatingContactButtons />
      </Suspense>
    </div>
  );
}

export default App;