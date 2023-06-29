const items = [
  { id: 1, title: 'Back End Developer', type: 'Full-time', department: 'Engineering', location: 'Remote' },
  { id: 2, title: 'Front End Developer', type: 'Full-time', department: 'Engineering', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', type: 'Full-time', department: 'Design', location: 'Remote' },
]

export default function Example() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Job Postings</h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create new job
          </button>
        </div>
      </div>
    </div>
  )
}
