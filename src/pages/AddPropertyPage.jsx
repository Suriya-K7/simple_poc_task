import { useContext, useState } from "react";
import TextInput from "../components/TextInput";
import AppLayout from "../layouts/AppLayout";
import { generateId } from "../utils/generateId";
import DataContext from "../context/DataContext";

const PropertyForm = () => {
    const [formData, setFormData] = useState({
        id: generateId(),
        name: "",
        price: "",
        location: "",
        address: "",
        contact: "",
        keyFeatures: "",
        isFav: false,
        description: "",
        image: "",
        rating: "",
        owner: "",
        createdDate: "",
    });

    const { handleAddProperty } = useContext(DataContext);

    const handleChange = ({ target: { name, value } }) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: name === "keyFeatures" ? value.split(",") : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form is valid, proceed to submit the data
        console.log("Submitted Property Data:", formData);

        handleAddProperty(formData);

        // Reset form after submission
        setFormData({
            id: generateId(),
            name: "",
            price: "",
            location: "",
            address: "",
            contact: "",
            keyFeatures: "",
            isFav: false,
            description: "",
            image: "",
            rating: "",
            owner: "",
            createdDate: "",
        });
    };

    return (
        <AppLayout>
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    {/* Property Information */}
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base/7 font-semibold text-gray-900">Add Property</h2>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <TextInput
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter Property Name (e.g., Penthouse Suite)"
                                required
                            />
                            <TextInput
                                id="price"
                                name="price"
                                type="text"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="Enter Price (e.g., $2,500,000)"
                                required
                            />
                            <TextInput
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Enter Location (e.g., San Francisco, CA)"
                                required
                            />
                            <TextInput
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter Address (e.g., 987 Skyline Blvd)"
                                required
                            />
                            <TextInput
                                id="contact"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                placeholder="Enter Contact Number (e.g., +1 (415) 555-9876)"
                                required
                            />
                            <TextInput
                                id="keyFeatures"
                                name="keyFeatures"
                                value={formData.keyFeatures}
                                onChange={handleChange}
                                placeholder="Enter Key Features (comma separated, e.g., 4 Beds, 4 Baths, Rooftop Terrace)"
                                required
                            />
                            <TextInput
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter Description (e.g., Stunning penthouse suite with panoramic views)"
                                required
                            />
                            <TextInput
                                id="image"
                                name="image"
                                type="url"
                                value={formData.image}
                                onChange={handleChange}
                                placeholder="Enter Image URL (e.g., https://example.com/image.jpg)"
                                required
                            />
                            <TextInput
                                id="rating"
                                name="rating"
                                type="number"
                                value={formData.rating}
                                onChange={handleChange}
                                placeholder="Enter Rating (1-5)"
                                required
                            />
                            <TextInput
                                id="owner"
                                name="owner"
                                value={formData.owner}
                                onChange={handleChange}
                                placeholder="Enter Owner Name (e.g., Olivia Wilson)"
                                required
                            />
                            <TextInput
                                id="createdDate"
                                name="createdDate"
                                value={formData.createdDate}
                                onChange={handleChange}
                                placeholder="Enter Created Date (e.g., Feb 08, 2024)"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Section */}
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </AppLayout>
    );
};

export default PropertyForm;
