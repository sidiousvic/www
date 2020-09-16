<script>
  import MenuBar from "./MenuBar.svelte";
  import Icon from "./Icon.svelte";
</script>

<window image>
  <MenuBar></MenuBar>
  <Icon id="musics" type="folder" text="musics"></Icon>
  <Icon id="inditings" type="folder" text="inditings"></Icon>
  <Icon id="pics" type="folder" text="pics"></Icon>
</window>

<style>
  [image] {
    background-repeat: no-repeat;
    background-position: center;
  }

  window {
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
    border: #111 2px solid;
  }
</style>
