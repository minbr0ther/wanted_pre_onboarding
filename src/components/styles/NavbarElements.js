import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  &:after {
    content: '';
    display: block;
    width: 100%;
    border-bottom: 1px solid #e8e8e8;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
    height: 110px;
    margin: 0 auto;
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
`;

export const AsideMenu = styled.aside`
  padding: 9px 5px;
  height: 100%;

  ul {
    list-style: none;
    display: flex;
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
`;
