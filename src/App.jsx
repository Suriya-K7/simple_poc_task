import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import AddPropertyPage from "./pages/AddPropertyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
        <Route path="/add-property" element={<AddPropertyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
