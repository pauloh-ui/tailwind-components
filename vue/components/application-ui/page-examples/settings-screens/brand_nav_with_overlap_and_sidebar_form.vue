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
  <div>
    <Disclosure as="div" class="relative overflow-hidden bg-sky-700 pb-32" v-slot="{ open }">
      <nav :class="[open ? 'bg-sky-900' : 'bg-transparent', 'relative z-10 border-b border-teal-500 border-opacity-25 lg:border-none lg:bg-transparent']">
        <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div class="relative flex h-16 items-center justify-between lg:border-b lg:border-sky-800">
            <div class="flex items-center px-2 lg:px-0">
              <div class="flex-shrink-0">
                <img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=400" alt="Your Company" />
              </div>
              <div class="hidden lg:ml-6 lg:block lg:space-x-4">
                <div class="flex">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-black bg-opacity-25' : 'hover:bg-sky-800', 'rounded-md py-2 px-3 text-sm font-medium text-white']">{{ item.name }}</a>
                </div>
              </div>
            </div>
            <div class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
              <div class="w-full max-w-lg lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative text-sky-100 focus-within:text-gray-400">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  </div>
                  <input id="search" name="search" class="block w-full rounded-md border-0 bg-sky-700/50 py-1.5 pl-10 pr-3 text-white placeholder:text-sky-100 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" />
                </div>
              </div>
            </div>
            <div class="flex lg:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6 flex-shrink-0" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6 flex-shrink-0" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="hidden lg:ml-4 lg:block">
              <div class="flex items-center">
                <button type="button" class="flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900">
                  <span class="sr-only">View notifications</span>
                  <BellIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <!-- Profile dropdown -->
                <Menu as="div" class="relative ml-4 flex-shrink-0">
                  <div>
                    <MenuButton class="flex rounded-full text-sm text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900">
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

        <DisclosurePanel class="bg-sky-900 lg:hidden">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-black bg-opacity-25' : 'hover:bg-sky-800', 'block rounded-md py-2 px-3 text-base font-medium text-white']">{{ item.name }}</DisclosureButton>
          </div>
          <div class="border-t border-sky-800 pb-3 pt-4">
            <div class="flex items-center px-4">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-white">{{ user.name }}</div>
                <div class="text-sm font-medium text-sky-200">{{ user.email }}</div>
              </div>
              <button type="button" class="ml-auto flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-3 px-2">
              <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-sky-200 hover:bg-sky-800 hover:text-white">{{ item.name }}</DisclosureButton>
            </div>
          </div>
        </DisclosurePanel>
      </nav>
      <div aria-hidden="true" :class="[open ? 'bottom-0' : 'inset-y-0', 'absolute inset-x-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden lg:inset-y-0']">
        <div class="absolute inset-0 flex">
          <div class="h-full w-1/2" style="background-color: #0a527b" />
          <div class="h-full w-1/2" style="background-color: #065d8c" />
        </div>
        <div class="relative flex justify-center">
          <svg class="flex-shrink-0" width="1750" height="308" viewBox="0 0 1750 308">
            <path d="M284.161 308H1465.84L875.001 182.413 284.161 308z" fill="#0369a1" />
            <path d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#065d8c" />
            <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#0a527b" />
            <path d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z" fill="#0a4f76" />
          </svg>
        </div>
      </div>
      <header class="relative py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-white">Settings</h1>
        </div>
      </header>
    </Disclosure>

    <main class="relative -mt-32">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-x lg:divide-y-0">
            <aside class="py-6 lg:col-span-3">
              <nav class="space-y-1">
                <a v-for="item in subNavigation" :key="item.name" :href="item.href" :class="[item.current ? 'border-teal-500 bg-teal-50 text-teal-700 hover:bg-teal-50 hover:text-teal-700' : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center border-l-4 px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
                  <component :is="item.icon" :class="[item.current ? 'text-teal-500 group-hover:text-teal-500' : 'text-gray-400 group-hover:text-gray-500', '-ml-1 mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
                  <span class="truncate">{{ item.name }}</span>
                </a>
              </nav>
            </aside>

            <form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
              <!-- Profile section -->
              <div class="px-4 py-6 sm:p-6 lg:pb-8">
                <div>
                  <h2 class="text-lg font-medium leading-6 text-gray-900">Profile</h2>
                  <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
                </div>

                <div class="mt-6 flex flex-col lg:flex-row">
                  <div class="flex-grow space-y-6">
                    <div>
                      <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                      <div class="mt-2 flex rounded-md shadow-sm">
                        <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">workcation.com/</span>
                        <input type="text" name="username" id="username" autocomplete="username" class="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" :value="user.handle" />
                      </div>
                    </div>

                    <div>
                      <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
                      <div class="mt-2">
                        <textarea id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:py-1.5 sm:text-sm sm:leading-6" />
                      </div>
                      <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                    </div>
                  </div>

                  <div class="mt-6 flex-grow lg:ml-6 lg:mt-0 lg:flex-shrink-0 lg:flex-grow-0">
                    <p class="text-sm font-medium leading-6 text-gray-900" aria-hidden="true">Photo</p>
                    <div class="mt-2 lg:hidden">
                      <div class="flex items-center">
                        <div class="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full" aria-hidden="true">
                          <img class="h-full w-full rounded-full" :src="user.imageUrl" alt="" />
                        </div>
                        <div class="relative ml-5">
                          <input id="mobile-user-photo" name="user-photo" type="file" class="peer absolute h-full w-full rounded-md opacity-0" />
                          <label for="mobile-user-photo" class="pointer-events-none block rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 peer-hover:ring-gray-400 peer-focus:ring-2 peer-focus:ring-sky-500">
                            <span>Change</span>
                            <span class="sr-only"> user photo</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="relative hidden overflow-hidden rounded-full lg:block">
                      <img class="relative h-40 w-40 rounded-full" :src="user.imageUrl" alt="" />
                      <label for="desktop-user-photo" class="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100">
                        <span>Change</span>
                        <span class="sr-only"> user photo</span>
                        <input type="file" id="desktop-user-photo" name="user-photo" class="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0" />
                      </label>
                    </div>
                  </div>
                </div>

                <div class="mt-6 grid grid-cols-12 gap-6">
                  <div class="col-span-12 sm:col-span-6">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" />
                  </div>

                  <div class="col-span-12">
                    <label for="url" class="block text-sm font-medium leading-6 text-gray-900">URL</label>
                    <input type="text" name="url" id="url" class="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label for="company" class="block text-sm font-medium leading-6 text-gray-900">Company</label>
                    <input type="text" name="company" id="company" autocomplete="organization" class="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" />
                  </div>
                </div>
              </div>

              <!-- Privacy section -->
              <div class="divide-y divide-gray-200 pt-6">
                <div class="px-4 sm:px-6">
                  <div>
                    <h2 class="text-lg font-medium leading-6 text-gray-900">Privacy</h2>
                    <p class="mt-1 text-sm text-gray-500">Ornare eu a volutpat eget vulputate. Fringilla commodo amet.</p>
                  </div>
                  <ul role="list" class="mt-2 divide-y divide-gray-200">
                    <SwitchGroup as="li" class="flex items-center justify-between py-4">
                      <div class="flex flex-col">
                        <SwitchLabel as="p" class="text-sm font-medium leading-6 text-gray-900" passive>Available to hire</SwitchLabel>
                        <SwitchDescription class="text-sm text-gray-500">Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</SwitchDescription>
                      </div>
                      <Switch v-model="availableToHire" :class="[availableToHire ? 'bg-teal-500' : 'bg-gray-200', 'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2']">
                        <span aria-hidden="true" :class="[availableToHire ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                      </Switch>
                    </SwitchGroup>
                    <SwitchGroup as="li" class="flex items-center justify-between py-4">
                      <div class="flex flex-col">
                        <SwitchLabel as="p" class="text-sm font-medium leading-6 text-gray-900" passive>Make account private</SwitchLabel>
                        <SwitchDescription class="text-sm text-gray-500">Pharetra morbi dui mi mattis tellus sollicitudin cursus pharetra.</SwitchDescription>
                      </div>
                      <Switch v-model="privateAccount" :class="[privateAccount ? 'bg-teal-500' : 'bg-gray-200', 'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2']">
                        <span aria-hidden="true" :class="[privateAccount ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                      </Switch>
                    </SwitchGroup>
                    <SwitchGroup as="li" class="flex items-center justify-between py-4">
                      <div class="flex flex-col">
                        <SwitchLabel as="p" class="text-sm font-medium leading-6 text-gray-900" passive>Allow commenting</SwitchLabel>
                        <SwitchDescription class="text-sm text-gray-500">Integer amet, nunc hendrerit adipiscing nam. Elementum ame</SwitchDescription>
                      </div>
                      <Switch v-model="allowCommenting" :class="[allowCommenting ? 'bg-teal-500' : 'bg-gray-200', 'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2']">
                        <span aria-hidden="true" :class="[allowCommenting ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                      </Switch>
                    </SwitchGroup>
                    <SwitchGroup as="li" class="flex items-center justify-between py-4">
                      <div class="flex flex-col">
                        <SwitchLabel as="p" class="text-sm font-medium leading-6 text-gray-900" passive>Allow mentions</SwitchLabel>
                        <SwitchDescription class="text-sm text-gray-500">Adipiscing est venenatis enim molestie commodo eu gravid</SwitchDescription>
                      </div>
                      <Switch v-model="allowMentions" :class="[allowMentions ? 'bg-teal-500' : 'bg-gray-200', 'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2']">
                        <span aria-hidden="true" :class="[allowMentions ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                      </Switch>
                    </SwitchGroup>
                  </ul>
                </div>
                <div class="mt-4 flex justify-end gap-x-3 px-4 py-4 sm:px-6">
                  <button type="button" class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
                  <button type="submit" class="inline-flex justify-center rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
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
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import {
  Bars3Icon,
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const user = {
  name: 'Debbie Lewis',
  handle: 'deblewis',
  email: 'debbielewis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Jobs', href: '#', current: false },
  { name: 'Applicants', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
]
const subNavigation = [
  { name: 'Profile', href: '#', icon: UserCircleIcon, current: true },
  { name: 'Account', href: '#', icon: CogIcon, current: false },
  { name: 'Password', href: '#', icon: KeyIcon, current: false },
  { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Integrations', href: '#', icon: SquaresPlusIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const availableToHire = ref(true)
const privateAccount = ref(false)
const allowCommenting = ref(true)
const allowMentions = ref(true)
</script>