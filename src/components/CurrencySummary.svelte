<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  import Indicator from "../components/Indicator.svelte";
  import RadialGraph from './graphs/RadialGraph.svelte';
  import icons from '../currency-icons'

  const CURRENCY_FORMATTER = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
  });

  export let ticker = 'btc';
  export let pctLent = .5;
  export let earningsTotal = 0;
  export let earningsYesterday = 0;
  export let earningsToday = 0;

  const earningsTotalTween = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  const earningsYesterdayTween = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  const earningsTodayTween = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  $: earningsTotalTween.set(earningsTotal);
  $: earningsYesterdayTween.set(earningsYesterday);
  $: earningsTodayTween.set(earningsToday);
</script>

<div class="currency-summary">
  <div class="graph">
    <RadialGraph pct={pctLent}>
      <svelte:component this={icons[ticker]}/>
    </RadialGraph>
  </div>
  <div class="earningsTotal">{CURRENCY_FORMATTER.format($earningsTotalTween)}</div>
  <div class="earnings24h">
    <Indicator icon="piggy-bank" value={CURRENCY_FORMATTER.format($earningsYesterdayTween)} background={false} color="success" />
    <Indicator icon="binoculars" value={CURRENCY_FORMATTER.format($earningsTodayTween)} background={false} color="warning" />
  </div>
  <div class="graph">
  </div>
</div>

<style>
  .currency-summary {
    display: grid;
    grid-template-columns: 3rem 7.5rem 4rem 4rem;

    width: max-content;
    height: 3rem;
    margin: 1rem 0 1rem 1rem;
  }

  .graph {}

  .earningsTotal {
    margin-left: 1rem;
    letter-spacing: 0;
    font-weight: 400;
    line-height: 3rem;
    font-size: 1.5rem;
    color: var(--color-spring-wood);
  }

  .earningsYesterday,
  .earningsToday {
    letter-spacing: 0;
    font-weight: 400;
    line-height: 0.875rem;
    font-size: 0.625rem;
  }

  .earningsYesterday {
    color: var(--main-success-color);
  }

  .earningsToday {
    color: var(--main-warning-color);
  }
</style>
