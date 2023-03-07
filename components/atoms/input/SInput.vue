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
    placeholderColor: "gray",
    border: true,
})

const inputClasses = computed(() => {
    let classes = `w-full bg-transparent focus:outline-none `

    if (props.border) classes += ` border-b-2 pb-2 pt-1`

    if (props.error) classes += ` border-b-red-500`
    else classes += ` border-b-gray-300 focus:border-b-white`

    if (props.color == "white") classes += ` text-white`

    if (props.placeholderColor == "gray") classes += ` placeholder-gray-300`
    else if (props.placeholderColor == "white") classes += ` placeholder-white`

    return classes
})
</script>
