import { Link, Outlet } from "react-router";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <nav>
        <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default App;
