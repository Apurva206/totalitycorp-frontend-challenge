import React, { useEffect, useState } from 'react';

function Login() {
  const data = { name: "", email: "", password: "" };
  const [InputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log('Registered');
  }, [flag]);

  function handleData(e) {
    setInputData({ ...InputData, [e.target.name]: e.target.value });
    console.log(InputData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (InputData.name === "" || InputData.email === "" || InputData.password === "") {
      alert("Please fill in all fields");
      return;
    } else {
      setFlag(true);
    }
  }

  return (
    <>
     <div className="flex justify-center w-[100%] h-[100vh] bg-Green">
      <div className='flex flex-col absolute top-[20%] shadow-lg border-silver border-[2px] bg-white rounded-lg p-5 mobile:w-[90%]'>
      <pre>{flag ? <h2>Hi {InputData.name}, Logged in Successfully</h2> : ""}</pre>
      <form className='container' onSubmit={handleSubmit}>
        <div className='header text-xl'>
          <h1>Login to your account</h1>
        </div>
        <div className='text-center pt-[30px]'>
          <input type='text'className='border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 min-w-0' placeholder='Enter your Name'
            name='name' value={InputData.name} onChange={handleData}></input>
        </div>
        <div className='text-center pt-[10px]'>
          <input type='text'className='border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 min-w-0' placeholder='Enter your Email'
            name='email' value={InputData.email} onChange={handleData}></input>
        </div>
        <div className='text-center pt-[10px]'>
          <input type='text'className='border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 min-w-0' placeholder='Enter your Password'
            name='password' value={InputData.password} onChange={handleData}></input>
        </div>
        <div className='text-center pt-[10px]'>
          <button type='submit'className='rounded-[6px] bg-Green py-2 px-4 text-white hover:text-grey mt-[6px] hover:bg-white hover:text-[#8a4af3] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#8a4af3]'>Submit</button>
        </div>
      </form>
      </div>
      </div>
    </>
  )
}

export default Login;