import "./styles/index.scss";
import { homeUi } from "./views/homeUi/homeUi";
import { DragAndDrop } from "./containers/home/AddFile/DragAndDrop";

(() => {
  const root = document.getElementById("root");
  root.insertAdjacentHTML("beforeend", homeUi());
  new DragAndDrop();
})();