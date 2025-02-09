import "./App.css";
import { Container, Typography } from '@mui/material';
import PropertyCard from "./components/PropertyCard";
import properties from "./data/properties";

function App() {
  return (
    <Container className="max-w-7xl mx-auto py-8">
      <Typography 
        variant="h3" 
        component="h1" 
        className="text-3xl font-bold text-gray-800 mb-8 text-center"
      >
        Featured Properties
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </Container>
  );
}

export default App;
