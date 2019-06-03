import Vue from 'vue'
import App from './App.vue'
import Body from './Body.vue'

import JQuery from 'jquery'
let $ = JQuery

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Body),
}).$mount('#body')



// functinele code -------------------------------------------------
var Asqaures = 0;

$("#Pixel").click(function(){
Asqaures++;
  $("#Ctext").html(Asqaures);
});
// Cheat knop -------------------------------------------------
$("#Secret").click(function(){
      Asqaures =  Asqaures+1000;
      $("#Ctext").html(Asqaures);
  });
// Joke system ------------------------------------------------
  $("#Joke").click(function(){
    var Random = Math.floor((Math.random() * 6) + 1);
    var joke = "";
    $("#Jresponse").html(joke);
    if(Random == 1)
    {
      joke = "hoe noem je iemand die in de weg zit in het bos?<br><span id='Punchline'>een dwarsbomer!</span>";
    }
    if(Random == 2)
    {
      joke = "How do tree's go on the internet?<br><span id='Punchline'>They LOG in!</span>";
    }
    if(Random == 3)
    {
      joke = "What's the favoriet fruit of twins?<br><span id='Punchline'>Pears!</span>";
    }
    if(Random == 4)
    {
      joke = "Why can a docter wait so long?<br><span id='Punchline'>Becasue he got alot of patients!</span>";
    }
    if(Random == 5)
    {
      joke = "Why did the chicken cross the road?<br><span id='Punchline'>To get to the other side!</span>";
    }
    if(Random == 6)
    {
      joke = "What key opens a banana?<br><span id='Punchline'>MonKEY!</span>";
    }

    $("#Jresponse").html(joke);
      $("#Punchline").click(function(){
        joke = "";
        $("#Jresponse").html(joke);
      });
    });
    // Reset Pixels ------------------------------------------------
  $("#Counter").mouseenter(function(){
    $("#Ctext").html("<span id='Reset'>Click to reset pixels</span>");
});
$("#Counter").click(function(){
  Asqaures = 0;
});
$("#Counter").mouseleave(function(){
  $("#Ctext").html(Asqaures);
});
//
//total squares
//
//automatic clicking power
var AutoClick = 0;


// shop item vars
//helping square
var helpingSquare = 0;
var prchelpingSquare = 50;

//Pixel Generator
var pixelGenerator = 0;
var prcpixelGenerator = 100;

//Pixel Farm
var pixelFarm = 0;
var prcpixelFarm = 250;

//Pixel Factory
var pixelFactory = 0;
var prcpixelFactory = 1000;

//colorPixel
var colorPixel = 0;
var prccolorPixel = 2500;

//shop menu
var shopMenu = new Boolean(true);
var skinMenu = new Boolean(false);

//slides in shop menu
$("#Shop").click(function() {
  if(shopMenu == false)
  {
    shopMenu = true;
    skinMenu = false;
    $("#shopContent").animate({
      width: "+=230",
    }, 500, function () {
    });
    $("#skinContent").animate({
      width: "-=230",
    }, 500, function () {
    });
    $("#shopAll").css("display", "block");
    $("#shopContent").css("display", "block");
    $("#skinAll").css("display", "none");
    $("#skinContent").css("display", "none");
  }
});

//slides in shop menu
$("#Skins").click(function() {
  if(skinMenu == false)
  {
    shopMenu = false;
    skinMenu = true;
    $("#skinContent").animate({
      width: "+=230",
    }, 500, function () {
    });
    $("#shopContent").animate({
      width: "-=230",
    }, 500, function () {
    });
    $("#skinAll").css("display", "block");
    $("#skinContent").css("display", "block");
    $("#shopAll").css("display", "none");
    $("#shopContent").css("display", "none");
  }
});
function Update()
{
  //Helping Square
  $("#ttlhelpingSquare").html("Amount: " + helpingSquare);
  $("#prchelpingSquare").html("Price: " + prchelpingSquare);

  //Pixel Generator
  $("#ttlpixelGenerator").html("Amount: " + pixelGenerator);
  $("#prcpixelGenerator").html("Price: " + prcpixelGenerator);

  //Pixel Farm
  $("#ttlpixelFarm").html("Amount: " + pixelFarm);
  $("#prcpixelFarm").html("Price: " + prcpixelFarm);

  //Pixel Factory
  $("#ttlpixelFactory").html("Amount: " + pixelFactory);
  $("#prcpixelFactory").html("Price: " + prcpixelFactory);

  //Color Pixel
  $("#ttlcolorPixel").html("Amount: " + colorPixel);
  $("#prccolorPixel").html("Price: " + prccolorPixel);


  $("#Ctext").html(Asqaures);
  $("#clickPower").html("Squares per second <br>" + AutoClick);
}


$("#helpingSquare").click(function(){
  if(Asqaures >= prchelpingSquare){

    Asqaures = Asqaures - prchelpingSquare;
    prchelpingSquare = prchelpingSquare * 1.2;
    prchelpingSquare = Math.round(prchelpingSquare)

    window.setInterval(
      function(){
        Asqaures = Asqaures + 1;
        $("#Ctext").html(Asqaures);
      }, 1000);
      
      AutoClick = AutoClick + 1;

      helpingSquare = helpingSquare + 1;
      Update();
  }
});

$("#pixelGenerator").click(function(){
  if(Asqaures >= prcpixelGenerator){

    Asqaures = Asqaures - prcpixelGenerator;
    prcpixelGenerator = prcpixelGenerator * 1.2;
    prcpixelGenerator = Math.round(prcpixelGenerator)

    window.setInterval(
      function(){
        Asqaures = Asqaures + 2;
        $("#Ctext").html(Asqaures);
      }, 1000);
      
      AutoClick = AutoClick + 2;

      pixelGenerator = pixelGenerator + 1;
      Update();
  }
});

$("#pixelFarm").click(function(){
  if(Asqaures >= prcpixelFarm){

    Asqaures = Asqaures - prcpixelFarm;
    prcpixelFarm = prcpixelFarm * 1.2;
    prcpixelFarm = Math.round(prcpixelFarm)

    window.setInterval(
      function(){
        Asqaures = Asqaures + 5;
        $("#Ctext").html(Asqaures);
      }, 1000);
      
      AutoClick = AutoClick + 5;

      pixelFarm = pixelFarm + 1;
      Update();
  }
});

$("#pixelFactory").click(function(){
  if(Asqaures >= prcpixelFactory){

    Asqaures = Asqaures - prcpixelFactory;
    prcpixelFactory = prcpixelFactory * 1.2;
    prcpixelFactory = Math.round(prcpixelFactory)

    window.setInterval(
      function(){
        Asqaures = Asqaures + 10;
        $("#Ctext").html(Asqaures);
      }, 1000);
      
      AutoClick = AutoClick + 10;

      pixelFactory = pixelFactory + 1;
      Update();
  }
});

$("#colorPixel").click(function(){
  if(Asqaures >= prccolorPixel){

    Asqaures = Asqaures - prccolorPixel;
    prccolorPixel = prccolorPixel * 1.2;
    prccolorPixel = Math.round(prccolorPixel)

    window.setInterval(
      function(){
        Asqaures = Asqaures + 25;
        $("#Ctext").html(Asqaures);
      }, 1000);
      
      AutoClick = AutoClick + 25;

      colorPixel = colorPixel + 1;
      Update();
  }
});
//skins
$("#aquatic").click(function(){
  if(aquatic == false)
    {
      if(Asqaures >= 500){
        sunset = false;
        aquatic = true;
        Asqaures = Asqaures - 500;

        $("body").css("background-color","rgb(125,255,211)");
        $("#Ctext").css("color","#8e867b");
        $("#Counter").css("background-color","rgb(93, 185, 154)");
        //-----------body
        $("#Pixel").css("background-color","rgb(93, 185, 154)");
        $("#Pixel").css("border","2px solid rgb(93, 185, 154)");
        $("#clickPower").css("background-color","rgb(93, 185, 154)");
        $("#clickPower").css("color","#8e867b");
        $("#Secret").css("background-color","rgb(125,255,211)");
        //-----------header
        $("#app").css("background-color","rgb(93, 185, 154)");
        $("#app").css("color","#8e867b");
        //-----------Menu
        $("#Menu").css("border-top","2px solid rgb(239,255,255)");
        $("#Menu").css("border-bottom","2px solid rgb(239,255,255)");
        $("#Shop").css("background-color","rgb(93, 185, 154)");
        $("#Shop").css("color","#8e867b");
        $("#Skins").css("background-color","rgb(93, 185, 154)");
        $("#Skins").css("color","#8e867b");
        $("#Joke").css("background-color","rgb(93, 185, 154)");
        $("#Joke").css("color","#8e867b");
        $("#Jresponse").css("background-color","rgb(93, 185, 154)");
        $("#Jresponse").css("color","#8e867b");
          Update();
      }
    }
});

$("#sunset").click(function(){
  if(sunset == false)
    {
      if(Asqaures >= 500){
        sunset = true;
        aquatic = false;
        Asqaures = Asqaures - 1000;

          Update();
      }
    }
});
//skins
var aquatic = new Boolean(false);
var sunset = new Boolean(false);