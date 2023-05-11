import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container h-100">
        <div className="row h-75 justify-content-center align-items-center">
            <div className="col-10 col-sm-8 col-md-6 col-xl-4 m-auto">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <h3 className='text-center'>Login</h3>
                            <input type="text" name="" id="" className="form-control my-3 py-2" placeholder='Username'/>
                            <input type="text" name="" id="" className="form-control my-3 py-2" placeholder='Password'/>
                            <button className='btn btn-primary w-100' onClick={() => {navigate('/')}}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login