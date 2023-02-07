import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/'>First</NavLink>
        </li>
        <li>
          <NavLink to='/second'>Second</NavLink>
        </li>
        <li>
          <NavLink to='/third'>Third</NavLink>
        </li>
      </ul>
    </nav>
  )
}