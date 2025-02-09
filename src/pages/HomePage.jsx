import { Typography } from '@mui/material';
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

function HomePage() {
  return (
    <>
      <div className="text-center mb-8 sm:mb-12 px-4">
        <Typography 
          variant="h3" 
          component="h1" 
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
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

export default HomePage;
