<template>
  <nav class="space-y-1" aria-label="Sidebar">
    <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
      <span class="truncate">{{ item.name }}</span>
      <span v-if="item.count" :class="[item.current ? 'bg-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200', 'ml-auto inline-block rounded-full py-0.5 px-3 text-xs']">{{ item.count }}</span>
    </a>
  </nav>
</template>

<script setup>
const navigation = [
  { name: 'Dashboard', href: '#', current: true, count: '5' },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false, count: '19' },
  { name: 'Calendar', href: '#', current: false, count: '20+' },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
</script>