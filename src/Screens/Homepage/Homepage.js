import { Link } from "react-router-dom";
import "./homepage.css";
import { useVideos } from "../../videos-context";
import { useEffect } from "react";

const Homepage = () => {
  const { stateVideo, dispatchVideo } = useVideos();

  useEffect(() => {
    fetch("/api/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        dispatchVideo({ type: "Categories setup", payload: data.categories })
      );
  });

  return (
    <div className="Homepage">
      <div className="categories-section">
        {stateVideo.categoriesArray.map((category) => {
          return (
            <Link key={category.id} to={"/movies/" + category.categoryName}>
              <div className="category-card">
                <img src={category.thumbnail} alt="" />
                <p>{category.categoryName}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <Link to="/movies">
        <button className="homepage-button">Watch Now</button>
      </Link>
    </div>
  );
};

export default Homepage;
