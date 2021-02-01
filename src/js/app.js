import bg_ from "../images/bigimg/bg.jpg"
addBitmap('bg', bg_, (1390 - 640) / 2, screenBottom-1138, "addArr6");
container4_2.addChild(wb.bg);

  var coin_ = require('../images/sma_img/blueball.png');
  var redball_ = require('../images/sma_img/redball.png');
  var baoshi_ = require('../images/sma_img/baoshi.png');
  var color_ = require('../images/sma_img/colorball.png');
  var angry_ = require('../images/sma_img/angry.png');

var btn1 = document.createElement('div');
btn1.id='btn1';
document.getElementById("canvas_box").append(btn1);
btn1.classList.add('scale_dia');
if (language == 'Japan'){
  btn1.classList.add("ri");
}

function handTips(obj) {
  var _this = this;
  _this.obj = obj;
  console.log(obj.name)
  _this.lock = true;
  var objpar = _this.obj.parent;
  var gname = "g" + random1(1, 9999);
  var gname2 = "g" + random1(1, 9999)

  _this.ready = function () {

      _this.obj.alpha = 0;
      _this.obj.x = _this.obj.x + 30;
      _this.obj.y = _this.obj.y + 120;
      _this.obj.scaleX = _this.obj.scaleY = 1.1;

    },
    _this.start = function () {
      _this.ready();
      cjs.Tween.get(_this.obj).to({
        alpha: 1
      }, 200).call(() => {
        cjs.Tween.get(_this.obj, {
          loop: true
        }).to({
          x: _this.obj.x - 20,
          y: _this.obj.y - 20,
          scaleX: 1,
          scaleY: 1
        }, 300).call(() => {
          // console.log(objpar)
          addRectBitmap_simple(gname, 'g1', sprite_, json_sprite, 0.5, 0.5, 15, 40, "addArrAll", true);
          addRectBitmap_simple(gname2, 'g1', sprite_, json_sprite, 0.5, 0.5, 15, 40, "addArrAll", true);
          objpar.addChild(wb[gname], wb[gname2], _this.obj);
          wb[gname].x = _this.obj.x + 0 - 10;
          wb[gname].y = _this.obj.y + 0 - 100;
          wb[gname].alpha = 0;
          wb[gname].scaleX = wb[gname].scaleY = 0.5;
          wb[gname2].x = _this.obj.x + 0 - 10;
          wb[gname2].y = _this.obj.y + 0 - 100;
          wb[gname2].alpha = 0;
          wb[gname2].scaleX = wb[gname2].scaleY = 0.5;
          cjs.Tween.get(wb[gname]).to({
            alpha: 1,
            scaleX: 0.8,
            scaleY: 0.8
          }, 600).to({
            alpha: 0,
            scaleX: 1,
            scaleY: 1
          }, 600)
          cjs.Tween.get(wb[gname2]).wait(400).to({
            alpha: 1,
            scaleX: 0.8,
            scaleY: 0.8
          }, 600).to({
            alpha: 0,
            scaleX: 1,
            scaleY: 1
          }, 600).call(() => {
            // cjs.Tween.get(_this.obj).to({
            //   alpha: 0
            // }, 200).wait(1500).call(()=>{
            //   // if (_this.lock) {
            //   //    _this.start();
            //   // }
            // })
          })
        }).wait(200).to({
          x: _this.obj.x,
          y: _this.obj.y,
          scaleX: 1.1,
          scaleY: 1.1
        }, 300)

      });
    }

  _this.start();
  _this.stop = function () {
    _this.lock = false;
    createjs.Tween.removeTweens(_this.obj);
    if (wb[gname]) {
      createjs.Tween.removeTweens(wb[gname]);
      createjs.Tween.removeTweens(wb[gname2]);
      wb[gname].alpha = wb[gname2].alpha = 0
    }

    _this.ready();
  }
}


function scoreAdd() {
  var _this = this;
  _this.tt = 439;
  _this.textf = '1,';
  _this.c2 = null;
  if (language == 'Japan') {
    _this.textf = '1'
  }
  _this.start = function (num, last) {
    clearInterval(_this.c2);
    _this.c2 = setInterval(() => {
      if (last) {
        _this.tt += 13;
      } else {
        _this.tt += 2;
      }

      if (_this.tt >= 1000) {
        if (language == 'Japan') {
          return text.text = '2000';
        } else {
          return text.text = '2,000';
        }

      }
      text.text = _this.textf + _this.tt;
    }, 1000 / num);
    setTimeouc(() => {
      clearInterval(_this.c2);
    }, 1000);
  }
}


btn1.addEventListener('mousedown', function () {
  mraid.open();
})

var text2 = document.createElement('div');
text2.id = 'text2';
document.getElementById("canvas_box").append(text2);
text2.innerText = advword;



var textf = '1,';
if (language=='Japan') {
  textf='1'
}
var btn = new scale_animate(wb.end_btn1, 0.6, 0.7, 1000);
wb.end_btn1.addEventListener('mousedown', function () {
  choose.play();
  mraid.open();
})
var waitTime = 800000;
window.tt = 439;
window.ac1 = new scoreAdd();

//界面背景颜色设置
window.content = new cjs.Container();
person.addChild(content);
var perbounds = person.getBounds();
var w = perbounds.width;
var h = perbounds.height;
var x = perbounds.x;
var y = perbounds.y;

window.bg_shape = new cjs.Shape();
bg_shape.graphics.beginFill("#fff").drawRect(x,y,w,h);
// person.addChild(bg_shape);
// person.setChildIndex(bg_shape,0);
// window.ss = addsquare();



var waitTime = 800000;
window.tt = 439;
stage.addChild(textadv);

setTimeouc(() => {
  cjs.Tween.get(wb.guang, {
    loop: true
  }).to({
    rotation: 360
  }, 3000);




  var screenTop = (1390 - canvas.height) / 2;
  var screenMiddle = 1390 / 2;
  var screenBottom = (1390 + canvas.height) / 2;
  var screenLeft = (1390 - canvas.width) / 2;
  var screenRight = (1390 + canvas.width) / 2;
  var loadingBall;
  var gameState;
  var spriteballArr = [];
  var newballArr = [];
  var joinball;
  var ccrotation=0;
  var newballx = screenMiddle;
  var newbally = screenBottom - 100 - 40;

  var draw = {
    cir(x, y, radius) {
      var shape_rec = new createjs.Shape();
      shape_rec.graphics.setStrokeStyle(2).beginStroke("#fff").f('#333');
      shape_rec.graphics.dc(x, y, radius);
      shape_rec.graphics.endFill().endStroke();
      return shape_rec;
    },
    rect(x, y, w, h) {
      var shape_rec = new createjs.Shape();
      shape_rec.graphics.setStrokeStyle(2).beginStroke("#fff");
      shape_rec.graphics.dr(x, y, w, h);
      shape_rec.graphics.endFill().endStroke();
      return shape_rec;
    }
  }


  // addSpriteSheet("zhadan", zhadan_all, "smile", 1250, 50, 1, 0.5, 0.5);

  function addCir(pointA, pointB, cir_radius) {
    var dx = Math.abs(pointA[0].x - pointB[0].x);
    var dy = Math.abs(pointA[0].y - pointB[0].y);
    var cxNum = Math.floor(dx / cir_radius * 0.5);
    var cyNum = Math.floor(dy / cir_radius * 0.5);
    // console.log(dx, dy,cxNum,cyNum)
    var coinImg;
    var coinLast;
    window.cirArr = [];
    var baoArr = [];
    var zhadanIndex = [{
      num: 6
    }, {
      num: 45
    }, {
      num: 75
    }]
    for (let a = 0; a <= cyNum; a++) {
      for (let b = 0; b <= cxNum; b++) {
        coinImg = coin_;
        coinLast = "";
        if ((a == 0 && (b == 0 || b == cxNum)) || (b == 0 || b == cxNum) && random1(0, 1) == 0) {
          // continue;
        } else if (a == cyNum && b == Math.round(cxNum / 2)) {
          // console.log(b);
          coinLast = "last";
          coinImg = color_;
        }

        for (let index = 0; index < zhadanIndex.length; index++) {
          const element = zhadanIndex[index];
          // console.log(Math.floor(element.num / cxNum) , element.num % cxNum)
          if (Math.floor(element.num / cxNum) == a && element.num % cxNum == b) {
            coinLast = "zhadan";
            coinImg = angry_;
          }
        }
        var x, y;
        x = pointA[0].x + b * cir_radius * 2;
        y = pointA[0].y - a * cir_radius * 2;
        if (a % 2 == 0) {
          x = pointA[0].x + b * cir_radius * 2 - 20;
        }
        // x=y=0;
        // var newCir =  draw.cir(x, y, cir_radius);
        // container0.addChild(newCir);

        // console.log(Bodies)
        var newCirm = Bodies.circle(x + 40, y + 5, cir_radius, {
          isStatic: true,
          render: {
            visible: true
          },
          restitution: 0,
          density: 0.68, // 密度
          // restitution: 0.8 // 弹性
        });
        World.add(engine.world, newCirm);
        cirArr.push(newCirm);
        newCirm.boss = coinLast;

        var coinName = 'coin_' + newCirm.id;
        addBitmap(coinName, coinImg, x + 25, y + 5, "addArr6");
        container00.addChild(wb[coinName]);
        wb[coinName].scaleX = wb[coinName].scaleY = 0.625;
        wb[coinName].cacheID = newCirm.id;
        wb[coinName].regX = 91 * 0.5;
        wb[coinName].regY = 91 * 0.5;
        wb[coinName].x = wb[coinName].x - 20 + 91 * 0.5;
        wb[coinName].y = wb[coinName].y - 20 + 91 * 0.5;
        wb[coinName].boss = coinLast;

        var baocl = wsp.disani.clone();
        baocl.x = wb[coinName].x-10;
        baocl.y = wb[coinName].y-25;
        baocl.cacheID = newCirm.id;
        baocl.scaleX = baocl.scaleY = 0.8;
        baocl.alpha=0;
        baoArr.push(baocl);
        containerbao.addChild(baocl);
        // wb[coinName].visible=false;
        if (a == cyNum && b == Math.round(cxNum / 2)) {
          // cjs.Tween.get(wb[coinName], {
          //     loop: true
          //   }).to({
          //     scaleX: wb[coinName].scaleX + 0.05,
          //     scaleY: wb[coinName].scaleY + 0.05
          //   }, 750)
          //   .to({
          //     scaleX: wb[coinName].scaleX,
          //     scaleY: wb[coinName].scaleY
          //   }, 750)
          wb[coinName].boss="last";
        }

        for (let index = 0; index < zhadanIndex.length; index++) {
          const element = zhadanIndex[index];
          if (Math.floor(element.num / cxNum) == a && element.num % cxNum == b) {
            cjs.Tween.get(wb[coinName], {
                loop: true
              }).to({
                scaleX: wb[coinName].scaleX + 0.05,
                scaleY: wb[coinName].scaleY + 0.05
              }, 500)
              .to({
                scaleX: wb[coinName].scaleX,
                scaleY: wb[coinName].scaleY
              }, 500)
          }

        }
      }

    }
    return cirArr;
  }
  container0.x = 25;
  var pointA = [{
    x: screenLeft + 80,
    y: screenTop + (screenMiddle - screenTop) * 0.8
  }];
  var pointB = [{
    x: screenRight - 120,
    y: screenTop + 185
  }];
  var cir_radius = 25;

  window.cirArr = addCir(pointA, pointB, cir_radius);
  var world = engine.world;
  var W = window.innerWidth;
  var H = window.innerHeight;

  engine.timing.timeScale = 1;


  window.ground = Bodies.rectangle(screenMiddle, screenBottom + 15 + 20, canvas.width, 35, {
    restitution: 0.6,
    isStatic: true
  });
  window.ground2 = Bodies.rectangle(screenLeft + 5 - 15, screenMiddle, 35, canvas.height, {
    restitution: 1,
    isStatic: true,
    collisionFilter: {
      category: 0x0008,
      mask: 0x0002 | 0x0004
    }
  });
  window.ground3 = Bodies.rectangle(screenRight - 5 + 15, screenMiddle, 35, canvas.height, {
    restitution: 1,
    isStatic: true,
    collisionFilter: {
      category: 0x0008,
      mask: 0x0002 | 0x0004
    }
  });
  window.ground4 = Bodies.rectangle(screenMiddle, screenTop - 15+185, canvas.width, 35, {
    restitution: 0.6,
    isStatic: true
  });
  // add all of the bodies to the world
  World.add(engine.world, [ground, ground2, ground3, ground4]);

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);


  Events.on(engine, 'afterUpdate', function () {
    if (gameState) {
      for (let index = 0; index < spriteballArr.length; index++) {
        spriteballArr[index].x = newballArr[index].position.x;
        spriteballArr[index].y = newballArr[index].position.y;
        spriteballArr[index].rotation = 180 * newballArr[index].angle / Math.PI;
        spriteballArr[index].visible = newballArr[index].render.visible;
        // console.log(newballArr[index].render.visible)
      }
    }
    for (let index = 0; index < cirArr.length; index++) {
      const element = cirArr[index];
      container00.children[index].x = element.position.x;
      container00.children[index].y = element.position.y;
      container00.children[index].rotation = 180 * element.angle / Math.PI;

      containerbao.children[index].x = element.position.x;
      containerbao.children[index].y = element.position.y;
      containerbao.children[index].rotation = 180 * element.angle / Math.PI;
      // container00.children[index].visible = element.render.visible;
    }


  });

  // setTimeout(() => {
  //   for (let index = 0; index < cirArr.length; index++) {
  //     const element = cirArr[index];
  //     Body.setStatic(element,false);
  //     // container00.children[index].x = element.position.x;
  //     // container00.children[index].y = element.position.y;
  //     // container00.children[index].rotation = 180 * element.angle / Math.PI;
  //     // container00.children[index].visible = element.render.visible;
  //     Body.applyForce(element, element.position, {
  //       x: 0.5,
  //       y: 0.13
  //     });
  //   }
  // }, 2000);

  var changeAngle = function name(angle) {
    //返回角度
    return 180 * angle / Math.PI;
  }

  var achangeAngle = function name(angle) {
    //返回弧度
    return Math.PI * angle / 180;
  }

  window.mouse = Mouse.create(render.canvas);
  window.mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  });
  render.mouse = mouse;
  World.add(world, [
    // stack,
    mouseConstraint
  ]);

  var catapult = Bodies.rectangle(screenMiddle, 800, 150, 40, {
    frictionAir: 1
  });
  window.con2 = Constraint.create({
    bodyA: catapult,
    pointA: {
      x: -150 * 0.42,
      y: 0
    },
    pointB: {
      x: screenMiddle,
      y: screenBottom - 500
    },
    stiffness: 1,
    length: 0
  })

  window.boomanchorx = screenMiddle - 20;
  window.boomanchory = screenBottom - 100 - 50 - 50 * 0.8;
  window.boxA = Bodies.rectangle(screenMiddle, screenBottom - 100, 20 * 2, 150, {
    frictionAir: 1,
    chamfer: 5
  });
  window.boxB = Bodies.circle(screenMiddle, screenBottom - 100, 20, {
    restitution: 0.6,
    frictionAir: 1
  });
  window.cboxA = draw.rect(boomanchorx, boomanchory, 40, 120);
  window.cboxB = draw.cir(screenMiddle, screenBottom - 100 - 40-50, 20);
  window.ccon1 = new createjs.Container();
  cboxA.alpha = cboxB.alpha=0;
  person.addChild(ccon1);
  ccon1.addChild(cboxA, cboxB);
  var line_cc = new createjs.Shape();
  line_cc.graphics.setStrokeDash([10, 10], 0).setStrokeStyle(3)
  .beginStroke('ffffff').mt(screenMiddle, screenBottom - 100 - 40 - 50).lt(screenMiddle, screenBottom - 100 - 40 - 50 - (canvas.height))
  ccon1.addChild(line_cc);
  line_cc.visible = false;
  loadingBall = function (cb) {
    var baoshiName = 'baoshi_';
    
    addBitmap(baoshiName, coin_, screenRight-50, screenBottom-50, "addArr6");

    var bs = wb[baoshiName];
    bs.regX = 91 * 0.5;
    bs.regY = 91 * 0.5;
    // bs.x = screenRight - 50;
    // bs.x = screenRight - 100;
    // bs.y = screenBottom - 60;
    bs.x = 695;
    bs.y = screenBottom - 100 - 40 - 50+60;

    var guidePointX = bs.x - Math.abs(bs.x - boxA.position.x) / 2;
    var guidePointy = bs.y - Math.abs(bs.y - boxA.position.y) / 2 - 150;
    bs.scaleX = bs.scaleY = 50 / 91;
    ccon1.addChild(bs);
    var p = changeSite(cboxB,bs);
    bs.scaleY = bs.scaleX = 0;
    cjs.Tween.get(bs).to({
       scaleX: 50 / 91, scaleY: 50 / 91
      },100).to({
          // guide: {
          //   path: [p.x, p.y, guidePointX, guidePointy, cboxB.x, cboxB.y]
          // },
          y: bs.y - 60,
          rotation: ccrotation
        }, 350, cjs.Ease.quadOut).call(function () {
      if (cb) {
        cb();
      }
    })
    return bs;
  }
  // console.log()

  joinball = loadingBall(function () {
    // joinball.regY = 32 + 60;
    // joinball.y = joinball.y + 60 * joinball.scaleX;
    window.tnt1 = new addTNT();
    person.addChild(wb.hand);
    wb.hand.x = screenMiddle-5;
    wb.hand.y = boomanchory+45;
    cjs.Tween.get(wb.hand).to({alpha:1},150)
    .to({
      guide: {
        path: [wb.hand.x, wb.hand.y, wb.hand.x-50, wb.hand.y, wb.hand.x - 50, wb.hand.y + 50]
      }
    },500).call(()=>{
      cjs.Tween.get(wb.hand,{loop:true}).to({
        guide: {
          path: [wb.hand.x, wb.hand.y, wb.hand.x + 50, wb.hand.y-100, wb.hand.x + 100, wb.hand.y ]
        }
      }, 1000).to({
        guide: {
          path: [wb.hand.x + 100, wb.hand.y, wb.hand.x + 50, wb.hand.y - 100, wb.hand.x, wb.hand.y]
        }
      }, 1000)
    })
    shootBall();
  });
  var aa = draw.cir(screenMiddle, boomanchory + 120 * 0.8, 2)
  // stage.addChild(aa);

  function shootBall() {
    var x1 , y1;
    var testXangle = function (x, y) {
      var p1 = {
        x: 320,
        y: boomanchory + 120 * 0.8 - (screenBottom - canvas.height)
      };
      var p2 = {
        x: x,
        y: y
      };
      var angle = Math.atan2((p1.y - p2.y), (p2.x - p1.x))
      var theta = angle * (180 / Math.PI);
      // console.log(theta)
      return theta;
    }
    stage.addEventListener("stagemousedown", function (e) {
      // console.log(e)
      if (wb.hand.alpha!=0) {
        createjs.Tween.removeTweens(wb.hand);
        wb.hand.alpha=0;
      }
      x1 = stage.mouseX;
      y1 = stage.mouseY;
      console.log(x1, y1)
      // ccon1.rotation = joinball.rotation = 90 - testXangle(x1, y1);
      ccon1.rotation = 90 - testXangle(x1, y1);
      testXangle("stagemousedown", x1, y1)
      line_cc.visible = true;
    })
    stage.addEventListener("stagemousemove", function (e) {
      x1 = stage.mouseX;
      y1 = stage.mouseY;
      // console.log("stagemousemove", x1, y1)
      // ccon1.rotation = joinball.rotation = 90 - testXangle(x1, y1);
      ccon1.rotation  = 90 - testXangle(x1, y1);
      line_cc.visible = true;
    })

    stage.addEventListener("stagemouseup", function (e) {
      x1 = stage.mouseX;
      y1 = stage.mouseY;
      ballTotalNum--;
      ballTotal.text = ballTotalNum;
      var spriteball;
      var newball;
      console.log(x1, y1);
      ccrotation = 90 - testXangle(x1, y1);
      console.log(ccrotation);
      line_cc.visible = false;
      var cangle = achangeAngle(ccrotation);
      newballx = joinball.x + 60 * Math.sin(achangeAngle(ccrotation)) * joinball.scaleX;
      newbally = joinball.y - 60 * Math.cos(achangeAngle(ccrotation)) * joinball.scaleY;
      newball = Bodies.circle(newballx, newbally, 20, {
        frictionAir: 0,
        restitution: 1,
        collisionFilter: {
          category: 0x0002,
          mask: 0x0002 | 0x0001 | 0x0008
        }
      });
      World.add(world, newball);
      newball.title = "shoot";
      var baoshiName = 'coin_' + random1(1, 10000);
      addBitmap(baoshiName, coin_, 0, 0, "addArr6");
      spriteball = wb[baoshiName];
      spriteball.scaleX = spriteball.scaleY = joinball.scaleX;
      spriteball.regX = 0.5 * 91;
      spriteball.regY = 0.5 * 91;
      spriteball.x = newballx;
      spriteball.y = newbally;
      spriteballArr.unshift(spriteball);
      newballArr.unshift(newball);
      stage.addChild(spriteball);

      var startf = -0.15;
      var fx = -startf * Math.sin(cangle);
      var fy = startf * Math.cos(cangle);

      if (newballArr.length > 10) {
        World.remove(engine.world, newballArr.pop());
        person.removeChild(spriteballArr.pop());
      }
      Body.applyForce(newball, newball.position, {
        x: fx,
        y: fy
      });



      console.log(fx, fy)
      if (cangle % 360 >= 80 || cangle % 360 <= -80) {
        // Body.rotate(cup, -cangle * Math.PI/180)
        console.log("chufa")
        return false;
      }
      // cup.collisionFilter.mask = 22;
      // Body.setStatic(cup, true);
      window.ballId = newball.id;
      boxB.render.visible = false;
      joinball.visible = false;
      gameState = true;
      stage.removeAllEventListeners();
    })
  }



  ccon1.regX = 40 * 0.5 + boomanchorx;
  ccon1.regY = 120 * 0.5 + boomanchory;

  ccon1.x = 40 * 0.5 + boomanchorx;
  ccon1.y = 120 * 0.5 + boomanchory-50;


  window.cup = Body.create({
    parts: [boxA, boxB],
    frictionAir: 1,
    collisionFilter: {
      category: 0x0004,
      mask: 0x0004 | 0x0008
    },
    name: "cup"
  });
  window.con1 = Constraint.create({
    bodyA: cup,
    pointA: {
      x: 0,
      y: 50 * 0.8
    },
    pointB: {
      x: screenMiddle,
      y: screenBottom - 100
    },
    stiffness: 1,
    length: 0,

  })
  // add mouse control

  // World.add(world, [cup, con1]);

  //重力
  engine.world.gravity.y = 0.98;
  mouseConstraint.mouse.offset.x = -stage.x;
  mouseConstraint.mouse.offset.y = -stage.y;
  // keep the mouse in sync with rendering

  window.dragState = true;
  Events.on(mouseConstraint, 'startdrag', function (event) {
    if (!event.body.name || event.body.name != "cup") {
      return false;
    } else {
      Body.setStatic(cup, false);
    }

  })
  //监听全局鼠标拖拽事件
  var cupArr = [];
  Events.on(mouseConstraint, 'enddrag', function (event) {
    var body = event.body;
    console.log(body, event.body.name)
    if (!event.body.name || event.body.name != "cup") {
      return false;
    }

  })


  var getRandomColor = function () {
    return '#' + (function (color) {
      return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) &&
        (color.length == 6) ? color : arguments.callee(color);
    })('');
  }
  window.collball = new createjs.Text("X0", "60px source", "#ff7700");
  collball.x = screenMiddle;
  collball.y = screenMiddle;
  collball.textBaseline = "alphabetic";
  collball.textAlign = "center";
  stage.addChild(collball);
  collball.visible = false;

  window.ballTotalNum = 20;
  window.ballTotal = new createjs.Text(ballTotalNum, "40px Arial", "#ffffff");
  ballTotal.x = screenRight - 50;
  ballTotal.y = screenBottom - 20;
  ballTotal.textBaseline = "alphabetic";
  // ballTotal.textAlign = "center";
  // stage.addChild(ballTotal);

  window.scoreNum = 0;
  window.score = new createjs.Text("得分:" + scoreNum, "40px Arial", "#ffffff");
  score.x = screenLeft + 5;
  score.y = screenBottom - 20;
  score.textBaseline = "alphabetic";
  // stage.addChild(score);

  // console.log(baoshiName)source
  addBitmap("baoshitotal", color_, screenRight - 50, screenBottom - 50, "addArr6");
  wb.baoshitotal.x = screenLeft+10;
  wb.baoshitotal.y = screenBottom - 55;
  person.addChild(wb.baoshitotal);
  wb.baoshitotal.scaleX = wb.baoshitotal.scaleY = 50 / 91;

   window.collnum = 0;
   window.colltext = new createjs.Text(collnum, "35px score", "#ffffff");
   colltext.x = screenLeft + 67;
   colltext.y = screenBottom - 17;
   colltext.textBaseline = "alphabetic";
     person.addChild(colltext);

  window.collballNum = 0;
  Events.on(engine, 'collisionStart', function (event) {
    var pairs = event.pairs;

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i];
      if (pair.bodyA.id <= cirArr.length) {
        console.log(pair)
      }

      // console.log(pair.bodyB.id, ground.id, pair.bodyA.id, ballId)
      if (pair.bodyA.id == ground.id && pair.bodyB.id == ballId) {
        World.remove(engine.world, newballArr.pop());
        stage.removeChild(spriteballArr.pop());
        cup.collisionFilter.mask = 0x0004 | 0x0008;
        collballNum = 0;
        collball.visible = false;
        boxB.render.visible = true;
        joinball = loadingBall(function () {
          // joinball.regY = 32 + 60;
          // joinball.y = joinball.y + 60 * joinball.scaleX;
          setTimeout(() => {
            
            tnt1.random()
          }, 100);
          
          shootBall();
        });
      }
      if (pair.bodyA.id < boxB.id) {

        if (pair.bodyA.label.indexOf('Circle') > -1 && pair.bodyB.title == "shoot") {
          let rcoin = container00.children.find(item => {
            return item.cacheID == pair.bodyA.id;
          })
          // cjs.Tween.get(rcoin).to({alpha:0},200).call(function(){
          //   container00.removeChild(rcoin);
          // })
          // console.log(pair.bodyA.boss)



          if (pair.bodyA.boss == "zhadan") {
            var activecoin = pair.bodyA;
            // console.log(activecoin, activecoin.circleRadius, cirArr)
            let wherecoin = cirArr.filter((val) => {
              var vx = val.position.x;
              var vy = val.position.y;
              var acx = activecoin.position.x;
              var acy = activecoin.position.y;
              var acr = activecoin.circleRadius;
              if (
                Math.abs(vx - acx) <= acr * 2 && Math.abs(vy - acy) <= acr * 2
              ) {
                
                Body.setStatic(val, true);
                return val;
              }
            })
            // console.log(wherecoin)
            World.remove(engine.world, pair.bodyA);
            cjs.Tween.get(rcoin).to({
              alpha: 0
            }, 100);
            var rcoinArr = [];
            for (let index = 0; index < wherecoin.length; index++) {
              const element = wherecoin[index];
              element.render.visible = false;
              World.remove(engine.world, element)
              let rcoin = container00.children.find(item => {
                return item.cacheID == element.id;
              })
              rcoin.pz = "mark";
              createjs.Tween.removeTweens(rcoin);
              rcoinArr.push(rcoin);
            }

            // console.log(rcoinArr)
            var newbao = wsp.baoani.clone();
            newbao.x = activecoin.position.x;
            newbao.y = activecoin.position.y;
            stage.addChild(newbao);
            newbao.gotoAndPlay("boom");
            setTimeout(() => {
              newbao.alpha=0;
            }, sTime(newbao,"boom"));
            newbao.scaleX = newbao.scaleY = 1.4;
            setTimeout(() => {
              for (let index = 0; index < rcoinArr.length; index++) {
                const element = rcoinArr[index];
                if (element.boss && element.boss == "last") {
                  endani();
                }
                // cjs.Tween.get(container00.children.find(item => {
                //     return item.cacheID == element.cacheID;
                //   })).to({
                //   alpha: 0
                // }, 350);
                let tt = containerbao.children.find(item => {
                  return item.cacheID == element.cacheID;
                })
                tt.visible = false;
                // console.log(element)
                if (element.pz!="down") {
                  // console.log("dhajhdajk")
                  cjs.Tween.get(element).to({
                    alpha: 0
                  }, 350);
                }
                
              }
            }, sTime1(16, "boom"));
            collballNum += 5;
          } else {
            collballNum++;
            if (pair.bodyA.boss != "last" && container00.children.find(item => {
                return item.cacheID == pair.bodyA.id;
              }).pz!="mark") {

                
              Body.setStatic(pair.bodyA, false);
              container00.children.find(item => {
                return item.cacheID == pair.bodyA.id;
              }).pz = "down"

              console.log(container00.children.find(item => {
                return item.cacheID == pair.bodyA.id;
              }))
              pair.bodyA.collisionFilter.category = 0x0004;
              pair.bodyA.collisionFilter.mask = 0x0004 | 0x0008;

              var ball1 = container00.children.find(item => {
                return item.cacheID == pair.bodyA.id;
              })
              var ani1 = containerbao.children.find(item => {
                return item.cacheID == pair.bodyA.id;
              })

              var time = random1(700, 900)
              cjs.Tween.get(ball1).wait(time).to({
                scaleX: 0.5,
                scaleY: 0.5,
                alpha:0,
              }, sTime(ani1, "start1") - 100, cjs.Ease.quadOut)
              cjs.Tween.get(ani1).wait(time).call(() => {
                ani1.alpha = 1;
                ani1.gotoAndPlay("start1");
                setTimeouc(() => {
                  ani1.alpha=0;
                }, sTime(ani1,"start1"));
              })
              // category: 0x0002,
              //   mask: 0x0002 | 0x0001 | 0x0008,
              // World.remove(engine.world, pair.bodyA)
              setTimeout(() => {
                Body.applyForce(pair.bodyA, pair.bodyA.position, {
                  x: 10 * random1(-1, 1),
                  y: 0
                });

              }, 0);
            }
          }




          function endani(params) {
             colltext.text = 1;
             ac1.start(random1(3, 5) * 120);
            console.log("success");
            // collball.text = "游戏胜利";
            pair.bodyB.render.visible = false;
            setTimeout(() => {
              gameState = false;
            }, 1000);
            World.remove(engine.world, pair.bodyB);
            window.shake1 = new Shake(stage);
            setTimeout(() => {
              shake1.lock = false;
              shake1.stop();
              var time = random1(500, 650)

              
              var lastaniarr = [];
              for (let index = 0; index < cirArr.length; index++) {
                const element = cirArr[index];
                if (element.isStatic == true) {
                  Body.setStatic(element, false);
                  var ball1 = container00.children.find(item => {
                    return item.cacheID == element.id;
                  })
                  var ani1 = containerbao.children.find(item => {
                    
                    return item.cacheID == element.id;
                  })

                  lastaniarr.push(ani1);
                  
                  cjs.Tween.get(ball1).wait(time).to({
                    scaleX: 0.5,
                    scaleY: 0.5,
                    alpha:0
                  }, sTime(ani1, "start1") - 100, cjs.Ease.quadOut)

                  
                  element.collisionFilter.category = 0x0004;
                  element.collisionFilter.mask = 0x0004 | 0x0008;
                  setTimeout(() => {
                    Body.applyForce(element, element.position, {
                      x: 10 * random1(-1, 1),
                      y: 0
                    });
                  }, 0);
                }
              }

              setTimeout(() => {
                lastaniarr.forEach((el) => {

                  el.alpha = 1;
                  console.log(el.alpha)
                  el.gotoAndPlay("start1");
                  setTimeouc(() => {
                    el.alpha = 0;
                  }, sTime(el, "start1"));

                })
              }, 500);
              

              lastAni(750)
            }, 500);


          }


          scoreNum += random1(8, 10) + (collballNum - 1) * 10;
          var moretext = "";
          if (collballNum >= 2) {
            // moretext = "连击"
          }
          collball.text = "X" + collballNum + moretext;
          collball.visible = true;
          ac1.start(random1(3, 5) * collballNum);
          score.text = "得分:" + scoreNum;
          if (pair.bodyB.render.visible == false) {
            // collball.text = "游戏胜利";
            pair.bodyB.render.visible = false;
          }
          if (rcoin.boss && rcoin.boss == "last") {
            endani();
          }
        }
      }
    }
  })



})


function lastAni(time) {
    
  setTimeouc(() => {
    collball.visible = false;
    cjs.Tween.get(wb.end_btn1).to({
      alpha: 0
    }, 350)
    // cjs.Tween.get(wb.bar).to({
    //   alpha: 0
    // }, 350)
    person.addChild(end_pop);
    wb.card.alpha = wb.txt1.alpha = wb.end_btn.alpha = 0;
    cjs.Tween.get(end_pop).to({
      alpha: 1
    }, 350)
    wb.card.alpha = 1;
    cjs.Tween.get(wb.card).to({
      scaleY: 1,
      scaleX: 1
    }, 500, cjs.Ease.backOut);
    cjs.Tween.get(wb.guang).to({
      scaleY: 1,
      scaleX: 1
    }, 500, cjs.Ease.backOut);
    cjs.Tween.get(wb.you_win).wait(10).to({
      alpha: 1
    }, 10).to({
      y: wb.you_win.y + 300
    }, 500, cjs.Ease.backOut);
    cjs.Tween.get(wb.end_btn).wait(10).to({
      alpha: 1
    }, 10).to({
      scaleY: 1,
      scaleX: 1
    }, 500, cjs.Ease.backOut).call(() => {
      var btn = new scale_animate(wb.end_btn, 1, 1.1, 1000);
      wb.end_btn.addEventListener('mousedown', function () {
        choose.play();
        mraid.open();
      })
    });
    cjs.Tween.get(wb.txt1).wait(350).to({
      alpha: 1
    }, 10).to({
      scaleY: 1,
      scaleX: 1
    }, 500, cjs.Ease.backOut);
  }, time);
}

function addTNT() {
  var _this = this;
  _this.random = function(){
    var rm = random1(0, container00.children.length-1);
    // console.log(rm, container00.children[rm])
    if (container00.children[rm].alpha != 1 || container00.children[rm].boss=="last") {
      _this.random();
    }else{
      cirArr[rm].boss="zhadan";
      _this.changeImg(container00.children[rm]);
      return rm;
    }
  }
  _this.changeImg = function(obj){
    cjs.Tween.get(obj, {
        loop: true
      }).to({
        scaleX: obj.scaleX + 0.05,
        scaleY: obj.scaleY + 0.05
      }, 500)
      .to({
        scaleX: obj.scaleX,
        scaleY: obj.scaleY
      }, 500)
    obj.image.src = angry_;
  }
}
