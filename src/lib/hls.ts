import { writable } from "svelte/store"
import { get } from "svelte/store"
import { linkToFile } from '$lib/file'
import Hls from 'hls.js'

export var videoSrc: string
export let video_player = writable<HTMLMediaElement>()

export let fetchPlayList = () => {
  videoSrc = get(linkToFile)
  console.log(`Playing: ${videoSrc}`)
  var _video_player = get(video_player)
  if (Hls.isSupported()) {
    var hls = new Hls()
    hls.loadSource(videoSrc)
    hls.attachMedia(_video_player)
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      _video_player.muted = true
      _video_player.play()
    })
  }
  // HLS.js is not supported on platforms that do not have Media Source
  // Extensions (MSE) enabled.
  //
  // When the browser has built-in HLS support (check using `canPlayType`),
  // we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video
  // element through the `src` property. This is using the built-in support
  // of the plain video element, without using HLS.js.
  else if (_video_player.canPlayType('application/vnd.apple.mpegurl')) {
    _video_player.src = videoSrc
    _video_player.addEventListener('canplay', function () {
      _video_player.play()
    })
  }
  return true
};