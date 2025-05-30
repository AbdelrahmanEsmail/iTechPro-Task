import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DestinationDetails from './pages/DestinationDetails';
import BookingConfirmation from './pages/BookingConfirmation';
import Bookings from './pages/Bookings';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
