<script>
    import {onMount} from "svelte"
    import TopBar from "$lib/topBar.svelte";
    import Drawer from "$lib/drawer.svelte";
    import Login from "$lib/login.svelte";

    import "../style/tailwind.css"

    import {username} from "../js/store"


    onMount(()=>{
        $username=localStorage.getItem("username")||null
    })
</script>
{#if $username}
    <TopBar/>
    <Drawer/>
    <slot/>
{:else}
    <Login/>
{/if}
