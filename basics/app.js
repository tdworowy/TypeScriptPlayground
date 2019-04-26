"use strict";
class MyClass {
    render(divId, text) {
        var el = document.getElementById(divId);
        if (el != null) {
            el.innerText = text;
        }
    }
}
window.onload = () => {
    var myClass = new MyClass();
    myClass.render("content", "Hello World !!!!");
};
