const functions = require('firebase-functions')
const express = require('express');
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const app = express();
const {FooterLinks} = require("./FooterLinksMeta.js");

app.use("/payment", require("./routes/payment"));

app.use(cors());

// middlewares
app.use(express.json({ extended: false }));

app.get("/",(request,response)=>{
    
    // Getting index.html text
    let index = fs.readFileSync('./web/index.html').toString();

    const pageTitle = "QuickStay: PG, Flat, Coliving, Room for rent without brokerage";

    const pageDescription = "Live in the best rental stays like PG, Flat, Coliving or Room without brokerage. Choose from Unfurnished, Semi-Furnished, Furnished long-term accommodations only on QuickStay";

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

app.get("/about",(request,response)=>{
    
    // Getting index.html text
    let index = fs.readFileSync('./web/index.html').toString();

    const pageTitle = "Easing the rental home search | About Us | QuickStay";
    
    const pageDescription = "QuickStay is a digital solution for students & working professionals that makes the rental home search effortless by providing verified properties without brokerage.";
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

app.get("/contact-us",(request,response)=>{
    
  // Getting index.html text
  let index = fs.readFileSync('./web/index.html').toString();

  const pageTitle = "Contact Us | QuickStay";

  const pageDescription = "Leave a query or get in touch with us for any doubt/query. Call: +91-8387868880. Email: support@quickstayrooms.com.";

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

app.get("/list-property",(request,response)=>{
    
  // Getting index.html text
  let index = fs.readFileSync('./web/index.html').toString();

  const pageTitle = "List your property for FREE | QuickStay";

  const pageDescription = "We help you list your rental property in a few easy steps. Let us market, manage and maintain your property to save your unnecessary headache.";

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
      index = index.replace(
          "<title>QuickStay</title>",
          `<title>${pageTitle}</title>`
      )
      .replace('__META_DESCRIPTION__', pageDescription).replace('__META_OG_TITLE__', pageTitle).replace('__META_OG_DESCRIPTION__', pageDescription);
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