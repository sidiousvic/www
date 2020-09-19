export default function MenuBar() {
  const links = ["about", "links", "help"];
  let time = "👽";
  const dateOptions = {
    weekday: "long",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  setInterval(() => {
    time = new Date()
      .toLocaleDateString("ja-JP", dateOptions)
      .toLocaleLowerCase();
  }, 1000);

  function MenuItems(links: string[]) {
    return links.map((link) => `<div class="menu-item"><p>${link}</p></div>`);
  }

  return `
    <div id="menu-bar">
      <div class="img" id="kermitoid-logo"></div>
      <div class="menu-item" id="os-title"><p>Sidi OS</p></div>
        ${MenuItems(links)}
      <div class="menu-item" id="clock"><p>${time}</p></div>
  </div>
    `;
}
