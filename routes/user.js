const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const wrapAsync= (fn)=>{
  return (req,res,next)=>{
     fn(req,res,next).catch(next);
  }
};


router.get("/signup",(req,res)=>{
   res.render("users/signup.ejs");
});

router.post("/signup",wrapAsync(async(req,res)=>{
  try{
    let {username,email,password}=req.body;
    const newUser=new User({email,username});
   const registeredUser =await User.register(newUser,password);
    console.log(registeredUser);
    req.login(registeredUser,(err)=>{
      if(err){
        return next(err);
      }
      req.flash("success","Welcome to WanderLust!");
      res.redirect("/listings");
    })
  
  }
  catch(e){
    req.flash("error",e.message);
    res.redirect("/signup");
  }
  
})); 


router.get("/login",(req,res)=>{
  res.render("users/login.ejs");
})

router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),async(req,res)=>{
 req.flash("success","Welcome to WnaderLust!");
 if(!res.locals.redirectUrl){
  res.redirect("/listings");
 }
 else{
 res.redirect(res.locals.redirectUrl);
 }
});

router.get("/logout",(req,res,next)=>{
  req.logout((err)=>{
    if(err){
      next(err);
    }
    req.flash("success","you are logged out!")
    res.redirect("/listings");
  })
})

module.exports=router; 