<script lang="ts">
  import { fetchPlayList } from '$lib/hls'
  import { advanceMode } from '$lib/mode'

  let fetchButton = null
  let fetchText = null

  $:{
    if($advanceMode) {
      /* <!-- Advance mode --> */
      if (fetchButton){
        fetchButton.classList.remove('btn-primary')
        fetchButton.classList.add('btn-secondary')
      }
      if (fetchText) {
        fetchText.classList.remove('text-primary-content')
        fetchText.classList.add('text-secondary-content')
      }
    }else{
      /* <!-- Simple mode --> */
      if (fetchButton){
        fetchButton.classList.remove('btn-secondary')
        fetchButton.classList.add('btn-primary')
      }
      if (fetchText) {
        fetchText.classList.remove('text-secondary-content')
        fetchText.classList.add('text-primary-content') 
      }
    }
  }
</script>

<button class="btn btn-sm btn-primary" bind:this={fetchButton} on:click={() => fetchPlayList()} >
  <p class="px-3 font-semibold text-primary-conten" bind:this={fetchText} >fetch !</p>
</button>
