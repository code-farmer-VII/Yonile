"use client";
import { useState } from "react";
import "../Home/swipClients.css"
import img1 from "../../assets/Image/Clients/image-66.png"
import img2 from "../../assets/Image/Clients/image-67.png"
import img3 from "../../assets/Image/Clients/image-68.png"
import img4 from "../../assets/Image/Clients/image-69.png"
import img5 from "../../assets/Image/Clients/image-70.png"
import img6 from "../../assets/Image/Clients/image-71.png"
import img7 from "../../assets/Image/Clients/image-72.png"


const sliderData = [
    { image: img7, title: "CSA" },
    { image: img6, title: "CISP" },
    { image: img5, title: "Child Fund" },
    { image: img4, title: "CDC" },
    { image: img3, title: "Applco" },
    { image: img2, title: "Addis Chamber" },
    { image: img1, title: "Action Against Hunger" },
  ];
  

const InverseSmoothSlider = () => {
        const [isPaused, setIsPaused] = useState(false);

        const handleMouseEnter = () => {
            setIsPaused(true);
        };

        const handleMouseLeave = () => {
            setIsPaused(false);
        };

        return (
            <>
                <div
                    className="slider-container-card"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        className={`slider-card ${isPaused ? "paused" : ""}`}
                    >
                        {sliderData.map((item, index) => (
                            <div className="slide" key={index}>
                                <a href={`/ProjectPortfolio/${index + 1}`}>
                                    <img src={item.image} alt={item.title} width={400} height={250} />
                                </a>
                            </div>
                        ))}
                        {sliderData.map((item, index) => (
                            <div className="slide-card" key={`duplicate-${index}`} >
                                <a href={`/ProjectPortfolio/${index + 1}`}>
                                    <img src={item.image} alt={item.title} width={400} height={250} />
                                </a>

                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    };

export default InverseSmoothSlider;