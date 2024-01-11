let restaurnteEscolhidos = "Brasileiro"



switch (restaurnteEscolhidos) {
    case "Japones" :
        console.log("pedir rodizio de sushi");
        break 


        case "brasileira":
            console.log("pedir feijoda");
            break

            case "churrascaria":
                console.log("pedir rodizio de churrasco");
                break
}
let sobremesaRestaurantes = "Pudim"
if (restaurnteEscolhidos === "brasileiro"){
    console.log("Aqui temos sua sobremesa: "+ sobremesaRestaurantes)
}else{
    console.log("Nao temos essa sobremesa no menu")
}
for(let i=0; i<7; i++){
  if  (i%2===0){
    console.log("voces vao sentar em uma mesa redonda, pois voces sao mais de 5")

  }else{
    console.log("Nao temos mesas pequenas, pode ser o balcao?")
  }
}
let pessoasNaMesa = 7
while (pessoasNaMesa%2===1){
    console.log("Está faltando alguém ")
    break

}


