import React from "react";

function Contact(){
   
        const [formStatus, setFormStatus] = React.useState('Send')
        const onSubmit = (e) => {
          e.preventDefault()
          setFormStatus('Submitting...')
          const { name, email, message } = e.target.elements
          let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
          }
          console.log(conFom)
        }

  
    return(
    <>
    <div className="banner-image-contact">
      <br />
    <div className="container mt-4">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <br />
          <label className="form-label" htmlFor="name">
           <h3 style={{color: "white"}}> NAME:</h3>
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
          <h3 style={{color: "white"}}>EMAIL:</h3>
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
     
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            <h3 style={{color: "white"}}>MESSAGES:</h3>
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-secondary">SUBMIT</button>
      </form>
    </div>
    </div>
    </>
   
      
       
    )
}

export default Contact




