import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "laptops" },
  { id: 2, name: "games" },
  { id: 3, name: "sports" },
  { id: 4, name: "food" },
];

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the homepage</h2>
      <Link to='/about'>About us</Link>
      <div>
        {categories.map(c => {
          return (
            <div>
              <h3>{c.name}</h3>
              <Link to={`/categories/${c.name}`}>Details</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
