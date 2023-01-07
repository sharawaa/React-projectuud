import Navbar from "./main component/Navbar";
import Product from "./main component/Product";
import Slider from "./main component/Slider";
import "../Style/main.css"

export default function Main() {
  return (
    <div class="Container">
      <Slider />
      <Navbar />
      <Product />
    </div>
  );
}
