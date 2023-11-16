import { Image, Button } from "@nextui-org/react";
import { useState } from "react";
import { FaPlay, FaPause } from 'react-icons/fa';
import {FaChevronLeft,FaChevronRight} from "react-icons/fa";
import Slider from "react-slick";

export default function HeroBanner() {
    const [paused, setPaused]       = useState(false);
    const [sliderRef, setSliderRef] = useState(null);
    const handlePause = () => {
        if (!paused) {
            sliderRef?.slickPause();
            setPaused(true);
        }
        if (paused) {
            sliderRef?.slickPlay();
            setPaused(false);
        }
    };

    return (
        <>
            <Slider
                ref            = {setSliderRef}
                autoplay       = {true}
                autoplaySpeed  = {8000}
                arrows         = {false}
                // fade
                waitForAnimate = {false}
                centerMode
                speed          = {3000}
                className      = "pb-0 px-0 hover:cursor-pointer"
            >

                <div className="max-h-50vh overflow-hidden"> 
                    <Image
                        removeWrapper
                        alt       = "carousel banner"
                        src       = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        draggable = "false"
						className="w-[100%] h-[50vh] object-cover"
                        style={{}}
                    />
                </div>
                
                
            </Slider>
            <div className="flex w-full justify-center">
                <Button
									isIconOnly
									onClick   = {sliderRef?.slickPrev}
									variant   = "light"
									size      = "sm"
									className = "mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
                >
                    <FaChevronLeft />
                </Button>
                <Button
                  isIconOnly
                  onPress   = {handlePause}
                  variant   = "light"
                  size      = "sm"
                  className = "ml-4 md:ml-2 mr-2 md:mr-0 mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
                >
                    {paused ? <FaPlay /> : <FaPause />}
                </Button>
                <Button
									isIconOnly
                  onClick   = {sliderRef?.slickNext}
                  variant   = "light"
                  size      = "sm"
                  className = "ml-2 mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
                >
                    <FaChevronRight />
                </Button>
            </div>
        </>
    );
}

