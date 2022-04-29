const functions = require('firebase-functions')
const express = require('express');
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const app = express();
const {FooterLinks,tags} = require("./FooterLinksMeta.js");

app.use("/payment", require("./routes/payment"));

app.use(cors());

// middlewares
app.use(express.json({ extended: false }));

app.get("/",(request,response)=>{
    
    // Getting index.html text
    let index = fs.readFileSync('./web/index.html').toString();

    const pageTitle = "QuickStay: PG, Flat, Coliving, Room for rent without brokerage";

    const pageDescription = "Live in the best rental stays like PG, Flat, Coliving or Room without brokerage. Choose from Unfurnished, Semi-Furnished, Furnished long-term accommodations only on QuickStay";

    const pageTag = "quickstay, quick stay, quickstay rooms, Co-Living Website, PG Accommodation Services, Hostel Accommodation Services, Rental Room Accommodation, Flats for Rent, Room for Rent, Apartment for Rent, PG for Men, PG for Women, Coliving Space in India, Best PG Website in India, Coliving, best property management company in India, Boys PG near me, Girls PG near me, Independent rooms for rent"

    // Changing metas function
    const setMetas = (title, description,pageTag) => {
        
        index = index.replace('__META_OG_TITLE__', title);
        index = index.replace('__META_DESCRIPTION__', description);
        index = index.replace('__META_OG_DESCRIPTION__', description);
        index = index.replace('__META_TAGS__',pageTag)
        
    }
    
   setMetas(pageTitle, pageDescription,pageTag);

    // Sending index.html    
   
    response.status(200).send(index);
})

app.get("/about",(request,response)=>{
    
    // Getting index.html text
    let index = fs.readFileSync('./web/index.html').toString();

    const pageTitle = "Easing the rental home search | About Us | QuickStay";
    
    const pageDescription = "QuickStay is a digital solution for students & working professionals that makes the rental home search effortless by providing verified properties without brokerage.";
    // Changing metas function

    const pageTag = "about quickstay, quickstay, quick stay, quickstay private limited, quickstay company, quickstay pg";

    const setMetas = (title, description,pageTag) => {
        
        index = index.replace('__META_OG_TITLE__', title);
        index = index.replace('__META_DESCRIPTION__', description);
        index = index.replace('__META_OG_DESCRIPTION__', description);
        index = index.replace('__META_TAGS__',pageTag)
    }
    
   setMetas(pageTitle, pageDescription,pageTag);

    // Sending index.html    
   
    response.status(200).send(index);
})

app.get("/contact-us",(request,response)=>{
    
  // Getting index.html text
  let index = fs.readFileSync('./web/index.html').toString();

  const pageTitle = "Contact Us | QuickStay";

  const pageDescription = "Leave a query or get in touch with us for any doubt/query. Call: +91-8387868880. Email: support@quickstayrooms.com.";

  const pageTag = "contact quickstay,quickstay contact number, quickstay address";

  // Changing metas function
  const setMetas = (title, description,pageTag) => {
      
      index = index.replace('__META_OG_TITLE__', title);
      index = index.replace('__META_DESCRIPTION__', description);
      index = index.replace('__META_OG_DESCRIPTION__', description);
      index = index.replace('__META_TAGS__',pageTag);
      
  }
  
 setMetas(pageTitle, pageDescription,pageTag);

  // Sending index.html    
 
  response.status(200).send(index);
})

app.get("/list-property",(request,response)=>{
    
  // Getting index.html text
  let index = fs.readFileSync('./web/index.html').toString();

  const pageTitle = "List your property for FREE | QuickStay";

  const pageDescription = "We help you list your rental property in a few easy steps. Let us market, manage and maintain your property to save your unnecessary headache.";

    const pageTag = "list your property, property management service, lease your property, rent your property, free property listing, best property management company"

  // Changing metas function
  const setMetas = (title, description,pageTag) => {
      
      index = index.replace('__META_OG_TITLE__', title);
      index = index.replace('__META_DESCRIPTION__', description);
      index = index.replace('__META_OG_DESCRIPTION__', description);
      index = index.replace('__META_TAGS__',pageTag);
  }
  
 setMetas(pageTitle, pageDescription,pageTag);

  // Sending index.html    
 
  response.status(200).send(index);
})

app.get("/privacy-policy",(request,response)=>{
    
  // Getting index.html text
  let index = fs.readFileSync('./web/index.html').toString();

  const pageTitle = "Privacy Policy | QuickStay";

  const pageDescription = "QuickStay is committed to maintaining robust privacy protections for its users. Our Privacy Policy is designed to help you understand how we collect, use and safeguard the information you provide to us and to assist you in making informed decisions when using our Service.";
  // Changing metas function
  const setMetas = (title, description) => {
      
      index = index.replace('__META_OG_TITLE__', title);
      index = index.replace('__META_DESCRIPTION__', description);
      index = index.replace('__META_OG_DESCRIPTION__', description);
      
  }
  
  setMetas(pageTitle, pageDescription);

  // Sending index.html    
 
  response.status(200).send(index);
})

app.get("/terms",(request,response)=>{
    
  // Getting index.html text
  let index = fs.readFileSync('./web/index.html').toString();

  const pageTitle = "Terms & Conditions | QuickStay";

  const pageDescription = "The following Terms of Use apply when you view or use the Service via our website located at https://www.quickstayrooms.com/ or by accessing the Service through clicking on the application “QuickStay” on your mobile device.";
  // Changing metas function
  const setMetas = (title, description) => {
      
      index = index.replace('__META_OG_TITLE__', title);
      index = index.replace('__META_DESCRIPTION__', description);
      index = index.replace('__META_OG_DESCRIPTION__', description);
      
  }
  
  setMetas(pageTitle, pageDescription);

  // Sending index.html    
 
  response.status(200).send(index);
});

app.get("/cities/:id",(req,res)=>{

    // Getting index.html text
    let index = fs.readFileSync('./web/index.html').toString();
  
    const urlArr = req.params.id.split("-");

    // get city name
    const urlString = urlArr.join(" ");
    const r = "in";
    let cityName = urlString.slice(urlString.indexOf(r) + r.length);
    
    let metaObj;
    let pageTitle;
    let pageDescription;
    let metatags;
    let metaTagUrl = '';
    
    // meta tag url
    for(var i = 0; i < urlArr.length; i++){
        metaTagUrl += urlArr[i].charAt(0).toUpperCase() + urlArr[i].slice(1)+" ";
    }

    metaObj = FooterLinks[urlArr[0].toUpperCase()];

    pageTitle = metaObj.title.replace("__CITY__",cityName);

    pageDescription = metaObj.description.replace("__CITY__",cityName);

    // set meta tags
    metatags = tags.metatags.replace(/__CITY__/g,cityName).replace("__URL__",metaTagUrl);

    // set meta data
    index = index.replace(
        "<title>QuickStay</title>",
        `<title>${pageTitle}</title>`
    )
    .replace('__META_DESCRIPTION__', pageDescription).replace('__META_OG_TITLE__', pageTitle).replace('__META_OG_DESCRIPTION__', pageDescription).replace('__META_TAGS__',metatags);
    res.status(200).send(index);

})

app.get("/blog",(req,res)=>{
    res.redirect("https://blogs.quickstayrooms.com/");
})


app.get("/login",(request,response)=>{
    
  // Getting index.html text
  let index = fs.readFileSync('./web/index.html').toString();

  const pageTitle = "Quickstay";

  const pageDescription = "Quickstay"
  // Changing metas function
  const setMetas = (title, description) => {
      
      index = index.replace('__META_OG_TITLE__', title);
      index = index.replace('__META_DESCRIPTION__', description);
      index = index.replace('__META_OG_DESCRIPTION__', description);
      
  }
  
  setMetas(pageTitle, pageDescription);

  // Sending index.html    
 
  response.status(200).send(index);
});

app.get("/choose-plan",(request,response)=>{
    
  // Getting index.html text
  let index = fs.readFileSync('./web/index.html').toString();

  const pageTitle = "Quickstay";

  const pageDescription = "Quickstay"
  // Changing metas function
  const setMetas = (title, description) => {
      
      index = index.replace('__META_OG_TITLE__', title);
      index = index.replace('__META_DESCRIPTION__', description);
      index = index.replace('__META_OG_DESCRIPTION__', description);
      
  }
  
  setMetas(pageTitle, pageDescription);

  // Sending index.html    
 
  response.status(200).send(index);
});

app.get("/properties",(request,response)=>{
    
    // Getting index.html text
    let index = fs.readFileSync('./web/index.html').toString();
  
    const pageTitle = "Quickstay";
  
    const pageDescription = "Quickstay"
    // Changing metas function
    const setMetas = (title, description) => {
        
        index = index.replace('__META_OG_TITLE__', title);
        index = index.replace('__META_DESCRIPTION__', description);
        index = index.replace('__META_OG_DESCRIPTION__', description);
        
    }
    
    setMetas(pageTitle, pageDescription);
  
    // Sending index.html    
   
    response.status(200).send(index);
  });

app.get("/property-details/:id",(request,response)=>{
    
  // Getting index.html text
  let index = fs.readFileSync('./web/index.html').toString();

  const pageTitle = "Quickstay";

  const pageDescription = "Quickstay"
  // Changing metas function
  const setMetas = (title, description) => {
      
      index = index.replace('__META_OG_TITLE__', title);
      index = index.replace('__META_DESCRIPTION__', description);
      index = index.replace('__META_OG_DESCRIPTION__', description);
      
  }
  
  setMetas(pageTitle, pageDescription);

  // Sending index.html    
 
  response.status(200).send(index);
});



exports.api = functions.https.onRequest(app)