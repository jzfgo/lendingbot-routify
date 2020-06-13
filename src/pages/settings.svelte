<script>
  import { url } from "@sveltech/routify";
  import TitleBar from "../components/TitleBar.svelte";

  const titleBarProps = {
    title: 'Settings',
    left: {
      icon: 'back',
      link: $url('/'),
    }
  };
</script>

<TitleBar {...titleBarProps} />
