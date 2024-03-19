import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import post1 from "/soft1.jpg";
import post2 from "/soft2.jpg";
import post3 from "/soft3.jpg";
import post4 from "/soft4.jpg";

export const products = [
  {
    title: "Softlink",
    link: "https://gomoonbeam.com",
    thumbnail: post1,
  },
  {
    title: "Softlink",
    link: "https://cursor.so",
    thumbnail: post2,
  },
  {
    title: "Softlink",
    link: "https://cursor.so",
    thumbnail: post3,
  },

  {
    title: "Softlink",
    link: "https://editorially.org",
    thumbnail: post4,
  },
  {
    title: "Softlink",
    link: "https://editrix.ai",
    thumbnail: post1,
  },
  {
    title: "Softlink",
    link: "https://app.pixelperfect.quest",
    thumbnail: post4,
  },

  {
    title: "Softlink",
    link: "https://algochurn.com",
    thumbnail: post2,
  },
  {
    title: "Softlink",
    link: "https://ui.aceternity.com",
    thumbnail: post3,
  },
  {
    title: "Softlink",
    link: "https://tailwindmasterkit.com",
    thumbnail: post4,
  },
  {
    title: "Softlink",
    link: "https://smartbridgetech.com",
    thumbnail: post1,
  },
  {
    title: "Softlink",
    link: "https://renderwork.studio",
    thumbnail: post2,
  },
];

const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[20rem] relative flex-shrink-0"
    >
      <img
        src={product.thumbnail}
        height="400"
        width="400"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />

      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  //   const thirdRow = products.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[210vh] md:h-[240vh] py-10 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="relative py-20 md:py-32 px-4 w-full left-0 top-0 text-white">
        <h1 className="text-3xl md:text-5xl font-semibold ms-0 md:ms-10">
          GALLERY
        </h1>
      </div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10">
          {firstRow.map((product, index) => (
            <ProductCard product={product} translate={translateX} key={index} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 space-x-10">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>
        {/* <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div> */}
      </motion.div>
    </div>
  );
};

function Gallery() {
  return (
    <div id="gallery" className="w-full overflow-x-hidden text-white">
      <HeroParallax products={products} />
    </div>
  );
}

export default Gallery;
