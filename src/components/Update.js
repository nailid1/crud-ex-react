import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Update = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
     setId(localStorage.getItem("id"))
     setName(localStorage.getItem("name"))
     setEmail(localStorage.getItem("email"))
    }, [])
    
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`https://659d149c633f9aee79088e38.mockapi.io/api/crud/posts/${id}`, {name:name, email:email})
        .then(() => {
            navigate("/read")
        })
    }

  return (
    <div>
      <h3>Update</h3>
      <form>
      <div className="row g-3 align-items-center">
        <div className="col-auto" >
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value)} />
        </div>
        <div className="col-auto">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control" value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  )
}

export default Update