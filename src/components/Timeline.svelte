<script>
  import Card from "./Card.svelte";
  import Spinner from "./Spinner.svelte";

  export let posts = [];
</script>

<div class="timeline">
  <div class="timeline-container">
    {#each posts as post}
      <Card {post} />
    {:else}
      <Spinner />
    {/each}
  </div>
</div>

<style>
  .timeline {
    padding: 4em 0 0 0;
  }
</style>
