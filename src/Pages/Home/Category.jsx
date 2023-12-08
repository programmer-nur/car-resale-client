import React from "react";
import { Link } from "react-router-dom";
import { useTransform, useMotionValue, motion } from "framer-motion";

const Category = ({ category }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-[#f8f8f8] border-[4px] border-white relative shadow-lg rounded-md"
    >
      <motion.img
        style={{ x, y, rotateX, rotateY, z: 100000 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="min-h-[200px] cursor-grab"
        src={category.img}
        alt=""
        draggable="false"
      />
      <div className="flex  items-center p-6  justify-between">
        <h2 className="text-xl font-bold">{category.category}</h2>
        <Link to={`/categories/${category.id}`}>
          {" "}
          <button className="py-2 hover:bg-[#8c488c] px-5 font-semibold text-white bg-[#937B92] rounded-md">
            More
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Category;
