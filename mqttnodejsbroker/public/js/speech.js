const socket = io();
var Isconnected = false; 
var message = ""

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

socket.on('connect', () => {
    console.log('Conectado');
    Isconnected = true;
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});
socket.on('disconnect', () => {
    console.log('Desconectado');
    Isconnected = false;
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});
socket.on('servermessage',( payload) => {
    console.log(payload);
});
var message = document.querySelector('#message');
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammer = '#JSGF V1.0';

var recognition = new SpeechRecognition();
var speechRecognitionGrammerList = new SpeechGrammarList();
speechRecognitionGrammerList.addFromString(grammer,1);

recognition.grammars = speechRecognitionGrammerList;
recognition.lang = "es-ES";
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = function(event){
    for (var i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal){
            //console.log( event.results[i][0].transcript);
            if(Isconnected){
                //Enviar data de voz 
               
            var payload = {
                message: (event.results[i][0].transcript).toString(),
                id: 'speech'
            } 
                socket.emit('sendmessage',(event.results[i][0].transcript).toString() );
                //socket.emit('message',(event.results[i][0].transcript).toString() );
            }
        }
    }
}

recognition.onspeechend = function(){
    recognition.start();
};

recognition.onerror = function(event){
    message.textContent = 'Error ocurred in recognition: ' + event.error;
}

document.querySelector('#btnGiveCommand').addEventListener('click', function(event){
    recognition.start();
});
