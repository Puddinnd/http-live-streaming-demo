<script lang="ts">
	import { onMount } from 'svelte';
	import Hls from 'hls.js';

	let placeholder_link = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
	let linkToFile = placeholder_link;
	var videoSrc;
	let fetchPlayList = () => {};

	onMount(() => {
    var video = document.getElementById('video') as HTMLMediaElement;
		fetchPlayList = () => {
			videoSrc = linkToFile
			console.log(`Playing: ${videoSrc}`);
			if (Hls.isSupported()) {
				var hls = new Hls();
				hls.loadSource(videoSrc);
				hls.attachMedia(video);
				hls.on(Hls.Events.MEDIA_ATTACHED, function () {
					video.muted = true;
					video.play();
				});
			}
			// HLS.js is not supported on platforms that do not have Media Source
			// Extensions (MSE) enabled.
			//
			// When the browser has built-in HLS support (check using `canPlayType`),
			// we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video
			// element through the `src` property. This is using the built-in support
			// of the plain video element, without using HLS.js.
			else if (video.canPlayType('application/vnd.apple.mpegurl')) {
				video.src = videoSrc;
				video.addEventListener('canplay', function () {
					video.play();
				});
			}
			return true;
		}
		fetchPlayList();
  });
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
				<!-- Link Input -->
				<div class="col-span-2">
					<input type="text" placeholder={placeholder_link} class="input input-sm input-bordered input-primary w-full" bind:value={linkToFile} />
				</div>
				<!-- Fetch Button -->
				<div class="col-span-2 justify-self-end">
					<button class="btn btn-primary btn-sm" on:click={() => fetchPlayList()}>
						<p class="px-3 font-semibold text-primary-content">fetch !</p>
					</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Video Player -->
	<div class="w-full flex flex-row justify-center mt-3">
		<div class="w-5/6 sm:4/5">
			<video id="video" controls width="100%">
				<track kind="captions">
			</video>
		</div>
	</div>
</section>
