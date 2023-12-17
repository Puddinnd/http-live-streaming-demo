import { writable } from "svelte/store"

export let placeholder_link = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
export let linkToFile = writable<string>(placeholder_link)