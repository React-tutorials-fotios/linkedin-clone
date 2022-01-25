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
`;
