<script>
    import {username} from "../js/store"

    let usernameInput=""
</script>

<article class="w-screen h-screen grid place-content-center">
    <section class="flex flex-col max-w-sm items-center svg:fill-primary">
        <svg class="w-40 h-40" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M234 780q51-39 114-61.5T480 696q69 0 132 22.5T726 780q35-41 54.5-93T800 576q0-133-93.5-226.5T480 256q-133 0-226.5 93.5T160 576q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340 476q0-59 40.5-99.5T480 336q59 0 99.5 40.5T620 476q0 59-40.5 99.5T480 616Zm0 360q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480 776q-53 0-100 15.5T294 836q39 29 86 44.5T480 896Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
        <input type="text" bind:value={usernameInput} class="my-4 outline-none p-2 text-xl bg-primary-50 border-solid border-primary-700 focus:border-primary-400 border-b-2 text-primary" placeholder="username">
        <button class="button w-fit my-2" on:click={()=>{
            $username=usernameInput
            localStorage.setItem("username",usernameInput)
        }}>Go</button>
    </section>
</article>