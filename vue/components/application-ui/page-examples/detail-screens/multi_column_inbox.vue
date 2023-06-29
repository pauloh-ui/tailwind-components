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
    <html class="h-full bg-gray-100">
    <body class="h-full overflow-hidden">
    ```
  -->
  <div class="flex h-full flex-col">
    <!-- Top nav-->
    <header class="relative flex h-16 flex-shrink-0 items-center bg-white">
      <!-- Logo area -->
      <div class="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
        <a href="#" class="flex h-16 w-16 items-center justify-center bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company" />
        </a>
      </div>

      <!-- Picker area -->
      <div class="mx-auto lg:hidden">
        <div class="relative">
          <label for="inbox-select" class="sr-only">Choose inbox</label>
          <select id="inbox-select" class="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-blue-600">
            <option value="/open">Open</option>
            <option value="/archived">Archived</option>
            <option value="/assigned">Assigned</option>
            <option value="/flagged">Flagged</option>
            <option value="/spam">Spam</option>
            <option value="/drafts">Drafts</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
            <ChevronDownIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
          </div>
        </div>
      </div>

      <!-- Menu button area -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 lg:hidden">
        <!-- Mobile menu button -->
        <button type="button" class="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600" @click="open = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="block h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Desktop nav area -->
      <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-between">
        <div class="min-w-0 flex-1">
          <div class="relative max-w-2xl text-gray-400 focus-within:text-gray-500">
            <label for="desktop-search" class="sr-only">Search all inboxes</label>
            <input id="desktop-search" type="search" placeholder="Search all inboxes" class="block w-full border-transparent pl-12 text-gray-900 focus:border-transparent focus:ring-0 sm:text-sm" />
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
              <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div class="ml-10 flex flex-shrink-0 items-center space-x-10 pr-4">
          <nav aria-label="Global" class="flex space-x-10">
            <template v-for="item in navigation" :key="item.name">
              <Menu as="div" v-if="item.children.length" class="relative text-left">
                <MenuButton class="flex items-center rounded-md text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                  <span>{{ item.name }}</span>
                  <ChevronDownIcon class="ml-1 h-5 w-5 text-gray-500" aria-hidden="true" />
                </MenuButton>

                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                      <MenuItem v-for="child in item.children" :key="child.name" v-slot="{ active }">
                        <a :href="child.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ child.name }}</a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
              <a v-else :href="item.href" class="text-sm font-medium text-gray-900">{{ item.name }}</a>
            </template>
          </nav>
          <div class="flex items-center space-x-8">
            <span class="inline-flex">
              <a href="#" class="-mx-1 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </a>
            </span>

            <Menu as="div" class="relative inline-block text-left">
              <MenuButton class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
              </MenuButton>

              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign Out</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide this `div` based on menu open/closed state -->
      <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <div class="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-600 sm:bg-opacity-75" />
          </TransitionChild>

          <div class="fixed inset-0 z-40">
            <TransitionChild as="template" enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300" enter-from="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100" enter-to="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100" leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300" leave-from="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100" leave-to="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100">
              <DialogPanel class="fixed inset-0 z-40 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:shadow-lg" aria-label="Global">
                <div class="flex h-16 items-center justify-between px-4 sm:px-6">
                  <a href="#">
                    <img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=400" alt="Your Company" />
                  </a>
                  <button type="button" class="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600" @click="open = false">
                    <span class="sr-only">Close main menu</span>
                    <XMarkIcon class="block h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div class="max-w-8xl mx-auto mt-2 px-4 sm:px-6">
                  <div class="relative text-gray-400 focus-within:text-gray-500">
                    <label for="mobile-search" class="sr-only">Search all inboxes</label>
                    <input id="mobile-search" type="search" placeholder="Search all inboxes" class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600" />
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                      <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <div class="max-w-8xl mx-auto px-2 py-3 sm:px-4">
                  <template v-for="item in navigation" :key="item.name">
                    <a :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100">{{ item.name }}</a>
                    <a v-for="child in item.children" :key="child.name" :href="child.href" class="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100">{{ child.name }}</a>
                  </template>
                </div>
                <div class="border-t border-gray-200 pb-3 pt-4">
                  <div class="max-w-8xl mx-auto flex items-center px-4 sm:px-6">
                    <div class="flex-shrink-0">
                      <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
                    </div>
                    <div class="ml-3 min-w-0 flex-1">
                      <div class="truncate text-base font-medium text-gray-800">{{ user.name }}</div>
                      <div class="truncate text-sm font-medium text-gray-500">{{ user.email }}</div>
                    </div>
                    <a href="#" class="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500">
                      <span class="sr-only">View notifications</span>
                      <BellIcon class="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>
                  <div class="max-w-8xl mx-auto mt-3 space-y-1 px-2 sm:px-4">
                    <a v-for="item in userNavigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
    </header>

    <!-- Bottom section -->
    <div class="flex min-h-0 flex-1 overflow-hidden">
      <!-- Narrow sidebar-->
      <nav aria-label="Sidebar" class="hidden lg:block lg:flex-shrink-0 lg:overflow-y-auto lg:bg-gray-800">
        <div class="relative flex w-20 flex-col space-y-3 p-3">
          <a v-for="item in sidebarNavigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700', 'inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg']">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </nav>

      <!-- Main area -->
      <main class="min-w-0 flex-1 border-t border-gray-200 xl:flex">
        <section aria-labelledby="message-heading" class="flex h-full min-w-0 flex-1 flex-col overflow-hidden xl:order-last">
          <!-- Top section -->
          <div class="flex-shrink-0 border-b border-gray-200 bg-white">
            <!-- Toolbar-->
            <div class="flex h-16 flex-col justify-center">
              <div class="px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between py-3">
                  <!-- Left buttons -->
                  <div>
                    <div class="isolate inline-flex rounded-md shadow-sm sm:space-x-3 sm:shadow-none">
                      <span class="inline-flex sm:shadow-sm">
                        <button type="button" class="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10">
                          <ArrowUturnLeftIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          Reply
                        </button>
                        <button type="button" class="relative -ml-px hidden items-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10 sm:inline-flex">
                          <PencilIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          Note
                        </button>
                        <button type="button" class="relative -ml-px hidden items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10 sm:inline-flex">
                          <UserPlusIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          Assign
                        </button>
                      </span>

                      <span class="hidden space-x-3 lg:flex">
                        <button type="button" class="relative -ml-px hidden items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10 sm:inline-flex">
                          <ArchiveBoxIconMini class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          Archive
                        </button>
                        <button type="button" class="relative -ml-px hidden items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10 sm:inline-flex">
                          <FolderArrowDownIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          Move
                        </button>
                      </span>

                      <Menu as="div" class="relative -ml-px block sm:shadow-sm lg:hidden">
                        <div>
                          <MenuButton class="relative inline-flex items-center gap-x-1.5 rounded-r-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 sm:rounded-md sm:px-3">
                            <span class="sr-only sm:hidden">More</span>
                            <span class="hidden sm:inline">More</span>
                            <ChevronDownIcon class="h-5 w-5 text-gray-400 sm:-mr-1" aria-hidden="true" />
                          </MenuButton>
                        </div>

                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                          <MenuItems class="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="py-1">
                              <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm sm:hidden']">Note</a>
                              </MenuItem>
                              <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm sm:hidden']">Assign</a>
                              </MenuItem>
                              <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Archive</a>
                              </MenuItem>
                              <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Move</a>
                              </MenuItem>
                            </div>
                          </MenuItems>
                        </transition>
                      </Menu>
                    </div>
                  </div>

                  <!-- Right buttons -->
                  <nav aria-label="Pagination">
                    <span class="isolate inline-flex rounded-md shadow-sm">
                      <a href="#" class="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10">
                        <span class="sr-only">Next</span>
                        <ChevronUpIcon class="h-5 w-5" aria-hidden="true" />
                      </a>
                      <a href="#" class="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:z-10 hover:bg-gray-50 focus:z-10">
                        <span class="sr-only">Previous</span>
                        <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
                      </a>
                    </span>
                  </nav>
                </div>
              </div>
            </div>
            <!-- Message header -->
          </div>

          <div class="min-h-0 flex-1 overflow-y-auto">
            <div class="bg-white pb-6 pt-5 shadow">
              <div class="px-4 sm:flex sm:items-baseline sm:justify-between sm:px-6 lg:px-8">
                <div class="sm:w-0 sm:flex-1">
                  <h1 id="message-heading" class="text-lg font-medium text-gray-900">{{ message.subject }}</h1>
                  <p class="mt-1 truncate text-sm text-gray-500">{{ message.sender }}</p>
                </div>

                <div class="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start">
                  <span class="inline-flex items-center rounded-full bg-cyan-100 px-3 py-0.5 text-sm font-medium text-cyan-800">{{ message.status }}</span>
                  <Menu as="div" class="relative ml-3 inline-block text-left">
                    <div>
                      <MenuButton class="-my-2 flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
                        <span class="sr-only">Open options</span>
                        <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
                      </MenuButton>
                    </div>

                    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                      <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="py-1">
                          <MenuItem v-slot="{ active }">
                            <button type="button" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex w-full justify-between px-4 py-2 text-sm']">
                              <span>Copy email address</span>
                            </button>
                          </MenuItem>
                          <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex justify-between px-4 py-2 text-sm']">
                              <span>Previous conversations</span>
                            </a>
                          </MenuItem>
                          <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex justify-between px-4 py-2 text-sm']">
                              <span>View original</span>
                            </a>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </transition>
                  </Menu>
                </div>
              </div>
            </div>
            <!-- Thread section-->
            <ul role="list" class="space-y-2 py-4 sm:space-y-4 sm:px-6 lg:px-8">
              <li v-for="item in message.items" :key="item.id" class="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                <div class="sm:flex sm:items-baseline sm:justify-between">
                  <h3 class="text-base font-medium">
                    <span class="text-gray-900">{{ item.author }}</span>
                    {{ ' ' }}
                    <span class="text-gray-600">wrote</span>
                  </h3>
                  <p class="mt-1 whitespace-nowrap text-sm text-gray-600 sm:ml-3 sm:mt-0">
                    <time :datetime="item.datetime">{{ item.date }}</time>
                  </p>
                </div>
                <div class="mt-4 space-y-6 text-sm text-gray-800" v-html="item.body" />
              </li>
            </ul>
          </div>
        </section>

        <!-- Message list-->
        <aside class="hidden xl:order-first xl:block xl:flex-shrink-0">
          <div class="relative flex h-full w-96 flex-col border-r border-gray-200 bg-gray-100">
            <div class="flex-shrink-0">
              <div class="flex h-16 flex-col justify-center bg-white px-6">
                <div class="flex items-baseline space-x-3">
                  <h2 class="text-lg font-medium text-gray-900">Inbox</h2>
                  <p class="text-sm font-medium text-gray-500">{{ messages.length }} messages</p>
                </div>
              </div>
              <div class="border-b border-t border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500">Sorted by date</div>
            </div>
            <nav aria-label="Message list" class="min-h-0 flex-1 overflow-y-auto">
              <ul role="list" class="divide-y divide-gray-200 border-b border-gray-200">
                <li v-for="message in messages" :key="message.id" class="relative bg-white px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 hover:bg-gray-50">
                  <div class="flex justify-between space-x-3">
                    <div class="min-w-0 flex-1">
                      <a :href="message.href" class="block focus:outline-none">
                        <span class="absolute inset-0" aria-hidden="true" />
                        <p class="truncate text-sm font-medium text-gray-900">{{ message.sender }}</p>
                        <p class="truncate text-sm text-gray-500">{{ message.subject }}</p>
                      </a>
                    </div>
                    <time :datetime="message.datetime" class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">{{ message.date }}</time>
                  </div>
                  <div class="mt-1">
                    <p class="line-clamp-2 text-sm text-gray-600">{{ message.preview }}</p>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  ArchiveBoxIcon as ArchiveBoxIconMini,
  ArrowUturnLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  EllipsisVerticalIcon,
  FolderArrowDownIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  UserPlusIcon,
} from '@heroicons/vue/20/solid'
import {
  ArchiveBoxIcon as ArchiveBoxIconOutline,
  Bars3Icon,
  BellIcon,
  FlagIcon,
  InboxIcon,
  NoSymbolIcon,
  PencilSquareIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const user = {
  name: 'Whitney Francis',
  email: 'whitney.francis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  {
    name: 'Inboxes',
    href: '#',
    children: [
      { name: 'Technical Support', href: '#' },
      { name: 'Sales', href: '#' },
      { name: 'General', href: '#' },
    ],
  },
  { name: 'Reporting', href: '#', children: [] },
  { name: 'Settings', href: '#', children: [] },
]
const sidebarNavigation = [
  { name: 'Open', href: '#', icon: InboxIcon, current: true },
  { name: 'Archive', href: '#', icon: ArchiveBoxIconOutline, current: false },
  { name: 'Customers', href: '#', icon: UserCircleIcon, current: false },
  { name: 'Flagged', href: '#', icon: FlagIcon, current: false },
  { name: 'Spam', href: '#', icon: NoSymbolIcon, current: false },
  { name: 'Drafts', href: '#', icon: PencilSquareIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#' },
]
const messages = [
  {
    id: 1,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 2,
    subject: 'Nemo mollitia repudiandae adipisci explicabo optio consequatur tempora ut nihil',
    sender: 'Virginia Abshire',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 3,
    subject: 'Doloremque reprehenderit et harum quas explicabo nulla architecto dicta voluptatibus',
    sender: 'Kyle Gulgowski',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 4,
    subject: 'Eos sequi et aut ex impedit',
    sender: 'Hattie Haag',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 5,
    subject: 'Quisquam veniam explicabo',
    sender: 'Wilma Glover',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 6,
    subject: 'Est ratione molestiae modi maiores consequatur eligendi et excepturi magni',
    sender: 'Dolores Morissette',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 7,
    subject: 'Commodi deserunt aut veniam rem ipsam',
    sender: 'Guadalupe Walsh',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 8,
    subject: 'Illo illum aut debitis earum',
    sender: 'Jasmine Hansen',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 9,
    subject: 'Qui dolore iste ut est cumque sed',
    sender: 'Ian Volkman',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 10,
    subject: 'Aut sed aut illum delectus maiores laboriosam ex',
    sender: 'Rafael Klocko',
    href: '#',
    date: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
]
const message = {
  subject: 'Re: New pricing for existing customers',
  sender: 'joearmstrong@example.com',
  status: 'Open',
  items: [
    {
      id: 1,
      author: 'Joe Armstrong',
      date: 'Yesterday at 7:24am',
      datetime: '2021-01-28T19:24',
      body: "<p>Thanks so much! Can't wait to try it out.</p>",
    },
    {
      id: 2,
      author: 'Monica White',
      date: 'Wednesday at 4:35pm',
      datetime: '2021-01-27T16:35',
      body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p><strong style="font-weight: 600;">Monica White</strong><br/>Customer Service</p>
      `,
    },
    {
      id: 3,
      author: 'Joe Armstrong',
      date: 'Wednesday at 4:09pm',
      datetime: '2021-01-27T16:09',
      body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p>– Joe</p>
      `,
    },
  ],
}

const open = ref(false)
</script>