<script lang="ts">
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition';
  import { get } from 'svelte/store'
	import { quintIn, quintOut } from 'svelte/easing';
  import { advanceMode } from '$lib/mode'
  import { headerList, getNewHeader } from '$lib/httpHeader'

  let moveIn = { delay: 100, duration: 300, easing: quintIn, axis: 'y' }
  let moveOut = { delay: 100, duration: 300, easing: quintOut, axis: 'y' }
  let currentTransition = moveIn

  $:{
    if ($advanceMode){
      /* <!-- Advance mode --> */
      currentTransition = moveOut
    }else{
      /* <!-- Simple mode --> */
      currentTransition = moveIn
    }
  }

  let lastIndex = get(headerList).length
  const addHeaderToList = () =>  {
    $headerList = [...$headerList, getNewHeader(lastIndex++, "header","value")]
  }
  const removeHeaderFromList = (h) => {
    $headerList = $headerList.filter((v)=>v!==h);
  }

  onMount(() => {
    if(lastIndex === 0)
      $headerList = [...$headerList, getNewHeader(lastIndex++, "Authorization","Basic YWRtaW46cGFzc3dvcmQ=")]
  })
</script>

{#if $advanceMode}
  <div class="col-span-2 pt-4" transition:slide={currentTransition}>
    <div class="text-lg">
      HTTP Headers
    </div>
    <div class="pt-3">
      <table class="table-sm w-full">
        <!-- head -->
        <thead>
          <tr class="grid grid-cols-10 border-secondary border-t-[1px]">
            <td class="col-span-1 text-xs justify-self-center">Enable</td>
            <td class="col-span-2 text-xs justify-self-center">Header</td>
            <td class="col-span-6 text-xs justify-self-center">Value</td>
            <td class="col-span-1 text-xs justify-self-center">Del</td>
          </tr>
        </thead>
        <!-- body -->
        <tbody>
          <!-- rows -->
          {#each $headerList as h }
          <tr class="grid grid-cols-10 gap-0 border-secondary border-t-[1px]">
            <th class="col-span-1 self-center pt-3">
                <input id="henable{h.index}" type="checkbox" class="checkbox" bind:checked={h.checked} />
            </th>
            <td class="col-span-2 self-center">
              <input id="hname{h.index}" type="text" placeholder="Type here" class="input input-bordered input-secondary-content w-full input-xs" bind:value={h.name} />  
            </td>
            <td class="col-span-6 self-center">
              <input id="hvalue{h.index}" type="text" placeholder="Type here" class="input input-bordered input-secondary-content w-full input-xs" bind:value={h.value} />  
            </td>
            <td class="col-span-1 self-center">
              <button class="w-full hover:text-error" on:click={removeHeaderFromList(h)}>x</button>
            </td>
          </tr>
          {/each}
          <!-- add more header -->
          <tr class="grid border-secondary " > 
            <td class="col-span-10 grid p-0">
              <button class="w-full text-xs btn btn-outline btn-sm btn-secondary" on:click={addHeaderToList}>
                add more header
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
{/if}

