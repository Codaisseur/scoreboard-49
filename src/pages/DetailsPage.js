import { Link, useParams } from "react-router-dom";

const DetailsPage = () => {
  const params = useParams();
  console.log("what is params?", params);
  return (
    <div>
      <h2>Details for category: {params.categoryName}</h2>
      <Link to='/'>To homepage</Link>
    </div>
  );
};

export default DetailsPage;
