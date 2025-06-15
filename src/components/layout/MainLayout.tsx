import { Outlet } from 'react-router-dom'
import { Layout, Header, Nav, MainContent, Footer } from './MainLayout.styles'

const MainLayout = () => {
  return (
    <Layout>
      <Header>
        <Nav>
          <ul>
            <li><a href="/">홈</a></li>
            <li><a href="/dashboard">대시보드</a></li>
          </ul>
        </Nav>
      </Header>
      
      <MainContent>
        <Outlet />
      </MainContent>

      <Footer>
        <p>&copy; 2024 Say It Admin. All rights reserved.</p>
      </Footer>
    </Layout>
  )
}

export default MainLayout 