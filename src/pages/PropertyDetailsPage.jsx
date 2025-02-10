import { useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import AppLayout from "../layouts/AppLayout";
import ImageViewer from "../components/ImageViewer";
import FavBtn from "../components/FavBtn";

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const { propertyData, handleOpenDialog } = useContext(DataContext);
  const navigate = useNavigate();

  // Memoizing the property lookup to avoid unnecessary re-renders
  const property = useMemo(
    () => propertyData?.find((item) => item.id == id) || {},
    [id, propertyData]
  );

  return (
    <AppLayout>
      <div className="mx-auto p-6 md:p-12 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-16">
          {/* Property Image & Payment Button */}
          <div className="lg:col-span-4 relative">
            <FavBtn property={property} />
            <img
              alt={property?.name || "Property Image"}
              src={property?.image || "/placeholder.jpg"}
              className="aspect-4/3 w-full rounded-lg bg-gray-100 object-cover"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleOpenDialog(property?.image);
              }}
            />
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                className="w-full rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
              >
                Pay {property?.price || "N/A"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="w-full rounded-md bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer duration-200"
              >
                Go to Home
              </button>
            </div>
          </div>

          {/* Property Details */}
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:mt-0">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {property?.name || "Property Name"}
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`h-5 w-5 ${index < property?.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">({property?.rating || 0} out of 5)</span>
              </div>
              <p className="text-sm text-gray-500">{property?.createdDate || "Date not available"}</p>
              <p className="text-gray-500">{property?.description || "No description available."}</p>
            </div>

            {/* Address & Location */}
            <div className="mt-5 border-t border-gray-200 pt-5">
              <div className="relative">
                <div className="relative flex flex-col p-4">
                  <p className="text-lg font-medium text-gray-950">Address</p>
                  <p className="text-sm text-gray-600">{property?.address || "N/A"}</p>
                  <p className="font-medium text-gray-950">Location</p>
                  <p className="text-gray-600">{property?.location || "N/A"}</p>
                </div>
                <div className="absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
              </div>
            </div>

            {/* Highlights Section */}
            <div className="mt-5 border-t border-gray-200 pt-5">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-500">
                {property?.keyFeatures?.length ? (
                  property.keyFeatures.map((feature, index) => (
                    <li key={index} className="pl-2">
                      {feature}
                    </li>
                  ))
                ) : (
                  <li className="pl-2">No highlights available.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <ImageViewer />
      </div>
    </AppLayout>
  );
}
