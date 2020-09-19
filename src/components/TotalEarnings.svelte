<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import Indicator from "../components/Indicator.svelte";
  import CornerBottomLeftIcon from '../assets/images/corner-bottom-left.svg';
  import CornerBottomRightIcon from '../assets/images/corner-bottom-right.svg';
  import AngleLeftIcon from '../assets/images/angle-left.svg';
  import AngleRightIcon from '../assets/images/angle-right.svg';

  export let summary;

  const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const earningsTotal = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  const earningsToday = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  const earningsYesterday = tweened(0, {
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
      <span class="earnings">
        {CURRENCY_FORMATTER.format($earningsTotal)}
      </span>
      <div class="label">
        <CornerBottomLeftIcon width="32" /> All Time <CornerBottomRightIcon width="32" />
      </div>
    </div>
    <div class="earnings-24h">
      <div class="earnings">
        <Indicator size="regular" icon="piggy-bank" value={CURRENCY_FORMATTER.format($earningsYesterday)} />

        <div class="label">
          <AngleLeftIcon width="32" /> 24h <AngleRightIcon width="32" />
        </div>

        <Indicator size="regular" icon="binoculars" value={CURRENCY_FORMATTER.format($earningsToday)} />
      </div>
    </div>
  </div>
{/if}

<style>
  .earnings {
    text-align: center;
  }

  .earnings-total .earnings {
    color: var(--main-fg-color);
    letter-spacing: 0;
    font-weight: 400;
    font-size: 3rem;
  }

  .earnings-yesterday {
    color: var(--main-gain-color);
  }

  .earnings-today {
    color: var(--main-projected-color);
  }

  .label {
    fill: var(--color-gun-powder);
  }
</style>
