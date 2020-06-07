<script>
  import { url } from '@sveltech/routify'
  import ImageButton from './ImageButton.svelte';
  import logo from '../assets/images/logo.svg';

  export let title = 'Lenny';

  let buttonLeft = {
    img: {src: logo, alt: 'Image Button', width: 32, height: 32},
    link: {href:$url('/')}
  };

let buttonRight = {
    img: {src: logo, alt: 'Image Button', width: 32, height: 32},
    link: {href:$url('/')}
  };
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
  }
</style>

<div class="title-bar">
  <ImageButton img={buttonLeft.img} link={buttonLeft.link} />
  <h1 class="title">{title}</h1>
  <ImageButton img={buttonRight.img} link={buttonRight.link} />
</div>
