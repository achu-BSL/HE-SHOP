import { FormEvent, useRef } from "react";
import { registerValidation } from "../../utils/register.validation";

export function Register() {
  const usernameInput = useRef<HTMLInputElement>(null);
  // const emailInput = useRef<HTMLInputElement>(null);
  // const passwordInput = useRef<HTMLInputElement>(null);
  // const confrimPasswordInput = useRef<HTMLInputElement>(null);
  
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const { username, email, password, confirmPassword } = Object.fromEntries(formData);
    const result = registerValidation({
      username: username as string, 
      email: email as string, 
      password: password as string, 
      confirmPassword: confirmPassword as string
    })
    if(!result.status) {
      if(result.error.username) {
        usernameInput.current?.classList.add('border-2', 'border-bg-pink-400');
      }
      
    }
  }


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="px-6 py-10 bg-blue-950 border-slate-900 rounded-md shadow-lg">
        <form onSubmit={submitHandler}>
          <h6 className="text-slate-100 text-center mb-6 font-semibold">
            Hi, Join Now,
          </h6>
          <div className="mb-8 flex flex-col gap-2">
            <input
              type="text"
              className="border border-gray-400 rounded-md px-4 w-full h-8 text-sm text-gray-800 placeholder-gray-400 placeholder-opacity-50"
              placeholder="Username"
              name="username"
              ref={usernameInput}
            />
            <input
              type="text"
              className="border border-gray-400 rounded-md px-4 w-full h-8 text-sm text-gray-800 placeholder-gray-400 placeholder-opacity-50"
              placeholder="Email"
              name="email"
              // ref={emailInput}
            />
            <div className="flex gap-2">
              <input
                type="number"
                className="border border-gray-400 rounded-md px-4 w-full h-8 text-sm text-gray-800 placeholder-gray-400 placeholder-opacity-50"
                placeholder="OTP"
                name="OTP"
              />
              <button
                type="submit"
                className="border border-white py-1 hover:bg-slate-700 text-white font-normal w-full rounded-md text-sm"
              >
                SEND OTP
              </button>
            </div>
            <button
              type="submit"
              className="border py-1 hover:bg-slate-700 text-white font-normal w-full rounded-md text-sm"
            >
              Verify
            </button>
            <input
              type="password"
              className="border border-gray-400 rounded-md px-4 w-full h-8 text-sm text-gray-800 placeholder-gray-400 placeholder-opacity-50"
              placeholder="Password"
              name="password"
              // ref={passwordInput}
            />
                        <input
              type="text"
              className="border border-gray-400 rounded-md px-4 w-full h-8 text-sm text-gray-800 placeholder-gray-400 placeholder-opacity-50"
              placeholder="Confirm password"
              name="confirmPassword"
              // ref={confrimPasswordInput}
            />
          </div>
          <div className="flex gap-2 flex-col">
            <button
              type="submit"
              className="border border-white py-1 hover:bg-slate-700 text-white font-normal w-full rounded-md text-sm"
            >
              Register
            </button>
            <p className="mt-2 text-white text-xs font-thin">
              Already have a Account? Login
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
