import { useNavigate, useLocation } from 'react-router'

const Error = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Get the error message from state, or fallback to a default message
  const message = location.state?.message || 'Something went wrong! 🚨'

  return (
    <section
      className="h-screen flex items-center justify-center"
      data-theme="lofi"
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            {message}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.
          </p>
          <button
            onClick={() => navigate('/')}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-lg"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </section>
  )
}

export default Error
