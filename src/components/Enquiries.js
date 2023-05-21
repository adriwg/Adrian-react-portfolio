import {useState} from 'react';
import '../css/Enquiries.css';



const Enquiries = () => {

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        message: ""
      });

      const [error, setError] = useState(null);

      //Reset Form
    const resetForm = () => {
        setUserInfo({
            name: "",
            email: "",
            message: ""
        })
    }

    // Handle Input Change
    const handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        if(name ==="email") {
            if (!isValidEmail(e.target.value)) {
                setError('Email is invalid');
              } else {
                setError(null);
              }
        }
            setUserInfo({ ...userInfo, [name]: value });
    }

    // Submit the form
    const formSubmit = (e) => {
        e.preventDefault();
        setError(null);
        if (isValidEmail(userInfo.email)) {
        console.log('The email is valid');
        console.log("Form Submitted!");
        console.log("userInfo: ", userInfo);
        resetForm();
        } else {
        setError('Email is invalid');
        }
        
        
    }

    // Function for validating email
    const isValidEmail=(email) => {
        return /\S+@\S+\.\S+/.test(email);
      }


    return (
        <form action="" id="form_enquiries">
            <div className="form_title">Message Me</div>
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" value={userInfo.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" value={userInfo.email} onChange={handleInputChange}/>
            {error && <div className="error">{error}</div>}
            </div>
            <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" name="message" rows="4" value={userInfo.message} onChange={handleInputChange}></textarea>
            </div>
            <div className="btn_wrapper">
            <button type="button" className="btn-default" onClick={resetForm}>Reset</button>
        <button type="submit" className="btn-default" onClick={formSubmit}>Submit</button>
            </div> 
        </form>
    )
}

export default Enquiries