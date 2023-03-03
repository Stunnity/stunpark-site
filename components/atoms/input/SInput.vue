<template>
    <input v-bind="$attrs" :class="inputClasses" :value="value" @input="$emit('update:value', $event!.target!.value)" />
</template>
<script setup lang="ts">
import { computed } from "vue"
import { InputProps } from "./SInput.types"

const props = withDefaults(defineProps<InputProps>(), {
    value: "",
    error: false,
    color: "white",
})

const inputClasses = computed(() => {
    let classes = `w-full bg-transparent pb-2 pt-1 border-b-2  focus:outline-none `
    if (props.error) classes += ` border-b-red-500`
    else classes += ` border-b-white`

    if (props.color == "white") classes += ` text-white`

    return classes
})
</script>
