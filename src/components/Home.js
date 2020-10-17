import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/shop">Buy stuff at our shop!</Link>
    </div>
  );
}

export default Home;
