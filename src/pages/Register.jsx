import React, { useState } from "react";

const Register = () => {
  // Style constants
  const inputStyle =
    "border-2 border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] min-w-0 flex-1";
  const buttonStyle =
    "mt-5 flex justify-center bg-Green text-white font-medium rounded-md p-2 cursor-not-allowed ease-linear duration-200";
  const activeButtonStyle =
    "hover:bg-white hover:text-[#8a4af3] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#8a4af3] cursor-pointer";
  const disableButtonStyle = "opacity-50";

  // State
  const [state, setState] = useState({
    first: "",
    last: "",
    email: "",
    pass: "",
    confirm: "",
    errors: {
      confirm: false,
    },
  });

  // Check password equality
  const checkPass = () => {
    if (state.pass === state.confirm) {
      setState({ ...state, errors: { confirm: false } });
    } else {
      setState({ ...state, errors: { confirm: 'Not Same' } });
    }
  };

  // Handle input changes
  const handleChange = (evt) => {
    const fields = { ...state };
    fields[evt.target.name] = evt.target.value;
    setState(fields);
    checkPass();
  };

  return (
    <div className="flex justify-center w-[100%] h-[100vh] min-h-screen bg-Green">
      <div className="flex flex-col absolute top-[20%] shadow-lg border-silver border-[2px] bg-white rounded-lg max-w-screen-md m-5 mx-auto p-5 mobile:w-[90%]">
        <text className="text-2xl ">Register</text>

        {/* First Name Last Name */}
        <div className="flex flex-col md:flex-row md:space-x-4 mt-5 w-auto">
          <input
            className={inputStyle + ` mr-3`}
            name="first"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            value={state.first}
            required
          />
          <input
            className={inputStyle}
            name="last"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            value={state.last}
          />
        </div>

        {/* Email */}
        <input
          className={inputStyle + ` mt-7 mobile:w-[100%]`}
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={state.email}
          required
        />

        {/* Password */}
        <div className="flex mt-7">
          <input
            className={inputStyle + ` mr-3`}
            name="pass"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={state.pass}
            required
          />
          <input
            className={inputStyle}
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={state.confirm}
            required
          />
        </div>
        <div className="flex justify-center">
          <span className="flex-1 mr-3"></span>
          <span className="flex-1 text-red-500">{state.errors.confirm}</span>
        </div>

        {/* Submit button */}
        <input
          type="button"
          className={
            state.errors.confirm
              ? buttonStyle + " " + disableButtonStyle
              : buttonStyle + " " + activeButtonStyle
          }
          value="Sign up"
        />
      </div>
    </div>
  );
};

export default Register;
