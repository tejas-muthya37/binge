import "./movies.css";
import CategoryMovies from "./../../Components/CategoryMovies/CategoryMovies";
import { useParams } from "react-router-dom";
import { useVideos } from "../../videos-context";

const Movies = (props) => {
  const { stateVideo } = useVideos();
  const { categoryName } = useParams();

  return (
    <div className="Movies">
      {props.categoryPage === false &&
        stateVideo.categoriesArray.map((category, index) => {
          return (
            <CategoryMovies key={index} category={category.categoryName} />
          );
        })}

      {props.categoryPage === true && (
        <CategoryMovies category={categoryName} />
      )}
    </div>
  );
};

export default Movies;
