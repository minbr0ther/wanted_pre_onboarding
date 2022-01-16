import React, { useEffect, useState } from 'react';
import { Wrapper, Slider, ImageWrapper } from './styles/ImageSliderElements';

const ImageSlider = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 4000,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = (slideIndex = currentSlide + 1) => {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // 현재 이미지의 인덱스가 전체 이미지 수 보다 크면 첫번째로 돌아간다
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
        >
          <Slider style={{ backgroundImage: `url(${image.url})` }}></Slider>
        </ImageWrapper>
      ))}
    </Wrapper>
  );
};

export default ImageSlider;
