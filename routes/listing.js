const express=require("express");
const router=express.Router();
const Listing=require("../models/listing.js");
const Review=require("../models/review.js");
const {isLoggedIn,isOwner}=require("../middleware.js") 
const wrapAsync= (fn)=>{
  return (req,res,next)=>{
     fn(req,res,next).catch(next);
  }
};

router.get("/",wrapAsync(async (req,res)=>{
  const allListings=await Listing.find({});
  res.render("listings/index.ejs",{allListings});
  

})
);

router.get("/new", isLoggedIn,(req,res)=>{
 
 res.render("listings/new.ejs");
 
});



router.get("/:id",wrapAsync(async (req,res)=>{
     let {id}=req.params;
     const listing=await Listing.findById(id).populate({path:"reviews",populate:{
      path:"author",
     },}).populate("owner");
     if(!listing){
      req.flash("error","not exist!");
      res.redirect("/listings");
     }
     res.render("listings/show.ejs",{listing});
     
})
); 

router.post("/",wrapAsync(async (req,res,next)=>{
 console.log(req.body);
 if(!(req.body.title )){
   throw new ExpressError(400,"invalid data");  
   
 }
 let {title,description,price,image,location,country}=req.body;
 let owner=req.user._id;
 let newListing= new Listing({title,description,price,image,country,location,owner}); 

 await newListing.save();
 req.flash("success","new listing created:");
 res.redirect("/listings");

}));



router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(async (req,res)=>{
 let {id}=req.params;
 let listing=await Listing.findById(id);
 if(!listing){
  req.flash("error","not exist!");
  res.redirect("/listings");
 }
 res.render("listings/edit.ejs",{listing});
})
);

router.put("/:id",isLoggedIn,isOwner,wrapAsync(async(req,res)=>{
 let {id}=req.params;
 if(!req.body){
   throw new ExpressError(400,"invalid data");
   
 }
 
 
 let {title,description,price,image,country,location}=req.body;

 await Listing.findByIdAndUpdate(id,{title,description,price,image,country,location});
 req.flash("success","listing updated successfully!");
 res.redirect(`/listings/${id}`);   
})
);   
 
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(async (req,res)=>{
 let {id}=req.params;
 await Listing.findByIdAndDelete(id);
 req.flash("success","listing Deleted successfully:");
 res.redirect("/listings");
})
);


module.exports=router;