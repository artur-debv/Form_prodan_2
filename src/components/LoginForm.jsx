"use client"

export function LoginForm() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-[2rem] overflow-hidden shadow-lg">
        <div className="relative">
          <div className="bg-gradient-to-r from-gray-800 to-gray-600 h-36 relative">
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-4 gap-4 p-4">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-full bg-white" />
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                <div className="w-6 h-6 bg-black rounded-sm" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 left-0 right-0 h-20 bg-white rounded-t-[2.5rem]" />
        </div>

        <div className="px-8 pt-12 pb-8 relative">
          <h1 className="text-2xl font-medium mb-6 text-center">Login</h1>
          <form className="space-y-5">
            <div className="space-y-1">
              <label className="text-sm text-gray-500" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                required
                className="w-full border-b border-gray-300 focus:border-gray-800 focus:ring-0 bg-transparent px-0 py-2 placeholder-gray-400"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-500" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="w-full border-b border-gray-300 focus:border-gray-800 focus:ring-0 bg-transparent px-0 py-2 placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors rounded-lg py-3"
            >
              Login
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              {"Don't have an account? "}
              <a href="#" className="text-gray-800 font-medium hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
