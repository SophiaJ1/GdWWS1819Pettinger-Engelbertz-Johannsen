console.log('Hallo Esther'); //Namensausgabe
//Userinput ermöglichen
const readline= require('readline');
const rl= readline.createInterface({
input:process.stdin,
output:process.stdout
});

const maxBewertung=5.0;                 //maximale Bewertungsnote
var anzahl=0;                           //Anzahl der Bewertungen
var bewertungspunkte=0;                // Gesamtpunkte für Durchschnitt
var bewertung=bewertungspunkte/anzahl; //Bewertungsnote im Schnitt
var name= 'Bewertung Nummer: ';
var indBewertung=0; 
var array=[];

//Ausgabe der Variablen
function ausgabe(){
    console.log('Anzahl: '+ anzahl);
    console.log('Maximal Bewertung: '+ maxBewertung);
    console.log('Bewertung: '+ bewertung); 
    console.log(' ');
}

//Bewertung mit userinput
//function bewerten (){
    const bewerten = () => {
        return new Promise((resolve, reject) => {
    rl.question('Bitte bewerten: ', function(answer){
        //Bewertung laeuft ohne Fehler
        if (answer<=maxBewertung){
        //Anzahl wird rausgezaehlt
        anzahl++;
        //Bewertungsschnitt wird angepasst
        bewertungspunkte=bewertungspunkte+parseInt(answer);
        //Bewertungs-Objekt
        let ratings={
            name:name + anzahl,
            anzahl:anzahl,
            indBewertung: parseInt(answer),
            //Alte Funktion
           // bewertungsmittel:function(){
           //     return this.bewertung=(bewertungspunkte/anzahl);
           // }
           //Arrow Function
            bewertungsmittel: () => {return this.bewertung=(bewertungspunkte/anzahl);}
        };
        array.push(ratings);
        console.log('Anzahl der Bewertungen: '+ array.length);
        console.log('Bewertung '+ ratings.indBewertung);
            bewertung=ratings.bewertungsmittel();

            console.log(ratings.name);
            console.log('Bewertungsmittel: ' + ratings.bewertungsmittel());
    
            }

        
    
        //Bewertungseingabe ungueltig
        else{
            console.log('Die Bewertung ist leider nicht möglich');
        }
        
    resolve();
});
})
}
//} 

//Zufällige Bewertung
function zufall(){
for (let x = 0; x < 5; x++) {
    //zufaelliger Wert wird generiert
    var y = Math.round((Math.random() * (4) +1 ));
    //Anzahl +1
    anzahl++;
    //Schnitt wird erneuert
    bewertungspunkte= bewertungspunkte+y;
    //Bewertungs-Objekt
    let ratings={
        name:name + anzahl,
        anzahl:anzahl,
        indBewertung: y,
        bewertungsmittel: () => {return this.bewertung=(bewertungspunkte/anzahl);}

        };
        bewertung=ratings.bewertungsmittel();
        console.log(ratings.name);
        array.push(ratings);
        console.log('Anzahl der Bewertungen: '+ array.length);
        console.log('Bewertung '+ ratings.indBewertung);
        console.log('Bewertungsmittel: ' + ratings.bewertungsmittel());

        
    ausgabe();
    }
    
}

//x-zufaellige Bewetungen
//function zBewetung(){
    const zBewertung = () => {
        return new Promise((resolve, reject) => {
            rl.question('Wie viele Bewertungen? ', function(answer){
                var anzahlBewertung = parseInt(answer);
                for (let x = 0; x < anzahlBewertung; x++) {
                    //zufaelliger Wert wird generiert
                    var y = Math.round((Math.random() * (4) +1 ));
                    //Anzahl +1
                    anzahl++;
                    //Schnitt wird erneuert
                    bewertungspunkte= bewertungspunkte+y;
                    //Bewertungs-Objekt
                    let ratings={
                        name:name + anzahl,
                        anzahl: anzahl,
                        indBewertung: y,
                        bewertungsmittel: () => {return this.bewertung=(bewertungspunkte/anzahl);}
        
                    };
                    array.push(ratings);
                    console.log('Anzahl der Bewertungen: '+ array.length);
                    console.log('Bewertung '+ ratings.indBewertung);
                        
                        bewertung=ratings.bewertungsmittel();
                        console.log(ratings.name);
                        console.log('Bewertungsmittel: ' + ratings.bewertungsmittel());
                
                    ausgabe();
                }  
                
            resolve();
            });
        })
      }

//}

const main = async () => {
    await bewerten()
    await zBewertung()
    rl.close()
  }
main();
