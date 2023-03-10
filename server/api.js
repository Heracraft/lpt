import express  from "express"
import { ChatGPTAPI } from 'chatgpt'
import cors from "cors"

const app = express();



const api = new ChatGPTAPI({
  apiKey: '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'
})

let response
let conversationId=null,parentMessageId=null;

app.use(cors({
    origin: "*"
}))

app.get("/",async(req,res)=>{
    console.log(req);
    let prompt=req.query.prompt
    if(prompt){
        response = await api.sendMessage(prompt)
        res.send(response.text)
    }
    else{
        res.send("invalid Request")
    }
})


app.listen(5283,()=>console.log("http://localhost:5283"))