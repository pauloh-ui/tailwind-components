const items = [
  { id: 1, title: 'Back End Developer', type: 'Full-time', department: 'Engineering', location: 'Remote' },
  { id: 2, title: 'Front End Developer', type: 'Full-time', department: 'Engineering', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', type: 'Full-time', department: 'Design', location: 'Remote' },
]

export default function Example() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 className="text-base font-semibold leading-6 text-gray-900">Job Postings</h3>
      <p className="mt-1 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
      </p>
    </div>
  )
}
