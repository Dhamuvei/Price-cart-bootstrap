import React from "react"
import Course from "./course";
import "./App.css"
import Prising from "./pricing ";

function App(){
    const prisingTag=[
        {name :"FREE", Price : "0", currency:"$", prising : "month",
        features :[
            {
              name: "Single User",
              access : true, 
            },
            {
              name: "5GB Storage",
              access : true, 
            },
            {
              name: "Unlimited Public Projects",
              access : true, 
            },
            {
              name: "Community Access",
              access : true, 
            },

            {
              name: "Unlimited Private Projects",
              access : false, 
            },
            {
              name: "Dedicated Phone Support",
              access : false, 
            },
            {
              name: "Free Subdomain",
              access : false, 
            },
            {
              name: "Monthly Status Reports",
              access : false, 
            },
        ] 
        },
        {name :"PLUS", Price : "9", currency:"$", prising : "month",
        features :[
          {
            name: "Single User",
            access : true, 
          },
          {
            name: "5GB Storage",
            access : true, 
          },
          {
            name: "Unlimited Public Projects",
            access : true, 
          },
          {
            name: "Community Access",
            access : true, 
          },

          {
            name: "Unlimited Private Projects",
            access : true, 
          },
          {
            name: "Dedicated Phone Support",
            access : true, 
          },
          {
            name: "Free Subdomain",
            access : true, 
          },
          {
            name: "Monthly Status Reports",
            access : false, 
          },
      ] },
        {name :"PRO", Price : "49", currency:"$", prising : "month",
        features :[
          {
            name: "Single User",
            access : true, 
          },
          {
            name: "5GB Storage",
            access : true, 
          },
          {
            name: "Unlimited Public Projects",
            access : true, 
          },
          {
            name: "Community Access",
            access : true, 
          },

          {
            name: "Unlimited Private Projects",
            access : true, 
          },
          {
            name: "Dedicated Phone Support",
            access : true, 
          },
          {
            name: "Free Subdomain",
            access : true, 
          },
          {
            name: "Monthly Status Reports",
            access : true, 
          },
      ] },
        ]
 return(
<section class="pricing py-5">
  <div class="container">
    <div class="row">
       {prisingTag.map((price)=>{return <Prising{...price}/>})}
    </div>
  </div>
</section>
 );
}

export default App;