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
    <html class="h-full bg-slate-50">
    <body class="h-full overflow-hidden">
    ```
  -->
  <div class="flex h-full">
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileMenuOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-slate-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute right-0 top-0 -mr-12 pt-4">
                  <button type="button" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="mobileMenuOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="pb-4 pt-5">
                <div class="flex flex-shrink-0 items-center px-4">
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600" alt="Your Company" />
                </div>
                <nav aria-label="Sidebar" class="mt-5">
                  <div class="space-y-1 px-2">
                    <a v-for="item in navigation" :key="item.name" :href="item.href" class="group flex items-center rounded-md p-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900">
                      <component :is="item.icon" class="mr-4 h-6 w-6 text-slate-400 group-hover:text-slate-500" aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </div>
                </nav>
              </div>
              <div class="flex flex-shrink-0 border-t border-slate-200 p-4">
                <a href="#" class="group block flex-shrink-0">
                  <div class="flex items-center">
                    <div>
                      <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80" alt="" />
                    </div>
                    <div class="ml-3">
                      <p class="text-base font-medium text-slate-700 group-hover:text-slate-900">Lisa Marie</p>
                      <p class="text-sm font-medium text-slate-500 group-hover:text-slate-700">Account Settings</p>
                    </div>
                  </div>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex w-20 flex-col">
        <div class="flex min-h-0 flex-1 flex-col overflow-y-auto bg-blue-600">
          <div class="flex-1">
            <div class="flex items-center justify-center bg-blue-700 py-4">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company" />
            </div>
            <nav aria-label="Sidebar" class="flex flex-col items-center space-y-3 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="flex items-center rounded-lg p-4 text-blue-200 hover:bg-blue-700">
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                <span class="sr-only">{{ item.name }}</span>
              </a>
            </nav>
          </div>
          <div class="flex flex-shrink-0 pb-5">
            <a href="#" class="w-full flex-shrink-0">
              <img class="mx-auto block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80" alt="" />
              <div class="sr-only">
                <p>Lisa Marie</p>
                <p>Account settings</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
      <!-- Mobile top navigation -->
      <div class="lg:hidden">
        <div class="flex items-center justify-between bg-blue-600 px-4 py-2 sm:px-6">
          <div>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company" />
          </div>
          <div>
            <button type="button" class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="mobileMenuOpen = true">
              <span class="sr-only">Open sidebar</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <main class="flex flex-1 overflow-hidden">
        <div class="flex flex-1 flex-col overflow-y-auto xl:overflow-hidden">
          <!-- Breadcrumb -->
          <nav aria-label="Breadcrumb" class="border-b border-slate-200 bg-white xl:hidden">
            <div class="mx-auto flex max-w-3xl items-start px-4 py-3 sm:px-6 lg:px-8">
              <a href="#" class="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-slate-900">
                <ChevronLeftIcon class="h-5 w-5 text-slate-400" aria-hidden="true" />
                <span>Settings</span>
              </a>
            </div>
          </nav>

          <div class="flex flex-1 xl:overflow-hidden">
            <!-- Secondary sidebar -->
            <nav aria-label="Sections" class="hidden w-96 flex-shrink-0 border-r border-slate-200 bg-white xl:flex xl:flex-col">
              <div class="flex h-16 flex-shrink-0 items-center border-b border-slate-200 px-6">
                <p class="text-lg font-medium text-slate-900">Settings</p>
              </div>
              <div class="min-h-0 flex-1 overflow-y-auto">
                <a v-for="item in subNavigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-blue-50 bg-opacity-50' : 'hover:bg-blue-50 hover:bg-opacity-50', 'border-slate-200 flex border-b p-6']" :aria-current="item.current ? 'page' : undefined">
                  <component :is="item.icon" class="-mt-0.5 h-6 w-6 flex-shrink-0 text-slate-400" aria-hidden="true" />
                  <div class="ml-3 text-sm">
                    <p class="font-medium text-slate-900">{{ item.name }}</p>
                    <p class="mt-1 text-slate-500">{{ item.description }}</p>
                  </div>
                </a>
              </div>
            </nav>

            <!-- Main content -->
            <div class="flex-1 xl:overflow-y-auto">
              <div class="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
                <h1 class="text-3xl font-bold tracking-tight text-slate-900">Account</h1>

                <form class="divide-y-slate-200 mt-6 space-y-8 divide-y">
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                    <div class="sm:col-span-6">
                      <h2 class="text-xl font-medium text-slate-900">Profile</h2>
                      <p class="mt-1 text-sm text-slate-500">This information will be displayed publicly so be careful what you share.</p>
                    </div>

                    <div class="sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium leading-6 text-slate-900">First name</label>
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                    </div>

                    <div class="sm:col-span-3">
                      <label for="last-name" class="block text-sm font-medium leading-6 text-slate-900">Last name</label>
                      <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                    </div>

                    <div class="sm:col-span-6">
                      <label for="username" class="block text-sm font-medium leading-6 text-slate-900">Username</label>
                      <div class="mt-2 flex rounded-md shadow-sm">
                        <span class="inline-flex items-center rounded-l-md border border-r-0 border-slate-300 bg-white px-3 text-slate-500 sm:text-sm">workcation.com/</span>
                        <input type="text" name="username" id="username" autocomplete="username" value="lisamarie" class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                      </div>
                    </div>

                    <div class="sm:col-span-6">
                      <label for="photo" class="block text-sm font-medium leading-6 text-slate-900">Photo</label>
                      <div class="mt-2 flex items-center">
                        <img class="inline-block h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80" alt="" />
                        <div class="relative ml-4">
                          <input id="user-photo" name="user-photo" type="file" class="peer absolute inset-0 h-full w-full rounded-md opacity-0" />
                          <label for="user-photo" class="pointer-events-none block rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 peer-hover:bg-slate-50 peer-focus:ring-2 peer-focus:ring-blue-600">
                            <span>Change</span>
                            <span class="sr-only"> user photo</span>
                          </label>
                        </div>
                        <button type="button" class="ml-6 text-sm font-medium leading-6 text-slate-900">Remove</button>
                      </div>
                    </div>

                    <div class="sm:col-span-6">
                      <label for="description" class="block text-sm font-medium leading-6 text-slate-900">Description</label>
                      <div class="mt-2">
                        <textarea id="description" name="description" rows="4" class="block w-full rounded-md border-0 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:py-1.5 sm:text-sm sm:leading-6" />
                      </div>
                      <p class="mt-3 text-sm text-slate-500">Brief description for your profile. URLs are hyperlinked.</p>
                    </div>

                    <div class="sm:col-span-6">
                      <label for="url" class="block text-sm font-medium leading-6 text-slate-900">URL</label>
                      <input type="text" name="url" id="url" class="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6">
                    <div class="sm:col-span-6">
                      <h2 class="text-xl font-medium text-slate-900">Personal Information</h2>
                      <p class="mt-1 text-sm text-slate-500">This information will be displayed publicly so be careful what you share.</p>
                    </div>

                    <div class="sm:col-span-3">
                      <label for="email-address" class="block text-sm font-medium leading-6 text-slate-900">Email address</label>
                      <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                    </div>

                    <div class="sm:col-span-3">
                      <label for="phone-number" class="block text-sm font-medium leading-6 text-slate-900">Phone number</label>
                      <input type="text" name="phone-number" id="phone-number" autocomplete="tel" class="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                    </div>

                    <div class="sm:col-span-3">
                      <label for="country" class="block text-sm font-medium leading-6 text-slate-900">Country</label>
                      <select id="country" name="country" autocomplete="country-name" class="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6">
                        <option />
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div class="sm:col-span-3">
                      <label for="language" class="block text-sm font-medium leading-6 text-slate-900">Language</label>
                      <input type="text" name="language" id="language" class="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" />
                    </div>

                    <p class="text-sm text-slate-500 sm:col-span-6">This account was created on <time datetime="2017-01-05T20:35:40">January 5, 2017, 8:35:40 PM</time>.</p>
                  </div>

                  <div class="flex justify-end gap-x-3 pt-8">
                    <button type="button" class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50">Cancel</button>
                    <button type="submit" class="inline-flex justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Save</button>
                  </div>
                </form>
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
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
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
} from '@heroicons/vue/24/outline'
import { ChevronLeftIcon } from '@heroicons/vue/20/solid'

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

const mobileMenuOpen = ref(false)
</script>