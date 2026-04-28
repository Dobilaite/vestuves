import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import DressCodePage from './pages/DressCodePage';
import RSVPPage from './pages/RSVPPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/location" element={<LocationPage />} />
                <Route path="/dress-code" element={<DressCodePage />} />
                <Route path="/rsvp" element={<RSVPPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;