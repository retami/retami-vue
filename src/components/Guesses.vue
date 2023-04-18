<script>
import {store} from '@/store/index.js'
import Colorpicker from "../utils/colorpicker.js";

export default {
    data() {
        return {
            store: store
        }
    },
    methods: {
        click(event, index, hole) {
            if (store.attemps === index) {
                let x = (event.target.getBoundingClientRect().x + event.target.getBoundingClientRect().width / 2) + 'px';
                let y = (event.target.getBoundingClientRect().y + event.target.getBoundingClientRect().height / 2) + 'px';
                Colorpicker.show(event, x, y, (color) => {
                    store.guesses[index].guess[hole] = color;
                });
            }
        }
    },
}
</script>
<template>
    <div v-if="this.store.guessesVisible" id="guesses">
        <div v-for="(guessRow, index) in this.store.guesses" class="guess-row">
            <div class="guess-holes">
                <button v-for="(guess, hole) in guessRow.guess" class="guess-hole"
                        :disabled="! this.store.isGuessRowEnabled(index)" :style="{'background-color': guess}"
                        @click="click($event, index, hole)"></button>
            </div>
            <div class="feedback-holes">
                <template v-for="(feedback, index) in guessRow.feedback">
                    <div v-if="guessRow.guess.length === 2 && index === 1 || guessRow.guess.length === 3 && index === 2 || guessRow.guess.length === 4 && index === 2 || guessRow.guess.length >= 5 && index === 3" class="feedback-spacer"></div>
                    <div class="feedback-hole"
                         :style="{'background-color': feedback}"></div>
                </template>
            </div>
        </div>
    </div>
</template>