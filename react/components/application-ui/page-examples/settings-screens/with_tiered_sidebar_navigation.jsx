/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  BanknotesIcon,
  Bars3Icon,
  BellIcon,
  BookmarkSquareIcon,
  CogIcon,
  FireIcon,
  HomeIcon,
  InboxIcon,
  KeyIcon,
  MagnifyingGlassCircleIcon,
  PhotoIcon,
  SquaresPlusIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon },
  { name: 'Trending', href: '#', icon: FireIcon },
  { name: 'Bookmarks', href: '#', icon: BookmarkSquareIcon },
  { name: 'Messages', href: '#', icon: InboxIcon },
  { name: 'Profile', href: '#', icon: UserIcon },
]
const subNavigation = [
  {
    name: 'Account',
    description: 'Ullamcorper id at suspendisse nec id volutpat vestibulum enim. Interdum blandit.',
    href: '#',
    icon: CogIcon,
    current: true,
  },
  {
    name: 'Notifications',
    description: 'Enim, nullam mi vel et libero urna lectus enim. Et sed in maecenas tellus.',
    href: '#',
    icon: BellIcon,
    current: false,
  },
  {
    name: 'Security',
    description: 'Semper accumsan massa vel volutpat massa. Non turpis ut nulla aliquet turpis.',
    href: '#',
    icon: KeyIcon,
    current: false,
  },
  {
    name: 'Appearance',
    description: 'Magna nulla id sed ornare ipsum eget. Massa eget porttitor suscipit consequat.',
    href: '#',
    icon: PhotoIcon,
    current: false,
  },
  {
    name: 'Billing',
    description: 'Orci aliquam arcu egestas turpis cursus. Lectus faucibus netus dui auctor mauris.',
    href: '#',
    icon: BanknotesIcon,
    current: false,
  },
  {
    name: 'Integrations',
    description: 'Nisi, elit volutpat odio urna quis arcu faucibus dui. Mauris adipiscing pellentesque.',
    href: '#',
    icon: SquaresPlusIcon,
    current: false,
  },
  {
    name: 'Additional Resources',
    description: 'Quis viverra netus donec ut auctor fringilla facilisis. Nunc sit donec cursus sit quis et.',
    href: '#',
    icon: MagnifyingGlassCircleIcon,
    current: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-slate-50">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="flex h-full">
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-slate-600 bg-opacity-75" />
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
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 -mr-12 pt-4">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="pb-4 pt-5">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <div className="space-y-1 px-2">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="group flex items-center rounded-md p-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          >
                            <item.icon
                              className="mr-4 h-6 w-6 text-slate-400 group-hover:text-slate-500"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 border-t border-slate-200 p-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-slate-700 group-hover:text-slate-900">Lisa Marie</p>
                          <p className="text-sm font-medium text-slate-500 group-hover:text-slate-700">
                            Account Settings
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex w-20 flex-col">
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-blue-600">
              <div className="flex-1">
                <div className="flex items-center justify-center bg-blue-700 py-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                    alt="Your Company"
                  />
                </div>
                <nav aria-label="Sidebar" className="flex flex-col items-center space-y-3 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center rounded-lg p-4 text-blue-200 hover:bg-blue-700"
                    >
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                      <span className="sr-only">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex flex-shrink-0 pb-5">
                <a href="#" className="w-full flex-shrink-0">
                  <img
                    className="mx-auto block h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="sr-only">
                    <p>Lisa Marie</p>
                    <p>Account settings</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          {/* Mobile top navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between bg-blue-600 px-4 py-2 sm:px-6">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  alt="Your Company"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <main className="flex flex-1 overflow-hidden">
            <div className="flex flex-1 flex-col overflow-y-auto xl:overflow-hidden">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-white xl:hidden">
                <div className="mx-auto flex max-w-3xl items-start px-4 py-3 sm:px-6 lg:px-8">
                  <a href="#" className="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-slate-900">
                    <ChevronLeftIcon className="h-5 w-5 text-slate-400" aria-hidden="true" />
                    <span>Settings</span>
                  </a>
                </div>
              </nav>

              <div className="flex flex-1 xl:overflow-hidden">
                {/* Secondary sidebar */}
                <nav
                  aria-label="Sections"
                  className="hidden w-96 flex-shrink-0 border-r border-slate-200 bg-white xl:flex xl:flex-col"
                >
                  <div className="flex h-16 flex-shrink-0 items-center border-b border-slate-200 px-6">
                    <p className="text-lg font-medium text-slate-900">Settings</p>
                  </div>
                  <div className="min-h-0 flex-1 overflow-y-auto">
                    {subNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-blue-50 bg-opacity-50' : 'hover:bg-blue-50 hover:bg-opacity-50',
                          'border-slate-200 flex border-b p-6'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <item.icon className="-mt-0.5 h-6 w-6 flex-shrink-0 text-slate-400" aria-hidden="true" />
                        <div className="ml-3 text-sm">
                          <p className="font-medium text-slate-900">{item.name}</p>
                          <p className="mt-1 text-slate-500">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </nav>

                {/* Main content */}
                <div className="flex-1 xl:overflow-y-auto">
                  <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Account</h1>

                    <form className="divide-y-slate-200 mt-6 space-y-8 divide-y">
                      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-slate-900">Profile</h2>
                          <p className="mt-1 text-sm text-slate-500">
                            This information will be displayed publicly so be careful what you share.
                          </p>
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-slate-900">
                            First name
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-slate-900">
                            Last name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="username" className="block text-sm font-medium leading-6 text-slate-900">
                            Username
                          </label>
                          <div className="mt-2 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center rounded-l-md border border-r-0 border-slate-300 bg-white px-3 text-slate-500 sm:text-sm">
                              workcation.com/
                            </span>
                            <input
                              type="text"
                              name="username"
                              id="username"
                              autoComplete="username"
                              defaultValue="lisamarie"
                              className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="photo" className="block text-sm font-medium leading-6 text-slate-900">
                            Photo
                          </label>
                          <div className="mt-2 flex items-center">
                            <img
                              className="inline-block h-12 w-12 rounded-full"
                              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80"
                              alt=""
                            />
                            <div className="relative ml-4">
                              <input
                                id="user-photo"
                                name="user-photo"
                                type="file"
                                className="peer absolute inset-0 h-full w-full rounded-md opacity-0"
                              />
                              <label
                                htmlFor="user-photo"
                                className="pointer-events-none block rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 peer-hover:bg-slate-50 peer-focus:ring-2 peer-focus:ring-blue-600"
                              >
                                <span>Change</span>
                                <span className="sr-only"> user photo</span>
                              </label>
                            </div>
                            <button type="button" className="ml-6 text-sm font-medium leading-6 text-slate-900">
                              Remove
                            </button>
                          </div>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="description" className="block text-sm font-medium leading-6 text-slate-900">
                            Description
                          </label>
                          <div className="mt-2">
                            <textarea
                              id="description"
                              name="description"
                              rows={4}
                              className="block w-full rounded-md border-0 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:py-1.5 sm:text-sm sm:leading-6"
                              defaultValue={''}
                            />
                          </div>
                          <p className="mt-3 text-sm text-slate-500">
                            Brief description for your profile. URLs are hyperlinked.
                          </p>
                        </div>

                        <div className="sm:col-span-6">
                          <label htmlFor="url" className="block text-sm font-medium leading-6 text-slate-900">
                            URL
                          </label>
                          <input
                            type="text"
                            name="url"
                            id="url"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6">
                        <div className="sm:col-span-6">
                          <h2 className="text-xl font-medium text-slate-900">Personal Information</h2>
                          <p className="mt-1 text-sm text-slate-500">
                            This information will be displayed publicly so be careful what you share.
                          </p>
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-slate-900">
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-slate-900">
                            Phone number
                          </label>
                          <input
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            autoComplete="tel"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="country" className="block text-sm font-medium leading-6 text-slate-900">
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          >
                            <option />
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="language" className="block text-sm font-medium leading-6 text-slate-900">
                            Language
                          </label>
                          <input
                            type="text"
                            name="language"
                            id="language"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>

                        <p className="text-sm text-slate-500 sm:col-span-6">
                          This account was created on{' '}
                          <time dateTime="2017-01-05T20:35:40">January 5, 2017, 8:35:40 PM</time>.
                        </p>
                      </div>

                      <div className="flex justify-end gap-x-3 pt-8">
                        <button
                          type="button"
                          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
