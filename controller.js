'use strict';

 
angular.module('clickingGame', ['ui.bootstrap', 'firebase'] ).controller('RootCtrl', function($scope, $timeout, $interval, CanvasDrawing) {
  var dropImages, getXY;
    $scope.drops = 0; 
  $scope.$watch('drops', function(drops) {
    if ($scope.drops > 0 )   {
      return document.title = drops + ' drops';
    }
  });
  CanvasDrawing.onDrops(function(numDrops) {
    if ($scope.goal < 1000100) {
    $scope.drops += numDrops;
    return $scope.$digest();
  }
  });
  $scope.dropImgFiles = ['tint_1.png', 'tint_2.png', 'tint_3.png'];
  dropImages = [];
  $timeout(function() {
    return dropImages = $('.drops .drop');
  });
  getXY = function(event) {
    return {
      x: event.pageX - $(event.target).offset().left,
      y: event.pageY - $(event.target).offset().top
    };
  };
  $scope.userClick = 1;
  $scope.canvasClick = function($event) {
    var pt;
    pt = getXY($event);
    return _.times(Math.round(_.normalRandom($scope.userClick, $scope.userClick * 0.3)), function() {
      var size;
      size = _.normalRandom(40, 20);
      return CanvasDrawing.addDrop({
        img: _.sample(dropImages, 1)[0],
        x: pt.x - size / 2,
        y: pt.y - size / 3,
        w: size,
        h: size,
        xspeed: _.normalRandom(0, 10),
        yspeed: _.normalRandom(-9, 6),
        yacceleration: 1
      });
    });
  };
  $scope.canvasMove = function($event) {
    return null;
  };

  var goal;
  $scope.goal = 50;

  var foal;
  $scope.foal = 50;

   $scope.buyClicker = function(clicker) {
    if ($scope.drops < clicker.price) {
      $scope.goal = clicker.price;
      return; 
    }
    $scope.drops -= clicker.price;
    if (clicker.bought >= 1) {
      clicker.upgrade(clicker);
      }
    clicker.bought++;
    return clicker.buy(clicker); 
  };
  $scope.autoclickers = [];
  CanvasDrawing.onMove(function(movedt) {
    return _.each($scope.autoclickers, function(clicker) {
      var _results;
      if (clicker.bought <= 0) {
        return;
      }
      if (clicker.every <= 0) {
        return;
      }
      clicker.has += movedt;
      _results = [];
      while (clicker.has > clicker.every) {
        clicker["do"](clicker);
        _results.push(clicker.has -= clicker.every);
      }
      return _results;
    });
  });
  $scope.autoclickers.push({
    text: 'Leaking ceiling',
    bought: 0,
    has: 0,
    every: 300,
    price: 600,
    buy: function(clicker) {
       
      $scope.goal = 1800;
      document.getElementById('foal').value = 1800;
      return clicker.removed = true;
    },
    upgrade: function(clicker) {
      return clicker.drops++; 
    },
    drops: 1,
    "do": function(clicker) {
      return _.times(Math.round(_.normalRandom(clicker.drops, clicker.drops * 0.9)), function() {
        var size;
        size = _.normalRandom(20, 5);
          return CanvasDrawing.addDrop({
          img: _.sample(dropImages, 1)[0],
          x: _.normalRandom(CanvasDrawing.width() / 2, CanvasDrawing.width() / 2) - size / 2,
          y: 10 - size / 3,
          w: size,
          h: size,
          xspeed: 0,
          yspeed: _.normalRandom(0, 3),
          yacceleration: 1
        });
      });
    }
  });


  $scope.autoclickers.push({
    text: 'Open roof',
    bought: 0,
    has: 0,
    every: 100,
    price: 1800,
    buy: function(clicker) {
       
      $scope.goal = 4500;
      document.getElementById('foal').value = 4500;
      return clicker.removed = true;
    },
    upgrade: function(clicker) {
      return clicker.drops++;
    },
    drops: 1,
    "do": function(clicker) {
      return _.times(Math.round(_.normalRandom(clicker.drops, clicker.drops * 0.9)), function() {
        var size;
        size = _.normalRandom(20, 5);
        return CanvasDrawing.addDrop({
          img: _.sample(dropImages, 1)[0],
          x: _.normalRandom(CanvasDrawing.width() / 2, CanvasDrawing.width() / 2) - size / 2,
          y: 10 - size / 3,
          w: size,
          h: size,
          xspeed: 0,
          yspeed: _.normalRandom(0, 3),
          yacceleration: 1
        });
      });
    }
  });

$scope.autoclickers.push({
    text: 'Stratus cloud',
    bought: 0,
    has: 0,
    every: 50,
    price: 4500,
    buy: function(clicker) {
      $scope.userClick++;
      $scope.goal = 13000;
      document.getElementById('foal').value = 13000;
      return clicker.removed = true;
    },
    upgrade: function(clicker) {
      return clicker.drops++;
    },
    drops: 1,
    "do": function(clicker) {
      return _.times(Math.round(_.normalRandom(clicker.drops, clicker.drops * 0.9)), function() {
        var size;
        size = _.normalRandom(15, 5);
        return CanvasDrawing.addDrop({
          img: _.sample(dropImages, 1)[0],
          x: _.normalRandom(CanvasDrawing.width() / 2, CanvasDrawing.width() / 2) - size / 2,
          y: 10 - size / 3,
          w: size,
          h: size,
          xspeed: 0,
          yspeed: _.normalRandom(0, 3),
          yacceleration: 1
        });
      });
    }
  });

$scope.autoclickers.push({
    text: 'Altocumulus cloud',
    bought: 0,
    has: 0,
    every: 20,
    price: 13000,
    buy: function(clicker) {
      $scope.userClick++;
      $scope.goal = 30000;
      document.getElementById('foal').value = 30000;
      return clicker.removed = true;
    },
    upgrade: function(clicker) {
      return clicker.every *= 0.70;
    },
    "do": function(clicker) {
      var size;
      size = _.normalRandom(10, 5);
      return CanvasDrawing.addDrop({
        img: _.sample(dropImages, 1)[0],
        x: _.random(0, CanvasDrawing.width()) - size / 2,
        y: 10 - size / 3,
        w: size,
        h: size,
        xspeed: 0,
        yspeed: _.normalRandom(0, 3),
        yacceleration: 1
      });
    }
  });


$scope.autoclickers.push({
    text: 'Cumulus cloud',
    bought: 0,
    has: 0,
    every: 10,
    price: 30000,
    buy: function(clicker) {
      $scope.userClick++;
      $scope.goal = 50000;
      document.getElementById('foal').value = 50000;
      return clicker.removed = true;
    },
    upgrade: function(clicker) {
      return clicker.every *= 0.70;
    },
    "do": function(clicker) {
      var size;
      size = _.normalRandom(10, 5);
      return CanvasDrawing.addDrop({
        img: _.sample(dropImages, 1)[0],
        x: _.random(0, CanvasDrawing.width()) - size / 2,
        y: 10 - size / 3,
        w: size,
        h: size,
        xspeed: 0,
        yspeed: _.normalRandom(0, 3),
        yacceleration: 1
      });
    }
  });


  $scope.autoclickers.push({
    text: 'Cumulonimbus cloud',
    bought: 0,
    has: 0,
    every: 4,
    price: 50000,
    buy: function(clicker) {
      $scope.userClick++;
      $scope.goal = 100000;
      document.getElementById('foal').value = 100000;
      return clicker.removed = true;
    },
    upgrade: function(clicker) {
      return clicker.every *= 0.70;
    },
    "do": function(clicker) {
      var size;
      size = _.normalRandom(8, 5);
      return CanvasDrawing.addDrop({
        img: _.sample(dropImages, 1)[0],
        x: _.random(0, CanvasDrawing.width()) - size / 2,
        y: 10 - size / 3,
        w: size,
        h: size,
        xspeed: 0,
        yspeed: _.normalRandom(0, 3),
        yacceleration: 1
      });
    }
  });

$scope.autoclickers.push({
    text: 'Nimbostratus cloud',
    bought: 0,
    has: 0,
    every: 1,
    price: 100000,
    buy: function(clicker) {
      $scope.userClick++;
      $scope.goal = 1000000;
      document.getElementById('foal').value = 1000000;
      return clicker.removed = true;
    },
    upgrade: function(clicker) {
      return clicker.every *= 0.70;
    },
    "do": function(clicker) {
      var size;
      size = _.normalRandom(7, 5);
      return CanvasDrawing.addDrop({
        img: _.sample(dropImages, 1)[0],
        x: _.random(0, CanvasDrawing.width()) - size / 2,
        y: 10 - size / 3,
        w: size,
        h: size,
        xspeed: 0,
        yspeed: _.normalRandom(0, 3),
        yacceleration: 1
      });
    }
  });

$scope.autoclickers.push({
    text: 'Doomsday',
    bought: 0,
    has: 0,
    every: 10,
    price: 1000000,
    buy: function(clicker) { 
    $scope.goal = 1100000;
    document.getElementById('foal').value = 1100000;
    return clicker.removed = true; 

    $scope.userClick = false;

    }
    });

     //HERE
     //HERE
     
  


    
  document.addEventListener("click", function(){
    if ($scope.goal > 1001000 ) 

  var c=document.getElementById("canvas");
  var ctx=c.getContext("2d");

   ctx.fillStyle="#34849C";
   ctx.fillRect(0, 0, canvas.width, canvas.height);
 
   
   ctx.font = "bold 70pt Cambria";
   ctx.fillStyle="#E5EAEB"; 
   ctx.fillText("FLOOD!", 400, 200);
   ctx.font = "20pt Cambria";
   ctx.fillText ("(trivia: About 10 quadrillion water drops are needed to completely flood the Earth.  )", 90, 390)


    
});   
 





  $scope.miscupgrades = [];
  $scope.miscupgrades.push({
    text: 'Double drops',
    bought: 0,
    price: 50,
    buy: function(clicker) {
      $scope.userClick++;
      $scope.goal = 200;
      document.getElementById('foal').value = 200;
      return clicker.removed = true;

      
    }
  });

  return $scope.miscupgrades.push({
    text: 'Spilling water',
    bought: 0,
    price: 200,
    buy: function(clicker) {
      $scope.goal = 600;
      document.getElementById('foal').value = 600;
      $scope.canvasMove = _.throttle(function($event) {
        return $scope.canvasClick($event);
      }, 200);
      return clicker.removed = true;
    }
  });
}).filter('notRemoved', function() {
  return function(clickers) {
    return _.reject(clickers, {
      removed: true
    });
  };
}).factory('CanvasDrawing', function() {
  var accumulator, animloop, canvas, ctx, currTime, draw, drops, dropsRemoved, moveDrop, move_dt, movedt, render;
  canvas = document.getElementById('canvas');
  ctx = new Context2DWrapper(canvas.getContext('2d'));
  $(window).on('resize', function() {
    $(canvas).attr({
      height: 0
    });
    return $(canvas).attr({
      width: $(canvas).parent().width(),
      height: $(canvas).parent().height() - $(canvas).offset().top
    });
  });
  $(window).trigger('resize');
  drops = [];
  dropsRemoved = function(num) {
    return null;

  };
   
  move_dt = function(movedt) {
    return null;
  };
  moveDrop = function(drop) {
    drop.y = drop.y + drop.yspeed;
    drop.yspeed = drop.yspeed + drop.yacceleration;
    drop.xspeed = drop.xspeed / 1.03;
    drop.x += drop.xspeed;
    return drop.y < canvas.height;
  };
  movedt = 1000 / 60;
  accumulator = 0;
  currTime = false;
  render = function(time) {
    var dt, prevNumDrops;
    if (!currTime) {
      currTime = time;
    }
    dt = time - currTime;
    currTime = time;
    accumulator += dt;
    while (accumulator > movedt) {
      prevNumDrops = drops.length;
      drops = _.filter(drops, moveDrop);
      accumulator -= movedt;
      dropsRemoved(prevNumDrops - drops.length);
      move_dt(movedt);
    }
 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return _.each(drops, function(drop) {
      return ctx.drawImage(drop.img, drop.x, drop.y, drop.w, drop.h);
    });
  };

   

 


  animloop = function(time) {
    requestAnimationFrame(animloop);
    return render(time);
  };
  animloop(0);
  return {
    addDrop: function(obj) {
      return drops.push(obj);
    },
    onDrops: function(fn) {
      return dropsRemoved = fn;
    },
    onMove: function(fn) {
      return move_dt = fn;
    },
    width: function() {
      return canvas.width;
    },
    height: function() {
      return canvas.height;
    }
  };
});

_.mixin({
  normalRandom: function(middle, delta) {
    var max, min, _ref;
    _ref = [middle - delta, middle + delta], min = _ref[0], max = _ref[1];
    return (_.random(min, max) + _.random(min, max) + _.random(min, max)) / 3;
  }
});




     $(document).ready(function(){

        ion.sound({
            sounds: [
                {name: "water_droplet_3"} 
            ],
            path: "sounds/",
            preload: true,
            volume: 1.0
        });




        function myFunction() {
    var x = document.getElementById("drops"); { 
      
        }
    return ion.sound.play("water_droplet_3");
}


      //  $("canvas").on("click", function(){
            
        
        // ion.sound.play("water_droplet_3");
           
         // <button id="b01">Play "drop"</button>
 
        }); 

 

  //angular.module('frops')
    // .controller("FropsCtrl", function($scope, $firebase) {
     

 

       function go() {
        var testRef = new Firebase('https://frops.firebaseio.com/dropsv3');
        makeList(testRef);
         
      }
       function makeList(ref) {
       
 
        


           if ((  document.getElementById('foal').value  == 300 )) {
           ref.push("DoubleDrops");        }
           
           else if ((document.getElementById('foal').value ==  600 )) {
           ref.push("SpillingWater");          }
           else  if ((document.getElementById('foal').value == 1800   )) {
           ref.push("LeakingCeiling");         }
           else  if ((document.getElementById('foal').value  == 4500   )) {
           ref.push("OpenRoof");         }
           else  if ((document.getElementById('foal').value  == 13000   )) {
           ref.push("Stratus");         }
           else  if ((document.getElementById('foal').value ==  30000   )) {
           ref.push("Altocumulus");         }
           else  if ((document.getElementById('foal').value == 50000   )) {
           ref.push("Cumulus");         }
           else  if ((document.getElementById('foal').value == 100000   )) {
           ref.push("Cumulonimbus");         }
           else  if ((document.getElementById('foal').value == 1000000   )) {
           ref.push("Nimbostratus");         }
           else if ((document.getElementById('foal').value == 1100000   )) { 
           ref.push("Doomsday");         }
       
       
       
        
            
    }
        
 

       