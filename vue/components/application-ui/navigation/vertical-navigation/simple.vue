<template>
  <nav class="space-y-1" aria-label="Sidebar">
    <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'flex items-center rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
      <span class="truncate">{{ item.name }}</span>
    </a>
  </nav>
</template>

<script setup>
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
</script>