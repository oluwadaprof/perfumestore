import "./App.scss";
import Home from "./pages/home/Home";
import CreateRoutes from "./routes/routes";
import TopNav from "./components/topnav/TopNav";
import SideNav from "./components/sidenav/SideNav";
import MainNav from "./components/mainnav/MainNav";

function App() {
  return (
    <div className="App">
      <nav className="top__nav">
        <TopNav />
      </nav>
      <nav className="sidenav">
        <SideNav />
      </nav>
      <div className="main-page" >
        <MainNav />
      </div>
      <CreateRoutes />
    </div>
  );
}

export default App;
