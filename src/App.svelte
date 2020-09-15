<!-- logic -->
<script>
  let time = "👽";
  setInterval(() => {
    time = new Date()
      .toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .toLocaleLowerCase();
  }, 1000);

  let draggingIcon;
  document.body.addEventListener("dragover", dragOver);
  document.body.addEventListener("drop", (e) => {
    drop(e, draggingIcon);
  });

  function dragStart(e) {
    draggingIcon = e.target;
    let style = window.getComputedStyle(e.target, null);
    e.dataTransfer.setData(
      "text/plain",
      parseInt(style.getPropertyValue("left"), 10) -
        e.clientX +
        "," +
        (parseInt(style.getPropertyValue("top"), 10) - e.clientY)
    );
  }
  function dragOver(e) {
    e.preventDefault();
  }
  function drop(e, icon) {
    e.preventDefault();
    let offset = event.dataTransfer.getData("text/plain").split(",");
    icon.style.left = e.clientX + parseInt(offset[0], 10) + "px";
    icon.style.top = e.clientY + parseInt(offset[1], 10) + "px";
  }
</script>

<!-- structure -->
<main>
  <main-window image>
    <menu-bar>
      <kermitoid-logo image></kermitoid-logo>
      <menu-item os-title><p>Sidi OS</p></menu-item>
      <menu-item><p>about</p></menu-item>
      <menu-item><p>links</p></menu-item>
      <menu-item><p>help</p></menu-item>
      <menu-item clock moveToRight><p>{time}</p></menu-item>
    </menu-bar>
    <icon musics draggable="true" on:dragstart="{dragStart}">musics</icon>
    <icon pics icon2 draggable="true" on:dragstart="{dragStart}">pics</icon>
    <icon inditings draggable="true" on:dragstart="{dragStart}">inditings</icon>
  </main-window>
</main>

<!-- look -->
<style>
  :root {
    --redorange: #ff1d25;
  }

  :global(html) {
    background: var(--redorange);
  }

  :global(body) {
    background: var(--redorange);
    text-rendering: optimizeSpeed;
    padding: 0;
    margin: 0;
    font-family: "Victor Mono";
  }

  main {
    background: var(--redorange);
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main-window {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: top;
    background: url("./assets/mojave_lowres.png");
    height: 90%;
    width: 90%;
    min-height: 40px;
    min-width: fit-content;
    resize: both;
    overflow: auto;
    max-height: 90%;
    max-width: 90%;
    box-shadow: 10px 10px #111;
  }

  menu-bar {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #111;
    z-index: 1;
  }

  menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 10px;
    color: whitesmoke;
    background: #111;
    cursor: pointer;
    font-style: italic;
  }

  menu-item:hover {
    font-style: normal;
  }

  kermitoid-logo {
    height: 100%;
    image-rendering: pixelated;
    width: 40px;
    background: url("./assets/kermitoid_logo.png");
    background-size: cover;
    cursor: pointer;
  }

  kermitoid-logo:hover {
    background-size: calc(140%);
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    line-height: 100%;
  }

  icon {
    width: 80px;
    height: 80px;
    position: absolute;
    border: lime solid 1px;
  }
  [image] {
    background-repeat: no-repeat;
    background-position: center;
  }

  [os-title] {
    font-style: normal;
    font-weight: 500;
    font-size: 1.2em;
  }

  [moveToRight] {
    margin-left: auto;
  }

  [musics] {
    top: 10%;
    left: 5%;
  }
  [pics] {
    top: 30%;
    left: 56%;
  }
  [inditings] {
    top: 79%;
    left: 35%;
  }
</style>
