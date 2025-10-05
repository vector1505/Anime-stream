import express, {Application, Request, Response} from "express"

const app: Application = express();
const PORT : Number = 3000;

app.listen(PORT,()=>
{
    console.log("Working");
}
)

app.get('/',(req:Request,res:Response)=>{
    res.status(200).send({status:"Works"});
})

app.use('/works',(req:Request,res:Response)=>{
    res.send({"Works?" : "Ok brother"});
})




