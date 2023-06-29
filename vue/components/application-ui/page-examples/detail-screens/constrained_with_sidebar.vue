<!--
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
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="flex min-h-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pb-4 pt-5">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute right-0 top-0 -mr-12 pt-2">
                  <button type="button" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex flex-shrink-0 items-center px-4">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500" alt="Your Company" />
              </div>
              <div class="mt-5 h-0 flex-1 overflow-y-auto">
                <nav class="px-2">
                  <div class="space-y-1">
                    <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center rounded-md px-2 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">
                      <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-4 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </div>
                  <div class="mt-10">
                    <p class="px-2 text-sm font-medium text-gray-400">Projects</p>
                    <div class="mt-2 space-y-1">
                      <a v-for="project in projects" :key="project.id" :href="project.href" class="flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                        <span class="truncate">{{ project.name }}</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex min-h-0 flex-1 flex-col">
        <div class="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500" alt="Your Company" />
        </div>
        <div class="flex flex-1 flex-col overflow-y-auto bg-gray-800">
          <nav class="flex-1 px-2 py-4">
            <div class="space-y-1">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'group flex items-center rounded-md px-2 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
                <component :is="item.icon" :class="[item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
                {{ item.name }}
              </a>
            </div>
            <div class="mt-10">
              <p class="px-3 text-sm font-medium text-gray-400">Projects</p>
              <div class="mt-2 space-y-1">
                <a v-for="project in projects" :key="project.id" :href="project.href" class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                  <span class="truncate">{{ project.name }}</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex w-0 flex-1 flex-col lg:pl-64">
      <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white">
        <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex flex-1 justify-between px-4">
          <div class="flex flex-1">
            <form class="flex w-full lg:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input id="search-field" class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm" placeholder="Search" type="search" name="search" />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center lg:ml-6">
            <button type="button" class="inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500">Create</button>
          </div>
        </div>
      </div>

      <main class="flex-1">
        <div class="py-8 xl:py-10">
          <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-5xl xl:grid-cols-3">
            <div class="xl:col-span-2 xl:border-r xl:border-gray-200 xl:pr-8">
              <div>
                <div>
                  <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                    <div>
                      <h1 class="text-2xl font-bold text-gray-900">ARIA attribute misspelled</h1>
                      <p class="mt-2 text-sm text-gray-500">
                        #400 opened by
                        {{ ' ' }}
                        <a href="#" class="font-medium text-gray-900">Hilary Mahy</a>
                        {{ ' ' }}
                        in
                        {{ ' ' }}
                        <a href="#" class="font-medium text-gray-900">Customer Portal</a>
                      </p>
                    </div>
                    <div class="mt-4 flex space-x-3 md:mt-0">
                      <button type="button" class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <PencilIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        Edit
                      </button>
                      <button type="button" class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <BellIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <aside class="mt-8 xl:hidden">
                    <h2 class="sr-only">Details</h2>
                    <div class="space-y-5">
                      <div class="flex items-center space-x-2">
                        <LockOpenIcon class="h-5 w-5 text-green-500" aria-hidden="true" />
                        <span class="text-sm font-medium text-green-700">Open Issue</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <ChatBubbleLeftEllipsisIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span class="text-sm font-medium text-gray-900">4 comments</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">Dec 2, 2020</time></span>
                      </div>
                    </div>
                    <div class="mt-6 space-y-8 border-b border-t border-gray-200 py-6">
                      <div>
                        <h2 class="text-sm font-medium text-gray-500">Assignees</h2>
                        <ul role="list" class="mt-3 space-y-3">
                          <li class="flex justify-start">
                            <a href="#" class="flex items-center space-x-3">
                              <div class="flex-shrink-0">
                                <img class="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />
                              </div>
                              <div class="text-sm font-medium text-gray-900">Eduardo Benz</div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h2 class="text-sm font-medium text-gray-500">Tags</h2>
                        <ul role="list" class="mt-2 leading-8">
                          <li class="inline">
                            <a href="#" class="relative inline-flex items-center rounded-full px-2.5 py-1 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                              <div class="absolute flex flex-shrink-0 items-center justify-center">
                                <span class="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                              </div>
                              <div class="ml-3 text-xs font-semibold text-gray-900">Bug</div>
                            </a>
                            {{ ' ' }}
                          </li>
                          <li class="inline">
                            <a href="#" class="relative inline-flex items-center rounded-full px-2.5 py-1 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                              <div class="absolute flex flex-shrink-0 items-center justify-center">
                                <span class="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                              </div>
                              <div class="ml-3 text-xs font-semibold text-gray-900">Accessibility</div>
                            </a>
                            {{ ' ' }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                  <div class="py-3 xl:pb-0 xl:pt-6">
                    <h2 class="sr-only">Description</h2>
                    <div class="prose max-w-none">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, hic? Commodi cumque similique id tempora molestiae deserunt at suscipit, dolor voluptatem, numquam, harum consequatur laboriosam voluptas tempore aut voluptatum alias?</p>
                      <ul role="list">
                        <li>Tempor ultrices proin nunc fames nunc ut auctor vitae sed. Eget massa parturient vulputate fermentum id facilisis nam pharetra. Aliquet leo tellus.</li>
                        <li>Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.</li>
                        <li>Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed. Ut tellus in sed dignissim.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <section aria-labelledby="activity-title" class="mt-8 xl:mt-10">
                <div>
                  <div class="divide-y divide-gray-200">
                    <div class="pb-4">
                      <h2 id="activity-title" class="text-lg font-medium text-gray-900">Activity</h2>
                    </div>
                    <div class="pt-6">
                      <!-- Activity feed-->
                      <div class="flow-root">
                        <ul role="list" class="-mb-8">
                          <li v-for="(item, itemIdx) in activity" :key="item.id">
                            <div class="relative pb-8">
                              <span v-if="itemIdx !== activity.length - 1" class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                              <div class="relative flex items-start space-x-3">
                                <template v-if="item.type === 'comment'">
                                  <div class="relative">
                                    <img class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white" :src="item.imageUrl" alt="" />

                                    <span class="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                                      <ChatBubbleLeftEllipsisIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                  </div>
                                  <div class="min-w-0 flex-1">
                                    <div>
                                      <div class="text-sm">
                                        <a :href="item.person.href" class="font-medium text-gray-900">{{ item.person.name }}</a>
                                      </div>
                                      <p class="mt-0.5 text-sm text-gray-500">Commented {{ item.date }}</p>
                                    </div>
                                    <div class="mt-2 text-sm text-gray-700">
                                      <p>{{ item.comment }}</p>
                                    </div>
                                  </div>
                                </template>
                                <template v-else-if="item.type === 'assignment'" condition="item.type === 'assignment'">
                                  <div>
                                    <div class="relative px-1">
                                      <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                        <UserCircleIconMini class="h-5 w-5 text-gray-500" aria-hidden="true" />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="min-w-0 flex-1 py-1.5">
                                    <div class="text-sm text-gray-500">
                                      <a :href="item.person.href" class="font-medium text-gray-900">{{ item.person.name }}</a>
                                      {{ ' ' }}
                                      assigned
                                      {{ ' ' }}
                                      <a :href="item.assigned.href" class="font-medium text-gray-900">{{ item.assigned.name }}</a>
                                      {{ ' ' }}
                                      <span class="whitespace-nowrap">{{ item.date }}</span>
                                    </div>
                                  </div>
                                </template>
                                <template v-else>
                                  <div>
                                    <div class="relative px-1">
                                      <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                        <TagIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="min-w-0 flex-1 py-0">
                                    <div class="text-sm leading-8 text-gray-500">
                                      <span class="mr-0.5">
                                        <a :href="item.person.href" class="font-medium text-gray-900">{{ item.person.name }}</a>
                                        {{ ' ' }}
                                        added tags
                                      </span>
                                      {{ ' ' }}
                                      <span class="mr-0.5">
                                        <template v-for="tag in item.tags" :key="tag.name">
                                          <a :href="tag.href" class="relative inline-flex items-center rounded-full px-2.5 py-1 text-xs ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                            <span class="absolute flex flex-shrink-0 items-center justify-center">
                                              <span :class="[tag.color, 'h-1.5 w-1.5 rounded-full']" aria-hidden="true" />
                                            </span>
                                            <span class="ml-3 font-semibold text-gray-900">{{ tag.name }}</span>
                                          </a>
                                          {{ ' ' }}
                                        </template>
                                      </span>
                                      <span class="whitespace-nowrap">{{ item.date }}</span>
                                    </div>
                                  </div>
                                </template>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-6">
                        <div class="flex space-x-3">
                          <div class="flex-shrink-0">
                            <div class="relative">
                              <img class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />

                              <span class="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                                <ChatBubbleLeftEllipsisIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                              </span>
                            </div>
                          </div>
                          <div class="min-w-0 flex-1">
                            <form action="#">
                              <div>
                                <label for="comment" class="sr-only">Comment</label>
                                <textarea id="comment" name="comment" rows="3" class="block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:py-1.5 sm:text-sm sm:leading-6" placeholder="Leave a comment" />
                              </div>
                              <div class="mt-6 flex items-center justify-end space-x-4">
                                <button type="button" class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                  <CheckCircleIcon class="-ml-0.5 h-5 w-5 text-green-500" aria-hidden="true" />
                                  Close issue
                                </button>
                                <button type="submit" class="inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Comment</button>
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
            <aside class="hidden xl:block xl:pl-8">
              <h2 class="sr-only">Details</h2>
              <div class="space-y-5">
                <div class="flex items-center space-x-2">
                  <LockOpenIcon class="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span class="text-sm font-medium text-green-700">Open Issue</span>
                </div>
                <div class="flex items-center space-x-2">
                  <ChatBubbleLeftEllipsisIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span class="text-sm font-medium text-gray-900">4 comments</span>
                </div>
                <div class="flex items-center space-x-2">
                  <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">Dec 2, 2020</time></span>
                </div>
              </div>
              <div class="mt-6 space-y-8 border-t border-gray-200 py-6">
                <div>
                  <h2 class="text-sm font-medium text-gray-500">Assignees</h2>
                  <ul role="list" class="mt-3 space-y-3">
                    <li class="flex justify-start">
                      <a href="#" class="flex items-center space-x-3">
                        <div class="flex-shrink-0">
                          <img class="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />
                        </div>
                        <div class="text-sm font-medium text-gray-900">Eduardo Benz</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="text-sm font-medium text-gray-500">Tags</h2>
                  <ul role="list" class="mt-2 leading-8">
                    <li class="inline">
                      <a href="#" class="relative inline-flex items-center rounded-full px-2.5 py-1 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <div class="absolute flex flex-shrink-0 items-center justify-center">
                          <span class="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                        </div>
                        <div class="ml-3 text-xs font-semibold text-gray-900">Bug</div>
                      </a>
                      {{ ' ' }}
                    </li>
                    <li class="inline">
                      <a href="#" class="relative inline-flex items-center rounded-full px-2.5 py-1 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <div class="absolute flex flex-shrink-0 items-center justify-center">
                          <span class="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                        </div>
                        <div class="ml-3 text-xs font-semibold text-gray-900">Accessibility</div>
                      </a>
                      {{ ' ' }}
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
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  ArchiveBoxIcon,
  Bars3BottomLeftIcon,
  Bars4Icon,
  ClockIcon,
  HomeIcon,
  UserCircleIcon as UserCircleIconOutline,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
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
} from '@heroicons/vue/20/solid'

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

const sidebarOpen = ref(false)
</script>