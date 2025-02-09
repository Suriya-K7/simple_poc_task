import DotIcon from "../assets/dotIcon";


function PropertyCard({ property }) {
  return (
    <article
      key={property.id}
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-72 pb-8 sm:pt-48 lg:pt-72"
    >
      <img alt="" src={property.image} className="absolute inset-0 -z-10 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

      <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
        <p className="mr-8">
          {property.createdDate}
        </p>
        <div className="-ml-4 flex items-center gap-x-4">
          <DotIcon />
          {property.owner}
        </div>
      </div>
      <h3 className="mt-3 text-lg/6 font-semibold text-white">
        {property.name}
      </h3>
    </article>
  );
}

export default PropertyCard;
