import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppLayout({ children }) {

    return (
        <div className="bg-white py-8 mx-auto max-w-7xl px-6 lg:px-8">
            <Header />
            {
                children
            }
            <Footer />
        </div>
    );
}
