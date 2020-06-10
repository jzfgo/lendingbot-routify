<script>
  export let link;
  export let icon;
</script>

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

<div class="image-button">
{#if link}
  <a href={link}>
    <svelte:component this={icon} />
  </a>
{:else}
  <svelte:component this={icon} />
{/if}
</div>
