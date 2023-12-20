<script lang="ts">
	import { placeholder_link, linkToFile } from '$lib/file'
  import { advanceMode } from '$lib/mode'
  import HeaderInput from './HeaderInput.svelte'

  let linkInput = null

  $:{
    if ($advanceMode){
      /* <!-- Advance mode --> */
      if(linkInput) {
        linkInput.classList.remove('input-primary')
        linkInput.classList.add('input-secondary')
      }
    }else{
      /* <!-- Simple mode --> */
      if(linkInput) {
        linkInput.classList.remove('input-secondary')
        linkInput.classList.add('input-primary')
      }
    }
  }
</script>

<div class="col-span-2">
  <input 
  id="link-input"
    type="text" 
    placeholder={placeholder_link} 
    class="input input-sm input-bordered w-full input-primary" 
    bind:value={$linkToFile}
    bind:this={linkInput}
  />
  <HeaderInput />
</div>
