import React from "react"
import "./App.css"
function prising({name,Price,currency,prising,features}){
    return( <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">{name}</h5>
        <h6 class="card-price text-center">{currency}{Price}<span class="period">/{prising}</span></h6>
        <hr/>
        <ul class="fa-ul">
          {features.map(
            ({name,access})=>
            {return( access ? <li><span class="fa-li"><i class="fas fa-check"></i></span>{name}</li> :<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{name}</li>);})}
        </ul>
        <div class="d-grid">
          <a href="#" class="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>);
}

export default prising;

