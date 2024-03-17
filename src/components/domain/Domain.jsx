import React from "react";
import Domaincards from "./Domaincards";

const Domains = () => {
  const objects = [
    {
      title: "Intelligent Warehouse Management System",
      imgLink:
        "https://media.licdn.com/dms/image/D5612AQEvu5qy_KOr9g/article-cover_image-shrink_720_1280/0/1692939591182?e=2147483647&v=beta&t=cdtEgXfevDUecCdY3TnoLjorxjoAk1NjrlMgtMi6xjc",
      paragraph:
        "Design an AI-driven system that optimizes warehouse space utilization, automates inventory management, and predicts stock levels based on historical data, future orders and current trends. The system should integrate and be compatible with devices for real-time tracking and provide actionable insights to reduce waste and improve operational efficiency.",
    },
    {
      title: "International Supply Chain Data Sharing using Blockchain",
      imgLink:
        "https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEludGVybmF0aW9uYWwlMjBTdXBwbHklMjBDaGFpbiUyMERhdGElMjBTaGFyaW5nJTIwdXNpbmclMjBCbG9ja2NoYWlufGVufDB8fDB8fHww",
      paragraph:
        "Create a blockchain-based platform that ensures end-to-end visibility and security in the international supply chain. This platform should allow all stakeholders, including suppliers, transporters, and customers, to access real-time, tamper-proof information about the product journey, from pickup to delivery, enhancing trust and compliance. Define Data Items that will be shared with various stakeholders. ",
    },
    {
      title: "Dynamic Route Optimization for International Trade",
      imgLink:
        "https://assets-global.website-files.com/5bcf95411e70df20404f914c/6187f37c073a2f081e8beb00_Dynamic%20Route%20Optimization-Blog-th.jpg",
      paragraph:
        "Create an algorithm or platform that optimizes international trade routes in real-time, taking into account various factors such as traffic conditions, weather, delivery windows, and vehicle capacity. This solution aims to reduce delivery times, fuel consumption, and operational costs.",
    },
    {
      title: "A Self-Learning AI-Powered PDF to Data Converter",
      imgLink:
        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      paragraph:
        "Create a cutting-edge, self-learning Smart PDF to Data Converter that leverages Generative AI rather than relying on conventional OCR libraries. This system should utilize machine learning (ML) algorithms to continuously learn from its conversions and extract insights, enhancing its ability to accurately interpret and convert various PDF documents, regardless of their complexity or format.",
    },
  ];

  return (
    <div id="domains" className="flex flex-col justify-center items-center w-full bg-black py-10 mb-16">
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
