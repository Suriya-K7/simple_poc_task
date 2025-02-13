import { useContext, useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import DataContext from "../context/DataContext";
import AppLayout from "../layouts/AppLayout";

export default function HomePage() {
  const { propertyData, search, setSearch } = useContext(DataContext);
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    let filteredData = search
      ? propertyData.filter((property) =>
        property.name.toLowerCase().includes(search.toLowerCase())
      )
      : [...propertyData];

    // Sort the filtered data
    filteredData.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setData(filteredData);
  }, [search, propertyData, sortBy]);

  return (
    <AppLayout>
      <div className="flex items-center justify-center mt-4 gap-4 flex-wrap">
        <input
          type="search"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-[300px] rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-400 transition-shadow hover:shadow-md"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full sm:w-auto rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-400 transition-shadow hover:shadow-md"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </select>
      </div>
      <div className="mx-auto mt-6 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data.map((item) => (<PropertyCard key={item._id} property={item} />
        ))}
      </div>
    </AppLayout >
  );
}
