import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>🌝HomePage🌝</h1>
      <Link to="/shared">Shared</Link>
      <br />
      <Link to="/folder">folder</Link>
      <br />
      <Link to="/test">Test</Link>
    </>
  );
}

export default HomePage;
