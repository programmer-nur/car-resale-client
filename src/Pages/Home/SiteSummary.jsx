import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const SiteSummary = () => {
  return (
    <section
      style={{
        background: `url(https://i.ibb.co/nRDSHKj/pexels-asim-alnamat-360399.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat-y",
      }}
      className="min-h-screen  py-24 px-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-semibold text-center text-white mb-8">
          Why Choose Our Services?
        </h2>
        <p className="text-center text-base text-white mb-3">
          Buying a used car can be stressful. We’ve got your back. We’ll give
          you peace of mind and keep you on the road.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-y-8">
        <div className="card max-w-sm text-white hover:bg-accent duration-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              100% Satisfaction
            </h2>
            <p>
              Not satisfied with your purchase? We’ll exchange it for another
              vehicle of equal or lesser value.
            </p>
          </div>
        </div>
        <div className="card max-w-sm text-white hover:bg-accent duration-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              Service Contract Plus
            </h2>
            <p>
              Get added protection for your purchase with three tiers of service
              including oil changes and roadside assistance.
            </p>
          </div>
        </div>
        <div className="card max-w-sm text-white hover:bg-accent duration-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              Accident Protection Plan
            </h2>
            <p>
              Have your remaining debt cancelled in the event your vehicle is
              stolen or considered a total loss.
            </p>
          </div>
        </div>
        <div className="card max-w-sm text-white hover:bg-accent duration-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              Pay Your Way
            </h2>
            <p>
              Choose from several convenient ways to make your payments – so you
              have control
            </p>
          </div>
        </div>
        <div className="card max-w-sm text-white hover:bg-accent duration-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              Reliability
            </h2>
            <p>Reliable, Effective &Technically Advanced Products!</p>
          </div>
        </div>
        <div className="card max-w-sm text-white hover:bg-accent duration-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              Excellent Craftsmanship
            </h2>
            <p>
              Industic Engineering has been built on engineering excellence
              crafted through unstinted dedication to quality, innovation and a
              constant objective to serve the global market & decade young
              industry expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteSummary;
