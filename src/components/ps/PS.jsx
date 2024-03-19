import React from "react";
import PScard from "./PScard";

const PS = () => {
  const objects = [
    {
      title: "Intelligent Warehouse Management System",
      imgLink: "/Intelligent_warehouse.jpg",
      paragraph:
        "Design an AI-driven system that optimizes warehouse space utilization, automates inventory management, and predicts stock levels based on historical data, future orders and current trends. The system should integrate and be compatible with devices for real-time tracking and provide actionable insights to reduce waste and improve operational efficiency.",
    },
    {
      title: "International Supply Chain Data Sharing using Blockchain",
      imgLink: "/Supply_chain_data_sharing_using_blockchain.jpg",
      paragraph:
        "Create a blockchain-based platform that ensures end-to-end visibility and security in the international supply chain. This platform should allow all stakeholders, including suppliers, transporters, and customers, to access real-time, tamper-proof information about the product journey, from pickup to delivery, enhancing trust and compliance. Define Data Items that will be shared with various stakeholders. ",
    },
    {
      title: "Dynamic Route Optimization for International Trade",
      imgLink: "/route_optimization.jpg",
      paragraph:
        "Create an algorithm or platform that optimizes international trade routes in real-time, taking into account various factors such as traffic conditions, weather, delivery windows, and vehicle capacity. This solution aims to reduce delivery times, fuel consumption, and operational costs.",
    },
    {
      title: "A Self-Learning AI-Powered PDF to Data Converter",
      imgLink: "/pdf_data.png",
      paragraph:
        "Create a cutting-edge, self-learning Smart PDF to Data Converter that leverages Generative AI rather than relying on conventional OCR libraries. This system should utilize machine learning (ML) algorithms to continuously learn from its conversions and extract insights, enhancing its ability to accurately interpret and convert various PDF documents, regardless of their complexity or format.",
    },
  ];

  return (
    <div
      id="domains"
      className="flex flex-col justify-center items-center w-full bg-black py-10 mb-16 px-3"
    >
      <h1 className="pb-6 text-3xl md:text-5xl text-white font-bold text-center z-[100]">
        PROBLEM STATEMENTS
      </h1>
      <div className="mt-8 md:mt-12 mx-4 sm:mx-6">
        <div className="flex gap-4 md:gap-8 flex-wrap justify-center max-w-5xl">
          {objects.map((item, index) => {
            return (
              <PScard
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

export default PS;
