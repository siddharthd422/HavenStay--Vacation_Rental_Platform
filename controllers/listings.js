const Listing = require("../models/listing");

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index = (async (req,res) => {
    let { category, search } = req.query;
    let filter = {};

    if (category) {
        filter.category = category;
    }

    if (search && search.trim().length > 0) {
        const regex = new RegExp(search.trim(), "i");
        filter.$or = [
            { title: regex },
            { location: regex },
            { country: regex },
        ];
    }

    let allListings = await Listing.find(filter).populate("reviews");
    res.render("listings/index.ejs",{
        allListings,
        category: category || "",
        search: search || "",
    });
});


module.exports.renderNewForm = (rew,res) => {
    res.render("listings/new.ejs");
};


module.exports.createListing = (async (req,res) => {
        let response = await geocodingClient
        .forwardGeocode({
            query: req.body.listing.location,
            limit: 1,
            })
            .send();
            

        let url = req.file.path;
        let filename = req.file.filename;
        const newListing=new Listing (req.body.listing);
        newListing.owner=req.user._id;
        newListing.image.url = url;
        newListing.image.filename = filename;
        newListing.geometry = response.body.features[0].geometry;

        // console.log(url,filename);
        let newl = await newListing.save();
        // console.log(newl);
        req.flash("success","New Listing created");
        res.redirect("/listings");
    
    });


module.exports.showListing = (async(req,res) => {
    let { id }=req.params;
    const listing= await Listing.findById(id).populate({path:"reviews",populate:{path:"author"},}).populate("owner");
    if(!listing)
    {
        req.flash("error"," Listing doesn't exists");
        res.redirect("/listings");
    }
    
    res.render("listings/show.ejs",{listing});
});


module.exports.renderEditForm = (async (req,res) => {
    let { id }=req.params;
    const listing= await Listing.findById(id);
    if(!listing)
        {
            req.flash("error"," Listing doesn't exists");
            res.redirect("/listings");
            
        }
    let orignalurl = listing.image.url;
    orignalurl = orignalurl.replace("/upload","/upload/w_300");  
    res.render("listings/edit.ejs",{listing,orignalurl});
});



module.exports.updateListing = (async (req,res) => {
    let { id }=req.params;
    if(!req.body.listing) {
        throw new expressError(400,"Please send valid data in listing"); 
    }
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(typeof req.file !== "undefined")
    {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url,filename};
        await listing.save();
    }
    
    
    req.flash("success","Listing updated!");
    res.redirect(`/listings/${id}`);
});


module.exports.detroyListing = (async (req,res) => {
    let { id }=req.params;
    let deletedListing =await Listing.findByIdAndDelete(id);
    // console.log(deletedListing);
    req.flash("success"," Listing deleted")
    res.redirect("/listings");
});