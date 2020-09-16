<script>
  // props
  export let text;
  export let id;
  // drag and drop folders
  document.body.addEventListener("dragover", dragOver);
  document.body.addEventListener("drop", drop);
  // define drag functions
  function dragStart(e) {
    const draggingIcon = e.target;
    draggingIcon.classList.add("dragging-icon");
    const style = window.getComputedStyle(e.target, null);
    e.dataTransfer.setData(
      "text/plain",
      parseInt(style.getPropertyValue("left"), 10) -
        e.clientX +
        "," +
        (parseInt(style.getPropertyValue("top"), 10) - e.clientY)
    );
  }
  function dragOver(e) {
    e.target.style.opacity = 1;

    e.preventDefault();
  }
  function drop(e) {
    const offset = event.dataTransfer.getData("text/plain").split(",");
    const draggingIcon = document.querySelector(".dragging-icon");
    draggingIcon.style.left = e.clientX + parseInt(offset[0], 10) + "px";
    draggingIcon.style.top = e.clientY + parseInt(offset[1], 10) + "px";
    draggingIcon.classList.remove("dragging-icon");
  }
</script>

<icon {id} class="folder" draggable="true" on:dragstart="{dragStart}"
  ><p>{text}</p></icon
>

<style>
  icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    position: absolute;
  }

  icon p {
    font-size: 0.9rem;
    font-style: oblique;
    color: whitesmoke;
    text-shadow: #111 1px 1px;
    image-rendering: pixelated;
    position: absolute;
    padding: 0;
    margin: 0;
    bottom: 0;
  }

  .folder {
    background: url("./assets/folder_icon.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
    image-rendering: optimizeSpeed;
  }

  #musics {
    top: 40%;
    left: 60%;
  }

  #inditings {
    top: 50%;
    left: 70%;
  }

  #pics {
    top: 60%;
    left: 60%;
  }
</style>
