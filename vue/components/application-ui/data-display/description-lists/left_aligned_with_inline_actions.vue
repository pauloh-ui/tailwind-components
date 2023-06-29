<template>
  <div>
    <h3 class="text-base font-semibold leading-6 text-gray-900">Applicant Information</h3>
    <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
  </div>
  <div class="mt-5 border-t border-gray-200">
    <dl class="divide-y divide-gray-200">
      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt class="text-sm font-medium text-gray-500">Full name</dt>
        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">Margot Foster</span>
          <span class="ml-4 flex-shrink-0">
            <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Update</button>
          </span>
        </dd>
      </div>
      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt class="text-sm font-medium text-gray-500">Application for</dt>
        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">Backend Developer</span>
          <span class="ml-4 flex-shrink-0">
            <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Update</button>
          </span>
        </dd>
      </div>
      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt class="text-sm font-medium text-gray-500">Email address</dt>
        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">margotfoster@example.com</span>
          <span class="ml-4 flex-shrink-0">
            <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Update</button>
          </span>
        </dd>
      </div>
      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt class="text-sm font-medium text-gray-500">Salary expectation</dt>
        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">$120,000</span>
          <span class="ml-4 flex-shrink-0">
            <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Update</button>
          </span>
        </dd>
      </div>
      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt class="text-sm font-medium text-gray-500">About</dt>
        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <span class="flex-grow">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</span>
          <span class="ml-4 flex-shrink-0">
            <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Update</button>
          </span>
        </dd>
      </div>
      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
        <dt class="text-sm font-medium text-gray-500">Attachments</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
            <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
              <div class="flex w-0 flex-1 items-center">
                <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <span class="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
              </div>
              <div class="ml-4 flex flex-shrink-0 space-x-4">
                <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Update</button>
                <span class="text-gray-300" aria-hidden="true">|</span>
                <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Remove</button>
              </div>
            </li>
            <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
              <div class="flex w-0 flex-1 items-center">
                <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <span class="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
              </div>
              <div class="ml-4 flex flex-shrink-0 space-x-4">
                <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Update</button>
                <span class="text-gray-300" aria-hidden="true">|</span>
                <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Remove</button>
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { PaperClipIcon } from '@heroicons/vue/20/solid'
</script>