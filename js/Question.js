class Question{
    constructor(){
        this.input = createInput("Answer");
        this.title = createElement('h1');
        this.que = createElement('h2');
        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
    }


hide(){
    this.input.hide();
    this.title.hide();
    this.que.hide();
    this.option1.hide();
    this.option2.hide();       
}

display(){
    this.title.html("MyQuizGame");
    this.title.position(350,0);

    this.que.html("Question: What starts and ends with the letter 'E', but has only one letter?");
    this.que.position(50,80);

    this.option1.html("1: Everyone");
    this.option1.position(50,125);
    this.option2.html("2: Envelope");
    this.option2.position(50,150);

    this.input.position(50,230)
}
}