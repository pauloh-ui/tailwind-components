<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="position in positions" :key="position.id">
        <a href="#" class="block hover:bg-gray-50">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="truncate text-sm font-medium text-indigo-600">{{ position.title }}</p>
              <div class="ml-2 flex flex-shrink-0">
                <p class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{{ position.type }}</p>
              </div>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <p class="flex items-center text-sm text-gray-500">
                  <UsersIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  {{ position.department }}
                </p>
                <p class="mt-2 flex items-center text-sm text-gray-500 sm:ml-6 sm:mt-0">
                  <MapPinIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  {{ position.location }}
                </p>
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <CalendarIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <p>
                  Closing on
                  {{ ' ' }}
                  <time :datetime="position.closeDate">{{ position.closeDateFull }}</time>
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/vue/20/solid'

const positions = [
  {
    id: 1,
    title: 'Back End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Front End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'User Interface Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
]
</script>