import { useEffect, useState } from 'react';

function Bookings() {
  const [Bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/bookings/")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="row">
      {Bookings.map(book => (
        <div className="col-md-4 mb-4" key={book.id}>
          <div className="card">
            <div className="card-body">
              <p className="card-text">Booking ID : {book.id}</p>
              <h5 className="card-title">Username : {book.UserName}</h5>
              <p className="card-text">Created At : {book.created_at}</p>
              <p className="card-text">Booking Date : {book.date}</p>
              <p className="card-text">Destination ID : {book.destinationId}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Bookings;
