<script>
    import {onMount} from "svelte"
    import {rankings,socketInstance} from "../js/store"
    console.log($$props)

    let socket=socketInstance

    // export let socket
    const verify=(rankings,username)=>{
        for (let user in rankings){
            if (user.username==username){
                return rankings.indexOf(user)
            }
        }
    }
    $:{
        if (socket.on){
                socket.on("score",user=>{
                    console.log(user);
                    if (verify($rankings,user.username)){
                        
                    }
                    let temp=new Object()
                    temp.username=user.name
                    temp.score=user.score
                    temp.speed=34
                    $rankings=[...$rankings,temp]
                })
        }
    }
    onMount(()=>{
    })
</script>
<div class={`${$$props.class}`}>
    <table class="max-w-sm w-full child:!text-xs text-neutral-700 " >
        <tr class="bg-primary-200 child:text-neutral-800">
            <th scope="col" class="px-6 py-3 ">Name</th>
            <th scope="col" class="px-6 py-3 ">score</th>
            <th scope="col" class="px-6 py-3 ">speed</th>
        </tr>
        {#each $rankings as rank}
            <tr class="hover:bg-primary-100 child:font-semibold border-solid border-b-[0.5px] border-neutral-500-600 border-spacing-1">
                <td class="px-6 py-3 text-primary">{rank.username}</td>
                <td class="px-6 py-3">{rank.score}</td>
                <td class="px-6 py-3">{rank.speed}s</td>
            </tr>
        {/each}
        
    </table>
    <!-- <section id="table">
        <div class="tableRow w-full bg-primary-600 border-solid border-2 border-neutral-700">
            <p class="name !my-0 leading-normal"></p>
            <p class="score !my-0 leading-normal"></p>
            <p class="speed !my-0 leading-normal"></p>
        </div>
        <div class="tableRow">
            <p class="name">Anwar</p>
            <p class="score">1</p>
            <p class="speed">43s</p>
        </div>
    </section> -->
</div>
<style>
    #table{
        grid-row: auto;
    }
    .tableRow{
        grid-template-areas: 'name name name name name name name name score speed';
        display: grid;

    }
    .name{grid-area: name;}
    .score{grid-area: score;}
    .speed{grid-area: speed;}
</style>