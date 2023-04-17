<script>
import {store} from '../store.js'
export default {
    data() {
        return {
            store: store
        }
    },
    methods: {
        ok() {
            //this.store.options.numberOfColors = document.getElementById('config_colors_slider').value;
            //this.store.options.numberOfPins = document.getElementById('config_pins_slider').value;
            //this.store.options.numberOfGuesses = document.getElementById('config_guesses_slider').value;
            this.store.closeModal();
            this.store.init();
        },
    },
}
</script>
<template>
    <div v-if="this.store.isModalVisible('Options')" class="modal" style="display: block;">
        <div id="config-modal">
            <div id="config_dialog">
                <label id="colors_label">Colors: </label>
                <div id="config_colors_text">{{ store.options.numberOfColors }}</div>
                <input type="range" id="config_colors_slider" name="config_colors" v-bind:value=store.options.numberOfColors min="2" max="7"
                       @input="(event) => { this.store.options.numberOfColors = parseInt(event.target.value) }" >

                <label id="pins_label">Pins: </label>
                <div id="config_pins_text">{{ store.options.numberOfPins }}</div>
                <input type="range" id="config_pins_slider" name="config_pins" v-bind:value=store.options.numberOfPins min="2" max="5"
                       @input="(event) => { this.store.options.numberOfPins = parseInt(event.target.value) }">

                <label id="guesses_label">Guesses: </label>
                <div id="config_guesses_text">{{ store.options.numberOfGuesses }}</div>
                <input type="range" id="config_guesses_slider" name="config_guesses" v-bind:value=store.options.numberOfGuesses min="2" max="12"
                       @input="(event) => { this.store.options.numberOfGuesses = parseInt(event.target.value) }">
            </div>
            <div class="modal-button" @click="ok">OK</div>
        </div>
    </div>
</template>

