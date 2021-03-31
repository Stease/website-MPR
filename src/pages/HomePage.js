import { NavBar } from "../components/NavBar";
import { HomepageWindow } from "../components/HomepageWindow";
import { LogoBar } from "../components/LogoBar";

function Homepage() {
  return (
    <div className="Homepage">
      <LogoBar />
      <NavBar />
      <HomepageWindow />
    </div>
  );
}

export default Homepage;
