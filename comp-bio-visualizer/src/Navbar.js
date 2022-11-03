import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Genetic Visualization</h1>
        <div className="links">
          <Link to="/">Home</Link>
          {/* <Link to="/burrow-wheeler" style={{ 
            color: 'white', 
            backgroundColor: '#0050AB',
            borderRadius: '8px' 
          }}>Burrow-Wheeler</Link> */}
          <Link to="/burrow-wheeler">Burrow-Wheeler</Link>
          <Link to="/zalgorithm">Z Algorithm</Link>
          <Link to="/needleman-wunsch">Needleman-Wunsch</Link>
        </div>
      </nav>
    );
  }
   
export default Navbar;


