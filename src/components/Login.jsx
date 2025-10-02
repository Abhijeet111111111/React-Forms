import {useState} from "react";
import Input from "./Input.jsx";
import {isEmail,hasMinLength,isNotEmpty} from '../util/validation.js'
import useInput from "../hooks/useInput.jsx";
export default function Login() {
  const {
      enteredValue : emailValue,
      handleInputChange : handleEmailChange ,
      handleInputBlur : handleEmailBlur,
      hasError: hasEmailError,
  } = useInput('',(value)=>{
      return isEmail(value) && isNotEmpty(value);
  });
    const {
        enteredValue : passwordValue,
        handleInputChange : handlePasswordChange ,
        handleInputBlur : handlePasswordBlur,
        hasError: hasPasswordError,
    } = useInput('',(value)=>{
        return hasMinLength(value,6) && isNotEmpty(value);
    });

    return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
          <Input
              id="email"
              type="email"
              name="email"
              label = "Email"
              onBlur={handleEmailBlur}
              value={emailValue}
              onChange={handleEmailChange}
              error={hasEmailError && "Please Enter a valid Email"}
          />


        <div className="control no-margin">
            <Input
                id="password"
                type="password"
                name="password"
                label = "Pasword"
                onBlur={handlePasswordBlur}
                value={passwordValue}
                onChange={handlePasswordChange}
                error={hasPasswordError && "Enter a Valid Password!"}
            />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
