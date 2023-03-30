<template>
    <span><a-button v-bind="bindAttrs"><slot></slot></a-button></span>
</template>

<script lang="ts" setup>
import {computed, defineEmits, useAttrs} from "vue";

const emit = defineEmits([`click`])

const bindAttrs = computed(() => ({
    ...useAttrs(),
    onClick: () => emit(`click`)
}))

</script>

<style scoped>

</style>
