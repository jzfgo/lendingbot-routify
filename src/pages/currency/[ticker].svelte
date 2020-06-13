<script>
  import { ready, url } from "@sveltech/routify";
  import TitleBar from "../../components/TitleBar.svelte";

  export let ticker;

  const titleBarProps = {
    title: ticker.toUpperCase(),
    left: {
      icon: 'back',
      link: $url('/'),
    }
  };
</script>

<TitleBar {...titleBarProps} />

<ul>
  <li>Average Lending Rate: </li>
  <li>Lent Sum: </li>
  <li>Max To Lend: </li>
  <li>Today Earnings: </li>
  <li>Total Coins: </li>
  <li>Total Earnings: </li>
  <li>Yesterday Earnings: </li>
</ul>
