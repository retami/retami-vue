<script>
import { store } from './store.js'
export default {
    data() {
        return {
            store: store
        }
    },
    methods: {
        check() {
            this.store.guess();
        }
    },
}
</script>
<template>
    <button v-if="this.store.checkVisible" class="check-button" :disabled="! this.store.isCheckEnabled()" @click="check">Check</button>
</template>