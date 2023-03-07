<template>
    <div class="flex border-2 border-white rounded-full p-2 items-center">
        <div class="pl-4 pr-2 flex-1"><slot name="input" /></div>
        <div><slot name="action" /></div>
    </div>
</template>
