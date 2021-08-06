class Form
{
    constructor()
    {
        this.title = createElement('h1')
        this.input1 = createInput("Enter Your Name Here");
        this.button = createButton('Submit');
    }
    hide()
    {
        this.input1.hide();
        this.button.hide();
    }
    display()
    {
        this.title.html("SQUAD MASTER");
        this.title.position( displayWidth/2, displayHeight/2 - 350);

        this.input1.position(displayWidth/2, displayHeight/2);
        this.button.position(displayWidth/2, displayHeight/2 + 40);


    }
    
}