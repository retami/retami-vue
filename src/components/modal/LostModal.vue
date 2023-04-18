<script>
import {store} from '@/store'

export default {
    data() {
        return {
            store: store
        }
    },
    methods: {
        quit() {
            this.store.closeModal();
        },
    },
}
</script>
<template>
    <div v-if="this.store.isModalVisible('Lost')" class="modal" style="display: block;">
        <div id="lost-modal">
            <div class="title">You lost!</div>
            <div class="modal-button" @click="quit">OK</div>
        </div>
    </div>
</template>

