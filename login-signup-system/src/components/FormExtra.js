export default function FormExtra(ForgotPassword = "#"){
    return(
        <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[#00CCBB] focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="/ForgotPassword" className="font-medium text-[#00CCBB] hover:text-purple-500">
            Forgot your password?
          </a>
        </div>
      </div>

    )
}