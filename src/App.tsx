import React, { useState } from 'react';
import { Navigation } from './components/layout/Navigation';
import { ScreenControls } from './components/layout/ScreenControls';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [controlsOpen, setControlsOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'projects':
        return <ProjectsPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onToggleControls={() => setControlsOpen(!controlsOpen)}
      />

      {/* Screen Controls Panel */}
      <ScreenControls isOpen={controlsOpen} onClose={() => setControlsOpen(false)} />

      {/* Page Content */}
      <main>{renderPage()}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
