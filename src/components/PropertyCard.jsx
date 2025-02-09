import '../App.css';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <h2>{property.name}</h2>
      <p className="location">{property.location}</p>
      <p className="price">{property.price}</p>
    </div>
  );
}

export default PropertyCard;
