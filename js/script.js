var priceBase = 10;
var burgerName = document.getElementById('burger-name');
var ingreds = document.getElementsByClassName('ingred');
var price = document.getElementById('price');

// qnd clicco il bottone'Calcola prezzo'
var calculateBtn = document.getElementById('calculate');
calculateBtn.addEventListener("click", function(){
  // console.log('calculateBtn');
  // controllo se ci sono gli ingredienti selezionati
  for(var i =0; i<ingreds.length;i++){
    var ingred = ingreds[i];
    // se l'ingrediente è selezionato agg il suo prezzo al totale
    // console.log(ingred.checked)
    if(ingred.checked){
      var ingredDataset = parseInt(ingred.dataset.price);
      // console.log(ingred.dataset.price);
       priceBase += ingredDataset;
      console.log(priceBase);

    }else{
      priceBase = priceBase - ingredDataset;

    }
  }
// MOSTRO IL PREZZO TOTALE ALL'UTENTE

});
