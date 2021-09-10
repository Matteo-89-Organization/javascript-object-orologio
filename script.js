// const d = new Date();
// const annoCorrente = d.getFullYear();
// const meseCorrente = d.getMonth();
// const giornoCorrente = d.getDay();
// console.log(giornoCorrente + '/' +meseCorrente + '/' + annoCorrente ); 
//risp console : 10/09/2021

// const d2 = new Date('2028-10-01'); //come argomento dell'oggetto Date, viene usata una stringa
// const annoDiDivieto = d2.getFullYear(); //questo metodo va a recuperare le info sotto forma di stringa definite in d2
// console.log(annoDiDivieto); 
//risp console: 2028

// ************************************************

function Orologio(){
    const ora = new Date();
    this.giorno = ora.getDate(); 
    //il metodo getDate() ritorna il giorno del mese (da 1 a 31) esempoio 20.08.2021
    //il metodo getDay() ritorna il giorno della settimana, il formato americano parte da domenica, quindi domenica ha index 0
    this.mese = ora.getMonth();
    this.anno = ora.getFullYear();

    this.aggiornaMese = function(){
        //array contenente il nome dei mesi
        const mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
        return mesi[this.mese - 1]; //nel metodo getMonth() uscirà il numero del mese corrente, che corrisponderà poi al nome nel mio array di stringhe coi nomi
    }
    this.aggiornaOra = function(){
        return ora.getHours();
    }
    this.aggiornaMinuti = function(){
        return ora.getMinutes();
    }
    this.aggiornaSecondi = function(){
        return ora.getSeconds();
    }
}

//setInterval aggiorna l'orologio (x l'orario) 
setInterval( () => {
    const oggi = new Orologio();
    document.querySelector('#giorno').innerHTML = oggi.giorno;
    document.querySelector('#mese').innerHTML = oggi.aggiornaMese();
    document.querySelector('#anno').innerHTML = oggi.anno;
    document.querySelector('#ore').innerHTML = oggi.aggiornaOra();
    document.querySelector('#minuti').innerHTML = oggi.aggiornaMinuti();
    document.querySelector('#secondi').innerHTML = oggi.aggiornaSecondi();
}, 1000);

