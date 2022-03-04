const path = require("path");
const express = require("express");
const app =express();
const fs = require("fs");
const cors = require("cors");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const {FooterLinks} = require("./FooterLinksMeta.js");
require("dotenv").config();
const indexPath  = path.resolve(__dirname,'./build', 'index.html');

app.use(cors());

// middlewares
app.use(express.json({ extended: false }));

// payment route included
// app.use("/payment", require("./routes/payment"));
app.post("/payment/orders", async (req, res) => {
    try {

        const {payment} = req.body;
        // console.log(payment);
        // console.log(process.env.REACT_APP_RAZORPAY_KEY_ID)
        const instance = new Razorpay({
            key_id: process.env.REACT_APP_RAZORPAY_KEY_ID,
            key_secret: process.env.REACT_APP_RAZORPAY_SECRET,
        });

        const options = {
            amount: payment * 100, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);

    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/payment/success", async (req, res) => {
    try {
        // getting the details back from our font-end
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        } = req.body;

        // Creating our own digest
        // The format should be like this:
        // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
        const shasum = crypto.createHmac("sha256", process.env.REACT_APP_RAZORPAY_SECRET);

        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

        const digest = shasum.digest("hex");

        // comaparing our digest with the actual signature
        if (digest !== razorpaySignature)
            return res.status(400).json({ msg: "Transaction not legit!" });

        // THE PAYMENT IS LEGIT & VERIFIED
        // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

        res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get('/', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const pageTitle = "QuickStay: PG, Flat, Coliving, Room for rent without brokerage";
        const pageDescription = "Live in the best rental stays like PG, Flat, Coliving or Room without brokerage. Choose from Unfurnished, Semi-Furnished, Furnished long-term accommodations only on QuickStay";
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>QuickStay</title>",
            `<title>${pageTitle}</title>`
        )
        .replace('__META_DESCRIPTION__', pageDescription).replace('__META_OG_TITLE__', pageTitle).replace('__META_OG_DESCRIPTION__', pageDescription);
        return res.send(htmlData);
    });
});

app.get("/cities/:id",(req,res)=>{
    fs.readFile(indexPath,"utf-8",(err,htmlData)=>{

        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
    
        const urlArr = req.params.id.split("-");

        let cityName = urlArr[urlArr.length-1].charAt(0).toUpperCase() + urlArr[urlArr.length-1].slice(1);

        if(cityName == "Layout"){
            cityName = "HSR Layout";
        }

        let metaObj;
        let pageTitle;
        let pageDescription;

        if(urlArr[0] == "pg"){
            metaObj = FooterLinks[urlArr[0].toUpperCase()];

            pageTitle = metaObj.title.replace("__CITY__",cityName);
    
            pageDescription = metaObj.description.replace("__CITY__",cityName);
        }
        else if(urlArr[0] == "room" || urlArr[0] == "unisex"){
            metaObj = FooterLinks[urlArr[0].toUpperCase()];

            pageTitle = metaObj.title.replace("__CITY__",cityName);
    
            pageDescription = metaObj.description.replace("__CITY__",cityName);
            if(urlArr.length > 6){
                metaObj = FooterLinks[urlArr[0].toUpperCase()+"_"];
                pageTitle = metaObj.title.replace("__CITY__",cityName).replace("__GENDER__",urlArr[4]);
                pageDescription = metaObj.description.replace("__CITY__",cityName).replace("__GENDER__",urlArr[4]);
            }
        }
        else if(urlArr[1] == "rk"){

            metaObj = FooterLinks[urlArr[1].toUpperCase()];

            pageTitle = metaObj.title.replace("__CITY__",cityName).replace("__NUMBER__",urlArr[0]);

            pageDescription = metaObj.description.replace("__CITY__",cityName).replace("__NUMBER__",urlArr[0]);

            if(urlArr.length > 6){
            metaObj = FooterLinks[urlArr[1].toUpperCase()+"_"];

            pageTitle = metaObj.title.replace("__CITY__",cityName).replace("__NUMBER__",urlArr[0]).replace("__GENDER__",urlArr[5]);

            pageDescription = metaObj.description.replace("__CITY__",cityName).replace("__NUMBER__",urlArr[0]).replace("__GENDER__",urlArr[5]);
            }
        }
        else if(urlArr[1] == "bhk"){
            metaObj = FooterLinks[urlArr[1].toUpperCase()];

            pageTitle = metaObj.title.replace("__CITY__",cityName).replace("__NUMBER__",urlArr[0]);

            pageDescription = metaObj.description.replace("__CITY__",cityName).replace("__NUMBER__",urlArr[0]);
        }

        // set meta data
        htmlData = htmlData.replace(
            "<title>QuickStay</title>",
            `<title>${pageTitle}</title>`
        )
        .replace('__META_DESCRIPTION__', pageDescription).replace('__META_OG_TITLE__', pageTitle).replace('__META_OG_DESCRIPTION__', pageDescription);
        return res.send(htmlData);
    })
})


app.get('/about', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const pageTitle = "Easing the rental home search | About Us | QuickStay";
        const pageDescription = "QuickStay is a digital solution for students & working professionals that makes the rental home search effortless by providing verified properties without brokerage.";
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>QuickStay</title>",
            `<title>${pageTitle}</title>`
        )
        .replace('__META_DESCRIPTION__', pageDescription).replace('__META_OG_TITLE__', pageTitle).replace('__META_OG_DESCRIPTION__', pageDescription);
        return res.send(htmlData);
    });
});


app.get('/contact', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const pageTitle = "Contact Us | QuickStay";
        const pageDescription = "Leave a query or get in touch with us for any doubt/query. Call: +91-8387868880. Email: support@quickstayrooms.com.";
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>QuickStay</title>",
            `<title>${pageTitle}</title>`
        )
        .replace('__META_DESCRIPTION__', pageDescription).replace('__META_OG_TITLE__', pageTitle).replace('__META_OG_DESCRIPTION__', pageDescription);
        return res.send(htmlData);
    });
});



app.get('/list-property', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const pageTitle = "List your property for FREE | QuickStay";
        const pageDescription = "We help you list your rental property in a few easy steps. Let us market, manage and maintain your property to save your unnecessary headache.";
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>QuickStay</title>",
            `<title>${pageTitle}</title>`
        )
        .replace('__META_DESCRIPTION__', pageDescription).replace('__META_OG_TITLE__', pageTitle).replace('__META_OG_DESCRIPTION__', pageDescription);
        return res.send(htmlData);
    });
});



app.get('/privacy-policy', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const pageTitle = "Privacy Policy | QuickStay";
        const pageDescription = "QuickStay is committed to maintaining robust privacy protections for its users. Our Privacy Policy is designed to help you understand how we collect, use and safeguard the information you provide to us and to assist you in making informed decisions when using our Service.";
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>QuickStay</title>",
            `<title>${pageTitle}</title>`
        )
        .replace('__META_DESCRIPTION__', pageDescription).replace('__META_OG_TITLE__', pageTitle).replace('__META_OG_DESCRIPTION__', pageDescription);
        return res.send(htmlData);
    });
});

app.get('/terms', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const pageTitle = "Terms & Conditions | QuickStay";
        const pageDescription = "The following Terms of Use apply when you view or use the Service via our website located at https://www.quickstayrooms.com/ or by accessing the Service through clicking on the application “QuickStay” on your mobile device.";
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>QuickStay</title>",
            `<title>${pageTitle}</title>`
        )
        .replace('__META_DESCRIPTION__', pageDescription).replace('__META_OG_TITLE__', pageTitle).replace('__META_OG_DESCRIPTION__', pageDescription);
        return res.send(htmlData);
    });
});


// CHOOSE-PLAN
app.get('/choose-plan', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const pageTitle = "QuickStay";
       
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>QuickStay</title>",
            `<title>${pageTitle}</title>`
        )
        .replace('__META_OG_TITLE__', pageTitle)
        return res.send(htmlData);
    });
});


// login
app.get('/login', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const pageTitle = "QuickStay";
       
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>QuickStay</title>",
            `<title>${pageTitle}</title>`
        )
        .replace('__META_OG_TITLE__', pageTitle)
        return res.send(htmlData);
    });
});


// Property Details
app.get("/property-details/:id", (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const pageTitle = "QuickStay";
       
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>QuickStay</title>",
            `<title>${pageTitle}</title>`
        )
        .replace('__META_OG_TITLE__', pageTitle)
        return res.send(htmlData);
    });
});


// Filters
app.get('/filters', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const pageTitle = "QuickStay";
       
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>QuickStay</title>",
            `<title>${pageTitle}</title>`
        )
        .replace('__META_OG_TITLE__', pageTitle)
        return res.send(htmlData);
    });
});

app.get('/blogs', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        const pageTitle = "Blogs | QuickStay";
        const pageDescription = "Catch up on all the facts, tips and experiences about student life and working professional life at the QuickStay Blog!";
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>QuickStay</title>",
            `<title>${pageTitle}</title>`
        )
        .replace('__META_DESCRIPTION__', pageDescription).replace('__META_OG_TITLE__', pageTitle).replace('__META_OG_DESCRIPTION__', pageDescription);
        return res.send(htmlData);
    });
});



// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname,'build')
));

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
})
