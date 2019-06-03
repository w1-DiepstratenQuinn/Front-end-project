<template>
  <div id="body">
  <div id="Counter">
      <h1 id="Ctext">0</h1>
  </div>
    <div id="Pixel"></div>
    <div id="clickPower">
        Squares per second
      </div>
    <button id="Secret"></button>
  </div>
</template>

<style>
@font-face
{
    font-family:'BEEP';
    src:url("Font-style/GameBoy.ttf")
}
#Pixel{
  border: 2px solid #77940d;
  background-color: #77940d;
  height: 13vw; 
  width: 13vw;
  display: block;
  margin: 0px auto;
  margin-top: 3vw;
}
#Counter{
  font-family: BEEP;
  font-size: 0.9vw;
  border-radius: 20px;
  font-size: 24px;
  text-align: center;
  background-color:  #77940d;
  height: 4vw;
  width: 20vw;
  margin-top: 5vw;
  margin: 0px auto;
}
#Ctext{
  font-size: 3vw;
  color: #0f380f;
}

#Pixel:active {
  background-color: #9bbc0f;
  box-shadow: 0 5px #77940d;
  transform: translateY(7px);
}
#Secret{
  text-align: center;
  background-color:   #9bbc0f;
  border: none;
  height: 4vw;
  width: 20vw;
  margin-Top: 3vw;
  margin-left: 78vw;
}
button:focus {outline:0;}
#Reset{
  font-size: 1vw;
}
#clickPower{
  font-family: BEEP;
  font-size: 1.5vw;
  color: #0f380f;
  background-color:  #77940d;
  text-align: center;
  margin: 0px auto;
  margin-top: 3vw;
  height: 5.5vw;
  width: 20vw;
  border-radius: 20px;
}
</style>
