<template>
    <nav class="flex justify-between items-center bg-white py-4 px-6 rounded-full md:w-5/6  m-auto">
        <div><SLogo /></div>
        <ul class="space-x-5 hidden md:flex">
            <li class="text-sm text-primary"><NuxtLink to="#about"> About </NuxtLink></li>
            <li class="text-sm text-primary"><NuxtLink to="#features"> Features </NuxtLink></li>
            <li class="text-sm text-primary"><NuxtLink to="#contact"> Contact </NuxtLink></li>
        </ul>
        <div class="hidden md:block"><slot name="action" /></div>
    </nav>
</template>
