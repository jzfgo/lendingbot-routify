<script>
  import { ready } from "@sveltech/routify";
  import RadialGraph from "./graphs/RadialGraph.svelte";

  export let coin;

  let data = {};
  $: getData();

  function getData() {
    fetch(`/botlog.json`)
      .then(res => res.json())
      .then(json => {
        data = json || {};
        $ready();
      });
  }
</script>

<RadialGraph pct={Math.random(0, 1)} />
