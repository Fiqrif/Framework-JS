import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
      <Link to="/products" style={{ color: '#fff' }}>Products</Link>
    </nav>
  )
}

export default Navbar;
