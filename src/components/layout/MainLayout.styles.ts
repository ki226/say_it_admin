import styled from 'styled-components'

export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2rem;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: #007bff;
    }
  }
`

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #f8f9fa;
`

export const Footer = styled.footer`
  background-color: #ffffff;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #e9ecef;
` 