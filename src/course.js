import { render } from "@testing-library/react"
import Reacr from "react"

function course(props){
    console.log(props);
    return(<div class="card">
    <div class="card-body">
      <h5 class="card-title">{props.name}</h5>
      <p class="card-text">{props.description}</p>
      <a href="#" class="btn btn-primary">Next</a>
    </div>
  </div>);
}
export default course
