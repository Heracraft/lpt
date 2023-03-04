<script>
  import {socketInstance} from "../js/store"
  import {onMount} from "svelte"

  export let content
  export let variant = undefined;

  let translation=null
  let socket

  onMount(()=>{
    socket=$socketInstance
    socket.on("translatePartial",response=>{
      variant=true
      translation=response
    })
  })

</script>


<div class="bg-primary-500 text-white rounded shadow-lg m-5 p-5 prose-xl max-w-[65ch]">
  <p>{ @html content}</p>
  <div class=" flex items-center group ml-auto bg-primary-100 rounded-full hover:px-5 hover:py-2 p-2 hover:bg-primary-300 shadow-lg text-primary hover:text-white fill-primary hover:fill-white h-fit w-fit" 
          on:keydown={()=>{}}
          on:click={()=>{
              let request=new Object()
              request.text=content
              socket.emit("translate",request)
          }}> 
          <p class="!my-0 w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-fit group-hover:h-fit group-hover:!mr-2 text-xl transition">Translate</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m476 976 182-480h84l182 480h-84l-42-122H604l-44 122h-84Zm152-192h144l-70-198h-4l-70 198Zm-468 72-56-56 202-202q-38-42-66.5-87T190 416h84q18 36 38.5 65t49.5 61q44-48 73-98.5T484 336H40v-80h280v-80h80v80h280v80H564q-21 71-57 138t-89 126l96 98-30 82-124-124-200 200Z"/></svg>
        </div>
</div>
{#if translation}
  <center>
    <h6 class="font-semibold">Kiswahili Translation:</h6>
  </center>
  <div class="bg-primary-100 text-primary rounded shadow-lg m-5 p-5 prose-xl max-w-[65ch]">
    <p>{ @html translation}</p>
  </div>

{/if}

<style>
    :root{
        scroll-behavior: smooth;
    }
</style>

