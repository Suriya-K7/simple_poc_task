import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { LocationOn, BedOutlined, BathtubOutlined, SquareFootOutlined } from '@mui/icons-material';

function PropertyCard({ property }) {
  return (
    <Card className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-xl overflow-hidden">
      <CardMedia
        component="img"
        height="200"
        image={property.image || "https://source.unsplash.com/random/400x300/?house"}
        alt={property.name}
        className="h-48 object-cover"
      />
      <CardContent className="p-6 bg-white">
        <Typography variant="h5" component="h2" className="text-xl font-bold mb-3 text-gray-800">
          {property.name}
        </Typography>
        <div className="flex items-center mb-3 text-gray-600">
          <LocationOn className="mr-1 text-blue-500" />
          <Typography variant="body2" className="text-gray-600">
            {property.location}
          </Typography>
        </div>
        <div className="flex justify-between items-center mb-4 text-gray-600 text-sm">
          <div className="flex items-center">
            <BedOutlined className="mr-1" />
            <span>{property.beds || '3'} beds</span>
          </div>
          <div className="flex items-center">
            <BathtubOutlined className="mr-1" />
            <span>{property.baths || '2'} baths</span>
          </div>
          <div className="flex items-center">
            <SquareFootOutlined className="mr-1" />
            <span>{property.sqft || '1,500'} sqft</span>
          </div>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <Typography variant="h6" className="text-blue-600 font-bold">
            {property.price}
          </Typography>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            View Details
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
