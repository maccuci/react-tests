import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Index } from './Index';
import { Projects } from './pages/Projects';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;