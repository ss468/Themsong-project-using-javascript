// document.querySelector(".captainjacksparrow").addEventListener("click",playjacksparrow);
// document.querySelector(".avengers").addEventListener("click",playavengers);
// document.querySelector(".scam").addEventListener("click",playscam);
// document.getElementById("pause").addEventListener("click",pauseTheBGM);

// function playjacksparrow(){
//     var jackaudio = new Audio('ptc.mp3');
//     jackaudio.play();
// }
// function playavengers(){
//     var avengersaudio = new Audio('Avengers theme.mp3');
//     avengersaudio.play();
// }
// function playscam(){
//     var scamaudio = new Audio('Scam 1992 theme.mp3');
//     scamaudio.play();
// }
// function pauseTheBGM(){
//    var jackaudio = new Audio('ptc.mp3');
//    jackaudio.pause();
//    var avengersaudio = new Audio('Avengers theme.mp3');
//    avengersaudio.pause();
//    var scamaudio = new Audio('Scam 1992 theme.mp3');
//    scamaudio.pause();
// }

// document.getElementById("jack").addEventListener("click",()=>{
//     var jackaudio=new Audio("ptc.mp3");
//     jackaudio.play();
// });
// document.getElementById("pause").addEventListener("click",()=>{
//     var pausejack=new Audio("ptc.mp3");
//     pausejack.pause();
// });


// document.getElementById("avg").addEventListener("click",()=>{
//     var avgaudio=new Audio('Avengers theme.mp3');
//     avgaudio.play();
// });

// document.getElementById("stock").addEventListener("click",()=>{
//     var scamaudio=new Audio('Scam 1992 theme.mp3');
//     scamaudio.play();
// });

var x = document.getElementById("myAudio");
var y= document.getElementById("myAudio2");
var z= document.getElementById("myAudio3");


//  document.getElementById("jack").addEventListener("click",()=>{
//     x.play();
//  });
//  document.getElementById("pause").addEventListener("click",()=>{
//     x.pause();
    
//  });
//  document.getElementById("pause1").addEventListener("click",()=>{
//     x.play();
//  });





//  var y = document.getElementById("myAudio2"); 

//  document.getElementById("avg").addEventListener("click",()=>{
//     y.play();
//  });
//  document.getElementById("pause").addEventListener("click",()=>{
//     y.pause();
    
//  });
//  document.getElementById("pause1").addEventListener("click",()=>{
//     y.play();
//  });






//  var z = document.getElementById("myAudio3"); 

//  document.getElementById("stock").addEventListener("click",()=>{
//     z.play();
//  });
//  document.getElementById("pause").addEventListener("click",()=>{
//     z.pause();
    
//  });
//  document.getElementById("pause1").addEventListener("click",()=>{
//     z.play();
//  });


 function isAudioPlaying() {
    return !!(x.paused === false || y.paused === false || z.paused===false);
  }

  // Function to alert that a song is playing
  function alertSongPlaying() {
    alert("One song is already playing.");
  }

  // Event listener for the play button of audioY
  document.getElementById('jack').addEventListener('click', function () {
    if (isAudioPlaying()) {
      alertSongPlaying();
    }
    else{document.getElementById("jack").addEventListener("click",()=>{
        x.play();
     });
     document.getElementById("pause").addEventListener("click",()=>{
        x.pause();
        
     });
     document.getElementById("pause1").addEventListener("click",()=>{
        x.play();
     });}
  });

  // Event listener for the play button of audioX
  document.getElementById('avg').addEventListener('click', function () {
    if (isAudioPlaying()) {
      alertSongPlaying();
    }
    else {document.getElementById("avg").addEventListener("click",()=>{
        y.play();
     });
     document.getElementById("pause").addEventListener("click",()=>{
        y.pause();
        
     });
     document.getElementById("pause1").addEventListener("click",()=>{
        y.play();
     });}
    
  });

  document.getElementById('stock').addEventListener('click', function () {
    if (isAudioPlaying()) {
      alertSongPlaying();
    }
    else {document.getElementById("stock").addEventListener("click",()=>{
        z.play();
     });
     document.getElementById("pause").addEventListener("click",()=>{
        z.pause();
        
     });
     document.getElementById("pause1").addEventListener("click",()=>{
        z.play();
     });}
    
  });


