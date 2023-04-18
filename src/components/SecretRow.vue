<script>
import {store} from './store.js'

export default {
    data() {
        return {
            store: store
        }
    },
    methods: {
        hint() {
            store.showHint();
        }
    },
}
</script>
<template>
    <div id="secret-row">
        <div class="code-row">
            <button v-for="item in this.store.secretRow" class="code-hole" :style="{'background-color': item}"></button>
        </div>
        <div class="hint-button-container">
            <button class="hint-button" :disabled="! this.store.isHintEnabled()" @click="hint">Hint</button>
        </div>
    </div>
</template>