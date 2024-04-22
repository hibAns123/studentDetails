import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
        <div className='row' style={{display:"flex",alignItems:'center',justifyContent:'space-between'}}>
            <div className="col-6"><h1 style={{fontSize:'40px', color:'grey'}}>Education</h1></div>
            <div className="col-6">
                <div className="row" style={{display:"flex",justifyContent:'space-around'}}>
                   <div className='col' style={{fontSize:'30px', color:'grey',textDecoration:'none',marginRight:'20px'}}> Home</div>
                   <div className='col' style={{fontSize:'30px', color:'grey',marginRight:'20px'}}> Services</div>
                   <div className='col' style={{fontSize:'30px', color:'grey',marginRight:'20px'}}> Contact</div>
                   <div className='col' style={{fontSize:'30px', color:'grey',marginRight:'20px'}}> About</div>
                </div>
            </div>
        </div>
        <div className="d-flex" style={{display:"flex",alignItems:'center',justifyContent:'space-between'}}>
<div className="edu" style={{width:'50%',margin:'50px'}}>
    <h1>EDUCATION</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci doloribus minus consequatur placeat, harum voluptatem neque ut quasi iure nulla magni! Praesentium culpa nihil delectus magni, ut provident omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, deleniti magni, odio repellendus eos, velit iusto fugiat nam blanditiis nesciunt minus fuga numquam ratione doloribus id iste ut? Distinctio, nobis.</p>
    <Link to={'/home'}><button style={{color:'white',backgroundColor:'orange',padding:'10px',border:'0px'}}>Register</button></Link>
</div>
<div className="edu" style={{marginLeft:'-100px',marginRight:'100px'}}>
    <img style={{width:'500px'}} src="1.png" alt="" />
</div>
        </div>
    </div>
  )
}

export default LandingPage