import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
`;

export const ImageWrapper = styled.div`
  transform: translateX(50px);
  width: calc(100% - 100px);
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
  height: 183px;
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

export const Information = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled.h2`
  cursor: default;
  margin-top: 20px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ContentText = styled.h3`
  cursor: default;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.15;
  margin-top: 6px;
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const LinkText = styled.span`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: #36f;
  display: inline-flex;
  align-items: center;

  img {
    margin-top: -1px;
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
  }
`;
