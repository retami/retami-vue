<script>
import { store } from '@/store/index.js'
export default {
    data() {
        return {
            store: store
        }
    },
    methods: {
        showHelp() {
            this.store.openModal('Help');
        },
    },
}
</script>
<template>
    <button class="help-button" @click="showHelp">Help</button>
</template>