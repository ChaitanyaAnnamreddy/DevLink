const Profile = () => {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-24">
      <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
        <nav className="mb-4 flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="me-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                  />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                <a
                  href="#"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                >
                  My account
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                  Account
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
          General overview
        </h2>
        <div className="grid grid-cols-2 gap-6 border-b border-t border-gray-200 py-4 dark:border-gray-700 md:py-8 lg:grid-cols-4 xl:gap-16">
          <div>
            <svg
              className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            <h3 className="mb-2 text-gray-500 dark:text-gray-400">
              Orders made
            </h3>
            <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              24
              <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <svg
                  className="-ms-1 me-1 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v13m0-13 4 4m-4-4-4 4"
                  ></path>
                </svg>
                10.3%
              </span>
            </span>
            <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
              <svg
                className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              vs 20 last 3 months
            </p>
          </div>
          <div>
            <svg
              className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
              />
            </svg>
            <h3 className="mb-2 text-gray-500 dark:text-gray-400">
              Reviews added
            </h3>
            <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              16
              <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <svg
                  className="-ms-1 me-1 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v13m0-13 4 4m-4-4-4 4"
                  ></path>
                </svg>
                8.6%
              </span>
            </span>
            <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
              <svg
                className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              vs 14 last 3 months
            </p>
          </div>
          <div>
            <svg
              className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            <h3 className="mb-2 text-gray-500 dark:text-gray-400">
              Favorite products added
            </h3>
            <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              8
              <span className="ms-2 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                <svg
                  className="-ms-1 me-1 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v13m0-13 4 4m-4-4-4 4"
                  ></path>
                </svg>
                12%
              </span>
            </span>
            <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
              <svg
                className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              vs 10 last 3 months
            </p>
          </div>
          <div>
            <svg
              className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4"
              />
            </svg>
            <h3 className="mb-2 text-gray-500 dark:text-gray-400">
              Product returns
            </h3>
            <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
              2
              <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <svg
                  className="-ms-1 me-1 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v13m0-13 4 4m-4-4-4 4"
                  ></path>
                </svg>
                50%
              </span>
            </span>
            <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
              <svg
                className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              vs 1 last 3 months
            </p>
          </div>
        </div>
        <div className="py-4 md:py-8">
          <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
            <div className="space-y-4">
              <div className="flex space-x-4">
                <img
                  className="h-16 w-16 rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                  alt="Helene avatar"
                />
                <div>
                  <span className="mb-2 inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                    {' '}
                    PRO Account{' '}
                  </span>
                  <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">
                    Helene Engels
                  </h2>
                </div>
              </div>
              <dl className="">
                <dt className="font-semibold text-gray-900 dark:text-white">
                  Email Address
                </dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  helene@example.com
                </dd>
              </dl>
              <dl>
                <dt className="font-semibold text-gray-900 dark:text-white">
                  Home Address
                </dt>
                <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <svg
                    className="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                    />
                  </svg>
                  2 Miles Drive, NJ 071, New York, United States of America
                </dd>
              </dl>
              <dl>
                <dt className="font-semibold text-gray-900 dark:text-white">
                  Delivery Address
                </dt>
                <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <svg
                    className="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                    />
                  </svg>
                  9th St. PATH Station, New York, United States of America
                </dd>
              </dl>
            </div>
            <div className="space-y-4">
              <dl>
                <dt className="font-semibold text-gray-900 dark:text-white">
                  Phone Number
                </dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  +1234 567 890 / +12 345 678
                </dd>
              </dl>
              <dl>
                <dt className="font-semibold text-gray-900 dark:text-white">
                  Favorite pick-up point
                </dt>
                <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <svg
                    className="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
                    />
                  </svg>
                  Herald Square, 2, New York, United States of America
                </dd>
              </dl>
              <dl>
                <dt className="font-semibold text-gray-900 dark:text-white">
                  My Companies
                </dt>
                <dd className="text-gray-500 dark:text-gray-400">
                  FLOWBITE LLC, Fiscal code: 18673557
                </dd>
              </dl>
              <dl>
                <dt className="mb-1 font-semibold text-gray-900 dark:text-white">
                  Payment Methods
                </dt>
                <dd className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                    <img
                      className="h-4 w-auto dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                      alt=""
                    />
                    <img
                      className="hidden h-4 w-auto dark:flex"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="text-sm">
                      <p className="mb-0.5 font-medium text-gray-900 dark:text-white">
                        Visa ending in 7658
                      </p>
                      <p className="font-normal text-gray-500 dark:text-gray-400">
                        Expiry 10/2024
                      </p>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Profile
