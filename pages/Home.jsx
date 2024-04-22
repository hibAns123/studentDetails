import React, { useState } from 'react';
import { registerAPI } from '../services/allAPIs';
import { useNavigate } from 'react-router-dom';

function Home() {
     const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: 'male',
    dob: '',
    course: 'Biology'
  });

  const [registrationData, setRegistrationData] = useState([]);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerAPI(formData)
      console.log(response);
    //   setRegistrationData([...registrationData, response.data]);
    if (response.status === 200) {
        navigate('/data');
      }
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: 'male',
      dob: '',
      course: 'Biology'
    });
  };
  return (
    <div className="App">
         <div className='row' style={{ackgroundColor:'yellow',display:"flex",alignItems:'center',justifyContent:'space-between'}}>
            <div className="col-6"><h1 style={{fontSize:'40px', color:'grey'}}>Education</h1></div>
            <div className="col-6">
                <div className="row" style={{display:"flex",justifyContent:'space-around'}}>
                   <div className='col' style={{fontSize:'20px', color:'grey',textDecoration:'none',marginRight:'20px'}}> Home</div>
                   <div className='col' style={{fontSize:'20px', color:'grey',marginRight:'20px'}}> Services</div>
                   <div className='col' style={{fontSize:'20px', color:'grey',marginRight:'20px'}}> Contact</div>
                   <div className='col' style={{fontSize:'20px', color:'grey',marginRight:'20px'}}> About</div>
                </div>
            </div>
        </div>

    <div className='d-flex' style={{display:'flex',justifyContent:'space-around',alignItems:'center',}}>
        <div className="sec" style={{width:'10%', marginLeft:'-150px'}}>
            <img src="1.png" alt="" />
            <h1>WELCOME</h1>
            <p>Lorem ipsum dolor  itaque quasi quos i. Rem, di.</p>
        </div>
         <div className='sec' style={{}}>
              <form style={{width:'600px'}} onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="name" style={{marginRight:'20px'}}>Name:</label>
                    <input class="form-control" type="text" id="name" value={formData.name} onChange={handleChange} required /><br />
                </div>
        
               <div className='mb-3'>
                    <label  className='form-label' htmlFor="address">Address:</label>
                    <input type="text" class="form-control" id="address" value={formData.address} onChange={handleChange} required /><br />
               </div>
        
                <label className='form-label' htmlFor="mobile">Mobile:</label>
                <input type="text" class="form-control" id="mobile" value={formData.mobile} onChange={handleChange} required /><br />
        
                <label className='form-label' htmlFor="email">Email:</label>
                <input type="email" class="form-control" id="email" value={formData.email} onChange={handleChange} required /><br />
        
                <label className='form-label' htmlFor="gender">Gender:</label>
                <select class="form-control" id="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select><br />
        
                <label className='form-label' htmlFor="dob">Date of Birth:</label>
                <input type="date" class="form-control" id="dob" value={formData.dob} onChange={handleChange} required /><br />
        
                <label className='form-label' htmlFor="course">Course:</label>
                <select class="form-control" id="course" value={formData.course} onChange={handleChange} required>
                  <option value="Biology">Biology</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Humanities">Humanities</option>
                </select><br />
        
                <button style={{border:'0px', padding:'10px', color:'white', backgroundColor:'orange', marginRight:'60px'}} type="submit">Register</button>
                <button style={{border:'0px', padding:'10px', color:'white', backgroundColor:'orange'}} type="button" onClick={resetForm}>Cancel</button>
              </form>
         </div>
    </div>

   
    </div>
  )
}

export default Home