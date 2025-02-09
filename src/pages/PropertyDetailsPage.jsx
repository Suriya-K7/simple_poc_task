import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia } from '@mui/material';
import { LocationOn, BedOutlined, BathtubOutlined, SquareFootOutlined } from '@mui/icons-material';
import properties from '../data/properties';

function PropertyDetailsPage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) {
    return (
      <Container className="py-12">
        <Typography variant="h4">Property not found</Typography>
      </Container>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Container className="max-w-4xl mx-auto py-12">
        <Card className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
          <CardMedia
            component="img"
            height="400"
            image={property.image || "https://source.unsplash.com/random/800x400/?house"}
            alt={property.name}
            className="h-96 object-cover"
          />
          <div className="p-8 space-y-6">
            <Typography variant="h3" className="text-3xl font-bold mb-4 text-gray-800">
              {property.name}
            </Typography>
            
            <div className="flex items-center mb-6 text-gray-600">
              <LocationOn className="mr-2 text-blue-500" />
              <Typography variant="h6">
                {property.location}
              </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 text-gray-600">
              <div className="flex items-center">
                <BedOutlined className="mr-2 text-blue-500" />
                <Typography variant="h6">{property.beds || '3'} Bedrooms</Typography>
              </div>
              <div className="flex items-center">
                <BathtubOutlined className="mr-2 text-blue-500" />
                <Typography variant="h6">{property.baths || '2'} Bathrooms</Typography>
              </div>
              <div className="flex items-center">
                <SquareFootOutlined className="mr-2 text-blue-500" />
                <Typography variant="h6">{property.sqft || '1,500'} sq.ft</Typography>
              </div>
            </div>

            <Typography variant="h4" className="text-blue-600 font-bold mb-6">
              {property.price}
            </Typography>

            <Typography variant="body1" className="text-gray-600 mb-6">
              This beautiful property offers modern living at its finest. Featuring spacious rooms,
              premium finishes, and a prime location, this home is perfect for families looking
              for comfort and convenience.
            </Typography>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default PropertyDetailsPage;
