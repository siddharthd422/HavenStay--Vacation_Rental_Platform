const express=require("express");
const router=express.Router();
const wrapAsync =require("../utils/wrapAsync.js");
const expressError =require("../utils/expressError.js");
const {listingSchema}=require("../schema/listingSchema.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../authMiddleware.js");


const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

const listingController = require("../controllers/listings.js");

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.createListing)
);


// create route    written before :id because it starts interpreting new as id
router.get(
    "/new",
    isLoggedIn,
    listingController.renderNewForm
);

router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(
        isLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.updateListing))
    .delete(
        isLoggedIn,
        wrapAsync(listingController.detroyListing)
);

// edit route
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm)
);


module.exports=router;
// show route
// router.get(
//     "/",
//     wrapAsync(listingController.index)
// );




// router.post(
//     "/",
//     isLoggedIn,
//     validateListing,
//     wrapAsync(listingController.showListing)
// );


// if placing this new route below the listings.:id it is showing errror coz it is considering new as id and searching for the id


// read route
// router.get(
//     "/:id",
//     wrapAsync(listingController.createListing)
// );




// router.put(
//     "/:id",
//     isLoggedIn,
//     isOwner,
//     validateListing,
//     wrapAsync(listingController.updateListing)
// );


// // Delete Route
// router.delete(
//     "/:id",
//     isLoggedIn,
//     wrapAsync(listingController.detroyListing)
// );


