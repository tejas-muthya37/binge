import "./history.css";
import Movie from "./../Movie/Movie";

const History = () => {
  return (
    <div className="History">
      <h1>History</h1>
      <div className="history-section">
        <Movie title="Drishyam" />
        <Movie title="Drishyam" />
        <Movie title="Drishyam" />
        <Movie title="Drishyam" />
      </div>
    </div>
  );
};

export default History;
