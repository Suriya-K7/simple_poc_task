import "./App.css";
import PropertyCard from "./components/PropertyCard";
import { properties } from "./data/properties";

function App() {
  return (
    <div>
      <h1>Featured Properties</h1>
      <div className="properties-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default App;
