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
                        showIndicators={true}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop
                        style={{ height: "100vh", overflow: "hidden"}}
                        showArrows={true}                     
                    >
                        {foodBlog.pages.home.hero.map((item, index) => (
                            <div
                                key={index}
                                className="relative h-[100vh] w-[]overflow-x-hidden bg-[#717ff7]"
                            >
                                <img
                                    alt="carousel banner"
                                    src={item.imgUrl}
                                    draggable="false"
                                    className="object-cover h-[100vh] boxShadow"
                                    style={{
                                        width: "40vw",
                                        height:'50vh',
                                        marginLeft: "45vw",
                                        marginTop:'25vh',
                                        border: "1px solid black",
                                    }}
                                />
                                <div
                                    className="absolute  z-50 text-center text-white w-[60vw] flex flex-col justify-center items-center uppercase"
                                    style={{
                                    }}
                                >
                                    <h1
                                        className="text-black mb-2"
                                        style={{
                                            fontFamily: "Baryton",
                                            fontSize: "7rem",
                                            lineHeight:1,
                                            marginTop:'-55vh',
                                            maxWidth:'50vw'
                                            
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
                                        className=" text-black buttonShadow uppercase"
                                        style={{
                                            fontFamily:'Montserrat',
                                            backgroundColor: "#f0ff00",
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
