function menu(prato, tempo){
    let tempoTotal = tempo;
    let tempoPrato = 0;
    let pipoca = 10;
    let macarrao = 8;
    let carne = 15;
    let feijao = 12;
    let brigadeiro = 8
    if(prato == "Pipoca"){
        tempoTotal += pipoca;
        tempoPrato = 10;
    }else if(prato == "Macarrão"){
        tempoTotal += macarrao;
        tempoPrato = 8;
    }else if(prato == "Carne"){
        tempoTotal += carne;
        tempoPrato = 15;
    }else if (prato == "Feijão"){
        tempoTotal += feijao;
        tempoPrato = 12;
    }else if(prato == "Brigadeiro"){
        tempoTotal += brigadeiro;
        tempoPrato = 8;
    }else{
        console.log("Escolha uma opção válida!");
    }
    if(tempoTotal >= tempoPrato * 3){
        console.log("Kabum!");
    }else if(tempoTotal >= tempoPrato * 2){
        console.log("A comida queimou!");
    }else if(tempoTotal < tempoPrato){
        console.log("Tempo insuficiente.");
    }else {
        console.log("Prato pronto, bom apetite!!!");
    }
}

menu("Pipoca", 0);
menu("Pipoca", 10);
menu("Pipoca", 20);
menu("Pipoca", -5);

console.log("\n");
menu("Macarrão", 0);
menu("Macarrão", 10);
menu("Macarrão", 20);
menu("Macarrão", -5);

console.log("\n");
menu("Carne", 0);
menu("Carne", 10);
menu("Carne", 20);
menu("Carne", -5);

console.log("\n");
menu("Feijão", 0);
menu("Feijão", 10);
menu("Feijão", 20);
menu("Feijão", -5);

console.log("\n");
menu("Brigadeiro", 0);
menu("Brigadeiro", 10);
menu("Brigadeiro", 20);
menu("Brigadeiro", -5);