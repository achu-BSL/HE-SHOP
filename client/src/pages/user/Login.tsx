export function Login () {
    return (
        <div className="flex justify-center items-center h-screen">
        <form className="px-6 py-10 bg-blue-950 border-slate-900 rounded-md shadow-lg">
            <h6 className="text-slate-100 text-center mb-6 font-semibold">Hi, Welcome Back,</h6>
          <div className="mb-4 flex flex-col gap-2">
            <input
              type="text"
              className="border border-gray-400 rounded-md px-4 w-full h-8 text-sm text-gray-800 placeholder-gray-400 placeholder-opacity-50"
              placeholder="Enter your name"
              />
                          <input
              type="text"
              className="border border-gray-400 rounded-md px-4 w-full h-8 text-sm text-gray-800 placeholder-gray-400 placeholder-opacity-50"
              placeholder="Enter your name"
              />
              
          </div>
          <div className="flex gap-2 flex-col">
            <button
              type="submit"
              className="border border-white py-1 hover:bg-slate-700 text-white font-normal w-full rounded-md text-sm"
            >
              Login
            </button>
            <button
              type="submit"
              className="border border-white py-1 hover:bg-slate-700 text-white font-normal w-full rounded-md text-xs"
            >
              Login with OTP
            </button>
            <p className="mt-2 text-white text-xs font-thin">Don't have Account? Register</p>
          </div>
        </form>
      </div>
    );
}