import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


function Slider() {
  const slides = [
    {
      title: 'Slide 1',
      description: 'Description 1',
      imageUrl: 'https://th.bing.com/th/id/R.364831d897c50953bd815935e3b758e9?rik=bYipyEFuid%2bu%2fQ&pid=ImgRaw&r=0'
    },
    {
      title: 'Slide 2',
      description: 'Description 2',
      imageUrl: 'https://www.hdwallpapers.in/download/sunset_sky_clouds_field_trees_horizon_4k_hd-HD.jpg'
    },
    {
      title: 'Slide 3',
      description: 'Description 3',
      imageUrl: 'https://images.hdqwalls.com/wallpapers/waterfall-rocks-4k-ch.jpg'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [lengthSlide, setLengthSlide] = useState(slides.length);

  const nextSlide = () => {
    if (currentSlide === lengthSlide - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const leftSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(lengthSlide - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  return (
    <div className="relative rounded overflow-hidden">
      <div className="w-full h-32 lg:h-96 bg-red-300 flex relative">
        <img src={slides[currentSlide].imageUrl} alt={slides[currentSlide].title} className="relative w-full object-cover" />
      </div>
      <div className="flex justify-between absolute w-full h-full top-0 bg-black/50">
        <button onClick={leftSlide} className="text-white text-4xl p-2 rounded-full">
          <BsChevronLeft />
        </button>
        <div className="w-full h-full text-white ">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
        </div>
        <button onClick={nextSlide} className="text-white text-4xl p-2 rounded-full">
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Slider;
