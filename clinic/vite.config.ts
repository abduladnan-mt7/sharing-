import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          // Bundle core above-the-fold UI elements
          'ui-core': ['./components/Header', './components/Hero', './components/QuickBooking', './components/ui/Button'],
          // Bundle main landing page content to avoid 10+ small files loading in a waterfall
          'landing-content': [
            './components/Features', 
            './components/About', 
            './components/Services', 
            './components/Testimonials'
          ],
          // Bundle secondary content
          'landing-secondary': [
            './components/Gallery',
            './components/InternationalPatients',
            './components/FAQ',
            './components/Blog',
            './components/BookingSection',
            './components/LocationMap',
            './components/Footer'
          ],
          // Interactive elements kept separate or grouped
          'interactions': [
            './components/BookingModal',
            './components/CaseStudyModal',
            './components/FloatingContactButtons'
          ]
        }
      }
    }
  }
});