function deck(){
  var cards = [];

  function gencards(){
    var suits= ['hearts', 'diamonds','spades', 'clubs']
    var special = ['jack', 'queen', 'king', 'ace']
    for (var suit = 0; suit < suits.length; suit++){
      for(var card = 2; card < 11; card++ ){
        cards.push(card + ' of ' + suits[suit])
      }
      for(var highs = 0; highs < special.length; highs++ ){
        cards.push(special[highs] + ' of ' + suits[suit])
      }
    }
    console.log(cards)
  }
  gencards()

  this.shuffle = function(){
    var temp, rando
    for(var i = cards.length - 1; i > 0; i--){
      rando = Math.floor(Math.random() * 1)
      temp = cards[i]
      cards[i] = cards[rando]
      cards[rando] = temp
    }
  }
  this.reset = function(){
    cards = []
    gencards()
  }
  this.deal = function (){
    return cards.pop()
  }
}
var my_deck = new deck()
my_deck.shuffle()
var my_card = my_deck.deal()
console.log(my_card)
