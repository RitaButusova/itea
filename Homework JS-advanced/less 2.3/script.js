class Bar{
    constructor(barStart, el, inp){
        this.barStart = barStart;
        this.el = el;
        this.inp = inp;
    }
    AddWidth(){
        this.barStart += 100;
        this.el.onmouseover = () => {
            this.el.setAttribute("style","width:" + this.barStart + "px");
        }
        this.el.onmouseout = () => {
            this.el.setAttribute("style","width: 100px");
        }
    };

    ResetWidth(){
        this.barStart = 500;
    }

    ShowColor(){
        this.inp.onchange = () => {
            var valColor = this.inp.value;
            this.el.setAttribute("style","background:" + valColor);
            this.el.onmouseout = () => {
            this.el.setAttribute("style","background:" + valColor);
            }
        }
    }
}

    let bar = document.querySelector('.bar');
    let startVal = 500;
    let inputColor = document.getElementsByTagName('input')[0];
    let progress = new Bar(startVal, bar, inputColor);

    let button = document.querySelector(".add");
        button.onclick = () => {
        progress.AddWidth();
    }

    let buttonReset = document.querySelector(".reset");
        buttonReset.onclick = () => {
        progress.ResetWidth();
    }

    let buttonColor = document.querySelector("#color");
        buttonColor.onclick = () => {
        progress.ShowColor();
    }