<script>
  import { ready, url } from "@sveltech/routify";

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

<h1>Activity Log</h1>
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
