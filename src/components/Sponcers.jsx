import mtpo from "../assets/matpo.png";
import sponcer2 from "../assets/sponcer2.jpeg";
import sponcer3 from "../assets/sponcer3.webp";

const data = [
  {
    name: "Ploi",
    link: "https://ploi.io",
    img: "https://meghaengg.ac.in/wp-content/uploads/2022/01/Iste.png",
  },
  {
    name: "Agiledrop",
    link: "https://www.agiledrop.com/laravel?utm_source=filament",
    img: mtpo,
  },
  {
    name: "Codecourse",
    link: "https://codecourse.com",
    img: sponcer2,
  }
];
function Sponcers() {
  return (
    <div class="max-w-7xl mx-auto py-12 px-4 text-white">
      <p class="w-full uppercase text-2xl md:text-4xl  font-semibold text-center">
        Associate Partner
      </p>
      <div className="flex justify-center w-full items-center mt-12 gap-x-8 md:gap-x16">
        {data.map((item) => (
          <a
            href={item.link}
            target="_blank"
            title={item.name}
          >
            <img
              className="size-28 sm:size-36 object-contain rounded-lg"

              src={item.img}
              alt="image"
            />
          </a>
        ))}
      </div>


    </div>
  );
}

export default Sponcers;
