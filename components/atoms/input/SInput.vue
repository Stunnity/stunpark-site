<template>
    <input v-bind="$attrs" :class="inputClasses" v-model="modelValue" />
</template>
<script setup lang="ts">
import { computed } from "vue"
import { InputProps } from "./SInput.types"

const modelValue = defineModel<string>()

const props = withDefaults(defineProps<InputProps>(), {
    error: false,
    color: "white",
    placeholderColor: "gray",
    border: true,
})

const inputClasses = computed(() => {
    let classes = `w-full bg-transparent focus:outline-none `

    if (props.border) classes += ` border-b-2 pb-2 pt-1`

    if (props.error) classes += ` border-b-red-500`
    else classes += ` border-b-white/30 focus:border-b-white`

    if (props.color == "white") classes += ` text-white`

    if (props.placeholderColor == "gray") classes += ` placeholder-gray-300`
    else if (props.placeholderColor == "white") classes += ` placeholder-white`

    return classes
})
</script>
