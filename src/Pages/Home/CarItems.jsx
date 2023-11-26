import { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../Shared/Loading";
import CarItem from "./CarItem";
import PurchechModal from "./PurchechModal";
import Report from "./Report";

const CarItems = () => {
  const cars = useLoaderData([]);
  const [modalCars, setModalCars] = useState(null);
  const closeModal = () => {
    setModalCars(null);
  };
  const [report, setReport] = useState(null);
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading />;
  }

  return (
    <section
      className="container my-5 w-full mx-auto
        px-9"
    >
      <h2 className="text-5xl font-bold py-5 sm:py-10 text-center">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
        {cars.length &&
          cars?.map((car) => (
            <CarItem
              key={car._id}
              car={car}
              setReport={setReport}
              setModalCars={setModalCars}
            />
          ))}
      </div>
      {modalCars && (
        <PurchechModal closeModal={closeModal} modalCars={modalCars} />
      )}
      {<Report report={report} />}
    </section>
  );
};

export default CarItems;
