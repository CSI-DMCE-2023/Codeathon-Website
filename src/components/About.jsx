import React from "react";

const About = () => {
  return (
    <section >
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About LogiTHON</h2>
            <p class="mb-4">Datta Meghe College of Engineering, in collaboration with Softlink Global Pvt Ltd, hosts LogiTHON, a pioneering 24-hour hackathon merging technology with logistics. Participants from all backgrounds converge to devise innovative solutions for logistics challenges. With a focus on efficiency, sustainability, and social impact, LogiTHON offers workshops, mentorship, and hands-on problem-solving sessions. It reshapes the future of logistics through supply chain optimization and last-mile delivery revolution, fostering an ecosystem where ideas flourish and partnerships thrive.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
    </div>
</section>
  );
};

export default About;
