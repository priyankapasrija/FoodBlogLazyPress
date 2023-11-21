import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, ZoomIn } from 'react-scroll-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from '@nextui-org/react';
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroBanner = ({ hero }) => {
  const [paused, setPaused] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handlePause = () => {
    setPaused((prevPaused) => !prevPaused);
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % hero.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + hero.length) % hero.length);
  };

  return (
    <ScrollContainer>
      <ScrollPage style={{height:'100vh',marginTop:'-8vh', border:'1px solid black' }}>
        <Animator animation={batch(Fade(), ZoomIn())}>
          <Carousel
            autoPlay={!paused}
            interval={8000}
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            selectedItem={currentSlide}
            style={{ height: '100vh', overflow: 'hidden'}}
          >
          {hero.map((item, index) => (
  <div key={index} className="relative h-100vh overflow-hidden">
    <img
      alt="carousel banner"
      src={item.imgUrl}
      draggable="false"
      className="object-cover h-[100vh]"
      style={{ width:'50vw', marginLeft:'50vw',borderLeft:'2px solid black' }}
    />
    <div className="absolute top-[10vh] transform -translate-x-1/2 translate-y-1/2 z-50 text-center text-white w-[60vw] flex flex-col justify-center items-center p-4 boxShadow" style={{border:'1px solid black',backgroundColor:'yellow', left:'35vw'
}}>
      <h1 className="font-bold text-black" style={{ fontFamily: 'Pilated',fontSize:'5rem' }}>
        {item.title}
      </h1>
      <p className='text-black' style={{ fontFamily: 'Pilated',fontSize:'2rem' }}>item.text(this needs to be added to db)</p>
      <Button
        onClick={() => console.log('CTA Clicked')}
        className=" text-black buttonShadow"
        style={{backgroundColor:'#d7b1bc',borderRadius:'0px',border:'1px solid black'}}
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
          variant="light"
          size="sm"
          className="mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
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
          {paused ? <FaPlay /> : <FaPause />}
        </Button>
        <Button
          isIconOnly
          onClick={handleNext}
          variant="light"
          size="sm"
          className="ml-2 mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
        >
          <FaChevronRight />
        </Button>
      </div>
    </ScrollContainer>
  );
};

export default HeroBanner;
