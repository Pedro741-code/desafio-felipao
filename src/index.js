let restaurnteEscolhidos = "Brasileiro"



switch (restaurnteEscolhidos) {
    case "Japones" :
        console.log("pedir rodizio de sushi");
        break 


        case "Brasileiro":
            console.log("pedir feijoda");
            break

            case "churrascaria":
                console.log("pedir rodizio de churrasco");
                break
}
let sobremesaRestaurantes = "Pudim"
if (restaurnteEscolhidos === "Brasileiro"){
    console.log("Aqui temos sua sobremesa: "+ sobremesaRestaurantes)
}else{
    console.log("Nao temos essa sobremesa no menu")
}
let i = 6 
  if  (i%2===0){
    console.log("voces vao sentar em uma mesa redonda, pois voces sao mais de 5")

  }else{
    console.log("Nao temos mesas pequenas, pode ser o balcao?")
  }

let pessoasNaMesa = 6
while (pessoasNaMesa%2===1 && pessoasNaMesa<6){
    console.log("Está faltando alguém ")
    if(pessoasNaMesa>6){
        console.log("quem é esse na nossa mesa?")

    }else if (pessoasNaMesa===6){
        console.log("esta todos aqui")
    }

}


