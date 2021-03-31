import { NavBar } from "../components/NavBar";
import { LogoBar } from "../components/LogoBar";
import { ProductComponent } from "../components/ProductComponent";

function ProductPage() {
  return (
    <div className="Homepage">
      <LogoBar />
      <NavBar />
      <ProductComponent />
    </div>
  );
}

export default ProductPage;