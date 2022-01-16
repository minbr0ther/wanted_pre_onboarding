import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  Slider,
  ImageWrapper,
  Gradient,
  Information,
  TitleText,
  ContentText,
  LinkText,
  NextButton,
} from './styles/ImageSliderElements';
import blueChevron from '../images/svgs/chevron.svg';
import leftChevron from '../images/svgs/leftChevron.svg';
import rightChevron from '../images/svgs/rightChevron.svg';

const ImageSlider = ({ images = [], autoPlayTime = 4000, ...props }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isClone, setIsClone] = useState(false);
  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  const [mouseUpClientX, setMouseUpClientX] = useState(0);
  const [draggingOn, setDraggingOn] = useState(false);
  const [isDuringAnimation, setIsDuringAnimation] = useState(false);

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

  const onMouseDown = (e) => {
    setMouseDownClientX(e.pageX);
    setDraggingOn(true);
  };

  const onMouseUp = (e) => {
    setMouseUpClientX(e.pageX);
    setDraggingOn(false);
  };

  const onTouchStart = (e) => {
    setMouseDownClientX(e.changedTouches[0].pageX);
    setDraggingOn(true);
  };

  const onTouchEnd = (e) => {
    setMouseUpClientX(e.changedTouches[0].pageX);
    setDraggingOn(false);
  };

  const changeSlide = (number) => {
    if (isDuringAnimation) return;
    setIsDuringAnimation(true);
    setCurrentSlide(number);
    setTimeout(() => setIsDuringAnimation(false), 600);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide, autoPlayTime]);

  useEffect(() => {
    const dragSpace = Math.abs(mouseDownClientX - mouseUpClientX);

    if (mouseDownClientX !== 0) {
      if (mouseUpClientX < mouseDownClientX && dragSpace > 30) {
        setCurrentSlide(currentSlide + 1);
      }
      if (mouseUpClientX > mouseDownClientX && dragSpace > 30) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  }, [mouseUpClientX]);

  // handleResize 함수를 debounce로 감싸고, 시간을 설정한다
  // 1000ms = 1sec
  function debounce(callback, limit = 100) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback.apply(this, args);
      }, limit);
    };
  }

  const handleResize = debounce(() => nextSlide(), 100);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper {...props}>
      {images.map((image, index) => (
        <ImageWrapper
          key={index}
          currentIndex={index}
          currentSlide={currentSlide}
          isClone={isClone}
          onTransitionEnd={onTransitionEnd}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          draggingOn={draggingOn}
        >
          <Slider style={{ backgroundImage: `url(${image.url})` }}>
            <Gradient isActive={currentSlide === index} />
          </Slider>
          <Information isActive={currentSlide === index}>
            <TitleText>{image.title}</TitleText>
            <ContentText>{image.content}</ContentText>
            <hr />
            <LinkText>
              {'바로가기 '} <img src={blueChevron} alt="blueChevron" />
            </LinkText>
          </Information>
        </ImageWrapper>
      ))}
      <NextButton
        className="left"
        onClick={() => changeSlide(currentSlide - 1)}
      >
        <img src={leftChevron} alt="left-chevron" />
      </NextButton>
      <NextButton
        className="right"
        onClick={() => changeSlide(currentSlide + 1)}
      >
        <img src={rightChevron} alt="right-chevron" />
      </NextButton>
    </Wrapper>
  );
};

export default ImageSlider;
