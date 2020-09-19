export default function DesktopIcon({
  id,
  type,
  text,
}: {
  id: string;
  type: string;
  text: string;
}) {
  const element = document.createElement("div");
  const html = `
  <div id=${id} class="desktop-icon ${type}" draggable="true"><p>${text}</p></div>
  `;
  element.innerHTML = html;
  return html;
}
