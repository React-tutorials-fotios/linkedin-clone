import {
  Container,
  Content,
  Logo,
  Nav,
  NavList,
  NavListItem,
  Search,
  SearchIcon,
  SignOut,
  User,
  Work,
} from "../styles/header";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavList>
            <NavListItem className="active">
              <a>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavListItem>
            <NavListItem>
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavListItem>
            <NavListItem>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavListItem>
            <NavListItem>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavListItem>
            <NavListItem>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavListItem>
            <User>
              <a>
                <img src="/images/user.svg" alt="" />
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavList>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
