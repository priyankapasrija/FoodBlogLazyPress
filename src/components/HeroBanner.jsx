import { useState } from "react";
import {Animator,ScrollContainer,ScrollPage,batch,Fade,ZoomOut} from "react-scroll-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "@nextui-org/react";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useFoodBlog } from "../lib/swr";

const HeroBanner = ({ hero }) => {
    const { isLoading,foodBlog } = useFoodBlog();
    // !isLoading && console.log(foodBlog.pages.home.hero);

    const [paused, setPaused] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePause = () => {
        setPaused((prevPaused) => !prevPaused);
    };

    const handleNext = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide + 1) % foodBlog.pages.home.hero.length
        );
    };

    const handlePrev = () => {
        setCurrentSlide(
            (prevSlide) =>
                (prevSlide - 1 + hero.length) % foodBlog.pages.home.hero.length
        );
    };

   if (isLoading) return <div>Loading</div>
    return (
        <ScrollContainer>
            <ScrollPage
                style={{
                    height: "100vh",
                    marginTop: "-8vh",
                    border: "1px solid black",
                }}
            >
                <Animator animation={batch(Fade(), ZoomOut())}>
                    <Carousel
                        autoPlay={!paused}
                        interval={8000}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop
                        selectedItem={currentSlide}
                        style={{ height: "100vh", overflow: "hidden" }}
                    >
                        {foodBlog.pages.home.hero.map((item, index) => (
                            <div
                                key={index}
                                className="relative h-[100vh] overflow-hidden"
                            >
                                <img
                                    alt="carousel banner"
                                    src={item.imgUrl}
                                    draggable="false"
                                    className="object-cover h-[100vh]"
                                    style={{
                                        width: "50vw",
                                        marginLeft: "50vw",
                                        borderLeft: "2px solid #333131",
                                    }}
                                />
                                <div
                                    className="absolute top-[10vh] transform -translate-x-1/2 translate-y-1/2 z-50 text-center text-white w-[60vw] flex flex-col justify-center items-center p-4 boxShadow"
                                    style={{
                                        border: "1px solid #333131",
                                        backgroundColor: "#F2D1D1",
                                        left: "35vw",
                                    }}
                                >
                                    <h1
                                        className="font-bold text-black"
                                        style={{
                                            fontFamily: "Pilated",
                                            fontSize: "5rem",
                                        }}
                                    >
                                        {item.title}
                                    </h1>
                                    <p
                                        className="text-black"
                                        style={{
                                            fontFamily: "Pilated",
                                            fontSize: "2rem",
                                        }}
                                    >
                                        {item.text}
                                    </p>
                                    <Button
                                        onClick={() =>
                                            console.log("CTA Clicked")
                                        }
                                        className=" text-black buttonShadow"
                                        style={{
                                            backgroundColor: "#DAEAF1",
                                            borderRadius: "0px",
                                            border: "1px solid #333131",
                                        }}
                                    >
                                        {item.button}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </Animator>
            </ScrollPage>
            <div className="flex w-full justify-center">
                <Button
                    isIconOnly
                    onClick={handlePrev}
                    variant="dark"
                    size="sm"
                    className="mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
                    style={{border:'1px solid #333131'}}
                >
                    <FaChevronLeft />
                </Button>
                <Button
                    isIconOnly
                    onClick={handlePause}
                    variant="light"
                    size="sm"
                    className="ml-4 md:ml-2 mr-2 md:mr-0 mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
                    
                >
                    {paused ? <FaPlay style={{border:'1px solid #333131'}} /> : <FaPause style={{border:'1px solid #333131'}} />}
                </Button>
                <Button
                    isIconOnly
                    onClick={handleNext}
                    variant="light"
                    size="sm"
                    className="ml-2 mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
                    style={{border:'1px solid #333131'}}
                >
                    <FaChevronRight />
                </Button>
            </div>
        </ScrollContainer>
    );
};

export default HeroBanner;
