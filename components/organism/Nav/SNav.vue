<template>
    <nav class="flex justify-between items-center">
        <div><SLogo /></div>
        <ul class="flex space-x-5">
            <li class="text-sm text-primary"><NuxtLink to="#about"> About </NuxtLink></li>
            <li class="text-sm text-primary"><NuxtLink to="#features"> Features </NuxtLink></li>
            <li class="text-sm text-primary"><NuxtLink to="#contact"> Contact </NuxtLink></li>
        </ul>
        <div><slot name="action" /></div>
    </nav>
</template>
