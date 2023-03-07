<template>
    <textarea :class="inputClasses" :value="value" @input="$emit('update:modelValue', $event!.target!.value)" :placeholder="props.placeholder"></textarea>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { TextAreaProps } from "./STextArea.types"

const props = withDefaults(defineProps<TextAreaProps>(), {
    value: "",
    error: false,
    color: "white",
    placeholder: "textarea",
})

const inputClasses = computed(() => {
    let classes = `w-full bg-transparent pb-2 pt-1 border-b-2  focus:outline-none `
    if (props.error) classes += ` border-b-red-500`
    else classes += ` border-b-white/30 focus:border-b-white`

    if (props.color == "white") classes += ` text-white`

    return classes
})
</script>
