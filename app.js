const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.set('view engine' , 'ejs')

mongoose.connect("mongodb://127.0.0.1:27017/PlayerData")
const PlayerDataSchema = {
    Player1Name : String,
    Player2Name : String
}

const PlayerData = mongoose.model("PlayerData" , PlayerDataSchema)
app.get("/" , (req , res)=>{
    res.render("playerdata")
})

app.get("/game" , (req, res)=>{
    res.render("index")
})

app.post("/" , (req,res)=>{
    var a = req.body.player1
    var b = req.body.player2
    const NewPlayerData = new PlayerData({
        Player1Name : req.body.player1,
        Player2Name : req.body.player2
    })

    PlayerData.find({} , (err , foundItems)=>{
        if(!err){
            res.render("index" , {PlayersName1 : a , PlayersName2 : b})
        }else{
            console.log(err);
        }
    })
})

app.listen(3000 , ()=>{
    console.log("Server Started at port 3000");
})
