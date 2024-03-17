import React, { useState } from "react";

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:px-8">
      <button className="flex items-center" onClick={() => setActive(!active)}>
        <svg
          className={`duration-200 ease-in-out size-3 sm:size-5 ${
            active ? "rotate-180" : ""
          }`}
          width="17"
          height="10"
          viewBox="0 0 17 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
            fill=""
            stroke=""
          />
        </svg>
        <h4 className="ms-4 sm:ms-5 text-sm sm:text-lg font-semibold text-dark">
          {header}
        </h4>
      </button>
      <div
        className={`ps-[30px] sm:ps-[43px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="mt-3 text-xs sm:text-base">{text}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faqs" className="bg-black px-2 py-10 sm:py-12 relative z-20 overflow-hidden">
      <div className="container mx-auto flex-col">
        <div className="text-center text-white">
          <div className="font-bold text-2xl sm:text-3xl">FAQ</div>
          <h2 className="mt-2 sm:mt-5 text-3xl sm:text-4xl font-bold">
            Any Questions? Look Here
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 w-full mt-10 sm:mt-16 max-w-md md:max-w-6xl">
          <div className="flex flex-col gap-6">
            <AccordionItem
              header="What is a LogiTHON?"
              text="A hackathon is a 24-hour event, where 'hackers' will collaborate on developing a functional prototype of hardware or software for the duration of the hackathon."
            />
            <AccordionItem
              header="Will there be swag and prizes?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="You bet! Participants and winners will receive swags, certificates, merchandise, goodies and more!"
            />
          </div>
          <div className="flex flex-col gap-6">
            <AccordionItem
              header="I am a first time hacker, what should I do?"
              text="No worries! We love to welcome first-time hackers who are starting their hacking journey. We have awesome workshops and events planned which will help you get a head start in the hackathon ."
            />
            <AccordionItem
              header="How do I register for the LogiTHON?"
              text="Follow the link at the top of the page. If you have any questions please reach out to us, or give us a ping in the discord!."
            />
            <AccordionItem
              header="Can I participate as an individual?"
              text="LogiTHON foster teamwork and collaboration! We encourage you to participate as a team of 2-4 hackers."
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FAQ;
