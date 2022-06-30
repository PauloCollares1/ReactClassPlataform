import { HeaderStyle, NavlinkStyle } from './styles'
import { NavLink } from 'react-router-dom'



export const Header = () => {
  return (
    <HeaderStyle>
      <h1>logo</h1>
      <div>
        <NavlinkStyle to="/"> Home</NavlinkStyle>
        <NavlinkStyle to="/about">About</NavlinkStyle>
      </div>
    </HeaderStyle>
  )
}

