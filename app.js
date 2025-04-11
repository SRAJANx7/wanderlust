const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js")
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
const userRouter=require("./routes/user.js");
app.engine("ejs",ejsMate);

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname,"/public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
let port=8080;
const wrapAsync= (fn)=>{
  return (req,res,next)=>{
     fn(req,res,next).catch(next);
  }
};
class ExpressError extends Error{
  constructor(statuscode,message){
     super();
     this.statuscode=statuscode;
     this.message=message;
  }
};
main().then(()=>{ 
  console.log("welcome to database:");
}).catch(err=>{
   console.log(err);
}); 
async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}


 const sessionOptions={
  secret:"mysupersecret",
  resave:false,
  saveUninitialized:true,
  cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOlny:true
  }

 };

 app.get("/",(req,res)=>{
  res.send("hi i can listen you") ;
});

 app.use(session(sessionOptions));
 app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

 


app.use((req,res,next)=>{
  res.locals.success=req.flash("success");
  res.locals.error=req.flash("error");
  res.locals.currUser=req.user;
  
  next();
});  




app.use("/listings",listingRouter);

app.use("/listings/:id/reviews",reviewRouter);

app.use("/",userRouter);


app.listen(port,()=>{
  console.log("Server is running on port "+port);
});

app.all("*",(req,res,next)=>{
  next(new ExpressError(404,"Page not found!"));
});

app.use((err,req,res,next)=>{
  let {statuscode=500,message="something went wrong"}=err;
   res.status(statuscode).send(message);
});