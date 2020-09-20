<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import Indicator from "../components/Indicator.svelte";
  import LineChart from "../components/LineChart.svelte";
  import CornerBottomLeftIcon from '../assets/images/corner-bottom-left.svg';
  import CornerBottomRightIcon from '../assets/images/corner-bottom-right.svg';
  import AngleLeftIcon from '../assets/images/angle-left.svg';
  import AngleRightIcon from '../assets/images/angle-right.svg';

  export let summary;

  const CURRENCY_FORMATTER = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
  });

  const earningsTotal = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  const earningsYesterday = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  const earningsToday = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  $: if (summary) {
    earningsTotal.set(summary.earningsTotal);
    earningsYesterday.set(summary.earningsYesterday);
    earningsToday.set(summary.earningsToday);
  }
</script>

{#if summary}
  <div class="earnings">
    <div class="earnings-total">
      <span class="value">
        {CURRENCY_FORMATTER.format($earningsTotal)}
      </span>
      <div class="label">
        <CornerBottomLeftIcon width="32" /> All Time <CornerBottomRightIcon width="32" />
      </div>
    </div>
    <div class="earnings-24h">
      <Indicator size="regular" icon="piggy-bank" value={CURRENCY_FORMATTER.format($earningsYesterday)} color="success" />

      <div class="label">
        <AngleLeftIcon width="32" /> 24h <AngleRightIcon width="32" />
      </div>

      <Indicator size="regular" icon="binoculars" value={CURRENCY_FORMATTER.format($earningsToday)} color="warning" />
    </div>
  </div>
  <LineChart />
{/if}

<style>
  .earnings {
    text-align: center;
  }

  .earnings-total {
    margin-bottom: 0.4375rem;
  }

  .earnings-total .value {
    color: var(--main-fg-color);
    letter-spacing: 0;
    font-weight: 400;
    font-size: 3rem;
  }

  .earnings-total .label {
    margin-top: -1.0625rem;
  }

  .label,
  .earnings-24h {
    display: flex;
    flex-direction: row;
    place-items: center;
    place-content: center;
  }

  .label {
    font-weight: 700;
    font-size: 0.75rem;
    text-align: center;
    text-transform: uppercase;
    color: var(--color-gun-powder);
    fill: var(--color-gun-powder);
  }
</style>
