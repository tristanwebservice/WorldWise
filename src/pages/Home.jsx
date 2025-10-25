import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Home;
