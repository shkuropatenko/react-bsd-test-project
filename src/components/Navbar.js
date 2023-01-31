import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink to='/'>First</NavLink >
        <NavLink to='/second'>Second</NavLink >
        <NavLink to='/third'>Third</NavLink >
      </ul>
    </nav>
  )
}