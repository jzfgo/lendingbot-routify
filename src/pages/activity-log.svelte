<script>
  import { ready, url } from "@sveltech/routify";
  import TitleBar from "../components/TitleBar.svelte";

  let log = [];

  $: getActivity();

  function getActivity() {
    fetch(`/botlog.json`)
      .then(res => res.json())
      .then(json => {
        log = json.log || [];
        $ready();
      });
  }
</script>

<TitleBar title="Activity Log" />
<a href={$url('..')}>Go back</a>

{#if log}
  <ul>
	{#each log as logItem}
    <li>{logItem}</li>
  {/each}
  </ul>
{:else}
  No activity.
{/if}
