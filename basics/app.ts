class MyClass {
    public render(divId: string, text: string) {
        var el: HTMLElement | null = document.getElementById(divId);
        if(el != null){
            el.innerText = text;
        }
    }
}

window.onload = () => {
    var myClass = new MyClass();
    myClass.render("content","Hello World !!!!")
};