<script>
  // links
  const links = ["about", "links", "help"];
  // clock
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
</script>

<menu-bar>
  <kermitoid-logo image></kermitoid-logo>
  <menu-item id="os-title"><p>Sidi OS</p></menu-item>
  {#each links as link}
  <menu-item><p>{link}</p></menu-item>
  {/each}
  <menu-item id="clock"><p>{time}</p></menu-item>
</menu-bar>

<style>
  menu-bar {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #111;
    z-index: 1;
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

  menu-item p {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    line-height: 100%;
  }

  #clock {
    font-style: normal;
    margin-left: auto;
  }

  #os-title {
    font-style: normal;
    font-weight: 500;
    font-size: 1.2em;
  }
</style>
