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
    <div v-if="this.store.isModalVisible('Help')" class="modal" style="display: block;">
        <div id="help-modal">
            <p>The goal of the game is to crack the code in as few attempts as possible.
                The code is made up of 4 colors. Each color can be used multiple times. After each guess,
                you will get feedback in the form of black and white pins. A black pin means that you have
                guessed a color and its position correctly. A white pin means that you have guessed a color
                correctly, but not its position. You can use the hint button to reveal one of the colors in
                the code. Good luck!</p>
            <div class="modal-button" @click="quit">OK</div>
        </div>
    </div>
</template>