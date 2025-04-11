const mongoose=require("mongoose");
const Review=require ("./review.js");
const Schema =mongoose.Schema;

const listingSchema=new Schema({
  title:{type:String,required:true},
  description:{type:String,required:true},
  price:{type:Number,required:true},
  image:{type:String,
    default:"https://unsplash.com/photos/an-empty-room-with-a-blue-door-and-a-red-brick-wall-AMoctnfxw1E",
   set:(v)=>v===""?"https://unsplash.com/photos/an-empty-room-with-a-blue-door-and-a-red-brick-wall-AMoctnfxw1E":v},

  location:{type:String},
  country:{type:String},
  reviews:[{
    type:Schema.Types.ObjectId,
    ref:"Review"
  }],
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
});
 
listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
    await Review.deleteMany({_id:{$in:listing.reviews}});
  }
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;