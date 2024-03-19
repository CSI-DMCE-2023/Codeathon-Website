import React from "react";
import logithon from "../assets/LOGITHON.png"
const About = () => {
  return (
    <section >
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light sm:text-lg text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">About LogiTHON</h2>
            <p class="mb-4">Datta Meghe College of Engineering, in collaboration with Softlink Global Pvt Ltd, hosts LogiTHON, a pioneering 24-hour hackathon merging technology with logistics. Participants from all backgrounds converge to devise innovative solutions for logistics challenges. With a focus on efficiency, sustainability, and social impact and mentorship. It reshapes the future of logistics through supply chain optimization and last-mile delivery revolution, fostering an ecosystem where ideas flourish and partnerships thrive.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src={logithon} alt="office content 1" />
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://plus.unsplash.com/premium_photo-1690303193793-498c692e9b5c?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="office content 2" />
        </div>
    </div>
</section>
  );
};

export default About;
