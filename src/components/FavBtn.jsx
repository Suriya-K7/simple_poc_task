import React, { useContext } from 'react';
import DataContext from "../context/DataContext";
import FavIcon from "../assets/FavIcon";
import toast from "react-hot-toast";

export default function FavBtn({ property }) {

    const { handleFav } = useContext(DataContext);

    return (
        <div className={`absolute duration-300 top-3 group right-3 p-2 rounded-md ring-1  backdrop-blur-md  ${property.isFav ? "ring-red-400" : "ring-white"}`}
            onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleFav(property.id);
                if (property.isFav) {
                    toast.error("Removed from favorites");
                } else {
                    toast.success("add to favorites");
                }
            }
            }>
            <FavIcon className={`w-4 h-4  group-hover:scale-115  ${property.isFav ? "fill-red-400" : "fill-white"}`} />
        </div>
    );
}
