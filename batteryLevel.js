const bateria = 20;

const statusBateria = bateria < 20 
     ? "critica" 
     : (bateria <=80) 
     ? "moderada"
     : "cheia"


console.log (statusBateria)