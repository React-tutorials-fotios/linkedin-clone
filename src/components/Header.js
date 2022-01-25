import { Container, Content, Logo } from "../styles/header";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
      </Content>
    </Container>
  );
};

export default Header;
