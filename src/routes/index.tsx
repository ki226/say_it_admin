import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import EmptyLayout from '../components/layout/EmptyLayout'
import TermsPage from '../pages/terms/TermsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>홈 페이지</div>,
      },
      {
        path: 'dashboard',
        element: <div>대시보드 페이지</div>,
      },
    ],
  },
  {
    path: '/',
    element: <EmptyLayout />,
    children: [
      {
        path: 'login',
        element: <div>로그인 페이지</div>,
      },
      {
        path: 'terms',
        element: <TermsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <div>404 페이지를 찾을 수 없습니다</div>,
  },
])

export default router 