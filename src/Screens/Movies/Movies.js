import "./movies.css";
import CategoryMovies from "./../../Components/CategoryMovies/CategoryMovies";
import { useParams } from "react-router-dom";
import { useVideos } from "./../../Context/videos-context";
import { useEffect } from "react";

const Movies = (props) => {
  const { categoryName } = useParams();
  const { stateVideo, dispatchVideo } = useVideos();

  useEffect(() => {
    fetch("/api/categories", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatchVideo({ type: "Categories setup", payload: data.categories });
      });
  }, [dispatchVideo]);

  return (
    <div className="Movies">
      {props.categoryPage === false && (
        <div>
          {stateVideo.categoriesArray.map((category) => {
            return (
              <CategoryMovies
                key={category.id}
                id={category.id}
                category={category.categoryName}
              />
            );
          })}
        </div>
      )}

      {props.categoryPage === true && (
        <CategoryMovies category={categoryName} />
      )}
    </div>
  );
};

export default Movies;
