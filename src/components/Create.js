import React, {useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const history = useNavigate();

  const header = {"Access-Control-Allow-Origin": "*"};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked submit")
    Axios.post('https://659d149c633f9aee79088e38.mockapi.io/api/crud/posts', {name : name, email : email, header})
    .then(()=>{
      history("/read")
    })
  }

  return (
    <div>
      <h3>Register</h3>
      <form>
      <div className="row g-3 align-items-center">
        <div className="col-auto" >
          <label className="form-label">Name</label>
          <input type="text" className="form-control" onChange={(e)=> setName(e.target.value)} />
        </div>
        <div className="col-auto">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp" 
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
