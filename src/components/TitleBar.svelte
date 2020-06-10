<script>
  import { url } from '@sveltech/routify'
  import ImageButton from './ImageButton.svelte';

  import LogoIcon from '../assets/images/lenny.svg';
  import SettingsIcon from '../assets/images/cog.svg';
  import BackIcon from '../assets/images/angleleft.svg';

  export let title = '';

  export let leftIcon;
  export let leftLink;

  export let rightIcon;
  export let rightLink;

  const icons = {
    logo: LogoIcon,
    settings: SettingsIcon,
    back: BackIcon,
  }
</script>

<style>
  .title-bar {
    height: 3.75rem;
    padding: 0.625rem;
    background-color: var(--main-bg-color);

    display: grid;
    grid-template-columns: 2.5rem 1fr 2.5rem;
  }

  .title {
    font-size: 1rem;
    font-weight: 600;
    line-height: 2.5rem;
    text-align: center;
    color: var(--main-fg-color);
    margin: 0;
  }
</style>

<div class="title-bar">
  <ImageButton icon={icons[leftIcon]} link={leftLink} />
  <h1 class="title">{title}</h1>
  <ImageButton icon={icons[rightIcon]} link={rightLink} />
</div>
