import { useTransform, useMotionValue, motion } from "framer-motion";

const CarItem = ({ car, setModalCars, setReport }) => {
  console.log(car)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const {
    name,
    img,
    originalprice
  } = car;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.18 }}
      style={{ x, y, rotateX, rotateY, z: 100000 }}
      drag
      dragElastic={0.18}
      dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
      whileTap={{ cursor: "grabbing" }}
      className="bg-[#e4dfdc] cursor-grab  relative shadow-lg rounded-md"
    >
      <div className="card shadow-xl">
        <figure>
          <img className="h-56 p-1 w-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-base font-bold">Price ${originalprice}</p>
          <div className="card-actions pt-2 items-center justify-between">
            <motion.button>
              <motion.label
                htmlFor="report-modal"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="sm:px-8 cursor-pointer sm:py-3 px-5 py-2 text-sm sm:font-medium text-white bg-red-500"
                onClick={() => setReport(car)}
              >
                Report
              </motion.label>
            </motion.button>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="inline-block cursor-pointer text-sm font-medium rounded-md text-white "
              onClick={() => setModalCars(car)}
            >
              <label
                htmlFor="booking-modal"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="inline-block cursor-pointer border border-lime-500 bg-lime-500  sm:px-8 sm:py-3 px-5 py-2 active:border-lime-400 active:bg-lime-400 text-sm font-medium rounded-md text-white "
                onClick={() => setModalCars(car)}
              >
                purchase
              </label>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarItem;
