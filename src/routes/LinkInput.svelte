<script lang="ts">
	import { placeholder_link, linkToFile } from '$lib/file'
  import { advanceMode } from '$lib/mode'
</script>

<!-- Advance mode -->
{#if $advanceMode} 
<div class="col-span-2">
  <input 
    id="link-input"
    type="text" 
    placeholder={placeholder_link} 
    class="input input-sm input-bordered w-full input-secondary" 
    bind:value={$linkToFile}
  />
</div>

<!-- Simple mode -->
{:else} 
<div class="col-span-2">
  <input 
  id="link-input"
    type="text" 
    placeholder={placeholder_link} 
    class="input input-sm input-bordered w-full input-primary" 
    bind:value={$linkToFile}
  />
</div>
{/if}
