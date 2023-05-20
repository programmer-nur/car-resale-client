import {motion} from 'framer-motion'

const Supports = () => {
  return (
    <section className="container pb-6 sm:pb-10  w-full mx-auto">
        <div className="grid md:grid-cols-4  p-6">
        <motion.div
        initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:.8}}
        className="flex flex-col justify-center items-center">
          <img className="h-40 w-40" src="https://i.ibb.co/G5ccdL5/Integrity-300x300-1.png" alt="" />
            <h1 className="text-4xl">Integrity</h1>
        </motion.div>
        <motion.div
        initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:.8}}
        className="flex flex-col justify-center items-center">
          <img className="h-40 w-40" src="https://i.ibb.co/pK329Yc/Respect-300x300-1.png" alt="" />
            <h1 className="text-4xl">Respect</h1>
        </motion.div>
        <motion.div
        initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:.8}}
        className="flex flex-col justify-center items-center">
          <img className="h-40 w-40" src="https://i.ibb.co/prSskht/Compassion-300x300-1.png" alt="" />
            <h1 className="text-4xl">Compassion</h1>
        </motion.div>
        <motion.div
        initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:.8}}
        className="flex flex-col justify-center items-center">
          <img className="h-40 w-40" src="https://i.ibb.co/dBCyrp1/Excellence-300x300-1.png" alt="" />
            <h1 className="text-4xl">Excellence</h1>
        </motion.div>
        </div>
    </section>
  );
};

export default Supports;
