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
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709319991/IMG_5893_gkt73y.jpg",
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709320118/IMG_20230217_134020_zmpwu9.jpg"
    },
    {
        
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709319612/IMG_5914_yson4f.jpg"
    },

    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709319146/IMG_6051_tlo0jw.jpg"
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709319254/IMG_5896_wpmw9i.jpg"
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709320359/IMG_5928_nlrjtf.jpg"
    },
    {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709320366/IMG_6041_ixo85s.jpg"
    },
    {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
            "https://res.cloudinary.com/deshcj4pb/image/upload/v1709320360/IMG_6032_jwfouj.jpg"
    },
    {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
            "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
];
