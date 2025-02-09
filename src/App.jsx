import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import PropertyCard from "./components/PropertyCard";
import PropertyDetails from "./components/PropertyDetails";
import properties from "./data/properties";

function Home() {
  return (
    <>
      <div className="text-center mb-12">
        <Typography 
          variant="h3" 
          component="h1" 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Featured Properties
        </Typography>
        <Typography 
          variant="subtitle1" 
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Discover your dream home from our carefully curated selection of premium properties
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Container className="max-w-7xl mx-auto py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
