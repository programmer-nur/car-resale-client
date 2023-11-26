import aboutCar from "../../assets/aboutcar.jpg";
import { useTransform, useMotionValue, motion } from "framer-motion";
const About = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (
    <section>
      <section>
        <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-100">
          <div className="flex relative z-10 flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <div className="bg-gray-500 shadow-xl">
              <motion.img
                style={{ x, y, rotateX, rotateY, z: 100000 }}
                drag
                dragElastic={0.18}
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                whileTap={{ cursor: "grabbing" }}
                src={aboutCar}
                alt=""
                className="w-full a h-60 sm:h-96 "
              />
            </div>
            <div className="p-6  inset-0 z-20 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl text-white font-medium">About Us</h2>
              </div>
              <div className="text-gray-100 text-base">
                <p>
                  Helping people has always been at the heart of why we exist.
                  Our purpose is to keep customers on the road and provide peace
                  of mind in one very stressful area of life – used car
                  ownership. We have a strong tradition of serving hard-working
                  Americans by delivering quality, used vehicles at affordable
                  prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
