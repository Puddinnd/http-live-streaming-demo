<script lang="ts">
	import SwitchModeButton from './SwitchModeButton.svelte'
	import LinkInput from './LinkInput.svelte'
	import FetchButton from './FetchButton.svelte'
	import VideoPlayer from './VideoPlayer.svelte'

	import { onMount } from 'svelte'
	import { fetchPlayList } from '$lib/hls'
  onMount(() => {
    fetchPlayList()
  })
</script>

<svelte:head>
	<title>HLS Demo</title>
	<meta name="description" content="HLS Demo app" />
</svelte:head>

<section>
	<!-- M3U8 -->
	<div class="w-full flex flex-row justify-center " >
		<div class="w-5/6 sm:4/5">
			<div class="grid grid-cols-2 gap-3">
				<!-- Title -->
				<div class="text-lg">
					Link to .m3u8 file
				</div>
				<!-- Switch Mode Button -->
				<SwitchModeButton />
				<!-- Link Input -->
				<LinkInput />
				<!-- Fetch Button -->
				<div class="col-span-2 justify-self-end">
					<FetchButton />
				</div>
			</div>
		</div>
	</div>
	<!-- Video Player -->
	<div class="w-full flex flex-row justify-center mt-3">
		<div class="w-5/6 sm:4/5">
			<VideoPlayer />
		</div>
	</div>
</section>
