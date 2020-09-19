import MenuBar from "./MenuBar";
import DesktopIcon from "./DesktopIcon";

export default function Window() {
  return `
  <div id="window" class="image">
    ${MenuBar()}
    ${DesktopIcon({ id: "musics", type: "folder", text: "musics" })}
    ${DesktopIcon({ id: "pics", type: "folder", text: "pics" })}
    ${DesktopIcon({ id: "inditings", type: "folder", text: "inditings" })}
  </div >
  `;
}
