import React from 'react'

const Login = () => {
   const [credentials, setcredentials] = useState({name: '', email: '', password: '',geolocation: '', phoneNumber: ''})
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          const response = await fetch('http://localhost:5000/api/user', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body:JSON.stringify({
                  name: credentials.name,
                  email: credentials.email,
                  password: credentials.password,
                  address: credentials.geolocation,
                  phoneNumber: credentials.phoneNumber
              })
          }); 
          const json = await response.json();
          console.log(json);
  
          if(!json.sucess){
              alert('Enter valid credentials')
          }
      }
  
      const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      }

  return (
    <div>
      
    </div>
  )
}

export default Login
