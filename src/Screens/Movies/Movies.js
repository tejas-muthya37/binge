import "./movies.css";
import CategoryMovies from "./../../Components/CategoryMovies/CategoryMovies";
import { useParams } from "react-router-dom";

const Movies = (props) => {
  const { categoryName } = useParams();

  return (
    <div className="Movies">
      {props.categoryPage === false && (
        <div>
          <CategoryMovies category="Thrillers" />
          <CategoryMovies category="Action" />
          <CategoryMovies category="Romance" />
          <CategoryMovies category="Drama" />
        </div>
      )}

      {props.categoryPage === true && (
        <CategoryMovies category={categoryName} />
      )}
    </div>
  );
};

export default Movies;
