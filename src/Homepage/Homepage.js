import { Link } from "react-router-dom";
import "./homepage.css";
import {
  thrillerCategory,
  actionCategory,
  romanceCategory,
  dramaCategory,
} from "./../images.js";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="categories-section">
        <Link to="/movies/thrillers">
          <div id="thriller-category" className="category-card">
            <img src={thrillerCategory} alt="" />
            <p>Thrillers</p>
          </div>
        </Link>
        <Link to="/movies/action">
          <div id="drama-category" className="category-card">
            <img src={actionCategory} alt="" />
            <p>Action</p>
          </div>
        </Link>
        <Link to="/movies/romance">
          <div id="scifi-category" className="category-card">
            <img src={romanceCategory} alt="" />
            <p>Romance</p>
          </div>
        </Link>
        <Link to="/movies/drama">
          <div id="romance-category" className="category-card">
            <img src={dramaCategory} alt="" />
            <p>Drama</p>
          </div>
        </Link>
      </div>
      <Link to="/movies">
        <button>Watch Now</button>
      </Link>
    </div>
  );
};

export default Homepage;
