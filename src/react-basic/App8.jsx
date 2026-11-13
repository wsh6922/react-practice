import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router";

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

const App8 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="stats" element={<Stats />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App8;
