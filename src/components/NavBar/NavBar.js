import './NavBar.css';
import movieClapper from '../../assets/movieClapper.png';
function NavBar() {
    return (
      <div className="navBar">
        <img alt="movieClapper" src={movieClapper} />
      </div>
    );
  }
  
  export default NavBar;