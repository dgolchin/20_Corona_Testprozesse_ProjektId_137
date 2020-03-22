// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

// Erhobene Daten
let feverValue;
let coughValue;
let sputumValue;
let diarrheaValue;
let exhaustionValue;
let cloggednoseValue;
let sorethroatValue;
let chillsValue;
let sicknessValue;
let breathingProblemsValue;
let jawpainValue; 
let headacheValue;

// Spezialwerte
let ageValue = 0;
let smokerValue;
let preExistingValue;
// Gewichtung

const feverFactor = 0.28;
const coughFactor = 0.22;
const sputumFactor = 0.11;
const exhaustionFactor = 0.12;
const breathingProblemsFactor = 0.06;
const jawPainFactor = 0.05;
const headacheFactor = 0.04;
const sorethroatFactor = 0.04;
const chillsFactor = 0.04;
const sicknessFactor = 0.02;
const cloggedNoseFactor = 0.02;
const diarrheaFactor = 0.01;



// Berechnung

let calculatedRisk;
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
 
  function feverErrorHandler(agent){
    	let feverDegree;
     if (typeof(agent.parameters.GradFieber)=="undefined") {feverValue = agent.parameters.FieberSkala;
  } else {
     feverDegree = agent.parameters.GradFieber;
  }
   
	console.log("feverDegree"+feverDegree);
		console.log("feverValue"+feverValue);


  	if (feverDegree>42){
       agent.add("Tut mir Leid, Sie haben "+feverDegree+" Grad angegeben, bitte teilen Sie mir einen Wert zwischen 37.5 und 42 Grad mit.");
      	
    }
    
    if (feverDegree<36){
      agent.add("Tut mir Leid, Sie haben "+feverDegree+" Grad angegeben, bitte teilen Sie mir einen Wert zwischen 37.5 und 42 Grad mit.");
      	
    }
	

if (feverDegree >= 37.5 && feverDegree <= 37.95) {
    feverValue = 1;
} else if ( feverDegree <= 17.49 && feverDegree >= 36 ) {
    feverValue = 0;
} else if ( feverDegree >= 37.96 && feverDegree <= 38.4 ) {
    feverValue = 2;
} else if ( feverDegree >= 38.5 && feverDegree <= 38.85 ) {
    feverValue = 3;
} else if ( feverDegree >= 38.86 && feverDegree <= 39.3 ) {
   feverValue = 4;
} else if ( feverDegree >= 39.4 && feverDegree <= 39.75 ) {
  feverValue = 5;
} else if ( feverDegree >= 39.76 && feverDegree <= 40.2 ) {
  feverValue = 6;
} else if ( feverDegree >= 40.3 && feverDegree <= 40.65 ) {
  feverValue = 7;
} else if ( feverDegree >= 40.66 && feverDegree <= 41.05 ) {
  feverValue = 8;
} else if ( feverDegree >= 41.06 && feverDegree <= 41.5 ) {
  feverValue = 9;
} else if ( feverDegree >= 41.6 && feverDegree <= 42 ) {
  feverValue = 10;
}
 console.log(feverDegree);
  }
  
  
  function coughErrorHandler(agent){
    coughValue = agent.parameters.SkalaHusten;
	
if (coughValue>10){
       agent.add("Tut mir Leid, Sie haben "+coughValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
    if (coughValue<1){
      agent.add("Tut mir Leid, Sie haben "+coughValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
  }
  function sputumErrorHandler(agent){
  sputumValue = agent.parameters.SkalaSputum;
	
if (sputumValue>10){
       agent.add("Tut mir Leid, Sie haben "+sputumValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
    if (sputumValue<1){
      agent.add("Tut mir Leid, Sie haben "+sputumValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
  }
  
  
   function diarrheaErrorHandler(agent){
	diarrheaValue = agent.parameters.DurchfallSkala;
	
if (diarrheaValue>10){
       agent.add("Tut mir Leid, Sie haben "+diarrheaValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
    if (diarrheaValue<1){
      agent.add("Tut mir Leid, Sie haben "+diarrheaValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
  }
  
  function exhaustionErrorHandler(agent){
  exhaustionValue = agent.parameters.Abgeschlag;
  
  if (exhaustionValue>10){
       agent.add("Tut mir Leid, Sie haben "+exhaustionValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
    if (exhaustionValue<1){
      agent.add("Tut mir Leid, Sie haben "+exhaustionValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
  }
  
  function cloggednoseErrorHandler(agent){
  cloggednoseValue = agent.parameters.NaseSkala;
  
  if (cloggednoseValue>10){
       agent.add("Tut mir Leid, Sie haben "+cloggednoseValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
    if (cloggednoseValue<1){
      agent.add("Tut mir Leid, Sie haben "+cloggednoseValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
  }
  
  function ageCheck(agent){
  let age = agent.parameters.age;
    console.log("ageCheck(): "+age);
 
  if(age > 50){ ageValue = 1;}
  }
  
  function breathingProblemsErrorHandler(agent){
  breathingProblemsValue = agent.parameters.AtemSkala;
  
  if (breathingProblemsValue>10){
       agent.add("Tut mir Leid, Sie haben "+breathingProblemsValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
    if (breathingProblemsValue<1){
      agent.add("Tut mir Leid, Sie haben "+breathingProblemsValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
  }
  function jawpainErrorHandler(agent){
  jawpainValue = agent.parameters.KieferSkala;
  
  if (jawpainValue>10){
       agent.add("Tut mir Leid, Sie haben "+jawpainValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
    if (jawpainValue<1){
      agent.add("Tut mir Leid, Sie haben "+jawpainValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
  }
  function headacheErrorHandler(agent){
  headacheValue = agent.parameters.KopfSkala;
  
  if (headacheValue>10){
       agent.add("Tut mir Leid, Sie haben "+headacheValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
    if (headacheValue<1){
      agent.add("Tut mir Leid, Sie haben "+headacheValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
      	
    }
  }
  
   function sorethroatErrorHandler(agent){
	sorethroatValue = agent.parameters.SkalaSputum;
	
	if (sorethroatValue>10){
       agent.add("Tut mir Leid, Sie haben "+sorethroatValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
    }
    if (sorethroatValue<1){
      agent.add("Tut mir Leid, Sie haben "+sorethroatValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");	
    }
  }
  
   function chillsErrorHandler(agent){
	chillsValue = agent.parameters.SchttelSkala;
	
	if (chillsValue>10){
       agent.add("Tut mir Leid, Sie haben "+chillsValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10  mit.");
    }
    if (chillsValue<1){
      agent.add("Tut mir Leid, Sie haben "+chillsValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10  mit.");	
    }
  }
  
  function sicknessErrorHandler(agent){
	sicknessValue = agent.parameters.UebelkeitSkala;
	
	if (sicknessValue>10){
       agent.add("Tut mir Leid, Sie haben "+sicknessValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");
    }
    if (sicknessValue<1){
      agent.add("Tut mir Leid, Sie haben "+sicknessValue+" als Wert angegeben, bitte teilen Sie mir einen Wert zwischen 1 und 10 mit.");	
    }
  }
 
  
  
  
  function smokeCheck(agent){
 
   if (typeof(agent.parameters.smoker)=="undefined") {smokerValue = 0;
  } else {
      smokerValue = 1;
  }
    
  
 

  }
  
  function preExistingConditionsHandler(agent){
   if (typeof(agent.parameters.AnzahlVorerkrankungen)=="undefined"){
     preExistingValue=0;
   }else { 
     preExistingValue = agent.parameters.AnzahlVorerkrankungen;
   }

   
  calcCoronaRisk(agent);
  }
  
  function calcCoronaRisk(agent){
  if (typeof(feverValue)=="undefined") feverValue= 0;
  if (typeof(coughValue)=="undefined") coughValue= 0;
  if (typeof(sputumValue)=="undefined") sputumValue= 0;
  if (typeof(diarrheaValue)=="undefined") diarrheaValue= 0;
  if (typeof(exhaustionValue)=="undefined") exhaustionValue= 0;
  if (typeof(cloggednoseValue)=="undefined") cloggednoseValue= 0;
  if (typeof(sorethroatValue)=="undefined") sorethroatValue= 0;
  if (typeof(chillsValue)=="undefined") chillsValue= 0;
  if (typeof(sicknessValue)=="undefined") sicknessValue= 0;
  if (typeof(breathingProblemsValue)=="undefined") breathingProblemsValue= 0;
  if (typeof(jawpainValue)=="undefined") jawpainValue= 0;
  if (typeof(headacheValue)=="undefined") headacheValue= 0;
  
  if (typeof(preExistingValue)=="undefined") preExistingValue = 0;
  //if (typeof(ageValue)=="undefined") ageValue = 0;
  if (typeof(smokerValue)=="undefined") smokerValue = 0;
  let sympSum = feverValue * feverFactor + coughValue* coughFactor + sputumValue *sputumFactor + diarrheaValue * diarrheaFactor +
  exhaustionValue * exhaustionFactor + cloggednoseValue * cloggedNoseFactor + sorethroatValue * sorethroatFactor + chillsValue * chillsFactor +
  sicknessValue *sicknessFactor + breathingProblemsValue * breathingProblemsFactor + jawpainValue * jawPainFactor + headacheValue * headacheFactor;
    console.log("sympSum: "+sympSum);
    console.log("preExistingValue :"+preExistingValue);
    console.log("ageValue: "+ageValue);
        console.log("smokerValue :"+smokerValue);

  calculatedRisk = sympSum + 1 * preExistingValue + 1 * ageValue + 1 * smokerValue;
  console.log("Calculated Risk: "+calculatedRisk);
    
    if(calculatedRisk >= 5){
    agent.add("Danke für Ihre Geduld. Wir haben ihre Daten analysiert. Wir empfehlen die Kontaktaufnahme zu einem Arzt, um eine vollständige Diagnose durchzuführen. Hinterlassen Sie bitte eine Kontaktmöglichkeit, bspw. eine Email Adresse oder eine Telefonnummer. Ihr Arzt wird sich dann schnellstmöglich mit Ihnen in Verbindung setzen. In der Zwischenzeit befolgen Sie bitte folgende Anweisungen. Meiden Sie jeglichen Kontakt zu anderen Personen. Bitte verlassen Sie nicht das Haus und versuchen Sie sich weitestgehend zu schonen. ");
    }else agent.add("Danke für Ihre Geduld. Ihre Daten zeigen keine Auffälligkeiten. Eine Corona Infektion ist sehr unwahrscheinlich. Nichtsdestotrotz wird sich einer unserer Ärzte Ihre Daten genauer anschauen und sich gegebenenfalls bei Ihnen melden, wenn  Auffälligkeiten festgestellt werden sollten. Gehen Sie unabhängig davon bitte folgendermaßen vor. Fahren Sie soziale Kontakte zu Personen außerhalb Ihres Haushaltes herunter und beobachten Sie Ihren Gesundheitszustand. Sollte sich Ihr Gesundheitszustand verschlechtern, melden Sie sich bitte erneut bei mir. ");

 }
  
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  // // Uncomment and edit to make your own intent handler
  // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function yourFunctionHandler(agent) {
  //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
  //   agent.add(new Card({
  //       title: `Title: this is a card title`,
  //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
  //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
  //       buttonText: 'This is a button',
  //       buttonUrl: 'https://assistant.google.com/'
  //     })
  //   );
  //   agent.add(new Suggestion(`Quick Reply`));
  //   agent.add(new Suggestion(`Suggestion`));
  //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
  // }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/fulfillment-actions-library-nodejs
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('SymptomCheckFieberGemessen', feverErrorHandler);
  intentMap.set('SymptomCheckKeinFieberGemessen', feverErrorHandler);
  intentMap.set('HustenVorhanden', coughErrorHandler);
  intentMap.set('Sputum', sputumErrorHandler);
  intentMap.set('Durchfall', diarrheaErrorHandler);
  intentMap.set('Abgeschlagenheit', exhaustionErrorHandler);
  intentMap.set('2Halsschmerzen', sorethroatErrorHandler);
  intentMap.set('Schuettelfrost', chillsErrorHandler);
  intentMap.set('Uebelkeit', sicknessErrorHandler);
  intentMap.set('Altersabfrage', ageCheck);
  intentMap.set('Raucher', smokeCheck);
  intentMap.set('NaseZu', cloggednoseErrorHandler);
 intentMap.set('Vorerkrankung', preExistingConditionsHandler);
  intentMap.set('KeineVorerkrankung', preExistingConditionsHandler);
  intentMap.set('Atemprobleme', breathingProblemsErrorHandler);
  intentMap.set('Kieferschmerzen', jawpainErrorHandler);
  intentMap.set('Kopfschmerzen', headacheErrorHandler);
  agent.handleRequest(intentMap);
});

