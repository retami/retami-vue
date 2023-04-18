const ColorPicker = (function () {

    let colors = [];
    function show(e, x, y, callbackArg = null) {
        start();
        let colorPicker = document.querySelector('.color-picker');
        colorPicker.classList.toggle('visible');
        colorPicker.style.top = y; //(selectedColorButton.getBoundingClientRect().y + 4) + 'px';
        colorPicker.style.left = x; //(selectedColorButton.getBoundingClientRect().x + 4) + 'px';
        if(callbackArg !== null && callbackArg !== undefined) {
            let options = document.querySelectorAll('.color-picker .color-option');
            for (let i = 0; i < options.length; i++) {
                options[i].addEventListener('click', (e) => {
                    let selectedColor = window.getComputedStyle(e.target).backgroundColor;
                    callbackArg(selectedColor);
                    colorPicker.classList.toggle('visible');
                });
            }
        }
    }

    function init(c) {
        colors = c;
    }

    function start() {
        document.querySelector('.color-picker')?.remove();
        const colorpicker = document.createElement("div");
        colorpicker.classList.add("color-picker");
        for (let i = 1; i <= colors.length; i++) {
            let coloroption = document.createElement("div");
            coloroption.classList.add("color-option");
            coloroption.classList.add("color-" + i);
            coloroption.style.backgroundColor = colors[i - 1];
            let x = Math.floor(Math.cos(2 * Math.PI / colors.length * (i - 1)) * 40 - 17);
            let y = Math.floor(Math.sin(2 * Math.PI / colors.length * (i - 1)) * 40 - 17);
            coloroption.style.top = x + "px";
            coloroption.style.left = y + "px";
            colorpicker.appendChild(coloroption);
        }
        //if(document.querySelector('.color-picker') !== null){
        //    document.querySelector('.color-picker').remove();
        //}
        document.body.appendChild(colorpicker);
    }

    return {
        init: function(colors) {
            init(colors);
        },
        show: function(e, x, y, callbackArg = null) {
            show(e, x, y, callbackArg);
        }
    };
})
();

export default ColorPicker;