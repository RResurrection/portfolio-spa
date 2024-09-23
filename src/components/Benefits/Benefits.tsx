"use client";

import { ServiceCard } from "@/utils/utils";
import BenefitsCard from "./BenefitsCard";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <div id="services" className="max-w-[1400px] mt-[100px] mx-auto">
      <div className="flex flex-col items-center justify-center max-w-[920px] mx-auto text-center gap-6 mb-[24px]">
        <h1 className=" text-6xl font-semibold">Services</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className="flex flex-wrap  justify-center items-center gap-[31px] mb-[40px] sm:flex-wrap sm:justify-center">
        {ServiceCard.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <BenefitsCard title={item.name} descr={item.descr} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
