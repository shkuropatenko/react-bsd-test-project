import { Lionk } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to='/'>First</Link>
        <Link to='second'>Second</Link>
        <Link to='third'>Third</Link>
      </ul>
    </nav>
  )
}