<script>
  import { url } from "@sveltech/routify";
  import TitleBar from "../components/TitleBar.svelte";
</script>

<TitleBar title="Settings" leftIcon="back" leftLink={$url('/')} />
