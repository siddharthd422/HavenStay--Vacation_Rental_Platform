const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync =require("../utils/wrapAsync.js");
const expressError =require("../utils/expressError.js");
const {listingSchema}=require("../schema/listingSchema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../authMiddleware.js");


const reviewController = require("../controllers/reviews.js");

// Reviews
// create

router.post("/",isLoggedIn, validateReview,wrapAsync(reviewController.createReview));

// Delete
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));


module.exports=router;