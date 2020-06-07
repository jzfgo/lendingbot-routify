<script>
  export let link;
  export let img;

  const {src = '', alt = 'Image Button'} = img;
  const {href = ''} = link;
</script>

<style>
.image-button {
  display: grid;
}

a {
  display: grid;
}

img {
  place-self: center center;
}
</style>

<div class="image-button">
  <a {href} {...link}>
    <img {src} {alt} {...img}>
  </a>
</div>
