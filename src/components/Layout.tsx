import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.dark};
  padding: ${(props) => props.theme.space.md};
`;

const Nav = styled.nav`
  display: flex;
  gap: ${(props) => props.theme.space.md};
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.base};
  text-decoration: none;
  padding: ${(props) => props.theme.space.xs} ${(props) => props.theme.space.sm};
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Main = styled.main`
  flex: 1;
`;

// const Footer = styled.footer`
//   background-color: ${(props) => props.theme.colors.light};
//   padding: ${(props) => props.theme.space.md};
//   text-align: center;
//   color: ${(props) => props.theme.colors.secondary};
//   font-size: ${(props) => props.theme.fontSize.sm};
// `;

const Layout = () => {
  return (
    <Container>
      <Main>
        <Outlet />
      </Main>
      {/* <Footer>
      </Footer> */}
    </Container>
  );
};

export default Layout;
