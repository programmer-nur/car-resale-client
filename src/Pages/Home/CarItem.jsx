const CarItem = ({ car, setModalCars, setReport }) => {
  const {
    name,
    img,
    condition,
    sealerName,
    resaleprice,
    originalprice,
    location,
  } = car;
  return (
    <div
      className="relative border rounded-md transform
      transition duration-500 hover:scale-100 justify-center items-center shadow hover:shadow-2xl overflow-hidden"
    >
      <div className="card rounded-md h-full">
        <figure>
          <img className="h-64 p-1 w-full" src={img} alt="Shoes" />
        </figure>
        <div className="flex justify-center gap-1 flex-col p-3">
          <h2 className="text-lg font-medium">{name}</h2>
          <p className="text-base text-gray-500/95">Location: {location}</p>
          <p className="sm:text-sm md:text-base text-gray-500/95 flex justify-between items-center">
            <span>Seller: {sealerName}</span>
            <span>
              Used: {condition} {condition === "1" ? "Year" : "Years"}
            </span>
          </p>
          <p className="sm:text-sm md:text-base text-gray-500/95 flex lg:justify-between lg:items-center flex-col lg:flex-row">
            <span>
              Reseal Price:{" "}
              <span className="text-[#937B92] md:font-semibold">
                ${resaleprice}
              </span>
            </span>
            <span>Original Price: ${originalprice}</span>
          </p>

          <div className="card-actions pt-2 items-center justify-between">
            <button>
              <label
                htmlFor="report-modal"
                className="sm:px-8 cursor-pointer sm:py-3 px-5 py-2 text-sm sm:font-medium rounded-md text-white bg-gray-500"
                onClick={() => setReport(car)}
              >
                Report
              </label>
            </button>
            <div
              className="inline-block cursor-pointer text-sm font-medium rounded-md text-white "
              onClick={() => setModalCars(car)}
            >
              <label
                htmlFor="booking-modal"
                className="inline-block cursor-pointer border  bg-[#937B92]  hover:bg-[#8c488c] sm:px-8 sm:py-3 px-5 py-2  text-white  text-sm font-medium rounded-md"
                onClick={() => setModalCars(car)}
              >
                Purchase
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
