export default function DesktopIcon({
  id,
  type,
  text,
}: {
  id: string;
  type: string;
  text: string;
}) {
  return `
    <div 
      id=${id} 
      class="desktop-icon ${type}" 
      draggable="true">
        <p>${text}</p>
    </div>
`;
}
