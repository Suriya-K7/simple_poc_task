import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, NavLink } from 'react-router-dom';

export default function AppLayout({ children }) {
    return (
        <div className="bg-white py-8 mx-auto max-w-7xl px-6 lg:px-8">
            <Header />
            <nav className="mt-6 mb-8 flex gap-6 items-center justify-center">
                <NavLink to="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Home
                </NavLink>
                <NavLink to="/add-property" className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Add Property
                </NavLink>
            </nav>
            {
                children
            }
            <Footer />
        </div>
    );
}
