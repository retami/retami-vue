<script>
import { store } from '@/store/index.js'
export default {
    data() {
        return {
            store: store
        }
    },
    methods: {
        initGame() {
            this.store.openModal('Options');
        }
    }
}
</script>
<template>
    <button class="config-button" :disabled="! this.store.optionsEnabled" @click="initGame">Options</button>
</template>