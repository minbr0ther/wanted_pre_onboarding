import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
`;

export const ImageWrapper = styled.div`
  transform: translateX(50px);
  width: calc(100% - 100px);
  height: 183px;
  margin: 20px 10px;
  flex-shrink: 0;
  position: relative;
  transition: ${(props) => (props.isClone ? '' : '500ms all ease-in-out')};
  margin-left: ${(props) =>
    props.currentIndex === 0
      ? `-${props.currentSlide * (window.innerWidth - 80)}px`
      : undefined};
`;

export const Slider = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  border-radius: 3px;
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.isActive ? '' : 'rgba(0, 0, 0, 0.3)')};
  border-radius: 7px;
`;
