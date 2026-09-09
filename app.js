if(process.env.NODE_ENV != "production")
{
    require("dotenv").config();
}


const express=require("express");
const app=express();

const mongoose=require("mongoose");


const methodOverride=require("method-override");
app.use(methodOverride("_method"));

const path =require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

const ejsMate=require("ejs-mate");
app.engine("ejs",ejsMate);
const wrapAsync =require("./utils/wrapAsync.js");
const expressError =require("./utils/expressError.js");

const listingRouter=require("./routes/listings.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");
const User=require("./models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const session = require("express-session");
const flash =require("connect-flash")
const {MongoStore} = require("connect-mongo");

const dbUrl = process.env.ATLASDB_URL;

const mstore = MongoStore.create({
    mongoUrl : dbUrl,
    crypto :{
        secret:process.env.SECRET
    },
    touchAfter : 24*3600,       // time after session info unpdat
});

mstore.on("error",(err)=>{
    console.log("error in monogo session store",err);
});

const sessionOptions ={
    store : mstore,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() + 7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    },
};
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use( new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


main()
    .then(()=>{
        // console.log("connected to DB");

    })
    .catch((err)=>{
        // console.log(err);
    });

async function main()
{
    await mongoose.connect(dbUrl);
}


app.use((req,res,next) => {
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
});

app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);


app.all("*", (req, res, next) => {
    next(new expressError(404,"page not found"));
});



app.use((err,req,res,next) => {
    let { statusCode=500,message="something went wrong!"}= err
    // res.status(statusCode).send(message);
    res.status(statusCode).render("listings/error.ejs",{message});
});

// Only start a standalone server when running locally (e.g. `node app.js`).
// On Vercel, the platform imports the exported `app` and calls it directly
// as a serverless function, so app.listen() must not run there.
if (!process.env.VERCEL) {
    app.listen(8080, () => {
        // console.log("listening on port 8080");
    });
}

module.exports = app;

// route
// app.get("/",(req,res) => {
//     res.send("I am root");
// });


// app.get("/demouser", async (req,res) => {
//     const fakeUser = new User ({
//         email:"student@gmail.com",
//         username:"delta-student"
//     });
//     let registereduser =await User.register(fakeUser,"helloWorld");
//     res.send(registereduser);
// });



// app.get("/testListing", async (req,res) => {
//     let sampleListing= new Listing ({

//         title:"my new villa",
//         description:"By Beech",
//         price:1200,
//         location:"calangute,Goa",
//         country:"India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("succcessful testing");
// });
