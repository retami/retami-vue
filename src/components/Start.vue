<script>
import { store } from '@/store/index.js'
export default {
    data() {
        return {
            store: store
        }
    },
    methods: {
        play() {
            this.store.play();
        }
    },
}
</script>
<template>
    <button v-if="this.store.startVisible" class="start-button" @click="play">Start</button>
</template>