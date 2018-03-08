/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const quiz = require('./quiz.js');



//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.84401a49-0d70-4cdd-aaa3-d59530e9dbb0';

const SKILL_NAME = 'Science Quiz';
const GET_MESSAGE = "Your answer is ";
const HELP_MESSAGE = 'You can ask to start quiz, or you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const MSG = '. What else can I help you with?';
const STOP_MESSAGE = 'See You!';
const FAIL_MSG = 'I am sorry. Please ask again.';
const audioUrl = 'https://s3.amazonaws.com/learning-plan/Next_Question.mp3';
const rightAnswerAudioUrl = 'https://s3.amazonaws.com/learning-plan/Right_Answer.mp3';



String.prototype.encodeHTML = function () {
    return this.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;')
               .replace(/"/g, '&quot;')
               .replace(/'/g, '&apos;');
};






//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        const speechOut = '<emphasis level="moderate">Welcome to Science Quiz</emphasis><break time="2s"/> Which level would you like to play. Easy or Difficult';
        this.response.speak(speechOut).listen('Which level would you like to play. Easy or Difficult');
        this.emit(':responseReady');
    },

    'StartQuizIntent': function () {
        this.attributes.index = 0;
        const speechOut = this.attributes.data[this.attributes.index].que;
        this.response.speak(speechOut).listen('You can say skip if you don\'t know the answer');
        this.emit(':responseReady');
    },

    'EasyIntent' : function(){
        this.attributes.data = quiz.shuffle('easy');
        this.emit('StartQuizIntent');        
    },

    'DifficultIntent' : function(){
        this.attributes.data = quiz.shuffle('difficult');
        this.emit('StartQuizIntent');
    },

    'AnswerOnlyIntent' : function(){
        const intentObj = this.event.request.intent;
        console.log(`Intent Object: ${intentObj}`);
        let answer;
        if (intentObj && intentObj.slots.answer.value) {
            answer = intentObj.slots.answer.value;
        }else{
            this.response.speak('You can say skip if you don\'t know the answer').
                          listen('You can say skip if you don\'t know the answer');  
                          
            this.emit(':responseReady');
        }

        if(this.attributes.data[this.attributes.index].ans.toUpperCase() === answer.toUpperCase()){
            
            this.response.cardRenderer(this.attributes.data[this.attributes.index].que, this.attributes.data[this.attributes.index].ans);

            let rightAnswerSpeech = 'You are right ' + (this.attributes.data[this.attributes.index].more ? ('...... ' + this.attributes.data[this.attributes.index].more) : '');
            
            this.attributes.index++;
            rightAnswerSpeech = rightAnswerSpeech + '<break time="2s"/> Next Question : '
                                                  + this.attributes.data[this.attributes.index].que;

            this.response.speak(rightAnswerSpeech).listen('You can say skip if you don\'t know the answer');
            this.emit(':responseReady');
        }else{
            this.emit('WrongAnswerIntent');
        }

        
    },

    'WrongAnswerIntent' : function(){
        this.response.cardRenderer(this.attributes.data[this.attributes.index].que, this.attributes.data[this.attributes.index].ans);
        
        let wrongAnswerSpeech = "Wrong answer. Right answer is " + this.attributes.data[this.attributes.index].ans + (this.attributes.data[this.attributes.index].more ? ('...... ' + this.attributes.data[this.attributes.index].more) : '');
        
        this.attributes.index++;
        wrongAnswerSpeech = wrongAnswerSpeech + '<break time="2s"/> Next Question : '
                                              + this.attributes.data[this.attributes.index].que;
        this.response.speak(wrongAnswerSpeech).listen('You can say skip if you don\'t know the answer');
        this.emit(':responseReady');
    },

    'DontKnowIntent' : function(){
        this.response.cardRenderer(this.attributes.data[this.attributes.index].que, this.attributes.data[this.attributes.index].ans);
        
        let answerSpeech = "Answer is " + this.attributes.data[this.attributes.index].ans + (this.attributes.data[this.attributes.index].more ? ('...... ' + this.attributes.data[this.attributes.index].more) : '');
        this.attributes.index++;
        answerSpeech = answerSpeech + '<break time="2s"/> Next Question : '
                                    + this.attributes.data[this.attributes.index].que;
        this.response.speak(answerSpeech).listen('You can say skip if you don\'t know the answer');
        this.emit(':responseReady');
    },

    'AMAZON.RepeatIntent': function(){

        console.log(`this.attributes.index is ${this.attributes.index}`);

        this.response.speak(this.attributes.data[this.attributes.index].que).listen('You can say skip if you don\'t know the answer');
        this.emit(':responseReady');
    },


    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },

    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },

    'Unhandled': function () {
        console.log('session ended');
        this.emit(':responseReady');
    },
};




