let bowling = {
  players: [
    {'name': 'Livio', 'scores': []},
    {'name': 'Paola', 'scores': []},
    {'name': 'Filippo', 'scores': []},
    {'name': 'Giuseppe', 'scores': []}
  ],

  generaPunteggi() {
    this.players.forEach(giocatore => {
      giocatore.scores = [];
      for (let i = 0; i < 10; i++) {
        giocatore.scores.push(Math.floor(Math.random() * 10) + 1);
      }
    });
  },

  calcolaTotali() {
    this.players.forEach(giocatore => {
      giocatore.totale = giocatore.scores.reduce((acc, punti) => acc + punti, 0);
    });
  },

  aggiungiGiocatore(nomeGiocatore) {
    let nuovoGiocatore = { name: nomeGiocatore, scores: [] };
    for (let i = 0; i < 10; i++) {
      nuovoGiocatore.scores.push(Math.floor(Math.random() * 10) + 1);
    }
    this.players.push(nuovoGiocatore);
  },

  determinaVincitore() {
    this.calcolaTotali();
    
    this.players.sort((a, b) => b.totale - a.totale);

    console.log(` Il vincitore è ${this.players[0].name} con ${this.players[0].totale} punti!`);
  },

  stilaClassifica() {
    this.calcolaTotali();
    this.players.sort((a, b) => b.totale - a.totale);
    
    console.log("   CLASSIFICA FINALE BOWLING    ");
    this.players.forEach((giocatore, indice) => {
      console.log(`${indice + 1}° Posto: ${giocatore.name} - Punteggio: ${giocatore.totale}`);
    });
  }
};

bowling.generaPunteggi();
bowling.aggiungiGiocatore('Andrea');
bowling.determinaVincitore();
bowling.stilaClassifica();