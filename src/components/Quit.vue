<script>
import { store } from '@/store/index.js'
export default {
    data() {
        return {
            store: store
        }
    },
    methods: {
        quit() {
            this.store.openModal('Quit');
            this.store.end();
        },
    },
}
</script>
<template>
    <button v-if="this.store.quitVisible" class="quit-button" :disabled="! this.store.quitEnabled" @click="quit">Quit</button>
</template>