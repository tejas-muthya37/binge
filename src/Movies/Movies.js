import "./movies.css";
import CategoryMovies from "../CategoryMovies/CategoryMovies";
import { useParams } from "react-router-dom";

const Movies = (props) => {
  const { categoryName } = useParams();
  const categoryArray = ["Thrillers", "Action", "Romance", "Drama"];
  return (
    <div className="Movies">
      {props.categoryPage === false &&
        categoryArray.map((category) => {
          return <CategoryMovies category={category} />;
        })}

      {props.categoryPage === true && (
        <CategoryMovies category={categoryName} />
      )}
    </div>
  );
};

export default Movies;
