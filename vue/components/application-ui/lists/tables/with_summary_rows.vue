<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Invoice</h1>
        <p class="mt-2 text-sm text-gray-700">For work completed from <time datetime="2022-08-01">August 1, 2022</time> to <time datetime="2022-08-31">August 31, 2022</time>.</p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Print</button>
      </div>
    </div>
    <div class="-mx-4 mt-8 flow-root sm:mx-0">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Project</th>
            <th scope="col" class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell">Hours</th>
            <th scope="col" class="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell">Rate</th>
            <th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id" class="border-b border-gray-200">
            <td class="py-4 pl-4 pr-3 text-sm sm:pl-0">
              <div class="font-medium text-gray-900">{{ project.name }}</div>
              <div class="mt-0.5 text-gray-500 sm:hidden">{{ project.hours }} hours at {{ project.rate }}</div>
            </td>
            <td class="hidden px-3 py-4 text-right text-sm text-gray-500 sm:table-cell">{{ project.hours }}</td>
            <td class="hidden px-3 py-4 text-right text-sm text-gray-500 sm:table-cell">{{ project.rate }}</td>
            <td class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">{{ project.price }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colspan="3" class="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0">Subtotal</th>
            <th scope="row" class="pl-6 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">Subtotal</th>
            <td class="pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0">$3,900.00</td>
          </tr>
          <tr>
            <th scope="row" colspan="3" class="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0">Tax</th>
            <th scope="row" class="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden">Tax</th>
            <td class="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">$585.00</td>
          </tr>
          <tr>
            <th scope="row" colspan="3" class="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0">Total</th>
            <th scope="row" class="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">Total</th>
            <td class="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">$4,485.00</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup>
const projects = [
  { id: 1, name: 'New Advertising Campaign', hours: '12.0', rate: '$75.00', price: '$900.00' },
  // More projects...
]
</script>