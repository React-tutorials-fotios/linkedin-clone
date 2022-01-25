import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  width: 100vw;
  padding: 2px 24px;
  /* position: sticky; */
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
