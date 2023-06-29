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
    <!-- When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars -->
    <Popover as="template" v-slot="{ open }">
      <header :class="[open ? 'fixed inset-0 z-40 overflow-y-auto' : '', 'bg-white shadow-sm lg:static lg:overflow-y-visible']">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
            <div class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
              <div class="flex flex-shrink-0 items-center">
                <a href="#">
                  <img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500" alt="Your Company" />
                </a>
              </div>
            </div>
            <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div class="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div class="w-full">
                  <label for="search" class="sr-only">Search</label>
                  <div class="relative">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input id="search" name="search" class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
              <!-- Mobile menu button -->
              <PopoverButton class="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                <span class="sr-only">Open menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
            <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
              <a href="#" class="text-sm font-medium text-gray-900 hover:underline">Go Premium</a>
              <a href="#" class="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </a>

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-5 flex-shrink-0">
                <div>
                  <MenuButton class="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
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

              <a href="#" class="ml-6 inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">New Post</a>
            </div>
          </div>
        </div>

        <PopoverPanel as="nav" class="lg:hidden" aria-label="Global">
          <div class="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
            <a v-for="item in navigation" :key="item.name" :href="item.href" :aria-current="item.current ? 'page' : undefined" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50', 'block rounded-md py-2 px-3 text-base font-medium']">{{ item.name }}</a>
          </div>
          <div class="border-t border-gray-200 pt-4">
            <div class="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
                <div class="text-sm font-medium text-gray-500">{{ user.email }}</div>
              </div>
              <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
              <a v-for="item in userNavigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">{{ item.name }}</a>
            </div>
          </div>

          <div class="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
            <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700">New Post</a>

            <div class="mt-6 flex justify-center">
              <a href="#" class="text-base font-medium text-gray-900 hover:underline">Go Premium</a>
            </div>
          </div>
        </PopoverPanel>
      </header>
    </Popover>

    <div class="py-10">
      <div class="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div class="hidden lg:col-span-3 lg:block xl:col-span-2">
          <nav aria-label="Sidebar" class="sticky top-4 divide-y divide-gray-300">
            <div class="space-y-1 pb-8">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-50', 'group flex items-center rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
                <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', '-ml-1 mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
                <span class="truncate">{{ item.name }}</span>
              </a>
            </div>
            <div class="pt-10">
              <p class="px-3 text-sm font-medium text-gray-500" id="communities-headline">Communities</p>
              <div class="mt-3 space-y-2" aria-labelledby="communities-headline">
                <a v-for="community in communities" :key="community.name" :href="community.href" class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                  <span class="truncate">{{ community.name }}</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <main class="lg:col-span-9 xl:col-span-6">
          <div class="px-4 sm:px-0">
            <div class="sm:hidden">
              <label for="question-tabs" class="sr-only">Select a tab</label>
              <select id="question-tabs" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-rose-500">
                <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
              </select>
            </div>
            <div class="hidden sm:block">
              <nav class="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
                <a v-for="(tab, tabIdx) in tabs" :key="tab.name" :href="tab.href" :aria-current="tab.current ? 'page' : undefined" :class="[tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-center text-sm font-medium hover:bg-gray-50 focus:z-10']">
                  <span>{{ tab.name }}</span>
                  <span aria-hidden="true" :class="[tab.current ? 'bg-rose-500' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']" />
                </a>
              </nav>
            </div>
          </div>
          <div class="mt-4">
            <h1 class="sr-only">Recent questions</h1>
            <ul role="list" class="space-y-4">
              <li v-for="question in questions" :key="question.id" class="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
                <article :aria-labelledby="'question-title-' + question.id">
                  <div>
                    <div class="flex space-x-3">
                      <div class="flex-shrink-0">
                        <img class="h-10 w-10 rounded-full" :src="question.author.imageUrl" alt="" />
                      </div>
                      <div class="min-w-0 flex-1">
                        <p class="text-sm font-medium text-gray-900">
                          <a :href="question.author.href" class="hover:underline">{{ question.author.name }}</a>
                        </p>
                        <p class="text-sm text-gray-500">
                          <a :href="question.href" class="hover:underline">
                            <time :datetime="question.datetime">{{ question.date }}</time>
                          </a>
                        </p>
                      </div>
                      <div class="flex flex-shrink-0 self-center">
                        <Menu as="div" class="relative inline-block text-left">
                          <div>
                            <MenuButton class="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                              <span class="sr-only">Open options</span>
                              <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
                            </MenuButton>
                          </div>

                          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                                    <StarIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <span>Add to favorites</span>
                                  </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                                    <CodeBracketIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <span>Embed</span>
                                  </a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex px-4 py-2 text-sm']">
                                    <FlagIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <span>Report content</span>
                                  </a>
                                </MenuItem>
                              </div>
                            </MenuItems>
                          </transition>
                        </Menu>
                      </div>
                    </div>
                    <h2 :id="'question-title-' + question.id" class="mt-4 text-base font-medium text-gray-900">{{ question.title }}</h2>
                  </div>
                  <div class="mt-2 space-y-4 text-sm text-gray-700" v-html="question.body" />
                  <div class="mt-6 flex justify-between space-x-8">
                    <div class="flex space-x-6">
                      <span class="inline-flex items-center text-sm">
                        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <HandThumbUpIcon class="h-5 w-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">{{ question.likes }}</span>
                          <span class="sr-only">likes</span>
                        </button>
                      </span>
                      <span class="inline-flex items-center text-sm">
                        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <ChatBubbleLeftEllipsisIcon class="h-5 w-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">{{ question.replies }}</span>
                          <span class="sr-only">replies</span>
                        </button>
                      </span>
                      <span class="inline-flex items-center text-sm">
                        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <EyeIcon class="h-5 w-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">{{ question.views }}</span>
                          <span class="sr-only">views</span>
                        </button>
                      </span>
                    </div>
                    <div class="flex text-sm">
                      <span class="inline-flex items-center text-sm">
                        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <ShareIcon class="h-5 w-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">Share</span>
                        </button>
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </main>
        <aside class="hidden xl:col-span-4 xl:block">
          <div class="sticky top-4 space-y-4">
            <section aria-labelledby="who-to-follow-heading">
              <div class="rounded-lg bg-white shadow">
                <div class="p-6">
                  <h2 id="who-to-follow-heading" class="text-base font-medium text-gray-900">Who to follow</h2>
                  <div class="mt-6 flow-root">
                    <ul role="list" class="-my-4 divide-y divide-gray-200">
                      <li v-for="user in whoToFollow" :key="user.handle" class="flex items-center space-x-3 py-4">
                        <div class="flex-shrink-0">
                          <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="text-sm font-medium text-gray-900">
                            <a :href="user.href">{{ user.name }}</a>
                          </p>
                          <p class="text-sm text-gray-500">
                            <a :href="user.href">{{ '@' + user.handle }}</a>
                          </p>
                        </div>
                        <div class="flex-shrink-0">
                          <button type="button" class="inline-flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-gray-900">
                            <PlusIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            Follow
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-6">
                    <a href="#" class="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">View all</a>
                  </div>
                </div>
              </div>
            </section>
            <section aria-labelledby="trending-heading">
              <div class="rounded-lg bg-white shadow">
                <div class="p-6">
                  <h2 id="trending-heading" class="text-base font-medium text-gray-900">Trending</h2>
                  <div class="mt-6 flow-root">
                    <ul role="list" class="-my-4 divide-y divide-gray-200">
                      <li v-for="post in trendingPosts" :key="post.id" class="flex space-x-3 py-4">
                        <div class="flex-shrink-0">
                          <img class="h-8 w-8 rounded-full" :src="post.user.imageUrl" :alt="post.user.name" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="text-sm text-gray-800">{{ post.body }}</p>
                          <div class="mt-2 flex">
                            <span class="inline-flex items-center text-sm">
                              <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ChatBubbleLeftEllipsisIcon class="h-5 w-5" aria-hidden="true" />
                                <span class="font-medium text-gray-900">{{ post.comments }}</span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-6">
                    <a href="#" class="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">View all</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  FlagIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ShareIcon,
  StarIcon,
} from '@heroicons/vue/20/solid'
import {
  ArrowTrendingUpIcon,
  Bars3Icon,
  BellIcon,
  FireIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Popular', href: '#', icon: FireIcon, current: false },
  { name: 'Communities', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Trending', href: '#', icon: ArrowTrendingUpIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const communities = [
  { name: 'Movies', href: '#' },
  { name: 'Food', href: '#' },
  { name: 'Sports', href: '#' },
  { name: 'Animals', href: '#' },
  { name: 'Science', href: '#' },
  { name: 'Dinosaurs', href: '#' },
  { name: 'Talents', href: '#' },
  { name: 'Gaming', href: '#' },
]
const tabs = [
  { name: 'Recent', href: '#', current: true },
  { name: 'Most Liked', href: '#', current: false },
  { name: 'Most Answers', href: '#', current: false },
]
const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
]
const whoToFollow = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]
const trendingPosts = [
  {
    id: 1,
    user: {
      name: 'Floyd Miles',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
    comments: 291,
  },
  // More posts...
]
</script>