import { Image, Button } from "@nextui-org/react";
import { useState } from "react";
//import { FaPlay, FaPause } from 'react-icons/fa';
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
                className      = "pt-6 pb-0 px-0 hover:cursor-pointer"
            >

                <div className="px-2 rounded-3xl h-full my-0 select-none	">
                    <Image
                        removeWrapper
                        alt       = "carousel banner"
                        src       = "https://cdn.discordapp.com/attachments/199274450011553792/1162324634826440744/slide0.png"
                        draggable = "false"
												className = "mx-auto"
                    />
                </div>
                <div className="px-2 rounded-3xl h-full my-0 select-none	">
                    <Image
                        removeWrapper
                        alt       = "carousel banner"
                        src       = "https://cdn.discordapp.com/attachments/199274450011553792/1162324635203936277/slide1.png"
                        draggable = "false"
												className = "mx-auto"
                    />
                </div>
                <div className="px-2 rounded-3xl h-full my-0 select-none">
                    <Image
                        removeWrapper
                        alt       = "carousel banner"
                        src       = "https://cdn.discordapp.com/attachments/199274450011553792/1162324635719827456/slide2.png"
                        draggable = "false"
												className = "mx-auto"
                    />
                </div>
                <div className="px-2 rounded-3xl h-full my-0 select-none	">
                    <Image
                        removeWrapper
                        alt       = "carousel banner"
                        src       = "https://cdn.discordapp.com/attachments/199274450011553792/1162324636705497199/slide3.png"
                        draggable = "false"
												className = "mx-auto"
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
                 {/*}   {paused ? <FaPlay /> : <FaPause />}*/}
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

