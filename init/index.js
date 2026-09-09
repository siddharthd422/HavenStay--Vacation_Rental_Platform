if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const dbUrl = process.env.ATLASDB_URL;

main()
    .then(() => {
        console.log("connected to DB");
        initDB();
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}

const DEMO_USERNAME = "demo_host";
const DEMO_EMAIL = "demo_host@wanderlust.test";
const DEMO_PASSWORD = "wanderlustDemo123";

const getOrCreateDemoUser = async () => {
    let demoUser = await User.findOne({ username: DEMO_USERNAME });
    if (!demoUser) {
        demoUser = await User.register(
            new User({ username: DEMO_USERNAME, email: DEMO_EMAIL }),
            DEMO_PASSWORD
        );
        console.log(`Created demo host user "${DEMO_USERNAME}" (password: ${DEMO_PASSWORD})`);
    }
    return demoUser;
};

const initDB = async () => {
    const demoUser = await getOrCreateDemoUser();

    await Listing.deleteMany();
    const listingsWithOwner = initData.data.map((obj) => ({
        ...obj,
        owner: demoUser._id,
    }));
    await Listing.insertMany(listingsWithOwner);

    console.log(`Database seeded with ${listingsWithOwner.length} dummy listings.`);
    mongoose.connection.close();
};
