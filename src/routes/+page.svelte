<script>
  import Explanation from './explanation.svelte';
  import MultipleChoice from './multipleChoice.svelte';
  import Shuffle from '$lib/shuffle.svelte';
  import Leaderboard from "$lib/leaderboard.svelte"

  import { onMount } from "svelte";
  import TextInput from "$lib/textInput.svelte"

  import {final,username,explanations,socketInstance} from "../js/store"
  import {io} from "../js/socket.io.esm"
  import anime from "../js/anime.es"

  let socket
  let questions = [];
  let sections=[]
  let singulars=[]
  let plurals=[]
  let score=null
  let nounExplaination=null
  let fillExplaination=null
  let passageExplanation=null
  let resizeDrawer
  let shuffling=false

  const preProcess=(input)=>{
    return input.replace(/_/g, '')
  }

  const prune=(qn)=>{
    let array=Object.keys(qn)
    let index = array.indexOf("selection");
    if (index > -1) {
      array.splice(index, 1);
    }
    array=Object.keys(qn)
    index = array.indexOf("evaluation");
    if (index > -1) {
      array.splice(index, 1);
    }
    return array.length
  }

  const getKey=(question)=>{
    for (let key of Object.keys(question)){
      if(key !="answer" && key != "question"){
        return key
      }
    }
  }

  const nounForms=(qns)=>{
      let key=getKey(qns[0])
      console.log(key,qns);
      let singulars=[]
      let plurals=[]
      for (let qn of qns){
        if (qn[key]=="singular"){
            singulars.push({content:qn})
            plurals.push({contentType:"__input",content:qn})
        }
        else{
            singulars.push({contentType:"__input",content:qn})
            plurals.push({content:qn})
        }
    }
    // console.log(plurals);
    return [singulars,plurals]
    
  }

  const loadQuestions = async()=>{
    let result = await fetch("http://localhost:2932/");
    result = await result.text();
    questions = JSON.parse(result)
    questions=sortSections(questions)
    $final={...$final,questions}
    for (let section of questions){
      sections.push(section.section)
    }
    console.log(sections);
    let temp=$explanations
    temp.clear()
    $explanations=temp
    
  }
  
  const sortSections=(questions)=>{
    let temp=[]
    for (let section of questions){
      if(section.selected){
        temp.push(section)
      }
    }
    for (let section of questions){
      if(!section.selected){temp.push(section)}
    }
    return temp
  }

  const markQuestion=(finalRaw)=>{
    finalRaw
    $final=finalRaw
  }

  const mark=()=>{
    score=0
    for (let section of $final.questions){
        if(!section.ai){
            for (let index = 0; index < section.questions.length; index++) {
                let temp=$final
                let sectionIndex=temp.questions.indexOf(section)
                let answer=section.questions[index].answer
                let selection=section.questions[index].selection
                
                if(!section.selected && selection){
                    answer=answer.toString().toLowerCase()
                    selection=selection.toString().toLowerCase()
                }
                if (answer==selection){
                    score=score+1
                    socket.emit("score",{username,score,id:socket.id})
                    temp.questions[sectionIndex].questions[index].evaluation={marked:true,correct:true}
                }
                else{
                    temp.questions[sectionIndex].questions[index].evaluation={marked:true,correct:false}

                }
                temp.marked=true
                $final=temp
            }
            console.log("marked",$final);
        }
        else{
            for (let index = 0; index < section.questions.length; index++) {
               if(section.questions[index] && section.questions[index].selection){
                   let packet=section.questions[index]
                   packet={...packet,index,section:section.section}
                   socket.emit("assert",packet)
               }
            }
           
        }
    }
    window.scrollTo(0,0)
  }
  
  $:{
    if($final&&$final.questions&&$final.questions[0]){
      for(let section of $final.questions){
        if (prune(section.questions[0])==3 && !section.selected){
          [singulars,plurals] = nounForms(section['questions'])
        }
      }
      // console.log($final);
    }
  }

  // $:{
  //   for (let section of $final.questions){
  //     $explanations.set(section.section,null)
  //   }
  // }

  onMount(async () => {
    socket=io("http://localhost:2932")
    $socketInstance=socket
    loadQuestions()
    resizeDrawer=()=>{
          let parentElement=document.getElementById("drawer")
            if(parentElement.style.transform ==" "){
              parentElement.style.background="none"
                   anime({
                      targets:"#drawer",
                      translateX:"100%",
                      easing:"easeInCubic",
                      duration:500
                  })
              setTimeout(()=>{collapse.style.display="none"},600)
            }
            else{
              parentElement.style.display="flex"
              parentElement.style.background="rgba(0,0,0,.5)"
                   anime({
                      targets:"#drawer",
                      translateX:"0%",
                      easing:"easeInCubic",
                      duration:500
                  })
            }
        }
    socket.on("assert",response=>{
        console.log("assertion",response);
        
        let temp=$final
        let sectionIndex
        for (let index = 0; index < temp.questions.length; index++) {
          if (temp.questions[index].section==response.packet.section){
            sectionIndex=index
            break
          }
        }
        if (response.evaluation=='true'||response.evaluation=='True'){
            temp.questions[sectionIndex].questions[response.packet.index].evaluation={marked:true,correct:true}
        }
        else if(response.evaluation=='false'||response.evaluation=='False'){
            temp.questions[sectionIndex].questions[response.packet.index].evaluation={marked:true,correct:false}
        }
        $final=temp
        console.log($final);
        
    })
    socket.on("explainPartial",response=>{
      //   console.log(response.section);
      if (sections.indexOf(response.section) != -1){
        console.log("innnnnnn");
        $explanations=$explanations.set(response.section,response.explanation)
      }
      // console.log("partiL",{section:response.section},{sections},$explanations,response.section.toString() in sections);
    })
    socket.on("explainComplete",response=>{
      if ( sections.indexOf(response.section) != -1){
        $explanations=$explanations.set(response.section,response.explanation)
        console.log($explanations);
      }
    })
    socket.on("shuffle",newExam=>{
      let temp=$final
      console.log({newExam});
      $explanations.clear()
      let newSections=[]
      for (let newSection of newExam){
        newSections.push(newSection)
      }
      newSections=sortSections(newSections)
      temp.questions=newSections
      for (let section of temp.questions){
        sections.push(section.section)
      }
      $final=temp
      shuffling=false

    })
    
  });
</script>

<article class="prose-xl lg:prose-2xl max-w-none p-5">
  <div class="flex justify-between items-center">
      <h1 class="!my-0">Exaaam</h1>
      <div class="flex items-center child:ml-2">
        <h6 class="mr-1">score:{score||0 }</h6>
        <div class="bg-primary-100 hover:bg-primary-400 !text-neutral-700 rounded-full shadow hover:!text-white px-5 py-1">{$username}</div>
        <div class="lg:hidden  bg-primary-100 rounded-full p-2 fill-primary hover:bg-primary-400 hover:fill-white h-fit w-fit" on:click={()=>{
          resizeDrawer()
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M160 856h160V536H160v320Zm240 0h160V296H400v560Zm240 0h160V616H640v240ZM80 936V456h240V216h320v320h240v400H80Z"/></svg>
        </div>
        <div class="bg-primary-100 rounded-full p-2 fill-primary hover:bg-primary-400 hover:fill-white h-fit w-fit" on:click={()=>{
            socket.emit("shuffle",JSON.stringify($final.questions))
            shuffling=true
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path><path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path></svg>
        </div>
        <div class="bg-primary-100 rounded-full p-2 fill-primary hover:bg-primary-400 hover:fill-white h-fit w-fit" on:click={()=>{
            anime({
                targets:"#refresh",
                rotate:"360deg",
                duration:3000
            })
            loadQuestions()
          }}>
            <svg id="refresh" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 20q-3.35 0-5.675-2.325Q4 15.35 4 12q0-3.35 2.325-5.675Q8.65 4 12 4q1.725 0 3.3.713 1.575.712 2.7 2.037V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2Q13.625 6 12 6 9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325Q14.75 20 12 20Z"/></svg>
        </div>
        
      </div>

  </div>
  <div class="spacer" />
  
  <article class="flex">
    <aside class="lg:flex hidden pt-16 h-auto bg-neutral-50 md:max-w-sm lg:max-w-md w-auto">
      <Leaderboard {socket}/>
    </aside>
    <section class="w-full">
      {#each $final.questions as section}
        {#if shuffling}
          <Shuffle {socket} length={$final.questions.length}/>
        {/if}
        <div class="flex flex-col justify-center items-center px-5 py-2">
          <div>
              <h5 class="font-bold !my-1">{section['instructions']}</h5>
              {#if section.section != "Tenses"}
                  <div class="spacer"></div>
              {/if}
          </div>
          {#if  section.section=="Passage"}
              <p>{section.passage}</p>
          {/if}
          <ol class="!my-0 list-decimal li:justify-start">

            {#if section.selected}
              {#each section['questions'] as question,index}
              <!-- {@const dataz=[question,index,section]} -->
              <!-- {@debug dataz} -->
              <MultipleChoice data={[question,index,section]} {socket}/>
              {/each}
            {:else if prune(section.questions[0])==2}
              <li class="my-2">
                  <div class="flex">
                      <div class="flex flex-col">
                          {#each section['questions'] as question}
                              <p class="!m-3">
                                  {preProcess(question.question)}
                              </p>
                          {/each}
                      </div>
                      <div class="flex flex-col justify-evenly">
                          {#each section['questions'] as question,index}
                              <div class="relative group">
                                  <div class="z-20 absolute right-0 bottom-0 scale-0 group-hover:scale-100 bg-primary-100 rounded-full p-2 fill-primary hover:bg-primary-400 hover:fill-white h-fit w-fit" 
                                      on:keydown={()=>{}}
                                      on:click={()=>{
                                        console.log(question);
                                        if(question.evaluation){
                                          let request=question
                                          request.section=section.section
                                          request.index=index
                                          request.instructions=section.instructions
                                          socket.emit("explain",request)
                                        }
                                      }}> 
                                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" ><path d="M478 816q21 0 35.5-14.5T528 766q0-21-14.5-35.5T478 716q-21 0-35.5 14.5T428 766q0 21 14.5 35.5T478 816Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342 438l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506 530q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg >
                                  </div>
                                  <TextInput data={{question,index,section:section.section}}/>
                              </div>
                          {/each}
                      </div>
                  </div>
                  {#if $explanations.get(section.section)}
                      <p>
                          <Explanation content={$explanations.get(section.section)}/>
                      </p>
                  {/if}
              </li>
            {:else if prune(section.questions[0])==3 }
            <!-- {@const [singulars,plurals]=nounForms(section['questions'])} -->
              <div class="grid grid-cols-2 gap-2">
                  <p class="font-semibold" style="grid-column:1;grid-row:1">Singular</p>
                  {#each singulars as question,index}
                      {#if question.contentType=="__input"}
                              <div class="relative group" style={`grid-column:1;grid-row:${index+2};`}>
                                  <TextInput data={{question:question.content,index,section:section.section}}/>
                                  <div class="z-20 absolute right-0 bottom-0 scale-0 group-hover:scale-100 bg-primary-100 rounded-full p-2 fill-primary hover:bg-primary-400 hover:fill-white h-fit w-fit" 
                                      on:keydown={()=>{}}
                                      on:click={()=>{
                                        console.log(question);
                                        if(question.content.evaluation){
                                          let request=question.content
                                          request.section=section.section
                                          request.index=index
                                          request.instructions=section.instructions
                                          socket.emit("explain",request)
                                        }
                                      }}> 
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 96 960 960"><path d="M478 816q21 0 35.5-14.5T528 766q0-21-14.5-35.5T478 716q-21 0-35.5 14.5T428 766q0 21 14.5 35.5T478 816Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342 438l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506 530q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg >
                                  </div>
                              </div>
                              
                      {:else}
                          <p class="!m-3" style={`grid-column:1;grid-row:${index+2};`}>
                              {question.content.question}
                          </p>
                      {/if}
                      
                  {/each}
                  <p class="font-semibold" style="grid-column:2;grid-row:1">Plural</p>
                  {#each plurals as question,index}
                      {#if question.contentType=="__input"}
                          <div class="relative group" style={`grid-column:2;grid-row:${index+2};`}>
                              <TextInput data={{question:question.content,index,section:section.section}}/>
                              <div class="z-20 absolute right-0 bottom-0 scale-0 group-hover:scale-100 bg-primary-100 rounded-full p-2 fill-primary hover:bg-primary-400 hover:fill-white h-fit w-fit" 
                                  on:keydown={()=>{}}
                                  on:click={()=>{
                                      if(question.content.evaluation){
                                        console.log(question.content.evaluation);
                                        console.log("emiting");
                                        
                                      let request=question.content
                                      request.section=section.section
                                      request.index=index
                                      socket.emit("explain",request)
                                    }
                                  }}> 
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 96 960 960"><path d="M478 816q21 0 35.5-14.5T528 766q0-21-14.5-35.5T478 716q-21 0-35.5 14.5T428 766q0 21 14.5 35.5T478 816Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342 438l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506 530q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg >
                              </div>
                          </div>
                      {:else}
                      <p class="!m-3" style={`grid-column:2;grid-row:${index+2};`}>
                          {question.content.question}
                      </p>
                      {/if}
                  {/each}
                  <p class="px-2 max-w-[65ch] col-span-2">
                      {#if $explanations.get(section.section)}
                          <Explanation content={ $explanations.get(section.section)}/>
                      {/if}
                  </p>
                  <!-- <p class="px-2 max-w-[65ch]">
                    {#if translation}
                      {@html translation}
                    {/if}
                  </p> -->
              </div>
            {:else if  section.passage}
            <div class="flex">
                <div class="flex flex-col">
                    {#each section['questions'] as question}
                          <li class="my-2">
                              <p class="!m-3">
                                  {preProcess(question.question)}
                              </p>
                          </li>
                      {/each}
                  </div>
                      <div class="flex flex-col justify-evenly">
                          {#each section['questions'] as question,index}
                              <div class="relative group">
                                  <div class="z-20 absolute right-0 bottom-0 scale-0 group-hover:scale-100 bg-primary-100 rounded-full p-2 fill-primary hover:bg-primary-400 hover:fill-white h-fit w-fit" 
                                      on:keydown={()=>{}}
                                      on:click={()=>{
                                      console.log(question);
                                      if(question.evaluation){
                                          let request=question
                                          request.section=section.section
                                          request.index=index
                                          request.passage=section.passage
                                          socket.emit("explain",request)
                                      }
                                      }}> 
                                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" ><path d="M478 816q21 0 35.5-14.5T528 766q0-21-14.5-35.5T478 716q-21 0-35.5 14.5T428 766q0 21 14.5 35.5T478 816Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342 438l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506 530q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg >
                                  </div>
                                  <TextInput data={{question,index,section:section.section}}/>
                              </div>
                          {/each}
                      </div>
                  </div>
                  {#if $explanations.get(section.section)}
                      <Explanation content={$explanations.get(section.section)}/>
                  {/if}
            {/if}
              
          </ol>
        </div>
      {/each}
    </section>
  </article>
  <div class="flex justify-end p-5">
    <button class="button" on:click={()=>{mark()}}>
        Submit
    </button>
  </div>
</article>

<style>
    :root{
        scroll-behavior: smooth;
    }
</style>