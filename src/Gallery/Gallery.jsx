import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import post1 from  "../assets/insta1.jpg"
import post2 from  "../assets/insta2.jpg"
import post3 from  "../assets/insta3.jpg"
import post4 from  "../assets/insta4.jpg"

export function Gallery() {
    return (
        <div id="gallery" className="w-full h-auto overflow-x-hidden text-white">
            <HeroParallax products={products} />;
        </div>
    )
}
export const products = [
    {
        title: "Softlink logiTHON",
        link: "https://gomoonbeam.com",
        thumbnail:
            post1,
    },
    {
        title: "Softlink logiTHON",
        link: "https://cursor.so",
        thumbnail:
            post2
    },
    {
        title: "Softlink logiTHON",
        link: "https://cursor.so",
        thumbnail:
            post3
    },

    {
        title: "Softlink logiTHON",
        link: "https://editorially.org",
        thumbnail:
            post4
    },
    {
        title: "Softlink logiTHON",
        link: "https://editrix.ai",
        thumbnail:
            post1
    },
    {
        title: "Softlink logiTHON",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            post4
    },

    {
        title: "Softlink logiTHON",
        link: "https://algochurn.com",
        thumbnail:
            post2
    },
    {
        title: "Softlink logiTHON",
        link: "https://ui.aceternity.com",
        thumbnail:
            post3
    },
    {
        title: "Softlink logiTHON",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            post4
    },
    {
        title: "Softlink logiTHON",
        link: "https://smartbridgetech.com",
        thumbnail:
            post1
    },
    {
        title: "Softlink logiTHON",
        link: "https://renderwork.studio",
        thumbnail:
           post2
    },

    // {
    //     title: "Softlink logiTHON",
    //     link: "https://cremedigital.com",
    //     thumbnail:
    //         post3
    // },
];
