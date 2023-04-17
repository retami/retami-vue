<script>
import {store} from '../store.js'

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
    <div v-if="this.store.isModalVisible('Quit')" class="modal" style="display: block;">
        <div id="quit-modal">
            <div class="title">You quit!</div>
            <div class="modal-button" @click="quit">OK</div>
        </div>
    </div>
</template>

