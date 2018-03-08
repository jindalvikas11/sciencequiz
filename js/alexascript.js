var result = '';
function getQuestions(){ for(i=0; i < data[0].length;i++){
    if(result.indexOf(data[0][i].ans) < 0)result = result + "{\"id\": null,\"name\": {\"value\": \"" + data[0][i].ans + "\",\"synonyms\": []}},";}
}; getQuestions(); result;


var result = '';
function getQuestions(){
    $('.question').each(function(){
         result = result + ',{\"que\":\"' + $(this).find('.fs-1 a').text().trim().replace(/"/g, '\\"') + '\",\"ans\":\"' + $(this).find('em').text() + '\",\"more\":\"\"}';
    }); 
}; getQuestions(); result;




var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
document.head.appendChild(script);

var result = '';

function getStory(){
    $('.single-content p').each(function(){
        result = result + $(this).text().trim().replace(/"/g, '\\"');
    }); 
}; getStory(); result;