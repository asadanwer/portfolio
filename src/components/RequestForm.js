import React from 'react'
import '../requestform.css'
const RequestForm = () => {
    return (
        <div>
<div className="signup-form">
    <form action="#" method="post">
	
		<p className="text-center">Please fill in this form to have a call back</p>
		<hr/>
        <div className="form-group">
			<div className="row">
				<div className="col"><input type="text" className="form-control" name="first_name" placeholder="First Name" required="required"/></div>
				<div className="col"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
			</div>        	
        </div>
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" className="form-control" name="number" placeholder="Enter Your Contact Number with Code" required="required"/>
        </div>
		<div className="form-group">
            <textarea type="message" className="form-control" name="confirm_password" placeholder="Send a Message before call back " required="required"/>
        </div>        
        
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg ml-5" >Request a Call</button>
        </div>
                
    </form>
</div>            
        </div>
    )
}

export default RequestForm
