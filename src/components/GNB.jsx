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
import newIcon from '../images/svgs/new.svg';
import beta from '../images/svgs/beta.svg';
import menu from '../images/svgs/menu.svg';

const NavigationBar = () => {
  return (
    // <div style={{ padding: '8px' }}>
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
      <MainMenu>
        <NavLink id={0} style={{ borderBottom: '2px solid #258bf7' }}>
          홈
        </NavLink>
        <NavLink id={1}>채용</NavLink>
        <NavLink id={2}>이벤트</NavLink>
        <NavLink id={3}>직군별 연봉</NavLink>
        <NavLink id={4}>이력서</NavLink>
        <NavLink id={5}>
          커뮤니티
          <em>
            <img src={newIcon} alt="new-icon" />
          </em>
        </NavLink>
        <NavLink id={6}>프리랜서</NavLink>
        <NavLink id={7}>
          AI 합격예측
          <em>
            <img src={beta} alt="beta-icon" />
          </em>
        </NavLink>
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
              <span></span>
            </button>
          </li>
          <li>
            <button>
              <img className="icon" src={menu} alt="menu-icon" />
            </button>
          </li>
          <li>
            <button>
              <div
                style={{
                  backgroundImage:
                    'url(https://lh3.googleusercontent.com/a-/AOh14Gh_gmu4xXOuA4c4b9AnGGXGZtK2djEPBeZuFtl46RM=s96-c)',
                  backgroundSize: 'cover',
                }}
              ></div>
            </button>
          </li>
          <li>
            <button className="dashboardButton">기업 서비스</button>
          </li>
        </ul>
      </AsideMenu>
    </Navigation>
    // </div>
  );
};

export default NavigationBar;
