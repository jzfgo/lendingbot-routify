<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  import Indicator from "../components/Indicator.svelte";
  import RadialGraph from './graphs/RadialGraph.svelte';
  import TempGraph from '../assets/images/tmp-graph.svg';
  import icons from '../coin-icons'

  const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  export let ticker = 'btc';
  export let pctLent = .5;
  export let earningsTotal = "$0.00";
  export let earningsYesterday = "+0.0";
  export let earningsToday = "+0.0";

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

<div class="coin-summary">
  <div class="graph">
    <RadialGraph pct={pctLent}>
      <svelte:component this={icons[ticker]}/>
    </RadialGraph>
  </div>
  <div class="earningsTotal">{CURRENCY_FORMATTER.format($earningsTotalTween)}</div>
  <div class="earnings24h">
    <Indicator icon="piggy-bank" value={CURRENCY_FORMATTER.format($earningsYesterdayTween)} background={false} />
    <Indicator icon="binoculars" value={CURRENCY_FORMATTER.format($earningsTodayTween)} background={false} />
  </div>
  <div class="graph">
  </div>
</div>

<style>
  .coin-summary {
    display: grid;
    grid-template-columns: 3rem 7.5rem 4rem 4rem;

    width: max-content;
    height: 3rem;
    margin: 1.5rem 0 1.5rem 1.5rem;
  }

  .graph {}

  .earningsTotal {
    margin-left: 1.5rem;
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
    color: var(--main-gain-color);
  }

  .earningsToday {
    color: var(--main-projected-color);
  }
</style>
