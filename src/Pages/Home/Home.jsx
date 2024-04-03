import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavLink to="/about">About</NavLink>
      <h1 className="text-6xl text-center">Home</h1>
    </div>
  );
}

export default Home;
