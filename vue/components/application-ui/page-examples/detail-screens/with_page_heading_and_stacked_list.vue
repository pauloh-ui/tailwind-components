<!--
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
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full">
    <!-- Navbar -->
    <Disclosure as="nav" class="bg-gray-50" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between border-b border-gray-200">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=500" alt="Your Company" />
            </div>

            <!-- Links section -->
            <div class="hidden lg:ml-10 lg:block">
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100' : 'hover:text-gray-700', 'rounded-md px-3 py-2 text-sm font-medium text-gray-900']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          </div>

          <div class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <!-- Search section -->
            <div class="w-full max-w-lg lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative text-gray-400 focus-within:text-gray-500">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input id="search" class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" placeholder="Search" type="search" name="search" />
              </div>
            </div>
          </div>
          <div class="flex lg:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          <!-- Actions section -->
          <div class="hidden lg:ml-4 lg:block">
            <div class="flex items-center">
              <button type="button" class="flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3 flex-shrink-0">
                <div>
                  <MenuButton class="flex rounded-full bg-gray-50 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                      <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="border-b border-gray-200 bg-gray-50 lg:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-100' : 'hover:bg-gray-100', 'block rounded-md px-3 py-2 font-medium text-gray-900']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
        <div class="border-t border-gray-200 pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
              <div class="text-sm font-medium text-gray-500">{{ user.email }}</div>
            </div>
            <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1 px-2">
            <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100">{{ item.name }}</DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <!-- Page heading -->
    <header class="bg-gray-50 py-8">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
        <div class="min-w-0 flex-1">
          <nav class="flex" aria-label="Breadcrumb">
            <ol role="list" class="flex items-center space-x-4">
              <li>
                <div>
                  <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-700">Jobs</a>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Engineering</a>
                </div>
              </li>
            </ol>
          </nav>
          <h1 class="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Back End Developer</h1>
          <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-8">
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <BriefcaseIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              Full-time
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <MapPinIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              Remote
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <CurrencyDollarIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              $120k &ndash; $140k
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              Closing on January 9, 2020
            </div>
          </div>
        </div>
        <div class="mt-5 flex xl:ml-4 xl:mt-0">
          <span class="hidden sm:block">
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <PencilIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              Edit
            </button>
          </span>

          <span class="ml-3 hidden sm:block">
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <LinkIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              View
            </button>
          </span>

          <Listbox as="div" v-model="selected" class="sm:ml-3">
            <ListboxLabel class="sr-only">Change published status</ListboxLabel>
            <div class="relative">
              <div class="inline-flex divide-x divide-purple-600 rounded-md shadow-sm">
                <div class="inline-flex divide-x divide-purple-600 rounded-md shadow-sm">
                  <div class="inline-flex items-center gap-x-1.5 rounded-l-md bg-purple-500 px-3 py-2 text-white shadow-sm">
                    <CheckIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    <p class="text-sm font-semibold">{{ selected.name }}</p>
                  </div>
                  <ListboxButton class="inline-flex items-center rounded-l-none rounded-r-md bg-purple-500 p-2 hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50">
                    <span class="sr-only">Change published status</span>
                    <ChevronDownIcon class="h-5 w-5 text-white" aria-hidden="true" />
                  </ListboxButton>
                </div>
              </div>

              <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <ListboxOptions class="absolute left-0 z-10 -mr-1 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:left-auto sm:right-0">
                  <ListboxOption as="template" v-for="option in publishingOptions" :key="option.name" :value="option" v-slot="{ active, selected }">
                    <li :class="[active ? 'bg-purple-500 text-white' : 'text-gray-900', 'cursor-default select-none p-4 text-sm']">
                      <div class="flex flex-col">
                        <div class="flex justify-between">
                          <p :class="selected ? 'font-semibold' : 'font-normal'">{{ option.name }}</p>
                          <span v-if="selected" :class="active ? 'text-white' : 'text-purple-500'">
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </div>
                        <p :class="[active ? 'text-purple-200' : 'text-gray-500', 'mt-2']">{{ option.description }}</p>
                      </div>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>

          <!-- Dropdown -->
          <Menu as="div" class="relative ml-3 sm:hidden">
            <MenuButton class="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
              More
              <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </MenuButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Edit</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">View</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </header>

    <main class="pb-16 pt-8">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="px-4 sm:px-0">
          <h2 class="text-lg font-medium text-gray-900">Candidates</h2>

          <!-- Tabs -->
          <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
            <select id="tabs" name="tabs" class="mt-4 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-500">
              <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
            </select>
          </div>
          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="-mb-px mt-2 flex space-x-8" aria-label="Tabs">
                <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700', 'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium']">
                  {{ tab.name }}
                  <span v-if="tab.count" :class="[tab.current ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-900', 'ml-2 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block']">{{ tab.count }}</span>
                </a>
              </nav>
            </div>
          </div>
        </div>

        <!-- Stacked list -->
        <ul role="list" class="mt-5 divide-y divide-gray-200 border-t border-gray-200 sm:mt-0 sm:border-t-0">
          <li v-for="candidate in candidates" :key="candidate.email">
            <a href="#" class="group block">
              <div class="flex items-center px-4 py-5 sm:px-0 sm:py-6">
                <div class="flex min-w-0 flex-1 items-center">
                  <div class="flex-shrink-0">
                    <img class="h-12 w-12 rounded-full group-hover:opacity-75" :src="candidate.imageUrl" alt="" />
                  </div>
                  <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p class="truncate text-sm font-medium text-purple-600">{{ candidate.name }}</p>
                      <p class="mt-2 flex items-center text-sm text-gray-500">
                        <EnvelopeIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span class="truncate">{{ candidate.email }}</span>
                      </p>
                    </div>
                    <div class="hidden md:block">
                      <div>
                        <p class="text-sm text-gray-900">
                          Applied on
                          {{ ' ' }}
                          <time :datetime="candidate.appliedDatetime">{{ candidate.applied }}</time>
                        </p>
                        <p class="mt-2 flex items-center text-sm text-gray-500">
                          <CheckCircleIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" aria-hidden="true" />
                          {{ candidate.status }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ChevronRightIcon class="h-5 w-5 text-gray-400 group-hover:text-gray-700" aria-hidden="true" />
                </div>
              </div>
            </a>
          </li>
        </ul>

        <!-- Pagination -->
        <nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0" aria-label="Pagination">
          <div class="-mt-px flex w-0 flex-1">
            <a href="#" class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">
              <ArrowLongLeftIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              Previous
            </a>
          </div>
          <div class="hidden md:-mt-px md:flex">
            <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">1</a>
            <!-- Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" -->
            <a href="#" class="inline-flex items-center border-t-2 border-purple-500 px-4 pt-4 text-sm font-medium text-purple-600" aria-current="page">2</a>
            <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">3</a>
            <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">4</a>
            <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">5</a>
            <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">6</a>
          </div>
          <div class="-mt-px flex w-0 flex-1 justify-end">
            <a href="#" class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-200 hover:text-gray-700">
              Next
              <ArrowLongRightIcon class="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/vue/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const user = {
  name: 'Whitney Francis',
  email: 'whitney.francis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Jobs', href: '#', current: false },
  { name: 'Applicants', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const tabs = [
  { name: 'Applied', href: '#', count: '2', current: false },
  { name: 'Phone Screening', href: '#', count: '4', current: false },
  { name: 'Interview', href: '#', count: '6', current: true },
  { name: 'Offer', href: '#', current: false },
  { name: 'Disqualified', href: '#', current: false },
]
const candidates = [
  {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    applied: 'January 7, 2020',
    appliedDatetime: '2020-07-01T15:34:56',
    status: 'Completed phone screening',
  },
  // More candidates...
]
const publishingOptions = [
  { name: 'Published', description: 'This job posting can be viewed by anyone who has the link.', current: true },
  { name: 'Draft', description: 'This job posting will no longer be publicly accessible.', current: false },
]

const selected = ref(publishingOptions[0])
</script>