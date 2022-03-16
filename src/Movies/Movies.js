import "./movies.css";
import CategoryMovies from "../CategoryMovies/CategoryMovies";

const Movies = () => {
  return (
    <div className="Movies">
      <CategoryMovies title="Thrillers" category="Thriller" />
      <CategoryMovies title="Action" category="Action" />
      <CategoryMovies title="Romance" category="Romance" />
      <CategoryMovies title="Drama" category="Drama" />
    </div>
  );
};

export default Movies;
