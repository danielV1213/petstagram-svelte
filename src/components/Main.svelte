<div class="main-component">
  <div class="main-container">
    <slot />
  </div>
</div>

<style>
  .main-component {
    display: grid;
    grid-template-columns: minmax(auto, 936px);
    justify-content: center;
    background-color: #fafafa;
  }
  .main-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 2em;
    padding: 2em 0;
  }
</style>
