<script lang="ts">
  import { video_player } from '$lib/hls'
</script>

<video id="video" controls width="100%" bind:this={$video_player}>
  <track kind="captions">
</video>