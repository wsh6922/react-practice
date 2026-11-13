import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router";

const Layout = () => {
  return (
    <main>
      <h1>Layout Header</h1>
      <hr />
      <Outlet />
    </main>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Welcome to the About page!</p>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard page!</p>
      <hr />
      <Outlet />
    </div>
  );
};

const Stats = () => {
  return <h2>This is Stats</h2>;
};

const Settings = () => {
  return <h2>This is Settings</h2>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

const App9 = () => {
  return <RouterProvider router={router} />;
};

export default App9;
