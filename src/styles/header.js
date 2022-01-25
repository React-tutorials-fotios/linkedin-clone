import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.8); */
  width: 100vw;
  padding: 2px 24px;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 100;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1228px;
`;

export const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
  a img {
    border-radius: 7px;
  }
`;

export const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  div input {
    max-width: 280px;
    width: 218px;
    height: 34px;
    border-width: 0;
    border-color: #dce6f1;
    border-radius: 7px;
    box-shadow: none;
    background-color: #eef3f8;
    padding: 0 8px 0 40px;
    line-height: 1.7;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const SearchIcon = styled.div`
  width: 20px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 10px;
  margin: 0;
  pointer-events: none;
`;

export const Nav = styled.div`
  margin-right: 50px;

  @media (max-width: 769px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
    padding: 2px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid #000;
      border-color: rgba(0, 0, 0, 0.9);
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      transition: transform 0.2s;
    }
  }
`;
export const NavListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    font-weight: 400px;
    font-size: 12px;
    line-height: 1.5;
    text-decoration: none;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    &:hover,
    &:active {
      span {
        color: rgba(0, 0, 0, 0.9);
        font-weight: 500;
      }
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
`;

export const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  display: none;
  transition-duration: 1s; // TODO: has no effect
`;

export const User = styled(NavListItem)`
  a > img {
    width: 24px;
    border-radius: 50%;
    height: 24px;
  }
  span {
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      justify-content: center;
      align-items: center;
      display: flex;
    }
  }
`;

export const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.88);
`;
