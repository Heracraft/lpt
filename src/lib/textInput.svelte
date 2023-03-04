<script>
    import {final} from "../js/store"

    export let data

    // console.log(data);
    // console.log($$props);

    let inputValue

    const handleInput=()=>{
            let temp=$final
            let sectionIndex
            for (let index = 0; index < temp.questions.length; index++) {
              if (temp.questions[index].section==data.section){
                sectionIndex=index
                break
              }
            }
            temp.questions[sectionIndex].questions[data.index].selection=inputValue
            $final=temp
            // console.log($final);
        }
    $:{
        if (inputValue){handleInput()}
    }
    $:{
        if(data.question && data.question.evaluation){
            // console.log("eval",data.question.evaluation.correct);
        }
    }
</script>

{#if data.question && data.question.evaluation}
    {#if data.question.evaluation.correct}
        <input bind:value={inputValue} style={$$props.style} type="text" id="first_name" class="bg-green-50 border-b-2 border-green-300 text-green-900 text-sm  focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 outline-none w-48 " placeholder="answer" required>
    {:else}
        <div class="relative my-2">
            <input bind:value={inputValue} style={$$props.style} type="text" id="first_name" class="bg-red-50 border-b-2 border-red-300 text-red-900 text-sm  focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 outline-none w-48 " placeholder="answer" required>
            <p class="absolute top-full left-0 text-neutral-400 font-semibold font-mono text-base !my-0 leading-normal">{data.question.answer}</p>
        </div>
    {/if}

{:else}
    <input bind:value={inputValue} style={$$props.style} type="text" id="first_name" class="bg-primary-50 border-b-2 border-primary-300 text-primary-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-primary-700 dark:border-primary-600 dark:placeholder-primary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 outline-none w-48 " placeholder="answer" required>
{/if}
