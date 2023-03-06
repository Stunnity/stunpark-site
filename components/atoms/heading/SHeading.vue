import { HeadingTypes } from './SHeading.types';
<template>
    <h2 :class="styles">
        <slot></slot>
    </h2>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { HeadingTypes } from "./SHeading.types"

const props = withDefaults(defineProps<HeadingTypes>(), {
    size: "xl",
    weight: "bold",
    color: "primary",
})

const styles = computed(() => {
    let styles = ""

    if (props.size == "lg") styles += ` text-lg`
    else if (props.size == "xl") styles += ` text-xl`
    else if (props.size == "2xl") styles += ` text-2xl`
    else if (props.size == "3xl") styles += ` text-3xl`
    else if (props.size == "4xl") styles += ` text-4xl`
    else if (props.size == "5xl") styles += ` text-5xl`
    else if (props.size == "6xl") styles += ` text-6xl`

    if (props.weight == "semibold") styles += ` font-semibold`
    else if (props.weight == "bold") styles += ` font-bold`
    else if (props.weight == "extrabold") styles += ` font-extrabold`

    if (props.color == "primary") styles += ` text-primary`
    else if (props.color == "secondary") styles += ` text-secondary`
    else if (props.color == "white") styles += ` text-white`
    else if (props.color == "black") styles += ` text-black`

    return styles
})
</script>

<style scoped>
h2 {
    font-family: "ClashDisplay", sans-serif;
}
</style>
