import {Animator,ScrollContainer,ScrollPage,batch,Fade} from "react-scroll-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "@nextui-org/react";
import { useFoodBlog } from "../lib/swr";

const HeroBanner = () => {
    const { isLoading,foodBlog } = useFoodBlog();
    // !isLoading && console.log(foodBlog.pages.home.hero);
    

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
                <Animator animation={batch(Fade())}>
                    <Carousel
                        autoPlay={true}
                        interval={8000}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop
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
        </ScrollContainer>
    );
};

export default HeroBanner;
