const express=require("express");
const router=express.Router({mergeParams:true});
const Listing=require("../models/listing.js");
const Review=require("../models/review.js");
const {isLoggedIn, isReviewAuthor}=require("../middleware.js");
const wrapAsync= (fn)=>{
  return (req,res,next)=>{
     fn(req,res,next).catch(next);
  }
};

router.post("/",isLoggedIn,async (req,res)=>{
  const listing= await Listing.findById(req.params.id);
  const newReview= new Review(req.body.review);
  newReview.author=req.user._id;
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  req.flash("success","review created:");
  res.redirect(`/listings/${listing.id}`);
});

router.delete("/:reviewId",isReviewAuthor,wrapAsync(async (req,res)=>{
      const {id,reviewId}=req.params;
      await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
      await Review.findByIdAndDelete(reviewId);
      req.flash("success","review deleted");
      res.redirect(`/listings/${id}`);
}));
module.exports=router;