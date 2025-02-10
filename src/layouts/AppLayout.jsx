import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

export default function AppLayout({ children }) {
    return (
        <div className="bg-white py-8 mx-auto max-w-7xl px-6 lg:px-8">
            <Header />
            <nav className="mb-8">
                <ul className="flex gap-6">
                    <li>
                        <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-property" className="text-indigo-600 hover:text-indigo-800 font-medium">
                            Add Property
                        </Link>
                    </li>
                </ul>
            </nav>
            {
                children
            }
            <Footer />
        </div>
    );
}
