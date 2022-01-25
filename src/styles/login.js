import styled from "styled-components";

export const Container = styled.div`
  padding: 0px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: relative;
  max-width: 1228px;
  margin: auto;
  padding: 12px 0 16px;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

export const Join = styled.a`
cursor: pointer;
font-size: 16px;
padding: 10px 12px;
text-decoration: none;
color: rgba(0, 0, 0, 0.6);
margin-right: 12px;
border-radius: 4px;

&:hover {
  background-color: rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.9);
  text-decoration: : none;
}
`;

export const SignIn = styled.a`
  cursor: pointer;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  padding: 10px 14px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(112, 181, 149, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

export const Section = styled.div`
  display: flex;
  align-content: start;
  min-height: 700px;
  /* padding-bottom: 138px; */
  /* padding-top: 40px; */
  padding: 60px 0;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1228px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

export const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    position: absolute;
    bottom: -2px;
    right: -150px;
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

export const Form = styled.div`
  margin-top: 100px;
  width: 408px;

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
`;

export const Google = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: 0px -1px 11px 2px #2977c9;
  vertical-align: middle;
  z-index: 0;
  font-size: 20px;
  transition-duration: 167ms;
  color: rgba(0, 0, 0, 0.6);

  img {
    margin: 2px;
  }

  &:hover {
    background-color: rgba(41, 119, 201, 0.08);
    color: rgba(0, 0, 0, 0.75);
  }
`;
