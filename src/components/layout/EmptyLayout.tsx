import { Outlet } from 'react-router-dom'
import { EmptyLayoutContainer } from './EmptyLayout.styles'

const EmptyLayout = () => {
  return (
    <EmptyLayoutContainer>
      <Outlet />
    </EmptyLayoutContainer>
  )
}

export default EmptyLayout 