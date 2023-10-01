import React ,{useState} from 'react'
import './admin.css'
import AdminChurch from  '../../assets/ChrushAdmin.png'
import {TfiUser} from 'react-icons/tfi'
import {AiOutlineLock} from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Admin() {
const [inputStyle,setInputStyle] = useState({admin:true,password:true})
const [login,setLogin] =useState({admin:'',password:''})

const handleStyle = (inputName)=>{
  if(inputName === 'admin'){
    setInputStyle((prev)=>{
      return{...prev,admin:false,password:true}
    })
  }
  if(inputName === 'password'){
    setInputStyle((prev)=>{
      return{...prev,admin:true,password:false}
    })
  }
}

const handleChange = (e)=>{
 const name = e.target.name;
  const value = e.target.value;
  setLogin((prev)=>{
    return{...prev,[name]:value}
  })
}

const handleSubmit = (e)=>{
  e.preventDefault()

  if(login.admin === 'admin' && login.password === 'admin'){
    toast.success('🦄 successfully login!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });


  }else{

      if(!login.admin.trim() && !login.password.trim()){
          // console.log('Both Empty')
          toast.error('☹️ Name and Password Empty!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
      }else if (login.admin !== 'admin' && login.password !== 'admin'){
                if(!login.admin.trim()){
                  toast.error('☹️ Empty Name!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
              }else if(!login.password.trim()){
                toast.error('☹️ Empty Password!', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
              }else{
                toast.error('☹️ Name and Password Invalid!', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
              }
      }else if(login.admin !== 'admin'){
              if(!login.admin.trim()){
                toast.error('☹️ Empty Name!', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
              }else{
                toast.error('☹️ Invalid Name!', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
              }
      }else if(login.password !== 'admin'){
            if(!login.password.trim()){
              toast.error('☹️ Empty Password!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            }else{
              toast.error('☹️ Invalid Password! ', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            }
    }




    // if(login.admin === 'admin'){

    // }else{
    //    if(!login.admin.trim()){
    //        console.log('empty')
    //    }else{
    //      console.log('invalid')
    //    }
    // }
    // if(login.password === 'admin'){
 
    // }else{
    //    if(!login.password.trim()){
    //        console.log('empty')
    //    }else{
    //      console.log('invalid')
    //    }
    // }


  }





  



}


  return (
    <div className='admin__container'>
      <div className='admin__container-form'>
          <div className='admin__container-form__img'>
              <img src={AdminChurch} alt="church" />
          </div>
          <div className='admin__container-form__content'>
              <div>
                <h3>Log in.</h3>
                <p>Login with your admin credentials</p>
              </div>
              <form className='admin__container-form__content-flied '>
                  <div className={inputStyle.admin?' admin__condition':'admin__container-form__content-input'} onClick={()=>handleStyle('admin')}>
                      <TfiUser className='admin__container-form__content-input__icon' />
                      <input type='text' name='admin' placeholder='Name' value={login.admin} onChange={handleChange}  />
                    
                  </div>
                  <div className={inputStyle.password?' admin__condition':'admin__container-form__content-input'} onClick={()=>handleStyle('password')}>
                      <AiOutlineLock className='admin__container-form__content-input__icon'/>
                      <input type='password' name='password' placeholder='Password' value={login.password} onChange={handleChange}/>
                  </div>
                  <button type='submit' className='login-button' onClick={handleSubmit}>Log In</button>
              </form>
          </div>
      </div>  
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
  )
}

export default Admin