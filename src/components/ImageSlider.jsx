import React from 'react';
import { Wrapper, Slider, ImageWrapper } from './styles/ImageSliderElements';

const ImageSlider = ({ images = [], ...props }) => {
  return (
    <Wrapper {...props}>
      {images.map((image, index) => (
        <ImageWrapper key={index}>
          <Slider style={{ backgroundImage: `url(${image.url})` }}></Slider>
        </ImageWrapper>
      ))}
    </Wrapper>
  );
};

export default ImageSlider;
