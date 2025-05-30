import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/destinations/")
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="row">
      {destinations.map(dest => (
        <div className="col-md-4 mb-4" key={dest.id}>
          <div className="card">
            <img src={dest.ImageURL} className="card-img-top" alt={dest.name} />
            <div className="card-body">
              <h5 className="card-title">{dest.name}</h5>
              <p className="card-text">{dest.location}</p>
              <Link to={`/destination/${dest.id}`} className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Home;
