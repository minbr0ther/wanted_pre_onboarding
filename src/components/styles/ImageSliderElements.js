import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;

  .left {
    left: calc((100% - 1210px) / 2);
  }

  .right {
    right: calc((100% - 1200px) / 2);
  }
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

  @media (min-width: 1200px) {
    transform: ${() => `translateX(${(window.innerWidth - 1060) / 2}px)`};
    width: 1060px;
    margin: 20px 11px;
    margin-left: ${(props) =>
      props.currentIndex === 0 ? `-${props.currentSlide * 1082}px` : undefined};
  }
`;

export const Slider = styled.div`
  width: 100%;
  height: 183px;
  background-position: center;
  background-size: cover;
  border-radius: 3px;

  @media (min-width: 1200px) {
    height: 300px;
  }
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

  hr {
    display: none;
  }

  @media (min-width: 1200px) {
    position: absolute;
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    transition: 300ms all ease-in-out;
    bottom: 28px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    text-align: left;
    left: 34px;

    hr {
      display: block;
      background-color: #ececec;
      opacity: 30%;
      margin: 0;
    }
  }
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

  @media (min-width: 1200px) {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    line-height: 1.5;
  }
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
  z-index: 10;

  @media (min-width: 1200px) {
    margin: 0 20px;
    height: 44px;
    font-size: 14px;
    line-height: 1.64;
    color: #333;
  }
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

  @media (min-width: 1200px) {
    margin: 15px 0 0 20px;
  }
`;

export const NextButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 205px;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  border: 0px;
`;
