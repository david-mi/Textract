import "./styles/index.scss";
import { homeUi } from "./views/homeUi/homeUi";
import { Home } from "./containers/home";

(() => {
  const root = document.getElementById("root");
  root.insertAdjacentHTML("beforeend", homeUi());
  new Home();
})();