<script>
import {store} from '@/store/index.js'

export default {
    data() {
        return {
            store: store,
            timer: null,
            seconds: 0
        }
    },
    methods: {
        getText() {
            if (this.store.state === 'end') {
                this.stop();
                return this.seconds + 's played.';
            }
            if (this.store.state === 'playing') {
                this.start();
                return 'Playing... ' + this.seconds + 's';
            }
            return '';
        },
        start() {
            if(this.timer === null) {
                this.seconds = 0;
                this.timer = setInterval(function () {
                    this.seconds++;
                }.bind(this), 1000);
            }
        },
        stop() {
            if (this.timer !== null) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }
    },
}
</script>
<template>
    <span v-if="this.store.infoVisible" class="playing">{{ this.getText() }}</span>
</template>