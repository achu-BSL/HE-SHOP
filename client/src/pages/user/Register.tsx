export function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="px-6 py-10 bg-blue-950 border-slate-900 rounded-md shadow-lg">
        <h6 className="text-slate-100 text-center mb-6 font-semibold">
          Hi, Join Now,
        </h6>
        <div className="mb-8 flex flex-col gap-2">
          <input
            type="text"
            className="border border-gray-400 rounded-md px-4 w-full h-8 text-sm text-gray-800 placeholder-gray-400 placeholder-opacity-50"
            placeholder="Username"
          />
          <input
            type="text"
            className="border border-gray-400 rounded-md px-4 w-full h-8 text-sm text-gray-800 placeholder-gray-400 placeholder-opacity-50"
            placeholder="Email"
          />
          <div className="flex gap-2">
            <input
              type="text"
              className="border border-gray-400 rounded-md px-4 w-full h-8 text-sm text-gray-800 placeholder-gray-400 placeholder-opacity-50"
              placeholder="Email"
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
  );
}
