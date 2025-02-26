import DotIcon from "../assets/dotIcon";
import { useContext } from "react";
import toast from 'react-hot-toast';
import DataContext from "../context/DataContext";
import DeleteIcon from "../assets/DeleteIcon";
import { Link } from "react-router-dom";
import FavBtn from "./FavBtn";


function PropertyCard({ property }) {

  const { handleDelete } = useContext(DataContext);

  return (
    <Link to={`/property/${property._id}`}
      key={property._id}
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-72 pb-8 sm:pt-48 lg:pt-72 cursor-pointer hover:shadow-[0px_0px_19px_8px_rgba(0,_0,_0,_0.25)]  duration-200 "
    >
      <FavBtn property={property} />
      <div className={`absolute duration-300 top-3 group right-13 p-2 rounded-md ring-1 ring-white backdrop-blur-md hover:ring-red-400`}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleDelete(property._id);
        }
        }>
        <DeleteIcon className={`w-4 h-4 scale-110 group-hover:scale-115 group-hover:fill-red-400 fill-white`} />
      </div>

      <img alt="" src={property.image} className="absolute inset-0 -z-10 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

      <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
        <p className="mr-8">
          {property.createdAt.slice(0, 10)}
        </p>
        <div className="-ml-4 flex items-center gap-x-4">
          <DotIcon />
          {property.owner}
        </div>
      </div>
      <h3 className="mt-3 text-lg/6 font-semibold text-white">
        {property.name}
      </h3>
    </Link>
  );
}

export default PropertyCard;
