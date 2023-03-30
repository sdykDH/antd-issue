<template>
    <span><a-input v-bind="bindAttrs" /></span>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue"

export default defineComponent({
    name: `FormInput`,
    setup(props, {attrs}) {
        return {
            bindAttrs: computed(() => ({
                ...attrs,
                placeholder: `123132`
            }))
        }
    }
})
</script>
