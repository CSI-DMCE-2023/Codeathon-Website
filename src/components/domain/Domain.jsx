import React from "react";
import Domaincards from "./Domaincards";

const Domains = () => {
  const objects = [
    {
      title: "Intelligent Warehouse Management System",
      imgLink:
        "https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg?t=st=1709318529~exp=1709322129~hmac=4570f59360d09744b89f8dedf9f6322f9fb89e316405655279f733a9aabd5468&w=996",
      paragraph:
        "Design an AI-driven system that optimizes warehouse space utilization, automates inventory management, and predicts stock levels based on historical data, future orders and current trends. The system should integrate and be compatible with devices for real-time tracking and provide actionable insights to reduce waste and improve operational efficiency.",
    },
    {
      title: "International Supply Chain Data Sharing using Blockchain",
      imgLink:
        "https://img.freepik.com/free-photo/dictatorship-oppression-collage-concept_23-2149711433.jpg?t=st=1709318206~exp=1709321806~hmac=04c5c38e409b5d3608d9b09c47a1353d355579918eeac71f82cf88e6f4b5778c&w=996",
      paragraph:
        "Create a blockchain-based platform that ensures end-to-end visibility and security in the international supply chain. This platform should allow all stakeholders, including suppliers, transporters, and customers, to access real-time, tamper-proof information about the product journey, from pickup to delivery, enhancing trust and compliance. Define Data Items that will be shared with various stakeholders. ",
    },
    {
      title: "Dynamic Route Optimization for International Trade",
      imgLink:
        "https://img.freepik.com/free-photo/rocket-spaceship-launch-startup-mission-graphic_53876-123880.jpg?w=1060&t=st=1709320460~exp=1709321060~hmac=0beaf4c2873cd41ed0df819beb0f3b16253279b74a2be87e86f6c488a0508e7b",
      paragraph:
        "Create an algorithm or platform that optimizes international trade routes in real-time, taking into account various factors such as traffic conditions, weather, delivery windows, and vehicle capacity. This solution aims to reduce delivery times, fuel consumption, and operational costs.",
    },
    {
      title: "A Self-Learning AI-Powered PDF to Data Converter",
      imgLink:
        "https://img.freepik.com/free-photo/sustainable-development-goals-still-life_23-2150196699.jpg?t=st=1709318475~exp=1709322075~hmac=84b7d371023de8808625e6757a65a22f1e25a0cb399436f512ea13ba637a2e28&w=996",
      paragraph:
        "Create a cutting-edge, self-learning Smart PDF to Data Converter that leverages Generative AI rather than relying on conventional OCR libraries. This system should utilize machine learning (ML) algorithms to continuously learn from its conversions and extract insights, enhancing its ability to accurately interpret and convert various PDF documents, regardless of their complexity or format.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full bg-black py-10 mb-16">
      <p className="pb-6 text-3xl md:text-5xl text-white font-bold text-center">
        PROBLEM STATEMENTS
      </p>
      <div className="mt-8 md:mt-12 mx-4 sm:mx-6">
        <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
          {objects.map((item, index) => {
            return (
              <Domaincards
                title={item.title}
                paragraph={item.paragraph}
                imglogo={item.imgLink}
                index={index}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Domains;
