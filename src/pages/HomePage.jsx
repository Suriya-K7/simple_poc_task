import { useContext, useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import DataContext from "../context/DataContext";
import AppLayout from "../layouts/AppLayout";

export default function HomePage() {
  const { propertyData, search, setSearch } = useContext(DataContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (search)
      setData((prev) => {
        return prev.filter((property) => property.name.toLowerCase().includes(search.toLowerCase()));
      });
    else {
      setData(propertyData);
    }
  }, [search]);

  return (
    <AppLayout>
      <div className="flex items-center justify-center mt-4">
        <input
          type="search"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-[300px] rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-400 transition-shadow hover:shadow-md"
        />
      </div>
      <div className="mx-auto mt-6 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data.map((item) => (<PropertyCard key={item.id} property={item} />
        ))}
      </div>
    </AppLayout >
  );
}
