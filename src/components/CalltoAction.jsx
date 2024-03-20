import LinkedIn from "../assets/icons/linkedin.png";
import Instagram from "../assets/icons/instagram.png";
import Facebook from "../assets/icons/facebook.png"
function CalltoAction() {
  return (
    <div className="text-white">
      <div class="mx-auto  sm:px-6 lg:px-8">
        <div class="relative isolate flex flex-wrap w-full justify-evenly items-center overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
          <div>
            <h2 class="font-nudge-extrabold mx-auto max-w-2xl text-3xl text-start font-bold uppercase tracking-wide sm:text-4xl">
              Know more about<br></br> Softlink global pvt. ltd.
            </h2>
            <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 text-justify">
            Softlink global Pvt. Ltd. is a leading provider of software solutions for the Freight Forwarding, Logistics and Supply Chain sector. With over 4,500 clients across 45+ countries, our flagship product, Logi-Sys offers a comprehensive cloud-based platform tailored to industry needs. Supported by a team of 300+ experts, we strive to innovate and empower the logistics industry globally.
            </p>
          </div>
          <div class="mt-12 flex items-center justify-center gap-x-6 flex-wrap">
            <div className="flex flex-col-reverse items-center justify-evenly h-full">
              <div className="flex justify-center    gap-x-6">
                <a href="https://www.linkedin.com/company/softlinkglobalpvt/" target="_blank">
                  <img
                    src={LinkedIn}
                    alt="linkedin"
                    className="size-8 sm:size-9"
                  />
                </a>
                <a href="https://www.instagram.com/softlink.global/" target="_blank">
                  <img
                    src={Instagram}
                    alt="instagram"
                    className="size-8 sm:size-9"
                  />
                </a>
                <a href="https://www.facebook.com/softlinkglobal/" target="_blank">
                  <img
                    src={Facebook}
                    alt="discord"
                    className="size-8 sm:size-9"
                  />
                </a>
              </div>
              <div className="m-8  " >
                <a
                  href="https://softlinkglobal.com/"
                  target="_blank"
                  class="text-md cursor-pointer relative inline-flex items-center gap-x-2 rounded-lg bg-cyan-500 px-6 py-4 font-semibold text-white shadow-sm hover:bg-[#00308F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Explore More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    class="-mr-0.5 h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-1/2 -z-10 h-[72rem] w-[72rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fill-opacity="0.7"
            ></circle>
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stop-color="#7CB9E8"></stop>
                <stop offset="1" stop-color="#7CB9E8"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CalltoAction;
