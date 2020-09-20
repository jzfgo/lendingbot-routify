<script>
  import RadialGraph from './graphs/RadialGraph.svelte';

  export let pctLent = .5;
</script>

<div class="currency-details">
  <div class="graph">
    <RadialGraph radius="48" pct={pctLent}>
      <div class="pct-1-label label"></div>
      <div class="pct-1">0%</div>
      <div class="pct-2">0%</div>
      <div class="pct-2-label label"></div>
    </RadialGraph>
  </div>
  <div class="data">
    <div class="data-1">
      <span class="value">0.00</span>
      <span class="label">Label</span>
    </div>
    <div class="data-2">
      <span class="value">0.00</span>
      <span class="label">Label</span>
    </div>
    <div class="data-3">
      <span class="value">0.00</span>
      <span class="label">Label</span>
    </div>
  </div>
</div>

<style>
  .currency-details {
    display: grid;
    grid-template-columns: 6rem 1fr;
    align-items: center;

    background: rgba(0,0,0,.3);
    border-radius: 0.625rem;
    margin: 0.625rem 0.9375rem;
    padding: 1.5rem;
    height: 9rem;
  }
</style>
