import { createContext, useState, useEffect } from "react";
import propertiesData from "../data/properties";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [propertyData, setPropertyData] = useState([{
        id: 1,
        name: "Luxury Villa",
        price: "$1,200,000",
        location: "Los Angeles, CA",
        address: "123 Beverly Hills, Los Angeles, CA 90210",
        contact: "+1 (310) 555-1234",
        keyFeatures: ["5 Beds", "4 Baths", "Swimming Pool", "Garden"],
        isFav: false,
        description:
            "A stunning luxury villa in Beverly Hills with modern amenities, spacious interiors, and a beautiful garden.",
        image:
            "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4,
        owner: "John Doe",
        createdDate: "Feb 01, 2024",
    },
    {
        id: 2,
        name: "Modern Apartment",
        price: "$750,000",
        location: "New York, NY",
        address: "456 Park Ave, New York, NY 10022",
        contact: "+1 (212) 555-5678",
        keyFeatures: ["3 Beds", "2 Baths", "Gym", "City View"],
        isFav: false,
        description:
            "A stylish modern apartment in the heart of NYC with breathtaking city views and top-notch amenities.",
        image:
            "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4,
        owner: "Emily Smith",
        createdDate: "Jan 15, 2024",
    },
    {
        id: 3,
        name: "Cozy Cottage",
        price: "$450,000",
        location: "Denver, CO",
        address: "789 Mountain Rd, Denver, CO 80202",
        contact: "+1 (303) 555-7890",
        keyFeatures: ["2 Beds", "1 Bath", "Fireplace", "Mountain View"],
        isFav: false,
        description:
            "A charming cottage surrounded by nature, perfect for a peaceful retreat in the mountains.",
        image:
            "https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 3,
        owner: "Michael Brown",
        createdDate: "Dec 20, 2023",
    },
    {
        id: 4,
        name: "Beachfront House",
        price: "$980,000",
        location: "Miami, FL",
        address: "321 Ocean Dr, Miami, FL 33139",
        contact: "+1 (305) 555-3456",
        keyFeatures: ["4 Beds", "3 Baths", "Ocean View", "Private Beach"],
        isFav: false,
        description:
            "Wake up to stunning ocean views in this beautiful beachfront property with direct access to a private beach.",
        image:
            "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 4,
        owner: "Sophia Johnson",
        createdDate: "Jan 10, 2024",
    },
    {
        id: 5,
        name: "Suburban Home",
        price: "$620,000",
        location: "Austin, TX",
        address: "654 Oak St, Austin, TX 73301",
        contact: "+1 (512) 555-6789",
        keyFeatures: ["3 Beds", "2 Baths", "Garage", "Backyard"],
        isFav: false,
        description:
            "A cozy family home in a quiet suburban neighborhood with a spacious backyard and modern interiors.",
        image:
            "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4,
        owner: "David Martinez",
        createdDate: "Feb 05, 2024",
    },
    {
        id: 6,
        name: "Penthouse Suite",
        price: "$2,500,000",
        location: "San Francisco, CA",
        address: "987 Skyline Blvd, San Francisco, CA 94110",
        contact: "+1 (415) 555-9876",
        keyFeatures: ["4 Beds", "4 Baths", "Rooftop Terrace", "Panoramic View"],
        isFav: false,
        description:
            "An exquisite penthouse suite in the heart of San Francisco featuring a private rooftop terrace with stunning panoramic city views.",
        image:
            "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        owner: "Olivia Wilson",
        createdDate: "Feb 08, 2024",
    },]);

    const [openDialog, setOpenDialog] = useState(false);
    const [viewerImage, setViewerImage] = useState("");
    const [search, setSearch] = useState("");

    const handleFav = (id) => {
        setPropertyData((prev) => {
            return prev.map((property) => {
                if (property.id === id) {
                    return {
                        ...property,
                        isFav: !property.isFav
                    };
                }
                return property;
            });
        }
        );
    };

    const handleDelete = (id) => {
        setPropertyData((prev) => {
            return prev.filter((property) => property.id !== id);
        });
    };

    const handleAddProperty = (data) => {
        setPropertyData((prev) => {
            return [...prev, data];
        });
    };

    const handleOpenDialog = (image) => {
        setOpenDialog(true);
        setViewerImage(image);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setViewerImage("");
    };

    const handleSearch = (e) => {
        setSearch(e);
        setPropertyData((prev) => {
            return prev.filter((property) => property.name.toLowerCase().includes(e.toLowerCase()));
        });
    };

    return <DataContext.Provider value={{ propertyData, handleFav, handleDelete, handleAddProperty, openDialog, viewerImage, handleCloseDialog, handleOpenDialog, search, setSearch, handleSearch }}>
        {children}
    </DataContext.Provider>;
};

export default DataContext;