import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaPlay, FaPause } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

export default function HeroBanner({ hero }) {
  const [paused, setPaused] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);

  const handlePause = () => {
    if (!paused) {
      sliderRef?.slickPause();
      setPaused(true);
    } else {
      sliderRef?.slickPlay();
      setPaused(false);
    }
  };

  return (
    <>
      <Slider
        ref={setSliderRef}
        autoplay={true}
        autoplaySpeed={8000}
        arrows={false}
        waitForAnimate={false}
        speed={3000}
        className="pb-0 px-0 hover:cursor-pointer"
        style={{ maxWidth: '100vw', important: true }}
      >
        {hero &&  hero.map((item, index) => (
          <div key={index} className="max-h-50vhoverflow-hidden relative">
           <img
              alt="carousel banner"
              src={item.imgUrl}
              draggable="false"
              className="object-cover"
              style={{height:'50vh',width:'100vw'}}
              
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50">
              <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat' }}>{item.title}</h1>
              <Button
                onClick={() => console.log("CTA Clicked")}
                color="primary"
                size="lg"
                className="mt-4"
              >
                {item.button}
              </Button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full justify-center">
        <Button
          isIconOnly
          onClick={sliderRef?.slickPrev}
          variant="light"
          size="sm"
          className="mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
        >
          <FaChevronLeft />
        </Button>
        <Button
          isIconOnly
          onPress={handlePause}
          variant="light"
          size="sm"
          className="ml-4 md:ml-2 mr-2 md:mr-0 mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
        >
          {paused ? <FaPlay /> : <FaPause />}
        </Button>
        <Button
          isIconOnly
          onClick={sliderRef?.slickNext}
          variant="light"
          size="sm"
          className="ml-2 mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
        >
          <FaChevronRight />
        </Button>
      </div>
    </>
  );
}
