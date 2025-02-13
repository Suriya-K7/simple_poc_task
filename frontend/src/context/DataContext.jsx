import { createContext, useState, useEffect } from "react";
import propertiesData from "../data/properties";
import api from "../api/api";
import toast from "react-hot-toast";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [propertyData, setPropertyData] = useState([]);

    const [openDialog, setOpenDialog] = useState(false);
    const [viewerImage, setViewerImage] = useState("");
    const [search, setSearch] = useState("");

    const fetchPropertyData = async () => {
        try {
            const response = await api.get("/");

            setPropertyData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPropertyData();
    }, []);

    const handleFav = async (id) => {
        try {
            const { data } = await api.patch(`/fav/${id}`);

            if (data.isFav) {
                toast.success("add to favorites");
            } else {
                toast.error("Removed from favorites");
            }

            setPropertyData(prev =>
                prev.map(property =>
                    property._id === id ? { ...property, isFav: data.isFav } : property
                )
            );
        } catch (error) {
            console.error("Error updating favorites:", error);
            toast.error("Failed to update favorites");
        }

    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/${id}`);

            setPropertyData((prev) => {
                return prev.filter((property) => property._id !== id);
            });

            toast.success("Property deleted successfully");

        } catch (error) {
            console.error("Error deleting property:", error);
            toast.error("Failed to delete property");
        }
    };

    const addReview = async (id, review) => {
        try {
            await api.post(`/review`, { id, review });

            setPropertyData((prev) => prev.map(property => property._id == id ? { ...property, reviews: property.reviews.concat(review) } : property));

            toast.success("Review added successfully");
        } catch (error) {
            console.error("Error adding review", error);
            toast.error("Failed to add review");
        }
    };

    const handleAddProperty = async (formData) => {
        try {
            const { data } = await api.post("/", formData);


            setPropertyData((prev) => {
                return [...prev, data];
            });

            toast.success("Property added successfully");
        } catch (error) {
            console.error("Error adding property", error);
            toast.error("Failed to add property");
        }

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

    return <DataContext.Provider value={{ propertyData, handleFav, handleDelete, handleAddProperty, openDialog, viewerImage, handleCloseDialog, handleOpenDialog, search, setSearch, handleSearch, addReview }}>
        {children}
    </DataContext.Provider>;
};

export default DataContext;