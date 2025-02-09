import { Card, CardContent, Typography, LocationOn } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

function PropertyCard({ property }) {
  return (
    <Card className="transform transition-transform duration-200 hover:-translate-y-2">
      <CardContent className="p-6">
        <Typography variant="h5" component="h2" className="text-xl font-bold mb-4">
          {property.name}
        </Typography>
        <div className="flex items-center mb-2 text-gray-600">
          <LocationOn className="mr-1 text-gray-400" />
          <Typography variant="body2">
            {property.location}
          </Typography>
        </div>
        <Typography variant="h6" className="text-blue-600 font-bold">
          {property.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
