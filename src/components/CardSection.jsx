import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import RecipeCard from './RecipeCard';

export default function CardSection({ blogPages }) {
  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(blogPages.length / cardsPerSlide);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="max-h-50vh">
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div key={slideIndex} className="flex overflow-hidden relative" style={{height:'50vh'}}>
            {blogPages.slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide).map((card) => (
              <RecipeCard key={card._id} title={card.title} text={card.text} imgUrl={card.imgUrl} id={card._id} button={card.button} />
            ))}
          </div>
        ))}
      </Carousel>
      <div className="flex w-full justify-center">
        <button onClick={handlePrev} className="mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base">
          <FaChevronLeft />
        </button>
        <button onClick={handleNext} className="ml-2 mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
