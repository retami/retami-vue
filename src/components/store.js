// store.js
import {reactive} from 'vue'
import Secret from "./../secret.js";
import Colorpicker from "./../colorpicker.js";

export const store = reactive({

    colors: [
        'rgb(244, 67, 54)',
        'rgb(233, 30, 99)',
        'rgb(156, 39, 176)',
        'rgb(76, 175, 80)',
        'rgb(255, 235, 59)',
        'rgb(121, 85, 72)',
        'rgb(33, 150, 243)',
    ],

    state: 'initial',

    startVisible: true,
    optionsEnabled: true,
    quitVisible: false,
    quitEnabled: true,

    infoVisible: true,
    checkVisible: false,

    hintVisible: true,
    guessesVisible: true,

    secret: Secret,
    secretRow: [],

    attemps: 0,
    guesses: [],

    options: {
        numberOfPins: 4,
        numberOfGuesses: 8,
        numberOfColors: 6,
    },

    init() {
        this.clearGuesses();
        this.clearSecretRow();
        Colorpicker.init(this.colors.slice(0, this.options.numberOfColors));
        this.setState('initial');
    },

    play() {
        this.clearGuesses();
        this.setSecretRow();
        this.attemps = 0;
        this.setState('playing');
    },

    end() {
        for(let i = 0; i < this.options.numberOfPins; i++) {
            this.secretRow[i] = this.secret.get()[i];
        }
        this.setState('end');
    },

    setState(state) {
        this.state = state;
        this.startVisible = (state === 'initial' || state === 'end');
        this.optionsEnabled = (state === 'initial' || state === 'end');
        this.quitVisible = (state === 'playing' || state === 'end');
        this.quitEnabled = (state === 'playing');
        this.checkVisible = (state === 'playing');
        this.hintVisible = true; //(state === 'playing');
        this.infoVisible = (state === 'playing' || state === 'end');
    },

    clearGuesses() {
        this.guesses = [];
        for(let i = 0; i < this.options.numberOfGuesses; i++) {
            this.guesses.push({
                guess: Array(this.options.numberOfPins).fill('transparent'),
                feedback: Array(this.options.numberOfPins).fill('transparent'),
            });
        }
    },

    clearSecretRow() {
        this.secretRow = Array(this.options.numberOfPins).fill('transparent');
    },

    setSecretRow() {
        this.secretRow = Array(this.options.numberOfPins).fill('black');
        this.secret.generateSecret(this.colors.slice(0, this.options.numberOfColors), this.options.numberOfPins);
    },

    isCheckEnabled() {
        return this.state === 'playing' && ! this.guesses[this.attemps].guess.includes('transparent');
    },

    isGuessRowEnabled(index) {
        return (this.state === 'playing' && this.attemps < this.options.numberOfGuesses && index === this.attemps);
    },

    isHintEnabled() {
        return this.state === 'playing' && this.secretRow.includes('black');
    },

    showHint() {
        let candidateIndices = this.secretRow.
                map((color, index) => color === 'black' ? index : null).
                filter(index => index !== null);
        let randomIndex = Math.floor(Math.random() * candidateIndices.length);
        this.secretRow[candidateIndices[randomIndex]] = this.secret.get()[candidateIndices[randomIndex]];
    },

    guess() {
        let guess = this.guesses[this.attemps].guess;
        let [blackPins, whitePins] = this.secret.checkGuess(guess);
        let transparentPins = this.options.numberOfPins - blackPins - whitePins;

        this.guesses[this.attemps].feedback = []
            .concat(Array(blackPins).fill('black'))
            .concat(Array(whitePins).fill('white'))
            .concat(Array(transparentPins).fill('transparent'));

        this.attemps++;

        if(blackPins === this.options.numberOfPins) {
            this.openModal('Win');
            this.end();
            return;
        }

        if(this.attemps === this.options.numberOfGuesses) {
            this.openModal('Lost');
            this.end();
        }
    },

    modal: null,

    openModal(modal) {
        this.modal = modal;
    },

    isModalVisible(modal) {
        return (this.modal === modal);
    },

    closeModal() {
        this.modal = null;
    }
})