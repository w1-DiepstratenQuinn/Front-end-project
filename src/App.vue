<template>
  <div id="app">
    <h1>Super awsome Pixel clicker that you can ever comprihend in your head</h1>
    <div id="Menu">
      <div id="shopContent">
        <div id="shopAll">
        <div id="helpingSquare">
          Helping Square
            <div id="ttlhelpingSquare">
              Amount: 0
            </div>
            <div id="prchelpingSquare">
              Price: 50
            </div>
        </div>
        <div id="pixelGenerator">
          Pixel Generator
            <div id="ttlpixelGenerator">
              Amount: 0
            </div>
            <div id="prcpixelGenerator">
              Price: 100
            </div>
        </div>
        <div id="pixelFarm">
          Pixel Farm
            <div id="ttlpixelFarm">
              Amount: 0
            </div>
            <div id="prcpixelFarm">
              Price: 250
            </div>
        </div>
        <div id="pixelFactory">
             pixelFactory
            <div id="ttlpixelFactory">
              Amount: 0
            </div>
            <div id="prcpixelFactory">
              Price: 1000
            </div>
        </div>
        <div id="colorPixel">
          Colored Pixels
            <div id="ttlcolorPixel">
              Amount: 0
            </div>
            <div id="prccolorPixel">
              Price: 2500
            </div>
        </div>
        </div>
      </div>
      <div id="skinContent">
        <div id="skinAll">
          <div id="aquatic">
            Aquatic
          <div id="aquatic1"></div>
          <div id="aquatic2"></div>
          <div id="aquatic3"></div>
          <div id="aquatic4"></div>
          <div id="aquatic5"></div>
          <div id="prcaquatic">
            Price 500
          </div>
          </div>
        </div>
      </div>
      <button id="Shop">Shop</button>
      <button id="Skins">Skins</button>
      <button id="Joke">Jokes</button>
      <h1 id="Jresponse"></h1>
  </div>
</div>
</template>

<style>
@font-face
{
    font-family:'BEEP';
    src:url("Font-style/GameBoy.ttf")
}
#app {
  font-family: BEEP;
  font-size: 0.9vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f380f;
  background-color: #77940d;
  padding-top: 1vw;
  margin-top: -21px;
  margin-left: -8px;
  height: 10vw;
  width: 100vw;
}
#Menu {
  font-family: BEEP;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-top:2px solid #0f380f ;
  border-bottom:2px solid #0f380f ;
  margin-top: 1vw;
  height: 3vw;
  width: 100vw;
}
#Shop {
  font-family: BEEP;
  font-size: 0.9vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0f380f;
  background-color: #77940d;
  border: none;
  margin-left: -70vw;
  height: 3vw;
  width: 10vw;
}
#Skins {
  font-family: Beep;
  font-size: 0.9vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0f380f;
  background-color: #77940d;
  border: none;
  height: 3vw;
  width: 10vw;
}
#Joke {
  font-family: Beep;
  font-size: 0.9vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0f380f;
  background-color: #77940d;
  border: none;
  height: 3vw;
  width: 10vw;
}
#Jresponse {
  font-family: Beep;
  font-size: 0.8vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0f380f;
  background-color: #77940d;
  margin-top: -3vw;
  border: none;
  height: 3vw;
  width: initial;
}
#Shop:hover,#Skins:hover,#Joke:hover {
  background-color:  #9bbc0f;
}
#Punchline{
  background-color:#0f380f;
}
#Punchline:active{
  color:#0f380f;
  background-color: #77940d;
}

#helpingSquare{
	position: absolute;
	top: 1vw;
  
}

#pixelGenerator{
  position: absolute;
	top: 5vw;
}

#pixelFarm{
  position: absolute;
	top: 9vw;
}

#pixelFactory{
  position: absolute; 
	top: 13vw;
}

#colorPixel{
  position: absolute;
	top: 17vw;
}

/* skins in css */
/* Aquatic */
#aquatic{
  position: absolute;
  top: 0.1vw;
  width:14.5vw;
  height: 7.5vw;
  text-align: center;
	background-color: rgb(139, 172, 15);
	color: #0f380f;
	font-size: 0.9vw;         
  border-color: #0f380f; 
  border-style: solid;        
  border-width: 2px;
  left: 0.1vw;
}
#aquatic1{
  position: absolute;
  left: 0.1vw;
  right: 0.1vw;
  background-color: rgb(142,134,123);
  height: 1vw;
}
#aquatic2{
  position: absolute;
  top: 2vw;
  left: 0.1vw;
  right: 0.1vw;
  background-color: rgb(125,255,211);
  height: 1vw;
}
#aquatic3{
  position: absolute;
  top: 3vw;
  left: 0.1vw;
  right: 0.1vw;
  background-color: rgb(93, 185, 154);
  height: 1vw;
}
#aquatic4{
  position: absolute;
  top:4vw;
  left: 0.1vw;
  right: 0.1vw;
  background-color: rgb(71,140,118);
  height: 1vw;
}
#aquatic5{
  position: absolute;
  top:5vw;
  left: 0.1vw;
  right: 0.1vw;
  background-color: rgb(239,255,255);
  height: 1vw;
}
#prcaquatic{
  position: absolute;
  top:6.5vw;
  height: 1vw;
  left: 0.1vw;
}

/* Sunset */
#sunset{
  position: absolute;
  top: 8.5vw;
  width:14.5vw;
  height: 7vw;
  text-align: center;
	background-color: rgb(139, 172, 15);
	color: #0f380f;
	font-size: 0.9vw;         
  border-color: #0f380f; 
  border-style: solid;        
  border-width: 2px;
  left: 0.1vw;
}
#sunset1{
  position: absolute;
  left: 0.1vw;
  right: 0.1vw;
  background-color: #CC2A49;
  height: 1vw;
}
#sunset2{
  position: absolute;
  top: 2vw;
  left: 0.1vw;
  right: 0.1vw;
  background-color: #f99e4c;
  height: 1vw;
}
#sunset3{
  position: absolute;
  top: 3vw;
  left: 0.1vw;
  right: 0.1vw;
  background-color: #F36F38;
  height: 1vw;
}
#sunset4{
  position: absolute;
  top: 4vw;
  left: 0.1vw;
  right: 0.1vw;
  background-color: #EF4648;
  height: 1vw;
}
#sunset5{
  position: absolute;
  top: 5vw;
  left: 0.1vw;
  right: 0.1vw;
  background-color: #582841;
  height: 1vw;
}
#prcsunset{
  position: absolute;
  top:6vw;
  height: 1vw;
  left: 0.1vw;
}

#helpingSquare, #pixelGenerator, #pixelFarm, #pixelFactory, #colorPixel{
  width:14vw;
	background-color: rgb(139, 172, 15);
	color: rgb(15, 56, 15);
	font-size: 0.9vw;         
  border-color: #000;  
  border-style: solid;        
  border-width: 0.1vw;
  left: 0.2vw;
}

#shopContent{
  display: block;
	position: absolute;
	left: 0.1vw;
	top: 10.5vw;
  bottom: 0.1vw;
  height: 21vw;
  width: 15vw;
	background-color: rgb(139, 172, 15);
	color: rgb(15, 56, 15);
	font-size: 0.9vw;         
  border: 2px solid rgb(15, 56, 15);          
}

#skinContent{
 display: none;
	position: absolute;
	left: 0.1vw;
	top: 10.5vw;
  bottom: 0.1vw;
  height: 21vw;
  width: 0vw;
	background-color: rgb(139, 172, 15);
	color: rgb(15, 56, 15);
	font-size: 0.9vw;         
  border: 2px solid rgb(15, 56, 15);    
}

#clickPower{
margin-top: -100px;
  margin-left: 40vw;
}

#clickContent{
margin-bottom: 1px;
}


</style>
