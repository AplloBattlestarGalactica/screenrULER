## screenRuler
## Add a ruler on your screen to work on CSS/CANVAS

## HOT TO USE

* npm install screenruler --save
* import ScreenRuler from 'ScreenRuler'
* const Ruler = new ScreenRuler()
* Ruler.drawCanvas(model, lineWidth, gridWidth, gridHeight)
* Necessary parameter ：model(strong/mormal) 
* Unnecessary parameter : lineWidth, gridWidth, gridHeight;(ruler lineWidth && gridWidth/gridHeight ) 

## function describe
* strong/normal .When you click screen ,the click coordinate will display on the clickCoordinate;
* normal model .when you choose normal model ,there are two rulers will on your screen;one on the top ,the other on the left
* strong model. when you choose strong model,there is a grid on your screen ,you can use gridWidth&&gridHeight to adjust the grid height;

## etc..