/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  ArchiveBoxIcon,
  Bars3BottomLeftIcon,
  Bars4Icon,
  ClockIcon,
  HomeIcon,
  UserCircleIcon as UserCircleIconOutline,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  BellIcon,
  CalendarIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckCircleIcon,
  LockOpenIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  TagIcon,
  UserCircleIcon as UserCircleIconMini,
} from '@heroicons/react/20/solid'

const navigation = [
  { name: 'All Issues', href: '#', icon: HomeIcon, current: true },
  { name: 'My Issues', href: '#', icon: Bars4Icon, current: false },
  { name: 'Assigned', href: '#', icon: UserCircleIconOutline, current: false },
  { name: 'Closed', href: '#', icon: ArchiveBoxIcon, current: false },
  { name: 'Recent', href: '#', icon: ClockIcon, current: false },
]
const projects = [
  { id: 1, name: 'GraphQL API', href: '#' },
  { id: 2, name: 'iOS App', href: '#' },
  { id: 3, name: 'Marketing Site Redesign', href: '#' },
  { id: 4, name: 'Customer Portal', href: '#' },
]
const activity = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Eduardo Benz', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 2,
    type: 'assignment',
    person: { name: 'Hilary Mahy', href: '#' },
    assigned: { name: 'Kristin Watson', href: '#' },
    date: '2d ago',
  },
  {
    id: 3,
    type: 'tags',
    person: { name: 'Hilary Mahy', href: '#' },
    tags: [
      { name: 'Bug', href: '#', color: 'bg-rose-500' },
      { name: 'Accessibility', href: '#', color: 'bg-indigo-500' },
    ],
    date: '6h ago',
  },
  {
    id: 4,
    type: 'comment',
    person: { name: 'Jason Meyers', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pb-4 pt-5">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="px-2">
                      <div className="space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                'mr-4 h-6 w-6 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="mt-10">
                        <p className="px-2 text-sm font-medium text-gray-400">Projects</p>
                        <div className="mt-2 space-y-1">
                          {projects.map((project) => (
                            <a
                              key={project.id}
                              href={project.href}
                              className="flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                              <span className="truncate">{project.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto bg-gray-800">
              <nav className="flex-1 px-2 py-4">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                          'mr-3 h-6 w-6 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-10">
                  <p className="px-3 text-sm font-medium text-gray-400">Projects</p>
                  <div className="mt-2 space-y-1">
                    {projects.map((project) => (
                      <a
                        key={project.id}
                        href={project.href}
                        className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        <span className="truncate">{project.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex w-0 flex-1 flex-col lg:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-4">
              <div className="flex flex-1">
                <form className="flex w-full lg:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm"
                      placeholder="Search"
                      type="search"
                      name="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center lg:ml-6">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500"
                >
                  Create
                </button>
              </div>
            </div>
          </div>

          <main className="flex-1">
            <div className="py-8 xl:py-10">
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-5xl xl:grid-cols-3">
                <div className="xl:col-span-2 xl:border-r xl:border-gray-200 xl:pr-8">
                  <div>
                    <div>
                      <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                        <div>
                          <h1 className="text-2xl font-bold text-gray-900">ARIA attribute misspelled</h1>
                          <p className="mt-2 text-sm text-gray-500">
                            #400 opened by{' '}
                            <a href="#" className="font-medium text-gray-900">
                              Hilary Mahy
                            </a>{' '}
                            in{' '}
                            <a href="#" className="font-medium text-gray-900">
                              Customer Portal
                            </a>
                          </p>
                        </div>
                        <div className="mt-4 flex space-x-3 md:mt-0">
                          <button
                            type="button"
                            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            <PencilIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Edit
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            <BellIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Subscribe
                          </button>
                        </div>
                      </div>
                      <aside className="mt-8 xl:hidden">
                        <h2 className="sr-only">Details</h2>
                        <div className="space-y-5">
                          <div className="flex items-center space-x-2">
                            <LockOpenIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                            <span className="text-sm font-medium text-green-700">Open Issue</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span className="text-sm font-medium text-gray-900">4 comments</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span className="text-sm font-medium text-gray-900">
                              Created on <time dateTime="2020-12-02">Dec 2, 2020</time>
                            </span>
                          </div>
                        </div>
                        <div className="mt-6 space-y-8 border-b border-t border-gray-200 py-6">
                          <div>
                            <h2 className="text-sm font-medium text-gray-500">Assignees</h2>
                            <ul role="list" className="mt-3 space-y-3">
                              <li className="flex justify-start">
                                <a href="#" className="flex items-center space-x-3">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="h-5 w-5 rounded-full"
                                      src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                      alt=""
                                    />
                                  </div>
                                  <div className="text-sm font-medium text-gray-900">Eduardo Benz</div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h2 className="text-sm font-medium text-gray-500">Tags</h2>
                            <ul role="list" className="mt-2 leading-8">
                              <li className="inline">
                                <a
                                  href="#"
                                  className="relative inline-flex items-center rounded-full px-2.5 py-1 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                  <div className="absolute flex flex-shrink-0 items-center justify-center">
                                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                                  </div>
                                  <div className="ml-3 text-xs font-semibold text-gray-900">Bug</div>
                                </a>{' '}
                              </li>
                              <li className="inline">
                                <a
                                  href="#"
                                  className="relative inline-flex items-center rounded-full px-2.5 py-1 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                  <div className="absolute flex flex-shrink-0 items-center justify-center">
                                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                                  </div>
                                  <div className="ml-3 text-xs font-semibold text-gray-900">Accessibility</div>
                                </a>{' '}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </aside>
                      <div className="py-3 xl:pb-0 xl:pt-6">
                        <h2 className="sr-only">Description</h2>
                        <div className="prose max-w-none">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, hic? Commodi cumque
                            similique id tempora molestiae deserunt at suscipit, dolor voluptatem, numquam, harum
                            consequatur laboriosam voluptas tempore aut voluptatum alias?
                          </p>
                          <ul role="list">
                            <li>
                              Tempor ultrices proin nunc fames nunc ut auctor vitae sed. Eget massa parturient vulputate
                              fermentum id facilisis nam pharetra. Aliquet leo tellus.
                            </li>
                            <li>Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.</li>
                            <li>
                              Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed. Ut
                              tellus in sed dignissim.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section aria-labelledby="activity-title" className="mt-8 xl:mt-10">
                    <div>
                      <div className="divide-y divide-gray-200">
                        <div className="pb-4">
                          <h2 id="activity-title" className="text-lg font-medium text-gray-900">
                            Activity
                          </h2>
                        </div>
                        <div className="pt-6">
                          {/* Activity feed*/}
                          <div className="flow-root">
                            <ul role="list" className="-mb-8">
                              {activity.map((item, itemIdx) => (
                                <li key={item.id}>
                                  <div className="relative pb-8">
                                    {itemIdx !== activity.length - 1 ? (
                                      <span
                                        className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                                        aria-hidden="true"
                                      />
                                    ) : null}
                                    <div className="relative flex items-start space-x-3">
                                      {item.type === 'comment' ? (
                                        <>
                                          <div className="relative">
                                            <img
                                              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                                              src={item.imageUrl}
                                              alt=""
                                            />

                                            <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                                              <ChatBubbleLeftEllipsisIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          </div>
                                          <div className="min-w-0 flex-1">
                                            <div>
                                              <div className="text-sm">
                                                <a href={item.person.href} className="font-medium text-gray-900">
                                                  {item.person.name}
                                                </a>
                                              </div>
                                              <p className="mt-0.5 text-sm text-gray-500">Commented {item.date}</p>
                                            </div>
                                            <div className="mt-2 text-sm text-gray-700">
                                              <p>{item.comment}</p>
                                            </div>
                                          </div>
                                        </>
                                      ) : item.type === 'assignment' ? (
                                        <>
                                          <div>
                                            <div className="relative px-1">
                                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                                <UserCircleIconMini
                                                  className="h-5 w-5 text-gray-500"
                                                  aria-hidden="true"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="min-w-0 flex-1 py-1.5">
                                            <div className="text-sm text-gray-500">
                                              <a href={item.person.href} className="font-medium text-gray-900">
                                                {item.person.name}
                                              </a>{' '}
                                              assigned{' '}
                                              <a href={item.assigned.href} className="font-medium text-gray-900">
                                                {item.assigned.name}
                                              </a>{' '}
                                              <span className="whitespace-nowrap">{item.date}</span>
                                            </div>
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          <div>
                                            <div className="relative px-1">
                                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                                <TagIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="min-w-0 flex-1 py-0">
                                            <div className="text-sm leading-8 text-gray-500">
                                              <span className="mr-0.5">
                                                <a href={item.person.href} className="font-medium text-gray-900">
                                                  {item.person.name}
                                                </a>{' '}
                                                added tags
                                              </span>{' '}
                                              <span className="mr-0.5">
                                                {item.tags.map((tag) => (
                                                  <Fragment key={tag.name}>
                                                    <a
                                                      href={tag.href}
                                                      className="relative inline-flex items-center rounded-full px-2.5 py-1 text-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                    >
                                                      <span className="absolute flex flex-shrink-0 items-center justify-center">
                                                        <span
                                                          className={classNames(tag.color, 'h-1.5 w-1.5 rounded-full')}
                                                          aria-hidden="true"
                                                        />
                                                      </span>
                                                      <span className="ml-3 font-semibold text-gray-900">
                                                        {tag.name}
                                                      </span>
                                                    </a>{' '}
                                                  </Fragment>
                                                ))}
                                              </span>
                                              <span className="whitespace-nowrap">{item.date}</span>
                                            </div>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-6">
                            <div className="flex space-x-3">
                              <div className="flex-shrink-0">
                                <div className="relative">
                                  <img
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                    alt=""
                                  />

                                  <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                                    <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                  </span>
                                </div>
                              </div>
                              <div className="min-w-0 flex-1">
                                <form action="#">
                                  <div>
                                    <label htmlFor="comment" className="sr-only">
                                      Comment
                                    </label>
                                    <textarea
                                      id="comment"
                                      name="comment"
                                      rows={3}
                                      className="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:py-1.5 sm:text-sm sm:leading-6"
                                      placeholder="Leave a comment"
                                      defaultValue={''}
                                    />
                                  </div>
                                  <div className="mt-6 flex items-center justify-end space-x-4">
                                    <button
                                      type="button"
                                      className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                      <CheckCircleIcon className="-ml-0.5 h-5 w-5 text-green-500" aria-hidden="true" />
                                      Close issue
                                    </button>
                                    <button
                                      type="submit"
                                      className="inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                    >
                                      Comment
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <aside className="hidden xl:block xl:pl-8">
                  <h2 className="sr-only">Details</h2>
                  <div className="space-y-5">
                    <div className="flex items-center space-x-2">
                      <LockOpenIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm font-medium text-green-700">Open Issue</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-900">4 comments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-900">
                        Created on <time dateTime="2020-12-02">Dec 2, 2020</time>
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-8 border-t border-gray-200 py-6">
                    <div>
                      <h2 className="text-sm font-medium text-gray-500">Assignees</h2>
                      <ul role="list" className="mt-3 space-y-3">
                        <li className="flex justify-start">
                          <a href="#" className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <img
                                className="h-5 w-5 rounded-full"
                                src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>
                            <div className="text-sm font-medium text-gray-900">Eduardo Benz</div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-sm font-medium text-gray-500">Tags</h2>
                      <ul role="list" className="mt-2 leading-8">
                        <li className="inline">
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-full px-2.5 py-1 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            <div className="absolute flex flex-shrink-0 items-center justify-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                            </div>
                            <div className="ml-3 text-xs font-semibold text-gray-900">Bug</div>
                          </a>{' '}
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="relative inline-flex items-center rounded-full px-2.5 py-1 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            <div className="absolute flex flex-shrink-0 items-center justify-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                            </div>
                            <div className="ml-3 text-xs font-semibold text-gray-900">Accessibility</div>
                          </a>{' '}
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
