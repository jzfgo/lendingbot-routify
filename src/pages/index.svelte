<script>
  import { url } from "@sveltech/routify";

  import { data } from '../stores'

  import TitleBar from "../components/TitleBar.svelte";
  import TotalEarnings from "../components/TotalEarnings.svelte";
  import ListItem from "../components/ListItem.svelte";
  import CurrencySummary from "../components/CurrencySummary.svelte";
  import LogSummary from "../components/LogSummary.svelte";

  const titleBarProps = {
    title: 'Lenny',
    left: {
      icon: 'logo',
    },
    right: {
      icon: 'settings',
      link: $url('/settings'),
    }
  };
</script>

<main>
  <TitleBar {...titleBarProps} />

  <section class="summary">
    <h2>Total earnings</h2>
    <TotalEarnings summary={$data.summary} />
  </section>

  {#if $data.currencies}
  <section class="currencies">
    <h2>Earnings by currency</h2>
    {#each $data.currencies as currency}
    <ListItem link={`/currency/${currency.ticker}`}>
      <CurrencySummary {...currency} />
    </ListItem>
    {/each}
  </section>
  {/if}

  {#if $data.log}
  <section class="module log">
    <h2>Activity log</h2>
    <ListItem link="/activity-log">
      <LogSummary {...$data.log[0]} />
    </ListItem>
  </section>
  {/if}
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
