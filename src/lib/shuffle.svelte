<script>
    export let socket,length
    let progress=0
    console.log({length});
    socket.on("shuffleProgress",_=>{
        progress=progress+1
    })
    $:{
        console.log({progress});
    }
</script>

<article class="w-full h-screen bg-black bg-opacity-50 fixed top-0 right-0 left-0 flex m-0 justify-center items-center z-10 prose-xl lg:prose-2xl">
    <section class="max-w-sm min-w-[300px] flex flex-col items-center justify-center bg-white rounded-md p-5 aspect-video">
        <div>
            {#if progress!=length}
                <h3 class="!my-2">Shuffling...</h3>
            {:else}
                <span class="flex items-center svg:ml-2 svg:fill-emerald-500">
                    <h3 class="!my-2">Done</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m424 760 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                </span>
            {/if}
        </div>
        <div class="flex w-full">
            {#each Array(length) as _,index}
                {#if index+1 <= progress}
                    <span class="rounded-full w-full bg-primary h-2 mx-2"></span>
                {:else}
                    <span class="rounded-full w-full bg-primary-300 h-2 mx-2"></span>
                {/if}
            {/each}
        </div>
    </section>
</article>