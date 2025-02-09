import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import HomePage from "./pages/HomePage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
        <Container className="max-w-7xl mx-auto py-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/property/:id" element={<PropertyDetailsPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
