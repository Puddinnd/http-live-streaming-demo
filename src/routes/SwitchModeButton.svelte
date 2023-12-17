<script lang="ts">
	import { advanceMode } from '$lib/mode'
</script>

<div class="justify-self-end">
  <div class="grid grid-cols-3 gap-0">
    <div class="justify-self-end">
      {#if $advanceMode}
        <div class="text-base-300">simple</div>
      {:else}
        <div class="text-primary">simple</div>
      {/if}
    </div>
    <div class="justify-self-center pt-1">
      <input 
        id="mode-switcher"
        type="checkbox" 
        class="toggle toggle-sm toggle-secondary bg-primary border-primary" 
        bind:checked={$advanceMode} 
      />
    </div>
    <div class="justify-self-start">
      {#if $advanceMode}
        <div class="text-secondary">advance</div>
      {:else}
        <div class="text-base-300">advance</div>
      {/if}
    </div>
  </div>
</div>