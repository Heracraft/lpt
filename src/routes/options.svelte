<script>
  import { onMount } from "svelte";
  import {final} from "../js/store"


  export let options
  export let parent
  // console.log(parent);
  let selection=" "
</script>

<div class="flex flex-wrap">
  {#each options as option}
    {#if selection == option}
      {#if parent.question.evaluation}
        {#if parent.question.evaluation.correct}
          <span class="my-2 h-fit bg-green-100 border-2 border-green-300 text-green-900 p-2 rounded shadow text-base mx-5  min-w-[128px] text-center">{option}</span>
        {:else if !parent.question.evaluation.correct}
          <span class="my-2 h-fit bg-red-100 border-2 border-red-300 text-red-900 p-2 rounded shadow text-base mx-5 min-w-[128px] text-center">{option}</span>
        {/if}
      {:else}
        <span on:keydown={()=>{}} on:click={()=>{selection=""}}
          class="my-2 h-fit bg-primary text-white p-2 rounded shadow text-base mx-5 min-w-[128px] text-center">
          {option}
        </span>
      {/if}
    {:else}
      {#if parent.question.evaluation && parent.question.answer==option}
        <span class="my-2 h-fit bg-green-600 border-2 border-green-800 text-white p-2 rounded shadow text-base mx-5  min-w-[128px] text-center">{option}</span>
      {:else}
        <span
          on:keydown={()=>{}} 
          on:click={()=>{
            
            if(parent.question.evaluation) {return}
            selection=option
            // console.log($final.questions,parent.index);
            let temp=$final
            let sectionIndex
            for (let index = 0; index < temp.questions.length; index++) {
              console.log(temp.questions[index].section==parent.section,temp.questions[index].section,parent.section);
              
              if (temp.questions[index].section==parent.section){
                sectionIndex=index
                break
              }
            }
            console.log({ei:temp.questions},sectionIndex,{parent});
            
            temp.questions[sectionIndex].questions[parent.index].selection=option
            $final=temp
          }}
          class="my-2 h-fit hover:bg-primary hover:text-white p-2 rounded hover:bg-opacity-40 hover:border-solid border-[1px] hover:border-primary border-neutral-700 text-base mx-5  min-w-[128px] text-center">
          {option}
        </span>
      {/if}
    {/if}
    
  {/each}
</div>
-+
