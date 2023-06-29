<template>
  <nav aria-label="Sidebar">
    <div class="space-y-1">
      <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
        <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', '-ml-1 mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
        <span class="truncate">{{ item.name }}</span>
      </a>
    </div>
    <div class="mt-8">
      <h3 class="px-3 text-sm font-medium text-gray-500" id="projects-headline">Projects</h3>
      <div class="mt-1 space-y-1" aria-labelledby="projects-headline">
        <a v-for="item in secondaryNavigation" :key="item.name" :href="item.href" class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
          <span class="truncate">{{ item.name }}</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]
const secondaryNavigation = [
  { name: 'Website redesign', href: '#' },
  { name: 'GraphQL API', href: '#' },
  { name: 'Customer migration guides', href: '#' },
  { name: 'Profit sharing program', href: '#' },
]
</script>