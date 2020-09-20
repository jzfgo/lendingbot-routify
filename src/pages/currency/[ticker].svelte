<script>
  import { data } from '../../stores'

  import TitleBar from "../../components/TitleBar.svelte";
  import TotalEarnings from "../../components/TotalEarnings.svelte";
  import CurrencyDetails from "../../components/CurrencyDetails.svelte";

  export let ticker;

  const titleBarProps = {
    title: ticker.toLocaleUpperCase(),
  };

  $: [currency] = $data.currencies.filter(currency => currency.ticker === ticker);
</script>

<main>
  <TitleBar {...titleBarProps} />

  <section class="summary">
    <h2>Total earnings</h2>
    <TotalEarnings summary={currency} />
  </section>

  <section class="lent">
    <h2>Amount Lent</h2>
    <CurrencyDetails />
  </section>

  <section class="estimation">
    <h2>Estimated earnings</h2>
    <CurrencyDetails />
  </section>

  <section class="exchange">
    <h2>Exchange rate</h2>
  </section>
</main>

<style>
  main {
    background-color: var(--color-charade);
  }

  section {
    margin-top: 1.25rem;
  }

  section:last-child {
    padding-bottom: 1.25rem;
  }

  section h2 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0;
    font-weight: 700;
    font-size: 0.75rem;
  }
</style>
