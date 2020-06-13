<script>
  export let link;
  export let image;
</script>

<div class="image-button">
{#if link}
  <a href={link}>
    <svelte:component this={image} />
  </a>
{:else}
  <svelte:component this={image} />
{/if}
</div>

<style>
  .image-button {
    display: grid;
  }

  a {
    display: grid;
  }

  img {
    place-self: center center;
  }
</style>
