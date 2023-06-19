<script lang="ts" setup>
const emit = defineEmits(["submit"])

function submit(e: Event) {
    e.preventDefault()
    emit("submit")
}
</script>
<template>
    <form class="flex border-2 border-white rounded-full p-2 items-center w-[30rem]" @submit="submit">
        <div class="pl-4 pr-2 flex-1"><slot name="input" /></div>
        <div><slot name="action" /></div>
    </form>
</template>
