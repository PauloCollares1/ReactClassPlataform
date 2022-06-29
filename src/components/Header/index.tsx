import { HeaderStyle } from './styles'
import { NavLink } from 'react-router-dom'



export const Header = () => {
  return (
    <HeaderStyle>
      <h1 className='header-logo'>logo</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </HeaderStyle>
  )
}

