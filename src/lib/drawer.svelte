<script>
    import {onMount} from "svelte"
    import Leaderboard from "./leaderboard.svelte";

    import anime from "../js/anime.es"
 
    let collapse,resize,switchModes

    onMount(()=>{
        resize=async()=>{
            if ( collapse){
                collapse.style.background="none"
                 anime({
                    targets:"#drawer",
                    translateX:"100%",
                    easing:"easeInCubic",
                    duration:100
                })
                setTimeout(()=>{collapse.style.display="none"},600)
                
            }
        }
    })
</script>

<article id="drawer" class="w-full h-screen bg-black bg-opacity-50 fixed flex m-0 justify-end z-10 prose-xl lg:prose-2xl" style="transform: translateX(100%);" bind:this={collapse}>
    <div class="w-full z-20 fixed bottom-0 top-0 left-0" on:click={()=>{resize();}}></div>
    <section class="flex flex-col justify-center p-2 card !rounded max-w-sm w-80 px-5 h-full fixed z-30 border-0 border-l-2">
        <h6 class="my-2">Top rankings</h6>
        <Leaderboard/>
    </section>
</article>