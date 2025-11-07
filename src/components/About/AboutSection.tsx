
import { motion } from 'framer-motion';
import img1 from "../../assets/About/About1.jpg";
import img2 from "../../assets/About/About-2.jpg";
import img3 from "../../assets/About/About-3.jpg";
import img4 from "../../assets/About/About-4.jpg";

export default function AboutUsSection() {
  // Animation variants for a smoother reveal
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className="py-16 px-4 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Right Side - Image Grid */}
      <motion.div
        className="grid grid-cols-2 grid-rows-5 gap-2 w-full md:w-1/2"
        style={{ gridAutoFlow: 'dense' }}
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {[img1, img2, img3, img4].map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`About Yonile Image ${index + 1}`}
            className={`object-cover w-full h-64 rounded-md ${
              index === 0
                ? 'row-span-2 col-start-1 row-start-2'
                : index === 1
                ? 'row-span-2 col-start-2 row-start-1'
                : index === 2
                ? 'row-span-2 col-start-1 row-start-4'
                : 'row-span-2 col-start-2 row-start-3'
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          />
        ))}
      </motion.div>

      {/* Left Side - Text Content */}
      <motion.div
        className="flex-1 flex flex-col gap-6"
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          OUR SERVICES AT YONILE COMMUNICATION
        </h2>
        <p className="text-white/70 mb-1.5">
          At Yonile Communication, we specialize in crafting compelling narratives and
          innovative strategies to connect your brand with its audience. Our dedicated team
          excels in digital marketing, content creation, and media relations, ensuring your
          message resonates effectively across all platforms.
        </p>
        <p className="text-white/70 mb-1.5">
          We believe in transforming ideas into impactful solutions that drive growth and
          foster lasting connections. From strategic planning to flawless execution, Yonile
          Communication is your partner in achieving unparalleled success in the dynamic
          world of communication.
        </p>
        <div className="mt-4">
          <p className="text-lg font-semibold text-white">YONAS MOH</p>
          <p className="text-blue-600 font-medium">CEO</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
