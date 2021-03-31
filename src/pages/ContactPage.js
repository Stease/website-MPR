import { NavBar } from "../components/NavBar";
import { ContactpageWindow } from "../components/ContactpageWindow";
import { LogoBar } from "../components/LogoBar";

function ContactPage() {
  return (
    <div className="Homepage">
      <LogoBar />
      <NavBar />
      <ContactpageWindow />
    </div>
  );
}

export default ContactPage;