import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

export function Gallery() {
    return (
        <div id="gallery" className="w-full h-auto overflow-x-hidden">
            <HeroParallax products={products} />;
        </div>
    )
}
export const products = [
    {
        title: "Code-A-Thon",
        link: "https://gomoonbeam.com",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709319991/IMG_5893_gkt73y.jpg",
    },
    {
        title: "Code-A-Thon",
        link: "https://cursor.so",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709320118/IMG_20230217_134020_zmpwu9.jpg"
    },
    {
        title: "Code-A-Thon",
        link: "https://cursor.so",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709319612/IMG_5914_yson4f.jpg"
    },

    {
        title: "Code-A-Thon",
        link: "https://editorially.org",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709319146/IMG_6051_tlo0jw.jpg"
    },
    {
        title: "Code-A-Thon",
        link: "https://editrix.ai",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709319254/IMG_5896_wpmw9i.jpg"
    },
    {
        title: "Code-A-Thon",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        title: "Code-A-Thon",
        link: "https://algochurn.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Code-A-Thon",
        link: "https://ui.aceternity.com",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709320359/IMG_5928_nlrjtf.jpg"
    },
    {
        title: "Code-A-Thon",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709320366/IMG_6041_ixo85s.jpg"
    },
    {
        title: "Code-A-Thon",
        link: "https://smartbridgetech.com",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709320360/IMG_6032_jwfouj.jpg"
    },
    {
        title: "Code-A-Thon",
        link: "https://renderwork.studio",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        title: "Code-A-Thon",
        link: "https://cremedigital.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Code-A-Thon",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Code-A-Thon",
        link: "https://invoker.lol",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Code-A-Thon",
        link: "https://efreeinvoice.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
];
