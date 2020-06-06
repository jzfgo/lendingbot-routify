<script>
  import { goto } from '@sveltech/routify'

  export let href;

  function handleClick(e) {
    href && $goto(href);
  }
</script>

<style>
  .list-item {
    background: rgba(0,0,0,.3);
    border-radius: 0.625rem;
    padding: 0.75rem;
    margin-bottom: 0.625rem;
  }
</style>

<div class="list-item" on:click={handleClick}>
  <slot />
</div>
