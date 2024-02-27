"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

export function Gallery() {
    return <div className="w-screen h-auto overflow-x-hidden">
        <HeroParallax products={products} />;
    </div>
}
export const products = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed",
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },
    {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },

    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },

    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },
    {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },
    {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },
    {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },

    {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },
    {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },
    {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },
    {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
            "https://res-console.cloudinary.com/do8ji7uqc/media_explorer_thumbnails/acc301b6e081be0b2c8627f964aa836c/detailed"
    },
];
