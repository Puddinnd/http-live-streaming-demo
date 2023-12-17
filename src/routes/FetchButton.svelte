<script lang="ts">
  import { fetchPlayList } from '$lib/hls'
  import { advanceMode } from '$lib/mode'
</script>

<!-- Advance mode -->
{#if $advanceMode}
<button class="btn btn-secondary btn-sm" on:click={() => fetchPlayList()}>
  <p class="px-3 font-semibold text-secondary-content">fetch !</p>
</button>

<!-- Simple mode -->
{:else}
<button class="btn btn-primary btn-sm" on:click={() => fetchPlayList()}>
  <p class="px-3 font-semibold text-primary-content">fetch !</p>
</button>
{/if}
