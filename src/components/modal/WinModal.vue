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
    <div v-if="this.store.isModalVisible('Win')" class="modal" style="display: block;">
        <div class="win-modal">
            <div class="title">You won!</div>
            <div class="content">
                <div class="left">
                    Guesses:<br>
                    Time:<br>
                    Colors:<br>
                    Pins:<br>
                </div>
                <div class="right">
                    <span id="score_guesses">{{ this.store.attemps }}</span><br>
                    <span id="score_time">s</span><br>
                    <span id="score_colors">{{ this.store.options.numberOfColors }}</span><br>
                    <span id="score_pins">{{ this.store.options.numberOfPins }}</span><br>
                </div>
            </div>
            <div class="modal-button" @click="quit">OK</div>
        </div>
    </div>
</template>