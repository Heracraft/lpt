<script>
  import Options from "./options.svelte";
  import Explanation from './explanation.svelte';


  import { onMount } from "svelte";

  export let data;
  export let socket;
  console.log(data);
  let explaination=null
  let translation=null
  let question, index, section
  $:{

     [question, index, section] = data;
  }
  onMount(()=>{
    socket.on("explainPartial",response=>{
      // console.log(response.section);
      if(response.index==index&&section.section==response.section){
        explaination=response.explanation
      }
    })
    socket.on("explainComplete",response=>{
      if(response.index==index&&section.section==response.section){
        explaination=response.explanation
      }
    })
    socket.on("translatePartial",response=>{
      // console.log(response.section);
      if(response.index==index&&section.section==response.section){
        translation=response.explanation
      }
    })
    socket.on("translateComplete",response=>{
      if(response.index==index&&section.section==response.section){
        translation=response.explanation
      }
    })
    socket.on("shuffle",_=>{
        explaination=null
    })
  });
</script>

<li class="rounded hover:bg-primary-50 p-2 relative group">
  <div class="flex flex-col">
    <p class="!m-1">
      {@html question.question}
    </p>
    <Options
      options={question.options}
      parent={{ section: section.section, index, question }}
    />
    <div class="flex z-20 absolute right-0 bottom-0 scale-0 group-hover:scale-100">
     
      <div class=" bg-primary-100 rounded-full p-2 fill-primary hover:bg-primary-400 hover:fill-white h-fit w-fit" 
        on:keydown={()=>{}}
        on:click={()=>{
          if(question.evaluation){
            let request=question
            if(section.selected){request.selected=section.selected}
            request.section=section.section
            request.index=index
            request.instructions=section.instructions
            socket.emit("explain",request)
          }
        }}> 
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" ><path d="M478 816q21 0 35.5-14.5T528 766q0-21-14.5-35.5T478 716q-21 0-35.5 14.5T428 766q0 21 14.5 35.5T478 816Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342 438l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506 530q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg >
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    {#if explaination}
      <Explanation content={explaination}/>
    {/if}
    {#if translation}
      <Explanation content={translation} variant={"outline"}/>

    {/if}
  </div>
</li>
