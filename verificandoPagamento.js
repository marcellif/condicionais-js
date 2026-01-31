const status = "aprovado"


switch (status) {
case "aprovado":
    console.log("O pagamento foi aprovado");
    break;
case "pendente":
    console.log("Pagamento aprovado");
    break;
case "recusado":
    console.log( "Pagamento recusado");
     break;
default:
    console.log( "status invalido");
}