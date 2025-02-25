import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { updateUser } from '../store/userSlice'
import imagePlaceholder from '../assets/person.svg'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useNavigate } from 'react-router'

const Profile = () => {
  const selector = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Initialize state with fallback values to handle undefined/null
  const [firstName, setFirstName] = useState(selector.user?.firstName || '')
  const [lastName, setLastName] = useState(selector.user?.lastName || '')
  const [emailId, setEmailId] = useState(selector.user?.emailId || '')
  const [age, setAge] = useState((selector.user?.age || '').toString()) // Ensure string for input
  const [gender, setGender] = useState(selector.user?.gender || '')
  const [skills, setSkills] = useState(
    selector.user?.skills
      ? Array.isArray(selector.user.skills)
        ? selector.user.skills.join(', ')
        : selector.user.skills
      : ''
  ) // Handle both array and string
  const [about, setAbout] = useState(selector.user?.about || '')
  const [photoUrl, setPhotoUrl] = useState(
    selector.user?.photoUrl || imagePlaceholder || ''
  )
  const [notification, setNotification] = useState(null)
  const [emailError, setEmailError] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [ageError, setAgeError] = useState('')
  const [genderError, setGenderError] = useState('')
  const [skillsError, setSkillsError] = useState('')
  const [aboutError, setAboutError] = useState('')

  // Sync state with Redux store on mount or when selector.user changes
  useEffect(() => {
    setFirstName(selector.user?.firstName || '')
    setLastName(selector.user?.lastName || '')
    setEmailId(selector.user?.emailId || '')
    setAge((selector.user?.age || '').toString())
    setGender(selector.user?.gender || '')
    setSkills(
      selector.user?.skills
        ? Array.isArray(selector.user.skills)
          ? selector.user.skills.join(', ')
          : selector.user.skills
        : ''
    )
    setAbout(selector.user?.about || '')
    setPhotoUrl(selector.user?.photoUrl || imagePlaceholder)
  }, [selector.user])

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const img = new Image()
      img.src = reader.result
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        // Set new width & height (e.g., max 500px)
        const maxWidth = 500
        const scaleSize = maxWidth / img.width
        canvas.width = maxWidth
        canvas.height = img.height * scaleSize

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        // Convert to Base64 (JPEG with quality 0.7)
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7)

        setPhotoUrl(compressedBase64) // ✅ Use the compressed image
      }
    }
  }

  const handleRemoveImage = () => {
    setPhotoUrl(imagePlaceholder)
    dispatch(updateUser({ photoUrl: '' }))
  }

  const handleUpdate = async () => {
    setEmailError('')
    setFirstNameError('')
    setLastNameError('')
    setAgeError('')
    setGenderError('')
    setSkillsError('')
    setAboutError('')

    // ✅ Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailId)) {
      setEmailError('Please enter a valid email address')
      return // Stop function execution
    }

    if (!firstName) {
      setFirstNameError('first name cannot be empty')
      return
    }

    if (!lastName) {
      setLastNameError('last name cannot be empty')
      return
    }

    if (!age) {
      setAgeError('Please enter your age so others can get to know you better.')
      return
    }

    if (!gender) {
      setGenderError('Sharing your gender helps others know who you are.')
      return
    }

    if (!skills) {
      setSkillsError('Showcase your expertise by adding your skills!')
      return
    }

    if (!about) {
      setAboutError(
        'Introduce yourself with a short bio to connect with others.'
      )
      return
    }

    const capitalizeFirstLetter = (str) => {
      return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''
    }

    try {
      const payload = {
        photoUrl: photoUrl || '',
        firstName: firstName || '',
        lastName: lastName || '',
        emailId: emailId || '',
        age: age ? Number(age) : null,
        gender: gender ? gender.toLowerCase() : '',
        skills: Array.isArray(skills)
          ? skills
          : skills.split(',').map((s) => s.trim()),
        about: about || '',
      }

      const res = await axios.patch(`${BASE_URL}/profile/edit`, payload, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
      })

      dispatch(
        updateUser({
          ...res.data.data,
          gender: capitalizeFirstLetter(res.data.data.gender),
        })
      )

      setNotification({
        type: 'success',
        message: 'Profile updated successfully! 🎉',
      })

      setTimeout(() => {
        setNotification(null)
      }, 3000)
    } catch (error) {
      console.error(
        '❌ Error updating profile:',
        error.response?.data || error.message
      )

      if (error.response?.status === 401) {
        navigate('/login')
      } else {
        navigate('/error')
      }
    }
  }

  // Conditional rendering if selector.user is not loaded
  if (!selector.user) {
    return <div>Loading profile...</div>
  }

  return (
    <section
      className="h-full py-8 antialiased md:py-24 md:flex px-10 gap-10"
      data-theme="retro"
    >
      {notification && (
        <div className="toast toast-top toast-center fixed z-50">
          <div
            className={`alert ${
              notification.type === 'success' ? 'alert-success' : 'alert-error'
            }`}
          >
            <span>{notification.message}</span>
          </div>
        </div>
      )}
      <div className="w-full">
        <nav className="mb-1 flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue"
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
                  Profile
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <hr className="mt-4 mb-4 border-gray-200 dark:border-gray-400" />
        <div className=" md:flex justify-between">
          <div className="mx-auto max-w-screen-lg px-4 2xl:px-0 md:w-3/5">
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-black sm:text-2xl md:mb-6">
              Edit Profile
            </h2>
            <div className="grid gap-6 border-b pb-2 border-gray-200 dark:border-gray-300">
              <div className="flex items-center space-x-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src={photoUrl}
                  alt="Profile"
                />
                <div className="space-x-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="fileInput"
                  />
                  <label
                    htmlFor="fileInput"
                    className="rounded bg-blue-500 px-4 py-[10px] text-white hover:bg-blue-600"
                  >
                    Upload
                  </label>
                  <button
                    className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleRemoveImage}
                    disabled={!photoUrl || photoUrl === imagePlaceholder}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="py-4 md:py-8">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-black">
                    Full name*
                  </label>
                  <div className="flex space-x-4">
                    <div className="w-full flex flex-col">
                      <input
                        type="text"
                        className="block w-full rounded-lg border p-2.5 text-sm text-gray-900 dark:bg-gray-400 dark:text-gray-100"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      {firstNameError && (
                        <p className="mt-1 text-sm text-red-500">
                          {firstNameError}
                        </p>
                      )}
                    </div>
                    <div className="w-full flex flex-col">
                      <input
                        type="text"
                        className="block w-full rounded-lg border p-2.5 text-sm text-gray-900 dark:bg-gray-400 dark:text-gray-100"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      {lastNameError && (
                        <p className="mt-1 text-sm text-red-500">
                          {lastNameError}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-black">
                    Your email*
                  </label>
                  <input
                    type="email"
                    className="block w-full rounded-lg border p-2.5 text-sm text-gray-900 dark:bg-gray-400 dark:text-gray-100"
                    placeholder="name@example.com"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-red-500">{emailError}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-black">
                    About
                  </label>
                  <textarea
                    className="block w-full rounded-lg border p-2.5 text-sm text-gray-900 dark:bg-gray-400 dark:text-gray-100"
                    placeholder="Tell us about yourself..."
                    rows="2"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                  {aboutError && (
                    <p className="mt-1 text-sm text-red-500">{aboutError}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-black">
                    Age
                  </label>
                  <input
                    type="number"
                    value={age}
                    className="block w-full rounded-lg  border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-400 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter your age"
                    onChange={(e) => setAge(e.target.value)}
                  />
                  {ageError && (
                    <p className="mt-1 text-sm text-red-500">{ageError}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-black">
                    Gender
                  </label>
                  <select
                    value={gender}
                    className="block w-full rounded-lg  border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {genderError && (
                    <p className="mt-1 text-sm text-red-500">{genderError}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-black">
                    Skills
                  </label>
                  <input
                    type="text"
                    value={skills}
                    className="block w-full rounded-lg  border-gray-00 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-400 dark:text-gray-100 dark:placeholder-gray-100 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="e.g., JavaScript, React"
                    onChange={(e) => setSkills(e.target.value)}
                  />
                  {skillsError && (
                    <p className="mt-1 text-sm text-red-500">{skillsError}</p>
                  )}
                </div>

                <button
                  className="mt-6 rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 ml-[25%] disabled:bg-blue-300"
                  onClick={handleUpdate}
                  //   disabled={
                  //     !firstName ||
                  //     !lastName ||
                  //     !emailId ||
                  //     !age ||
                  //     !gender ||
                  //     !skills ||
                  //     !about
                  //   }
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
          <div
            className="h-screen flex flex-col justify-center items-center overflow-y-auto md:w-2/5 mx-auto"
            key={selector.user?._id || 'default-key'} // Fallback key
          >
            <h4 className="mb-4 text-xl font-semibold text-gray-900 dark:text-black sm:text-2xl md:mb-6">
              This is how your profile looks like for other users
            </h4>
            <div
              className="card md:card-side bg-base-100 shadow-xl w-full flex justify-center mx-24 md:mx-auto h-3/4 md:h-1/2"
              data-theme="synthwave"
            >
              <figure>
                <img src={photoUrl} alt="Profile Image" />
              </figure>
              <div className="card-body lg:px-6 flex flex-col justify-center">
                <h2 className="card-title text-3xl">
                  {firstName} {lastName}
                </h2>
                {(age || gender) && (
                  <p>
                    {`${age ? `${age} years` : ''}${age && gender ? ', ' : ''}${
                      gender.charAt(0).toUpperCase() + gender.slice(1) || ''
                    }`}
                  </p>
                )}
                {skills && (
                  <p>{Array.isArray(skills) ? skills.join(', ') : skills}</p>
                )}
                <p>{about}</p>
                <div className="card-actions flex flex-nowrap">
                  <button className="btn btn-success">Accept</button>
                  <button className="btn btn-error">Reject</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
