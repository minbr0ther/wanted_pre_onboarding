import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 8px;
`;

export const NavTop = styled.div`
  @media screen and (max-width: 767px) {
    padding: 15px 20px;
    width: 100%;
  }

  .menu {
    width: 17px;
    height: 14px;
  }

  .logo {
    height: 18px;
    margin-left: 10px;
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
  font-size: 15px;
  position: relative;
  vertical-align: middle;
  line-height: 20px;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: ${({ id }) => id >= 3 && 'none'};
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
