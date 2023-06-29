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
    <html class="h-full">
    <body class="h-full">
    ```
  -->
  <!-- Background color split screen for large screens -->
  <div class="fixed left-0 top-0 h-full w-1/2 bg-white" aria-hidden="true" />
  <div class="fixed right-0 top-0 h-full w-1/2 bg-gray-50" aria-hidden="true" />
  <div class="relative flex min-h-full flex-col">
    <!-- Navbar -->
    <Disclosure as="nav" class="flex-shrink-0 bg-indigo-600" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <!-- Logo section -->
          <div class="flex items-center px-2 lg:px-0 xl:w-64">
            <div class="flex-shrink-0">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300" alt="Your Company" />
            </div>
          </div>

          <!-- Search section -->
          <div class="flex flex-1 justify-center lg:justify-end">
            <div class="w-full px-2 lg:px-6">
              <label for="search" class="sr-only">Search projects</label>
              <div class="relative text-indigo-200 focus-within:text-gray-400">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input id="search" name="search" class="block w-full rounded-md border-0 bg-indigo-400 bg-opacity-25 py-1.5 pl-10 pr-3 text-indigo-100 placeholder:text-indigo-200 focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Search projects" type="search" />
              </div>
            </div>
          </div>
          <div class="flex lg:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-400 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
              <span class="sr-only">Open main menu</span>
              <Bars3CenterLeftIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <!-- Links section -->
          <div class="hidden lg:block lg:w-80">
            <div class="flex items-center justify-end">
              <div class="flex">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="rounded-md px-3 py-2 text-sm font-medium text-indigo-200 hover:text-white" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-4 flex-shrink-0">
                <div>
                  <MenuButton class="flex rounded-full bg-indigo-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="" />
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

      <DisclosurePanel class="lg:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-indigo-800 text-white' : 'text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
        <div class="border-t border-indigo-800 pb-3 pt-4">
          <div class="space-y-1 px-2">
            <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100">{{ item.name }}</DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <!-- 3 column wrapper -->
    <div class="mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8">
      <!-- Left sidebar & main wrapper -->
      <div class="min-w-0 flex-1 bg-white xl:flex">
        <!-- Account profile -->
        <div class="bg-white xl:w-64 xl:flex-shrink-0 xl:border-r xl:border-gray-200">
          <div class="py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
            <div class="flex items-center justify-between">
              <div class="flex-1 space-y-8">
                <div class="space-y-8 sm:flex sm:items-center sm:justify-between sm:space-y-0 xl:block xl:space-y-8">
                  <!-- Profile -->
                  <div class="flex items-center space-x-3">
                    <div class="h-12 w-12 flex-shrink-0">
                      <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="" />
                    </div>
                    <div class="space-y-1">
                      <div class="text-sm font-medium text-gray-900">Debbie Lewis</div>
                      <a href="#" class="group flex items-center space-x-2.5">
                        <svg class="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm font-medium text-gray-500 group-hover:text-gray-900">debbielewis</span>
                      </a>
                    </div>
                  </div>
                  <!-- Action buttons -->
                  <div class="flex flex-col sm:flex-row xl:flex-col">
                    <button type="button" class="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 xl:w-full">New Project</button>
                    <button type="button" class="mt-3 inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:mt-0 xl:ml-0 xl:mt-3 xl:w-full">Invite Team</button>
                  </div>
                </div>
                <!-- Meta info -->
                <div class="flex flex-col space-y-6 sm:flex-row sm:space-x-8 sm:space-y-0 xl:flex-col xl:space-x-0 xl:space-y-6">
                  <div class="flex items-center space-x-2">
                    <CheckBadgeIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span class="text-sm font-medium text-gray-500">Pro Member</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <RectangleStackIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span class="text-sm font-medium text-gray-500">8 Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects List -->
        <div class="bg-white lg:min-w-0 lg:flex-1">
          <div class="border-b border-t border-gray-200 pb-4 pl-4 pr-6 pt-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6">
            <div class="flex items-center">
              <h1 class="flex-1 text-lg font-medium">Projects</h1>
              <Menu as="div" class="relative">
                <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <BarsArrowUpIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Sort
                  <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </MenuButton>
                <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Name</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Date modified</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Date created</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>
          <ul role="list" class="divide-y divide-gray-200 border-b border-gray-200">
            <li v-for="project in projects" :key="project.repo" class="relative py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6">
              <div class="flex items-center justify-between space-x-4">
                <!-- Repo name and link -->
                <div class="min-w-0 space-y-3">
                  <div class="flex items-center space-x-3">
                    <span :class="[project.active ? 'bg-green-100' : 'bg-gray-100', 'h-4 w-4 flex items-center justify-center rounded-full']" aria-hidden="true">
                      <span :class="[project.active ? 'bg-green-400' : 'bg-gray-400', 'h-2 w-2 rounded-full']" />
                    </span>

                    <h2 class="text-sm font-medium">
                      <a :href="project.href">
                        <span class="absolute inset-0" aria-hidden="true" />
                        {{ project.name }} <span class="sr-only">{{ project.active ? 'Running' : 'Not running' }}</span>
                      </a>
                    </h2>
                  </div>
                  <a :href="project.repoHref" class="group relative flex items-center space-x-2.5">
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372 16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761 13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487 4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408 11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97 0 8.99917 0Z" fill="currentcolor" />
                    </svg>
                    <span class="truncate text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ project.repo }}</span>
                  </a>
                </div>
                <div class="sm:hidden">
                  <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <!-- Repo meta info -->
                <div class="hidden flex-shrink-0 flex-col items-end space-y-3 sm:flex">
                  <p class="flex items-center space-x-4">
                    <a :href="project.siteHref" class="relative text-sm font-medium text-gray-500 hover:text-gray-900">Visit site</a>
                    <button type="button" class="relative rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span class="sr-only">{{ project.starred ? 'Add to favorites' : 'Remove from favorites' }}</span>
                      <StarIcon :class="[project.starred ? 'text-yellow-300 hover:text-yellow-400' : 'text-gray-300 hover:text-gray-400', 'h-5 w-5']" aria-hidden="true" />
                    </button>
                  </p>
                  <p class="flex space-x-2 text-sm text-gray-500">
                    <span>{{ project.tech }}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>Last deploy {{ project.lastDeploy }}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{{ project.location }}</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- Activity feed -->
      <div class="bg-gray-50 pr-4 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
        <div class="pl-6 lg:w-80">
          <div class="pb-2 pt-6">
            <h2 class="text-sm font-semibold">Activity</h2>
          </div>
          <div>
            <ul role="list" class="divide-y divide-gray-200">
              <li v-for="item in activityItems" :key="item.commit" class="py-4">
                <div class="flex space-x-3">
                  <img class="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="" />
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm font-medium">You</h3>
                      <p class="text-sm text-gray-500">{{ item.time }}</p>
                    </div>
                    <p class="text-sm text-gray-500">Deployed {{ item.project }} ({{ item.commit }} in master) to {{ item.environment }}</p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="border-t border-gray-200 py-4 text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-900">
                View all activity
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
  BarsArrowUpIcon,
  CheckBadgeIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  StarIcon,
} from '@heroicons/vue/20/solid'
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Domains', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const projects = [
  {
    name: 'Workcation',
    href: '#',
    siteHref: '#',
    repoHref: '#',
    repo: 'debbielewis/workcation',
    tech: 'Laravel',
    lastDeploy: '3h ago',
    location: 'United states',
    starred: true,
    active: true,
  },
  // More projects...
]
const activityItems = [
  { project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  // More items...
]
</script>