import mtpo from "../assets/pathners/matpo.png";
import sponcer2 from "../assets/pathners/sponcer2.jpeg";
// import sponcer3 from "../assets/pathners/sponcer3.webp";
import job4u from "../assets/pathners/job4u.png";
import globalOutlook from "../assets/pathners/global-outlook.jpeg";

const data = [
  {
    name: "iste",
    link: "http://www.isteonline.in/",
    img: "https://meghaengg.ac.in/wp-content/uploads/2022/01/Iste.png",
  },
  {
    name: "matpo",
    link: "https://matpo.in/",
    img: mtpo,
  },
  {
    name: "ftpo",
    link: "https://ftpoindia.org.in/",
    img: sponcer2,
  },
  {
    name: "job4u",
    link: "https://www.instagram.com/job4u_info/",
    img: job4u,
  },
  {
    name: "Global Outlook",
    link: "https://global-outlook.in/index.html",
    img: globalOutlook,
  },
];

const poweredby = [
  {
    name: "Unstop",
    link: "https://unstop.com/",
    img: "https://play-lh.googleusercontent.com/Sn4FCvXPL21HgxKO_-Oj0_ldYA8YH2muN6enGKpBylzvYpCa_cZTqbU6VEXYRtFGwg",
  },
];
function Sponcers() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-12 px-4 text-white">
        <p className="w-full uppercase text-2xl md:text-4xl  font-semibold text-center">
          Associate Partners
        </p>
        <div className="flex flex-wrap justify-center w-full items-center mt-12 gap-8 md:gap-16">
          {data.map((item, index) => (
            <a key={index} href={item.link} target="_blank" title={item.name}>
              <img
                className="size-28 sm:size-36 object-contain rounded-lg"
                src={item.img}
                alt="image"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 text-white">
        <p className="w-full uppercase text-2xl md:text-4xl  font-semibold text-center">
          Powered By
        </p>
        <div className="flex justify-center w-full items-center mt-12 gap-x-8 md:gap-x16">
          {poweredby.map((item, index) => (
            <a key={index} href={item.link} target="_blank" title={item.name}>
              <img
                className="size-28 sm:size-36 object-contain rounded-lg"
                src={item.img}
                alt="image"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sponcers;
