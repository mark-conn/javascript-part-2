/*## Maps and tiles
* Create a file called `map.js`, then, do the following. Commit and push as often as you like so that we can monitor the progress of your code in the pull request.

In this exercise, we're going to create a constructor for maps in a 2D game. 
A `Map` is an array of arrays of `Tile` objects. A `Tile` object represents one square in the map. 
It only has a `type` property which will determine if it's water, grass or sand. 
The `Map` object will have `width` and `height` properties, and its constructor will 
generate width * height `Tile` objects.

To do this exercise, let's follow these steps:

  * Create a constructor function called `Tile` that can create new tiles for our map. 
    This function will take parameter `type` and create an object that has these properties:
    * `type`: whatever was passed to the `Tile` constructor function
  * The `Tile` objects should also have a method called `isWalkable`. 
    This method should, using `this.type`, return `true` or `false` depending on whether 
    the tile can be walked on. The function should return `true` if the type is "grass" or "sand".
    The function should return `false` if the type is anything else.
    
  * Create a constructor function called `Map` that will generate a map. 
     This function will take parameters `width` and `height` and create a map object 
     with these properties:
    * `width`: whatever was passed to the `Map` constructor function (should be an integer value)
    * `height`: whatever was passed to the `Map` constructor function (should be an integer value)
    * `tiles`: this property should be created as a 2D array of `Tile` objects *inside the constructor*. Using two nested `for` loops bound by `width` and `height` respectively, create `new Tile` objects and give them a **random** value for the `type`, between "grass", "sand" and "water".
 
    * The `Map` objects should also have two methods on them:
    * `getWalkableOutput`: this method should iterate over the `this.tiles` 2D array, 
       and output in the console a rectangle representing the "walkability" of the map. 
       For walkable tiles, use an `O`, and for unwalkable tiles use an `X`. For example, 
       your output could look something like this for a 4x4 map:

    ```
    OOOO
    OXXO
    OOXO
    OOOO
    ```

    * `getAsciiOutput`: this method should iterate over the `this.tiles` 2D array and output 
      in the console a rectangle representing the disposition of the map. For grass tiles, 
      use a `*`, for sand tiles use a `:` and for water use a `~` symbol. For example, your output
      could look something like this for the same 4x4 map as above:

    ```
    ****
    *~~*
    **~*
    ::::
    ```
*/
/* 
  * Create a constructor function called `Tile` that can create new tiles for our map. 
    This function will take parameter `type` and create an object that has these properties:
    * `type`: whatever was passed to the `Tile` constructor function
  * The `Tile` objects should also have a method called `isWalkable`. 
    This method should, using `this.type`, return `true` or `false` depending on whether 
    the tile can be walked on. The function should return `true` if the type is "grass" or "sand".
    The function should return `false` if the type is anything else. */
var util = require('util');
function Tile(type) {
    this.type = type;
    
        if (type === "grass" || type === "sand") {
            this.isWalkable = true;
        }
        else {
            this.isWalkable = false;
        }
    }


/* * Create a constructor function called `Map` that will generate a map. 
     This function will take parameters `width` and `height` and create a map object 
     with these properties:
    * `width`: whatever was passed to the `Map` constructor function (should be an integer value)
    * `height`: whatever was passed to the `Map` constructor function (should be an integer value)
    * `tiles`: this property should be created as a 2D array of `Tile` objects *inside the
        constructor*. Using two nested `for` loops bound by `width` and `height` respectively, 
        create `new Tile` objects and give them a **random** value for the `type`, 
        between "grass", "sand" and "water".
 */

function Map(width, height) {
    this.width = width;
    this.height = height;
//    this.tiles = function(width, height) {
        var heightArray = [];

        for (var i = 0; i < height; i++) {

            var widthArray = [];
            for (var j = 0; j < width; j++) {

                widthArray.push(new Tile(getType()))
            }
            heightArray.push(widthArray);
        }
        this.tiles = heightArray;
    };


var getType = function() {
    
        var type = Math.floor((Math.random()*3) +1);
        if (type === 1) {
            return "grass";
        }
        else if (type === 2) {
            return "sand";
        }
        else {
            return "water";
        }

};

var first = new Map(5,7);
console.log(util.inspect(first.tiles, { showHidden: true, depth: null, colors: true}));
