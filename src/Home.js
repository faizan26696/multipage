import { Link } from "react-router-dom";
const Home = ({ list }) => {
  return (
    <div className="home">
      <h1>Notes</h1>
      {list.length === 0 && <p>No Notes yet Please Create</p>}
      {list.length !== 0 &&
        list.map((item) => (
          <Link to={`/item/${item.id}`}>
            <div className="list-notes">{item.title}</div>
          </Link>
        ))}
    </div>
  );
};
export default Home;
