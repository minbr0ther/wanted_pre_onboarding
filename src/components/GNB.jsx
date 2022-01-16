import React from 'react';
import {
  Navigation,
  NavTop,
  NavBottom,
  MainMenu,
  NavLink,
  AsideMenu,
} from './styles/NavbarElements';
import search from '../images/svgs/search.svg';
import noti from '../images/svgs/noti.svg';
import menu from '../images/svgs/menu.svg';

const NavigationBar = () => {
  return (
    <>
      <Navigation>
        <NavTop>
          <img
            className="menu"
            src="https://static.wanted.co.kr/images/icon-menu.png"
            alt="hamburger-menu"
          />
          <img
            className="logo"
            src="https://www.wantedlab.com/img/logo.png"
            alt="logo"
          />
        </NavTop>
        <NavBottom>
          <MainMenu>
            <NavLink id={0} style={{ borderBottom: '2px solid #258bf7' }}>
              홈
            </NavLink>
            <NavLink id={1}>채용</NavLink>
            <NavLink id={2}>이벤트</NavLink>
            <NavLink id={3}>직군별 연봉</NavLink>
            <NavLink id={4}>이력서</NavLink>
            <NavLink id={5}>커뮤니티</NavLink>
            <NavLink id={6}>프리랜서</NavLink>
            <NavLink id={7}>AI 합격예측</NavLink>
          </MainMenu>
          <AsideMenu>
            <ul>
              <li>
                <button>
                  <img className="icon" src={search} alt="search-icon" />
                </button>
              </li>
              <li>
                <button>
                  <img className="icon" src={noti} alt="noti-icon" />
                </button>
              </li>
              <li>
                <button>
                  <img className="icon" src={menu} alt="menu-icon" />
                </button>
              </li>
            </ul>
          </AsideMenu>
        </NavBottom>
      </Navigation>
    </>
  );
};

export default NavigationBar;
