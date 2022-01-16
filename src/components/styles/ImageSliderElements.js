import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
`;

export const ImageWrapper = styled.div`
  transform: translateX(12%);
  width: calc(100vh - 100px);
  height: 183px;
  margin: 20px 10px;
  flex-shrink: 0;
  position: relative;
  transition: ${(props) => (props.isClone ? '' : '500ms all ease-in-out')};
  margin-left: ${(props) =>
    props.currentIndex === 0 ? `-${props.currentSlide * 91}%` : undefined};
`;

export const Slider = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  border-radius: 3px;
`;
