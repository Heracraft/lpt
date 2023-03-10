import express  from "express"
import http  from "http"
import { Server } from "socket.io"
import { ChatGPTAPI } from 'chatgpt'
import cors from "cors"

import {questions} from "./questions6.js"
import { log } from "console"

const app = express();
const server = http.createServer(app);

const io = new Server(server,{
    cors: {
        origin: "*"
    }
});

const api = new ChatGPTAPI({
  apiKey: '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'
})

let roomId="cobet"
let response
let conversationId=null,parentMessageId=null;
let shuffleConversationId=null,shuffleParentMessageId=null;

app.use(cors({
    origin: "*"
}))

app.get("/",(req,res)=>{
    res.send(questions)
})
// (async ()=>{
//     let response = await api.sendMessage("from what part of the bible is this text from And i will give thee the treasures of darkness and hidden riches of secret places")
//     console.log(response);
// })()
io.on("connection",socket=>{
    console.log("user connected",socket.id);
    socket.join(roomId)
    socket.on("prompt",async(request)=>{
        console.log(request);
        if(conversationId!=null&&parentMessageId!=null){
            response = await api.sendMessage(`generate another romantic poem in a unique style for valentine's day to a person called ${request.name} add emojis`, {
                conversationId: res.conversationId,
                parentMessageId: res.id,
                onProgress:(partial)=>io.to(socket.id).emit("partial",partial.text)
            })
            io.to(socket.id).emit("complete",response.text)
        }
        else{
            response = await api.sendMessage(`generate another romantic poem in a unique style for valentine's day to a person called ${request.name} add emojis`,{
                onProgress:(partial)=>io.to(socket.id).emit("partial",partial.text)
            })
            io.to(socket.id).emit("complete",response.text)
        }
    })
    socket.on("explain",async(request)=>{
        let prompt
        if (request.selected){
            prompt=`as an english teacher teaching ${request.section} explain with examples to a fifth grader who is learning the English language why exactly the answer to this question, "${request.question}" is "${request.answer}" but not any of these ${request.options}. use simple language and use similar sentences as examples to explain the reasoning behind the answer. include two of examples of similar sentences. for each example statement start with a <br> tag"`
        }
        else if (request.section=="Singular and plural"){
            prompt=`as an english teacher teaching ${request.section} explain with examples to a fifth grader who is learning the English language why the answer to this question, "${request.question}" is "${request.answer}" when they are told to Change the plural words into singular and singular to plural. use simple language and use similar sentences as examples. include two of examples of similar sentences. for each example statement start with a <br> tag"`
        }
        else if (request.section=="Fill in the blanks"){
            prompt=`as an english teacher teaching ${request.section} explain with examples to a fifth grader who is learning the English language why the answer to this question, "${request.question}" is "${request.answer}" when they are told to Write only one word to represent various nouns. use simple language and use similar sentences as examples. include two of examples of similar sentences. for each example statement start with a <br> tag"`
        }
        else if (request.section=="Passage"){
            prompt=`as an english teacher teaching ${request.section} explain with examples to a fifth grader who is learning the English language why the answer to this question, "${request.question}" is "${request.answer}"when they are told to Read the following passage, "${request.passage}", and answer the questions that follow"`
        }
        else if(request.instructions){
            prompt=`as an english teacher teaching ${request.section} explain with examples to a fifth grader who is learning the English language why exactly the answer to this question, "${request.question}" is "${request.answer}" when they are told to ${request.instructions}. use simple language and use similar sentences as examples to explain the reasoning behind the answer. include two of examples of similar sentences. for each example statement start with a <br> tag"`
        }
        console.log(request);
        if(conversationId!=null&&parentMessageId!=null){
            response = await api.sendMessage(prompt, {
                conversationId: res.conversationId,
                parentMessageId: res.id,
                onProgress:(partial)=>io.to(socket.id).emit("explainPartial",{explanation:partial.text,index:request.index,section:request.section})
            })
            io.to(socket.id).emit("explainComplete",{explanation:response.text,index:request.index,section:request.section})
        }
        else{
            response = await api.sendMessage(prompt, {
                onProgress:(partial)=>io.to(socket.id).emit("explainPartial",{explanation:partial.text,index:request.index,section:request.section})
            })
            io.to(socket.id).emit("explainComplete",{explanation:response.text,index:request.index,section:request.section})
        }
    })
    socket.on("assert",async(request)=>{
        let prompt=`from the question "${request.question}" the correct answer is ${request.answer}, is the answer "${request.selection}" also correct ?. Return the answer as  a single word, True or False`
        console.log(request);
        response = await api.sendMessage(prompt)
        io.to(socket.id).emit("assert",{packet:{section:request.section,index:request.index},evaluation:response.text})
    })
    socket.on("translate",async(request)=>{
        let prompt=`translate this text, "${request.text}", to kiswahili`
        response = await api.sendMessage(prompt,{
            onProgress:(partial)=>io.to(socket.id).emit("translatePartial",partial.text)
        })
        io.to(socket.id).emit("translateComplete",response.text)
    })
    socket.on("shuffle",async(request)=>{
        let sections=JSON.parse(request)
        let newExam=new Map()
        const shuffle=async (prompt,section)=>{
            if(conversationId!=null&&parentMessageId!=null){
                response = await api.sendMessage(prompt, {
                    conversationId: shuffleConversationId,
                    parentMessageId: shuffleParentMessageId,
                })
            }
            else{
                response = await api.sendMessage(prompt)
            }
            shuffleConversationId=response.conversationId
            shuffleParentMessageId=response.parentMessageId
            newExam.set(section.section,JSON.parse(response.text))
            socket.emit("shuffleProgress")

            // TODO: CONVERT THE MAP TO JS OBJECT THEN TO JSON
            // console.log(newExam,newExam.size.length==sections.length,newExam.entries.length,sections.length);
            if(newExam.size==sections.length){
                console.log("loong");
                let exam=[]
                for (let section of newExam.keys()){
                    console.log(section);
                    exam.push(newExam.get(section))
                }

                io.to(socket.id).emit("shuffle",exam)
            }
        }
        for (let section of sections){
            let prompt=`from the following json representation of a section of an English exam, generate a new JSON object to represent a similar but different section with a similar structure and character cases. return the response as a JSON object only without other text, ${JSON.stringify(section)}`
            shuffle(prompt,section)
        }
        
    })
    socket.on("score",user=>{
        console.log("score");
        io.to(roomId).except(user.id).emit("score",{username:user.name,score:user.score})
    })
})

server.listen(2932,()=>console.log("http://localhost:2932"))