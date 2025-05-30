import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [formData, setFormData] = useState({ userName: '', email: '', date: '' });

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/destinations/${id}`)
      .then(res => res.json())
      .then(data => setDestination(data));
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    const bookingData = { ...formData, destinationId: id };

    fetch('http://127.0.0.1:8000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    }).then(() => navigate('/confirmation'));
  };

  if (!destination) return <div>Loading...</div>;

  return (
    <div>
      <h2>{destination.name}</h2>
      <p>{destination.description}</p>
      <img src={destination.ImageURL} alt={destination.name} style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label>Name</label>
          <input className="form-control" required onChange={e => setFormData({ ...formData, userName: e.target.value })} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" required onChange={e => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="mb-3">
          <label>Date</label>
          <input type="date" className="form-control" required onChange={e => setFormData({ ...formData, date: e.target.value })} />
        </div>
        <button className="btn btn-success">Book Now</button>
      </form>
    </div>
  );
}
export default DestinationDetails;