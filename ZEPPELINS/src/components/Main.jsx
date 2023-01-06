import Aside from "./sub-components/Aside";
import MainBody from "./sub-components/MainBody";
import SecondAside from "./sub-components/SecondAside";

export default function Main() {
  return (
    <div class="container">
      <Aside />
      <MainBody />
      <SecondAside />
    </div>
  );
}
