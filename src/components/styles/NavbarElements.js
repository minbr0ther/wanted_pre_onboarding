import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid #e8e8e8;
  padding: 8px;
  position: relative;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
    height: 110px;
    margin: 0 auto;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 90%;
    height: 60px;
    margin: 0 auto;
    justify-content: space-between;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    width: 87.72%;
    height: 60px;
    margin: 0 auto;
    flex-direction: row;
    max-width: 1060px;
  }
`;

export const NavTop = styled.div`
  .menu {
    width: 17px;
    height: 14px;
  }

  .logo {
    height: 18px;
    margin-left: 15px;
  }

  @media screen and (max-width: 767px) {
    padding: 15px 20px;
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 15px 0;
    height: 60px;
    width: 100%;
  }

  @media (min-width: 992px) {
    padding: 12px 0;
    height: 60px;
  }
`;

export const NavBottom = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
`;

export const MainMenu = styled.ul`
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;

  @media (min-width: 992px) and (max-width: 1100px) {
    /* width: 100%; */
    display: flex;
    flex: 1 1;
    justify-content: space-evenly;
  }
`;

export const NavLink = styled.li`
  padding: 11px 10px 19px;
  font-size: 14px;
  position: relative;
  vertical-align: middle;
  line-height: 20px;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;

  em {
    position: absolute;
    top: 5px;
    right: -7px;
  }

  @media screen and (max-width: 767px) {
    display: ${({ id }) => id >= 3 && 'none'};
  }

  @media (min-width: 768px) and (max-width: 991px) {
    display: ${({ id }) => id === 0 && 'none'};
    font-size: 13px;
  }

  @media (min-width: 992px) and (max-width: 1100px) {
    display: ${({ id }) => id === 0 && 'none'};
    margin: 0 auto;
    padding: 15px 0;
  }

  @media (min-width: 1100px) {
    display: ${({ id }) => id === 0 && 'none'};
    padding: 12px 15px;
  }
`;

export const AsideMenu = styled.aside`
  padding: 3px;
  height: 100%;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    margin: 0;
    padding: 5px;
    border: 0;
    background: none;
  }

  .icon {
    width: 18px;
    height: 18px;
  }

  li:nth-child(n + 4) {
    display: none;
  }

  @media (min-width: 992px) {
    li:nth-child(3) {
      display: none;
    }

    li:nth-child(4) {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      vertical-align: middle;
      // 동그라미 가운데로 보내기!!!

      div {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #e1e2e3;
        background-color: #fff;
      }
    }

    li:nth-child(5) {
      display: inline-flex;

      .dashboardButton {
        font-size: 13px;
        color: #666;
        line-height: 30px;
        height: 30px;
        border: 1px solid #e1e2e3;
        border-radius: 15px;
        padding: 0 10px;
        font-weight: 400;
      }

      &:before {
        display: block;
        content: '';
        width: 1px;
        height: 10px;
        background-color: #e1e2e3;
        margin: auto 10px;
      }
    }

    @media (min-width: 1200px) {
      li {
        padding: 0 7px;
      }

      li:nth-child(5) {
        &:before {
          margin: auto 10px;
        }
      }
    }
  }
`;
