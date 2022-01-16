import React, { useEffect, useState } from 'react';
import { Wrapper, Slider, ImageWrapper } from './styles/ImageSliderElements';

const ImageSlider = ({ images = [], autoPlayTime = 4000, ...props }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isClone, setIsClone] = useState(false);

  const nextSlide = (slideIndex = currentSlide + 1) => {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  };

  const onTransitionEnd = () => {
    if (currentSlide === images.length - 1) {
      setIsClone(true);
      setCurrentSlide(1);
      setTimeout(() => setIsClone(false), 100);
    }
    if (currentSlide === 0) {
      setIsClone(true);
      setCurrentSlide(images.length - 2);
      setTimeout(() => setIsClone(false), 100);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide, autoPlayTime]);

  return (
    <Wrapper {...props}>
      {images.map((image, index) => (
        <ImageWrapper
          key={index}
          currentIndex={index}
          currentSlide={currentSlide}
          isClone={isClone}
          onTransitionEnd={onTransitionEnd}
        >
          <Slider style={{ backgroundImage: `url(${image.url})` }}></Slider>
        </ImageWrapper>
      ))}
    </Wrapper>
  );
};

export default ImageSlider;
