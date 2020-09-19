import "./styles.css";
import App from "./App";

// render app
document.body.innerHTML = App();

// add dragging functionality
const desktopIcons = document.getElementsByClassName("desktop-icon");
[...desktopIcons].map((desktopIcon) => {
  desktopIcon.addEventListener("dragstart", dragStart);
});
document.body.addEventListener("dragover", dragOver);
document.body.addEventListener("drop", drop);

function dragStart(e: Event) {
  const draggingIcon = e.target as HTMLElement;
  draggingIcon.classList.add("dragging-icon");
  const style = window.getComputedStyle(draggingIcon, null);
  (e as DragEvent).dataTransfer!.setData(
    "text/plain",
    parseInt(style.getPropertyValue("left"), 10) -
      (e as DragEvent).clientX +
      "," +
      (parseInt(style.getPropertyValue("top"), 10) - (e as DragEvent).clientY)
  );
}
function dragOver(e: Event) {
  e.preventDefault();
}
function drop(e: DragEvent) {
  const offset = e.dataTransfer!.getData("text/plain").split(",");
  const draggingIcon = document.getElementsByClassName(
    "dragging-icon"
  )[0] as HTMLElement;
  draggingIcon!.style.left = e.clientX + parseInt(offset[0], 10) + "px";
  draggingIcon!.style.top = e.clientY + parseInt(offset[1], 10) + "px";
  draggingIcon!.classList.remove("dragging-icon");
}
