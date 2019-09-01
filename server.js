//jshint esversion:6
var fs = require('fs');
const mongodb=require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _=require("lodash");
const mongoose=require("mongoose");
const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var sequencedata=[];
var data=[];
var id;
var myconfig=require(__dirname+"/myconfig.json");
mongoose.connect("mongodb+srv://mongoadmin:test123@cluster0-n2oq4.mongodb.net/itsa",{ useNewUrlParser: true });
let auth="false";
var message="";

const event1Schema={
  uniqueid:Number,
  name:String,
  email:String,
  phone:String,
  teamno:String,
  collegename:String,
  event:String,
  payment:String,
};

const event2Schema={
  uniqueid:Number,
  name:String,
  email:String,
  phone:String,
  teamno:String,
  collegename:String,
  event:String,
  payment:String,
};
const event3Schema={
  uniqueid:Number,
  name:String,
  email:String,
  phone:String,
  teamno:String,
  collegename:String,
  event:String,
  payment:String,
};
const event4Schema={
  uniqueid:Number,
  name:String,
  email:String,
  phone:String,
  teamno:String,
  collegename:String,
  event:String,
  payment:String,
};
const event5Schema={
  uniqueid:Number,
  name:String,
  email:String,
  phone:String,
  teamno:String,
  collegename:String,
  event:String,
  payment:String,
};
const event6Schema={
  uniqueid:Number,
  name:String,
  email:String,
  phone:String,
  teamno:String,
  collegename:String,
  event:String,
  payment:String,
};
const event7Schema={
  uniqueid:Number,
  name:String,
  email:String,
  phone:String,
  teamno:String,
  collegename:String,
  event:String,
  payment:String,
};
const event8Schema={
  uniqueid:Number,
  name:String,
  email:String,
  phone:String,
  teamno:String,
  collegename:String,
  event:String,
  payment:String,
};

const model1=mongoose.model("event1",event1Schema);
const model2=mongoose.model("event2",event2Schema);
const model3=mongoose.model("event3",event3Schema);
const model4=mongoose.model("event4",event4Schema);
const model5=mongoose.model("event5",event5Schema);
const model6=mongoose.model("event6",event5Schema);
const model7=mongoose.model("event7",event5Schema);
const model8=mongoose.model("event8",event5Schema);

app.get("/",function(req,res){
  res.render("registration",{
    message:message
  });
  message="";
});

app.get("/demo",function(req,res){
  res.render("demo");
});

app.post("/registrationsubmit",function(req,res){
  var name=req.body.fullname;
  var phone=req.body.phone;
  var email=req.body.emailaddress;
  var college=req.body.college;
  var eventname=req.body.eventtype;
  var teamno=req.body.teamno;
  var payment=req.body.payment;
if(eventname==="1.ShutterUp"){

  let model=new model1({
    uniqueid:myconfig.event1,
    name:name,
    email:email,
    phone:phone,
    teamno:teamno,
    collegename:college,
    event:eventname,
    payment:payment
  });
  model.save()
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(error);
    res.render("error");
  });
  const send = require('gmail-send')({
    user: 'pccoeitsa2k19@gmail.com',
    pass: 'Pccoe@itsa',
    to:   email,
    subject: 'About Ripples 2019 event registration',
  });
  send({
    text:"Dear "+name+", "+"Your registration has been successful. Your registration id for event 'ShutterUp' is "+myconfig.event1.toString(),
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
  });
  myconfig.event1=myconfig.event1+1;
  fs.writeFileSync(__dirname+"/myconfig.json", JSON.stringify(myconfig));


}else if (eventname==="2.Play Placing") {
  let model=new model2({
      uniqueid:myconfig.event2,
    name:name,
    email:email,
    phone:phone,
    teamno:teamno,
    collegename:college,
    event:eventname,
    payment:payment
  });
  model.save()
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(err);
    res.render("error");
  });

  const send = require('gmail-send')({
    user: 'pccoeitsa2k19@gmail.com',
    pass: 'Pccoe@itsa',
    to:   email,
    subject: 'About Ripples 2019 event registration',
  });
  send({
    text:"Dear "+name+", "+"Your registration has been successful. Your registration id for event 'Play Placing' is "+myconfig.event2.toString(),
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
  });
  myconfig.event2=myconfig.event2+1;
  fs.writeFileSync(__dirname+"/myconfig.json", JSON.stringify(myconfig));

}else if (eventname==="3.Respawn") {
  let model=new model3({
    uniqueid:myconfig.event3,
    name:name,
    email:email,
    phone:phone,
    teamno:teamno,
    collegename:college,
    event:eventname,
    payment:payment
  });
  model.save()
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(err);
    res.render("error");
  });

  const send = require('gmail-send')({
    user: 'pccoeitsa2k19@gmail.com',
    pass: 'Pccoe@itsa',
    to:   email,
    subject: 'About Ripples 2019 event registration',
  });
  send({
    text:"Dear "+name+", "+"Your registration has been successful. Your registration id for event 'Respawn' is "+myconfig.event3.toString(),
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
  });
  myconfig.event3=myconfig.event3+1;
  fs.writeFileSync(__dirname+"/myconfig.json", JSON.stringify(myconfig));

}else if (eventname==="4.Quizcraft") {
  let model=new model4({
    uniqueid:myconfig.event4,
    name:name,
    email:email,
    phone:phone,
    teamno:teamno,
    collegename:college,
    event:eventname,
    payment:payment,
  });
  model.save()
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(err);
    res.render("error");
  });

  const send = require('gmail-send')({
    user: 'pccoeitsa2k19@gmail.com',
    pass: 'Pccoe@itsa',
    to:   email,
    subject: 'About Ripples 2019 event registration',
  });
  send({
    text:"Dear "+name+", "+"Your registration has been successful. Your registration id for event 'Quizcraft' is "+myconfig.event4.toString(),
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
  });
  myconfig.event4=myconfig.event4+1;
  fs.writeFileSync(__dirname+"/myconfig.json", JSON.stringify(myconfig));

}else if (eventname==="5.Design thinking workshop") {
  let model=new model5({
    uniqueid:myconfig.event5,
    name:name,
    email:email,
    phone:phone,
    teamno:teamno,
    collegename:college,
    event:eventname,
    payment:payment
  });
  model.save()
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(err);
    res.render("error");
  });

  const send = require('gmail-send')({
    user: 'pccoeitsa2k19@gmail.com',
    pass: 'Pccoe@itsa',
    to:   email,
    subject: 'About Ripples 2019 event registration',
  });
  send({
    text:"Dear "+name+", "+"Your registration has been successful. Your registration id for event 'Design thinking workshop' is "+myconfig.event5.toString(),
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
  });
  myconfig.event5=myconfig.event5+1;
  fs.writeFileSync(__dirname+"/myconfig.json", JSON.stringify(myconfig));
}else if (eventname==="6.Mafia") {
  let model=new model6({
    uniqueid:myconfig.event6,
    name:name,
    email:email,
    phone:phone,
    teamno:teamno,
    collegename:college,
    event:eventname,
    payment:payment
  });
  model.save()
  .then((data)=> {
    console.log(data);

   })
  .catch((err)=> {
    console.log(err);
    res.render("error");

  });

  const send = require('gmail-send')({
    user: 'pccoeitsa2k19@gmail.com',
    pass: 'Pccoe@itsa',
    to:   email,
    subject: 'About Ripples 2019 event registration',
  });
  send({
    text:"Dear "+name+", "+"Your registration has been successful. Your registration id for event 'Mafia' is "+myconfig.event6.toString(),
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
  });
  myconfig.event6=myconfig.event6+1;
  fs.writeFileSync(__dirname+"/myconfig.json", JSON.stringify(myconfig));
}else if (eventname==="7.Clash of coders") {
  let model=new model7({
    uniqueid:myconfig.event7,
    name:name,
    email:email,
    phone:phone,
    teamno:teamno,
    collegename:college,
    event:eventname,
    payment:payment
  });
  model.save()
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(err);
    res.render("error");
  });

  const send = require('gmail-send')({
    user: 'pccoeitsa2k19@gmail.com',
    pass: 'Pccoe@itsa',
    to:   email,
    subject: 'About Ripples 2019 event registration',
  });
  send({
    text:"Dear "+name+", "+"Your registration has been successful. Your registration id for event 'Clash of coders' is "+myconfig.event7.toString(),
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
  });
  myconfig.event7=myconfig.event7+1;
  fs.writeFileSync(__dirname+"/myconfig.json", JSON.stringify(myconfig));
}else if (eventname==="8.workshop on web development") {
  let model=new model8({
    uniqueid:myconfig.event8,
    name:name,
    email:email,
    phone:phone,
    teamno:teamno,
    collegename:college,
    event:eventname,
    payment:payment
  });
  model.save()
  .then((data)=> {
    console.log(data);
   })
  .catch((err)=> {
    console.log(err);
    res.render("error");
  });

  const send = require('gmail-send')({
    user: 'pccoeitsa2k19@gmail.com',
    pass: 'Pccoe@itsa',
    to:   email,
    subject: 'About Ripples 2019 event registration',
  });
  send({
    text:"Dear "+name+", "+"Your registration has been successful. Your registration id for event 'Web development bootcamp' is "+myconfig.event8.toString(),
  }, (error, result, fullResult) => {
    if (error) console.error(error);
    console.log(result);
  });
  myconfig.event8=myconfig.event8+1;
  fs.writeFileSync(__dirname+"/myconfig.json", JSON.stringify(myconfig));
}
message="success";
res.redirect("/");
});

app.get("/event1",function(req,res){
  model1.find({},function(err,item){
    if(!err){
      res.render("event1data",{
        eventdata:item,
      });
    }
  });
});

app.get("/event2",function(req,res){
  model2.find({},function(err,item){
    if(!err){
      res.render("event2data",{
        eventdata:item,
      });
    }
  });
});

app.get("/event3",function(req,res){
  model3.find({},function(err,item){
    if(!err){
      res.render("event3data",{
        eventdata:item,
      });
    }
  });
});

app.get("/event4",function(req,res){
  model4.find({},function(err,item){
    if(!err){
      res.render("event4data",{
        eventdata:item,
      });
    }
  });
});

app.get("/event5",function(req,res){
  model5.find({},function(err,item){
    if(!err){
      res.render("event5data",{
        eventdata:item,
      });
    }
  });
});

app.get("/event6",function(req,res){
  model6.find({},function(err,item){
    if(!err){
      res.render("event6data",{
        eventdata:item,
      });
    }
  });
});

app.get("/event7",function(req,res){
  model7.find({},function(err,item){
    if(!err){
      res.render("event7data",{
        eventdata:item,
      });
    }
  });
});

app.get("/event8",function(req,res){
  model8.find({},function(err,item){
    if(!err){
      res.render("event8data",{
        eventdata:item,
      });
    }
  });
});
app.get("/admin",function(req,res){
  if(auth=="true"){
    res.render("admin");
  }
  else{
    res.redirect("/login");
  }
});


app.get("/login",function(req,res){
  if(auth=="false"){
  res.render("login",{
    message:message
  });
}
else{
  res.redirect("/admin");
}
});

app.post("/authentication",function(req,res){
  let user=req.body.username;
  let password=req.body.password;
  if(user==="admin@shortblog.com"&&password==="123456")
  {
    auth="true";
    res.redirect("/admin");
  }
  else{
    message="user or password invalid";
    res.redirect("/login");
  }
});

app.get("/logout",function(req,res){
  auth="false";
  res.redirect("/");
});

app.get("/v",function(req,res){
  res.render("volunteer");
});

app.get("/error",function(req,res){
  res.render("error");
});


app.listen(4000,function(){
  console.log("server created");
});
