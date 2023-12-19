<script lang="ts">
	import { advanceMode } from '$lib/mode'

  let simepleText = null
  let addvanceText = null

  $:{
    if($advanceMode) {
      /* <!-- Advance mode --> */
      if (simepleText){
        simepleText.classList.remove('text-primary')
        simepleText.classList.add('text-base-300')
      }
      if (addvanceText) {
        addvanceText.classList.remove('text-base-300')
        addvanceText.classList.add('text-secondary')
      }
    }else{
      /* <!-- Simple mode --> */
      if (simepleText){
        simepleText.classList.remove('text-base-300')
        simepleText.classList.add('text-primary')
      }
      if (addvanceText) {
        addvanceText.classList.remove('text-secondary')
        addvanceText.classList.add('text-base-300') 
      }
    }
  }
</script>

<div class="justify-self-end">
  <div class="grid grid-cols-3 gap-0">
    <div class="justify-self-end">
      <div class="text-primary" bind:this={simepleText}>simple</div>
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
      <div class="text-base-300" bind:this={addvanceText}>advance</div>
    </div>
  </div>
</div>