<script setup>
import Start from './components/Start.vue'
import Options from './components/Options.vue'
import Quit from './components/Quit.vue'
import Help from './components/Help.vue'
import Check from './components/Check.vue'
import SecretRow from './components/SecretRow.vue'
import Guesses from './components/Guesses.vue'
import Info from './components/Info.vue'

import HelpModal from './components/modal/HelpModal.vue'
import QuitModal from './components/modal/QuitModal.vue'
import WinModal from './components/modal/WinModal.vue'
import LostModal from './components/modal/LostModal.vue'
import OptionsModal from "./components/modal/OptionsModal.vue";

import { store } from '@/store'

store.init();
</script>

<template>
    <div id="game-board">
        <div class="header">
            <Options />
            <Info />
            <Quit />
            <Help />
        </div>
        <SecretRow />
        <Guesses />
        <Check />
        <Start />
        <HelpModal />
        <QuitModal />
        <WinModal />
        <LostModal />
        <OptionsModal />
    </div>
</template>
