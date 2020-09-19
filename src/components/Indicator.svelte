<script>
  import icons from '../ui-icons'

  export let size = 'small';
  export let icon = 'piggy-bank';
  export let value = '$0.00';
  export let color = '--main-gain-color';
  export let background = true;
</script>

<div class="indicator indicator--{size} {(background ? 'indicator--bg' : '')}">
  <svelte:component this={icons[icon]} />
  <span class="value">{value}</span>
</div>

<style>
  .indicator {
    display: grid;
    align-items: center;

    width: min-content;
    border-radius: 0.625rem;
    cursor: pointer;

    fill: var(--color-gun-powder);
  }

  .indicator--bg {
    background: rgba(0,0,0,.3);
  }

  .indicator--regular {
    grid-template-columns: 2rem 1fr;

    height: 2rem;
    border-radius: 0.625rem;
    padding-right: 0.75rem;
  }

  .indicator--small {
    grid-template-columns: 1.5rem 1fr;

    height: 1.5rem;
    border-radius: 0.3125rem;
    padding-right: 0.5rem;
  }
</style>
