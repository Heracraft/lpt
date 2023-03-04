import {writable} from "svelte/store"

// export const colorTheme=writable(null)
export let final=writable({questions:[],marked:false})
export let rankings=writable([{username:"Anwar",score:2,speed:34}])
export let username=writable(null)
export let explanations=writable(new Map())
export let socketInstance=writable(null)