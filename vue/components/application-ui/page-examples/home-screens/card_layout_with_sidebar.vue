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
    <body class="h-full">
    ```
  -->
  <div class="min-h-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-cyan-700 pb-4 pt-5">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute right-0 top-0 -mr-12 pt-2">
                  <button type="button" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex flex-shrink-0 items-center px-4">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=300" alt="Easywire logo" />
              </div>
              <nav class="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
                <div class="space-y-1 px-2">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:bg-cyan-600 hover:text-white', 'group flex items-center rounded-md px-2 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
                    <component :is="item.icon" class="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </div>
                <div class="mt-6 pt-6">
                  <div class="space-y-1 px-2">
                    <a v-for="item in secondaryNavigation" :key="item.name" :href="item.href" class="group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white">
                      <component :is="item.icon" class="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </nav>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-grow flex-col overflow-y-auto bg-cyan-700 pb-4 pt-5">
        <div class="flex flex-shrink-0 items-center px-4">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=300" alt="Easywire logo" />
        </div>
        <nav class="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
          <div class="space-y-1 px-2">
            <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:bg-cyan-600 hover:text-white', 'group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6']" :aria-current="item.current ? 'page' : undefined">
              <component :is="item.icon" class="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200" aria-hidden="true" />
              {{ item.name }}
            </a>
          </div>
          <div class="mt-6 pt-6">
            <div class="space-y-1 px-2">
              <a v-for="item in secondaryNavigation" :key="item.name" :href="item.href" class="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white">
                <component :is="item.icon" class="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                {{ item.name }}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div class="flex flex-1 flex-col lg:pl-64">
      <div class="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
        <button type="button" class="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3CenterLeftIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <!-- Search bar -->
        <div class="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div class="flex flex-1">
            <form class="flex w-full md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                  <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input id="search-field" name="search-field" class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" placeholder="Search transactions" type="search" />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <span class="ml-3 hidden text-sm font-medium text-gray-700 lg:block"><span class="sr-only">Open user menu for </span>Emilia Birch</span>
                  <ChevronDownIcon class="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block" aria-hidden="true" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Logout</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
      <main class="flex-1 pb-8">
        <!-- Page header -->
        <div class="bg-white shadow">
          <div class="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
            <div class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
              <div class="min-w-0 flex-1">
                <!-- Profile -->
                <div class="flex items-center">
                  <img class="hidden h-16 w-16 rounded-full sm:block" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80" alt="" />
                  <div>
                    <div class="flex items-center">
                      <img class="h-16 w-16 rounded-full sm:hidden" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80" alt="" />
                      <h1 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">Good morning, Emilia Birch</h1>
                    </div>
                    <dl class="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                      <dt class="sr-only">Company</dt>
                      <dd class="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                        <BuildingOfficeIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        Duke street studio
                      </dd>
                      <dt class="sr-only">Account status</dt>
                      <dd class="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                        <CheckCircleIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" aria-hidden="true" />
                        Verified account
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="mt-6 flex space-x-3 md:ml-4 md:mt-0">
                <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Add money</button>
                <button type="button" class="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Send money</button>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-lg font-medium leading-6 text-gray-900">Overview</h2>
            <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <!-- Card -->
              <div v-for="card in cards" :key="card.name" class="overflow-hidden rounded-lg bg-white shadow">
                <div class="p-5">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <component :is="card.icon" class="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div class="ml-5 w-0 flex-1">
                      <dl>
                        <dt class="truncate text-sm font-medium text-gray-500">{{ card.name }}</dt>
                        <dd>
                          <div class="text-lg font-medium text-gray-900">{{ card.amount }}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-5 py-3">
                  <div class="text-sm">
                    <a :href="card.href" class="font-medium text-cyan-700 hover:text-cyan-900">View all</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 class="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">Recent activity</h2>

          <!-- Activity list (smallest breakpoint only) -->
          <div class="shadow sm:hidden">
            <ul role="list" class="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
              <li v-for="transaction in transactions" :key="transaction.id">
                <a :href="transaction.href" class="block bg-white px-4 py-4 hover:bg-gray-50">
                  <span class="flex items-center space-x-4">
                    <span class="flex flex-1 space-x-2 truncate">
                      <BanknotesIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      <span class="flex flex-col truncate text-sm text-gray-500">
                        <span class="truncate">{{ transaction.name }}</span>
                        <span
                          ><span class="font-medium text-gray-900">{{ transaction.amount }}</span> {{ transaction.currency }}</span
                        >
                        <time :datetime="transaction.datetime">{{ transaction.date }}</time>
                      </span>
                    </span>
                    <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  </span>
                </a>
              </li>
            </ul>

            <nav class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3" aria-label="Pagination">
              <div class="flex flex-1 justify-between">
                <a href="#" class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Previous</a>
                <a href="#" class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Next</a>
              </div>
            </nav>
          </div>

          <!-- Activity table (small breakpoint and up) -->
          <div class="hidden sm:block">
            <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div class="mt-2 flex flex-col">
                <div class="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th class="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900" scope="col">Transaction</th>
                        <th class="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900" scope="col">Amount</th>
                        <th class="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block" scope="col">Status</th>
                        <th class="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900" scope="col">Date</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                      <tr v-for="transaction in transactions" :key="transaction.id" class="bg-white">
                        <td class="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          <div class="flex">
                            <a :href="transaction.href" class="group inline-flex space-x-2 truncate text-sm">
                              <BanknotesIcon class="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                              <p class="truncate text-gray-500 group-hover:text-gray-900">{{ transaction.name }}</p>
                            </a>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                          <span class="font-medium text-gray-900">{{ transaction.amount }}</span>
                          {{ transaction.currency }}
                        </td>
                        <td class="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                          <span :class="[statusStyles[transaction.status], 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize']">{{ transaction.status }}</span>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                          <time :datetime="transaction.datetime">{{ transaction.date }}</time>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- Pagination -->
                  <nav class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6" aria-label="Pagination">
                    <div class="hidden sm:block">
                      <p class="text-sm text-gray-700">
                        Showing
                        {{ ' ' }}
                        <span class="font-medium">1</span>
                        {{ ' ' }}
                        to
                        {{ ' ' }}
                        <span class="font-medium">10</span>
                        {{ ' ' }}
                        of
                        {{ ' ' }}
                        <span class="font-medium">20</span>
                        {{ ' ' }}
                        results
                      </p>
                    </div>
                    <div class="flex flex-1 justify-between gap-x-3 sm:justify-end">
                      <a href="#" class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400">Previous</a>
                      <a href="#" class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400">Next</a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  Bars3CenterLeftIcon,
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/20/solid'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'History', href: '#', icon: ClockIcon, current: false },
  { name: 'Balances', href: '#', icon: ScaleIcon, current: false },
  { name: 'Cards', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Recipients', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Reports', href: '#', icon: DocumentChartBarIcon, current: false },
]
const secondaryNavigation = [
  { name: 'Settings', href: '#', icon: CogIcon },
  { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  // More items...
]
const transactions = [
  {
    id: 1,
    name: 'Payment to Molly Sanders',
    href: '#',
    amount: '$20,000',
    currency: 'USD',
    status: 'success',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  // More transactions...
]
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
}

const sidebarOpen = ref(false)
</script>