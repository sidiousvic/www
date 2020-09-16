<script>
  import Window from "./Window.svelte";
</script>

<main><Window></Window></main>

<style>
  :root {
    --redorange: #ff1d25;
  }

  :global(html) {
    background: var(--redorange);
  }

  :global(body) {
    background: var(--redorange);
    padding: 0;
    margin: 0;
    font-family: "Dank Mono";
  }

  main {
    background: var(--redorange);
    background: linear-gradient(
      45deg,
      #fff,
      var(--redorange) 50%,
      var(--redorange) 50%,
      #000
    );
    background-size: 2px 2px;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
