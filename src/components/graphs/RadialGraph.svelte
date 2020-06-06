<script>
  export let pct = 0;

  const circ = 2 * Math.PI * 15;

  let progress = circ * (1 - pct);
</script>

<style>
  svg {
    transform: rotate(-90deg);
  }

  .progress {
    stroke-dasharray: var(--circ);
    stroke-dashoffset: var(--progress);
    animation: progress 1s;
  }

  @keyframes progress {
    from {
        stroke-dashoffset: 0;
    }
    to {
        stroke-dashoffset: var(--progress);
    }
  }
</style>

<svg width="32" height="32" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="15" fill="none" stroke="#22212c" stroke-width="2" />
  <circle class="progress" cx="16" cy="16" r="15" fill="none" stroke="#ffca80" stroke-width="2" style="--circ: {circ}; --progress: {progress}" />
</svg>
