var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 游戏进行中的界面
 */
var GamePlayingPanel = (function (_super) {
    __extends(GamePlayingPanel, _super);
    function GamePlayingPanel() {
        var _this = _super.call(this) || this;
        _this.mode = 1;
        _this.skin = 1;
        // 如果是负数则逆时针转动，数值越大速度越快
        _this.rotations = 3;
        _this.isShooting = false;
        _this.insertRotate = [];
        _this.insertRotateNoAnimate = [];
        _this.kunaiW = 40;
        _this.kunaiH = _this.kunaiW;
        // time interval的间隔，数值越小转的越快
        _this.rate = 35;
        // 改变现有旋转速度
        _this.rateOffset = 0;
        // 关数限定
        // 默认需要射中的苦无数量
        _this.kunaiNum = 9;
        // 默认第1关
        _this.level = 1;
        _this.generateRandomElement = function () {
            var p = GamePlayingPanel.ELEMENT_MAP[Math.floor(Math.random() * 9)];
            return p;
        };
        _this.generateRandomStar = function () {
            var p = GamePlayingPanel.STAR_MAP[Math.floor(Math.random() * 3)];
            return p;
        };
        _this.generateRandomVector = function () {
            var p = GamePlayingPanel.VECTOR_MAP[Math.floor(Math.random() * 3)];
            return p;
        };
        // 即将到达木桩的苦无与现存于木桩的苦无进行坐标比较
        _this.calcCollision = function (rotate) {
            var insertRotate = _this.insertRotate;
            return insertRotate.some(function (item) {
                return rotate <= item.range[1] && rotate >= item.range[0];
            });
        };
        _this.initGame();
        return _this;
    }
    GamePlayingPanel.prototype.start = function (mode) {
        // mode1：简单
        // mode2：疯狂
        this.mode = mode;
        var mat;
        if (this.mode === 1) {
            mat = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        }
        else if (this.mode === 2) {
            // 反色背景
            mat = [
                -1,
                0,
                0,
                0,
                255,
                0,
                -1,
                0,
                0,
                255,
                0,
                0,
                -1,
                0,
                255,
                0,
                0,
                0,
                1,
                0,
            ];
        }
        var matFilter = new egret.ColorMatrixFilter(mat);
        this.bgimg.filters = [matFilter];
    };
    GamePlayingPanel.prototype.end = function () {
        this.resetGame();
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    GamePlayingPanel.prototype.initGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stage, stageW, stageH, skin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stage = egret.MainContext.instance.stage;
                        stageW = stage.stageWidth;
                        stageH = stage.stageHeight;
                        this.bgimg = new egret.Bitmap();
                        this.bgimg.x = 0;
                        this.bgimg.y = 0;
                        this.bgimg.width = stageW;
                        this.bgimg.height = stageH;
                        this.addChild(this.bgimg);
                        return [4 /*yield*/, platform.getData("skin")];
                    case 1:
                        skin = (_a.sent()) || 1;
                        this.skin = parseInt(skin);
                        if (this.skin === 1) {
                            this.bgimg.texture = RES.getRes("1_png");
                            // this.bgimg.alpha = .4
                            this.timber = this.createBitmapByName("earth_png");
                            this.addChild(this.timber);
                            this.timber.width = 200;
                            this.timber.height = 200;
                            this.back = this.createBitmapByName("earthBack_png");
                            this.addChild(this.back);
                            this.back.width = 200;
                            this.back.height = 200;
                        }
                        else if (this.skin === 2) {
                            this.bgimg.texture = RES.getRes("2_jpg");
                            this.bgimg.alpha = 0.7;
                            this.timber = this.createBitmapByName("earth_png");
                            this.addChild(this.timber);
                            // this.timber.width = 280
                            // this.timber.height = 280
                            this.timber.width = 200;
                            this.timber.height = 200;
                            this.back = this.createBitmapByName("earthBack_png");
                            this.addChild(this.back);
                            this.back.width = 200;
                            this.back.height = 200;
                        }
                        this.timber.anchorOffsetX = this.timber.width / 2;
                        this.timber.anchorOffsetY = this.timber.height / 2;
                        this.timber.x = stageW / 2;
                        this.timber.y = 280;
                        this.back.anchorOffsetX = this.back.width / 2;
                        this.back.anchorOffsetY = this.back.height / 2;
                        this.back.x = stageW / 2;
                        this.back.y = 280;
                        this.layerNum = this.numChildren;
                        this.createText();
                        this.createKunai(this.generateRandomElement());
                        this.createKunaiNum();
                        this.createScores();
                        // 创建分享及广告
                        this.share();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    GamePlayingPanel.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    GamePlayingPanel.prototype.startAnimation = function () {
        var _this = this;
        if (this.timberInterval) {
            clearInterval(this.timberInterval);
        }
        this.timber.rotation = 0;
        this.timberInterval = setInterval(function () {
            _this.timber.rotation += _this.rotations;
        }, this.rate - this.rateOffset);
    };
    // 关卡加强
    GamePlayingPanel.prototype.resetAnimation = function () {
        var _this = this;
        if (this.mode === 1) {
            var random = Math.floor(Math.random() * this.level);
            // 改变速度
            this.rateOffset = Math.random() < 0.2 ? random : random * -1;
            // 改变方向
            this.rotations =
                this.level % 3 === 0 && Math.random() < 0.1
                    ? this.rotations * -1
                    : this.rotations;
        }
        else if (this.mode === 2) {
            // 疯狂模式下每关增加速度
            this.rateOffset = this.level * 1.2;
        }
        if (this.timberInterval) {
            clearInterval(this.timberInterval);
        }
        this.timberInterval = setInterval(function () {
            _this.timber.rotation += _this.rotations;
        }, this.rate - this.rateOffset);
        this.resetRotateKunai();
    };
    /**
     * 射击动作
     */
    GamePlayingPanel.prototype.shoot = function (e) {
        var _this = this;
        if (this.isShooting || this.kunaiNum <= 0)
            return;
        this.isShooting = true;
        this.kunaiNum -= 1;
        this.updateKunaiNum();
        var func = function () {
            if (_this.calcCollision(_this.timber.rotation)) {
                // 如坐标集合里面有了，苦无插入重复的位置，弹飞新加的苦无
                _this.flickKunai();
            }
            else {
                // 木屑
                _this.woodBits();
                // 木桩被射中动画
                var timberX = _this.timber.x;
                var timberY = _this.timber.y;
                egret.Tween.get(_this.timber)
                    .call(function () {
                    // 判断及动画完成以后进行游戏判断
                    if (_this.kunaiNum <= 0) {
                        _this.showNext();
                    }
                    else {
                        _this.kunaiName = _this.generateRandomElement();
                        _this.kunai = _this.createBitmapByName(_this.kunaiName);
                        _this.addChild(_this.kunai);
                        _this.resetKunai();
                    }
                    _this.resetAnimation();
                }, _this);
                _this.kunai.alpha = 0;
                _this.createRotateKunai(_this.kunaiName);
                _this.updateScores();
            }
        };
        egret.Tween.get(this.kunai)
            .to({ y: 400 }, 300, egret.Ease.cubicInOut)
            .call(func, this);
    };
    GamePlayingPanel.prototype.createKunai = function (newElement) {
        var stage = egret.MainContext.instance.stage;
        this.kunaiName = newElement;
        this.kunai = this.createBitmapByName(newElement);
        this.addChild(this.kunai);
        var stageW = stage.stageWidth;
        var stageH = stage.stageHeight;
        var randomNum = Math.random() * 20;
        this.kunai.width = 40 + randomNum;
        this.kunai.height = this.kunai.width;
        this.kunai.x = stageW / 2 - 10;
        this.kunai.y = stageH - 170;
        this.createRandomKunai();
        this.createClickable();
    };
    // 创建游戏点击区域
    GamePlayingPanel.prototype.createClickable = function () {
        var stage = egret.MainContext.instance.stage;
        var rect = new egret.Shape();
        rect.graphics.beginFill(0x000000, 0);
        rect.graphics.drawRect(0, stage.stageHeight - 200, stage.stageWidth, 300);
        rect.graphics.endFill();
        this.addChild(rect);
        rect.touchEnabled = true;
        rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shoot, this);
    };
    GamePlayingPanel.prototype.resetKunai = function () {
        var stage = egret.MainContext.instance.stage;
        var stageW = stage.stageWidth;
        var stageH = stage.stageHeight;
        this.kunai.width = 50;
        this.kunai.height = 50;
        this.kunai.rotation = 0;
        this.kunai.x = stageW / 2 - 10;
        this.kunai.y = stageH - 170;
        this.kunai.alpha = 1;
        this.isShooting = false;
    };
    GamePlayingPanel.prototype.createRotateKunai = function (newElement, kunaiRotate) {
        var _this = this;
        // 数据存储木桩上的苦无坐标
        // 有kunaiRotate则是随机生成的苦无
        var stage = egret.MainContext.instance.stage;
        var rotate = typeof kunaiRotate === "number" ? kunaiRotate : this.timber.rotation;
        var range = [];
        range.push(rotate - 10);
        range.push(rotate + 10);
        // 生成木桩上的苦无
        var kunai = this.createBitmapByName(newElement);
        kunai.anchorOffsetX = 5;
        kunai.anchorOffsetY = -150 + Math.random() * 50;
        kunai.x = stage.stageWidth / 2;
        kunai.y = 280;
        kunai.width = 30 + Math.random() * 15;
        kunai.height = kunai.width;
        // 如果是用kunaiRotate做判断需要乘以-1
        kunai.rotation = typeof kunaiRotate === "number" ? -kunaiRotate : 0;
        this.addChildAt(kunai, this.layerNum - 1);
        var time = setInterval(function () {
            kunai.rotation += _this.rotations;
        }, this.rate - this.rateOffset);
        var obj = { id: this.timber.rotation, range: range, kunai: kunai, time: time };
        this.insertRotate.push(obj);
    };
    /**
     * 替换原有的动画苦无为静态，方便后续做掉落动画
     */
    GamePlayingPanel.prototype.createRotateKunaiNoAnimate = function (rotate) {
        // 生成无动画的苦无
        var stage = egret.MainContext.instance.stage;
        // 生成木桩上的苦无
        var kunai = this.createBitmapByName(this.generateRandomStar());
        // kunai.anchorOffsetX = 5;
        // kunai.anchorOffsetY = -52;
        kunai.x = stage.stageWidth / 2;
        kunai.y = 280;
        kunai.width = 10;
        kunai.height = 10;
        // 如果是用kunaiRotate做判断需要乘以-1
        // kunai.rotation = -rotate;
        this.addChildAt(kunai, this.layerNum - 1);
        this.insertRotateNoAnimate.push(kunai);
    };
    // 重设苦无动画
    GamePlayingPanel.prototype.resetRotateKunai = function () {
        var _this = this;
        this.insertRotate.forEach(function (item) {
            if (item.time) {
                clearInterval(item.time);
            }
            var time = setInterval(function () {
                item.kunai.rotation += _this.rotations;
            }, _this.rate - _this.rateOffset);
            item.time = time;
        });
    };
    // 消除一定数量的苦无
    GamePlayingPanel.prototype.removeRotateKunai = function (num) {
        if (num === void 0) { num = 3; }
        var _loop_1 = function (i) {
            var item = this_1.insertRotate.splice(0, 1)[0];
            if (item && item.kunai) {
                egret.Tween.get(item.kunai)
                    .to({ alpha: 0 }, 100)
                    .call(function () {
                    item.kunai.parent.removeChild(item.kunai);
                }, this_1);
            }
        };
        var this_1 = this;
        for (var i = 0; i < num; i++) {
            _loop_1(i);
        }
    };
    // 重复苦无的动画，游戏失败等等
    GamePlayingPanel.prototype.flickKunai = function () {
        var _this = this;
        var stage = egret.MainContext.instance.stage;
        var func = function () {
            setTimeout(function () {
                _this.showDialog();
            }, 500);
        };
        egret.Tween.get(this.kunai)
            .to({
            x: stage.stageWidth + 100,
            y: stage.stageHeight + 100,
            rotation: 720,
        }, 700, egret.Ease.bounceOut)
            .call(func, this);
    };
    // 文字提示
    GamePlayingPanel.prototype.createText = function () {
        var stage = egret.MainContext.instance.stage;
        var shape1 = new egret.Shape();
        shape1.graphics.beginFill(0x2f1810, 0.8);
        shape1.graphics.drawRoundRect(-10, 10, 80, 30, 10);
        shape1.graphics.endFill();
        this.addChild(shape1);
        this.textfield = new egret.TextField();
        this.addChild(this.textfield);
        this.textfield.x = 12;
        this.textfield.y = 17;
        this.textfield.textColor = 0xffffff;
        this.textfield.textAlign = egret.HorizontalAlign.CENTER;
        this.textfield.size = 14;
        this.updateLevel();
    };
    // 关数显示
    GamePlayingPanel.prototype.updateLevel = function () {
        this.textfield.text = "\u7B2C " + this.level + " \u5173";
    };
    // 绘制剩余苦无
    GamePlayingPanel.prototype.createKunaiNum = function () {
        var stage = egret.MainContext.instance.stage;
        var kunai = this.createBitmapByName("spaceship1_png");
        kunai.width = 50;
        kunai.height = 50;
        kunai.x = 30;
        kunai.y = stage.stageHeight - 100;
        this.addChild(kunai);
        this.kunaiNumTips = new egret.TextField();
        this.addChild(this.kunaiNumTips);
        this.kunaiNumTips.x = 80;
        this.kunaiNumTips.y = stage.stageHeight - 80;
        this.kunaiNumTips.textColor = 0xffffff;
        this.kunaiNumTips.textAlign = egret.HorizontalAlign.LEFT;
        this.kunaiNumTips.size = 14;
        this.updateKunaiNum();
    };
    // 更新剩余苦无
    GamePlayingPanel.prototype.updateKunaiNum = function () {
        this.kunaiNumTips.text = "x " + this.kunaiNum;
    };
    // 创建分数
    GamePlayingPanel.prototype.createScores = function () {
        var stage = egret.MainContext.instance.stage;
        // const shape: egret.Shape = new egret.Shape();
        // shape.graphics.beginFill(0xffffff, 0.8);
        // shape.graphics.drawRoundRect(stage.stageWidth / 2 - 50, 10, 100, 60, 10);
        // shape.graphics.endFill();
        // this.addChild(shape);
        var text = new egret.TextField();
        text.size = 18;
        text.textColor = 0xffffff;
        text.text = "得分";
        text.x = stage.stageWidth / 2 - text.width / 2;
        text.y = 70;
        this.addChild(text);
        this.scores = new egret.TextField();
        this.scores.size = 16;
        this.scores.textColor = 0xffffff;
        this.scores.text = "0";
        this.scores.x = stage.stageWidth / 2 - this.scores.width / 2;
        this.scores.y = 95;
        this.addChild(this.scores);
    };
    // 更新得分
    GamePlayingPanel.prototype.updateScores = function (s) {
        var stage = egret.MainContext.instance.stage;
        this.scores.text =
            typeof s === "number" ? "" + s : "" + (parseInt(this.scores.text) + 1);
        this.scores.x = stage.stageWidth / 2 - this.scores.width / 2;
    };
    // 下一关
    GamePlayingPanel.prototype.showNext = function () {
        var _this = this;
        this.timber.alpha = 0;
        this.back.alpha = 0;
        // this.masks()
        // this.timberMask.startAnimation()
        // this.starBits()
        var ary = [];
        this.insertRotate.forEach(function (item) {
            if (item.time) {
                clearInterval(item.time);
            }
            item.kunai.parent.removeChild(item.kunai);
            ary.push(item.id);
        });
        this.insertRotate = [];
        ary.forEach(function (rotate) {
            _this.createRotateKunaiNoAnimate(rotate);
        });
        this.insertRotateNoAnimate.forEach(function (item, index) {
            var length = _this.insertRotateNoAnimate.length;
            // item.rotation = Tools.generateRandom(-180, 180)
            item.rotation = (360 / length) * index;
            var starMap = [
                [_this.stage.stageWidth / 2, _this.stage.stageHeight],
                [0, _this.stage.stageHeight],
                [0, _this.stage.stageHeight / 2],
                [0, 0],
                [0, 0],
                [_this.stage.stageWidth / 2, 0],
                [_this.stage.stageWidth, 0],
                [_this.stage.stageWidth, _this.stage.stageHeight / 2],
                [_this.stage.stageWidth, _this.stage.stageHeight],
            ];
            egret.Tween.get(item).to({ x: starMap[index % 8][0] * 2 - 50, y: starMap[index % 8][1] * 2 - 50 }, 500);
            // console.log('this.stage.stageWidth', item.rotation);
            // const random = Math.random() < 0.5 ? -1 : 1
            // egret.Tween.get(item).to({x: Tools.generateRandom(-this.stage.stageWidth, this.stage.stageWidth), y: this.stage.stageHeight + item.height * 2 }, 1000)
            // egret.Tween.get(item).to({x:this.stage.stageWidth / 2 - (item.rotation) / 180 * this.stage.stageWidth / 2,y: this.stage.stageHeight / 2 - item.height * 3  - (item.rotation) / 180 * this.stage.stageHeight / 2}, 5000)
        });
        setTimeout(function () {
            _this.timber.alpha = 1;
            _this.back.alpha = 1;
            _this.goNext();
        }, 1100);
    };
    // 下一关
    GamePlayingPanel.prototype.goNext = function () {
        // 关数加1
        this.level += 1;
        // 根据关卡加强的难度减少需要射出的苦无
        this.kunaiNum = 9 + Math.floor(this.level / 10 - 1);
        if (this.kunaiNum <= 0) {
            this.kunaiNum = 1;
        }
        this.cleanBitmap();
        this.createRandomKunai();
        this.updateKunaiNum();
        this.updateLevel();
        this.resetKunai();
    };
    /**
     * 每过一关改变关卡过关方式，并重新生成已在木桩上的苦无
     */
    GamePlayingPanel.prototype.createRandomKunai = function () {
        if (this.level !== 1) {
            if (this.mode === 1) {
                // 简单模式，每关随机增减苦无
                var random = Math.floor(Math.random() * this.level);
                if (random >= this.level / 2) {
                    this.kunaiNum =
                        this.kunaiNum - Math.floor((Math.random() * this.level) / 2 + 1);
                }
                for (var i = 1; i < random; i++) {
                    var r = Math.floor(Math.random() * 180);
                    r = Math.random() < 0.5 ? r * -1 : r;
                    this.createRotateKunai(this.generateRandomElement(), r);
                }
            }
            else if (this.mode === 2) {
                // 疯狂模式每加一关，已插入的苦无多一把
                for (var i = 1; i < this.level; i++) {
                    var random = Math.floor(Math.random() * 180);
                    random = Math.random() < 0.5 ? random * -1 : random;
                    this.createRotateKunai(this.generateRandomElement(), random);
                }
            }
        }
        this.startAnimation();
    };
    // 游戏结束提示框
    GamePlayingPanel.prototype.showDialog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var stage, obj;
            return __generator(this, function (_a) {
                stage = egret.MainContext.instance.stage;
                this.dialog = new Dialog();
                this.dialog.setScores(this.scores.text);
                this.addChild(this.dialog);
                this.dialog.x = stage.stageWidth / 2 - this.dialog._width / 2;
                this.dialog.y = stage.stageHeight / 2 - this.dialog._height / 2;
                this.dialog.addEventListener(Dialog.GO_HOME, function () {
                    _this.dispatchEventWith(GamePlayingPanel.GAME_END);
                }, this);
                this.dialog.addEventListener(Dialog.RESTART, function () {
                    _this.resetGame();
                }, this);
                this.dialog.addEventListener(Dialog.REBIRTH, function () {
                    _this.rebirth();
                }, this);
                this.dialog.addEventListener(Dialog.NOCHANCE, function () {
                    _this.noChance();
                }, this);
                obj = {
                    key: "score",
                    value: this.scores.text,
                };
                platform.setUserCloudStorage(obj);
                return [2 /*return*/];
            });
        });
    };
    GamePlayingPanel.prototype.closeDialog = function () {
        var _this = this;
        this.removeChild(this.dialog);
        this.dialog.removeEventListener(Dialog.GO_HOME, function () {
            _this.dispatchEventWith(GamePlayingPanel.GAME_END);
        }, this);
        this.dialog.removeEventListener(Dialog.RESTART, function () {
            _this.resetGame();
        }, this);
        this.dialog.removeEventListener(Dialog.REBIRTH, function () {
            _this.rebirth();
        }, this);
    };
    // 重置游戏设置
    GamePlayingPanel.prototype.resetGame = function () {
        this.closeDialog();
        this.level = 1;
        this.kunaiNum = 9;
        this.cleanBitmap();
        this.createRandomKunai();
        this.updateKunaiNum();
        this.updateLevel();
        this.resetKunai();
        this.updateScores(0);
    };
    // 清除现有所有的苦无
    GamePlayingPanel.prototype.cleanBitmap = function () {
        this.insertRotate.forEach(function (item) {
            item.kunai.parent.removeChild(item.kunai);
        });
        this.insertRotate = [];
    };
    // 木屑
    GamePlayingPanel.prototype.woodBits = function () {
        var _this = this;
        var _a = egret.MainContext.instance.stage, stageWidth = _a.stageWidth, stageHeight = _a.stageHeight;
        var _loop_2 = function (i) {
            var dou;
            if (i < 3) {
                dou = this_2.createBitmapByName(this_2.generateRandomVector());
                dou.width = 5;
                dou.height = 5;
            }
            else {
                dou = this_2.createBitmapByName(this_2.generateRandomStar());
                dou.width = 10;
                dou.height = 10;
            }
            dou.x = stageWidth / 2 - 1;
            dou.y = 370;
            this_2.addChild(dou);
            var random = Math.floor(Math.random() * stageWidth * 2);
            random = Math.random() < 0.5 ? random * -1 : random;
            var random2 = Math.floor(Math.random() * stageWidth * 2);
            random2 = Math.random() < 0.5 ? random * -1 : random;
            egret.Tween.get(dou)
                .to({ x: random, y: random2 }, 1000, egret.Ease.sineOut)
                .call(function () {
                _this.removeChild(dou);
            });
        };
        var this_2 = this;
        for (var i = 0; i < 4; i++) {
            _loop_2(i);
        }
    };
    GamePlayingPanel.prototype.starBits = function () {
        var _this = this;
        var _a = egret.MainContext.instance.stage, stageWidth = _a.stageWidth, stageHeight = _a.stageHeight;
        var _loop_3 = function (i) {
            var dou = this_3.createBitmapByName("shiny_png");
            dou.width = 100;
            dou.height = 100;
            dou.x = stageWidth / 2 - 1;
            dou.y = 290;
            this_3.addChild(dou);
            // let random = Math.floor(Math.random() * stageWidth * 2)
            // random = Math.random() < .5 ? random * -1 : random
            var random = Math.random();
            random = random < 0.5 ? random * -1 : random;
            egret.Tween.get(dou)
                .to({ x: random * stageWidth * 2, y: random * stageWidth * 2 }, 1000, egret.Ease.sineOut)
                .call(function () {
                _this.removeChild(dou);
            });
        };
        var this_3 = this;
        for (var i = 0; i < 4; i++) {
            _loop_3(i);
        }
    };
    GamePlayingPanel.prototype.share = function () {
        var _this = this;
        var stage = egret.MainContext.instance.stage;
        this.s1 = this.createBitmapByName("s1_png");
        this.s1.width = 118 * 0.5;
        this.s1.height = 107 * 0.5;
        this.s1.x = stage.stageWidth - this.s1.width;
        this.s1.y = stage.stageHeight - 330;
        var s1y = this.s1.y;
        this.addChild(this.s1);
        egret.Tween.get(this.s1, { loop: true })
            .to({ y: this.s1.y + 10 }, 1000)
            .to({ y: s1y }, 1000);
        this.s1.touchEnabled = true;
        this.s1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            platform.share(_this.removeRotateKunai(3));
        }, this);
        // this.s2 = this.createBitmapByName('s2_png')
        // this.s2.width = 119 * .5
        // this.s2.height = 106 * .5
        // this.s2.x = stage.stageWidth - this.s2.width
        // this.s2.y = stage.stageHeight - 250
        // const s2y = this.s2.y
        // this.addChild(this.s2)
        // egret.Tween.get(this.s2, { loop: true }).to({ y: this.s2.y - 10 }, 1000).to({ y: s2y }, 1000)
    };
    // 复活
    GamePlayingPanel.prototype.rebirth = function () {
        this.closeDialog();
        this.resetKunai();
        this.kunaiNum += 1;
        this.updateKunaiNum();
    };
    // 没有复活机会
    GamePlayingPanel.prototype.noChance = function () {
        var msg = new Msg();
        this.addChild(msg);
        msg.init("一天只有三次复活机会哦");
    };
    GamePlayingPanel.prototype.masks = function () {
        var stage = this.stage;
        this.timberMask = new TimberMask();
        this.timberMask.init(this.skin);
        this.addChild(this.timberMask);
        this.timberMask.x = stage.stageWidth / 2 - this.timberMask.width / 2;
        this.timberMask.y = 130;
    };
    GamePlayingPanel.GAME_END = "gameend";
    GamePlayingPanel.GAME_RESTART = "gamerestart";
    GamePlayingPanel.ELEMENT_MAP = [
        "spaceship1_png",
        "spaceship2_png",
        "spaceship3_png",
        "planet2_png",
        "planet3_png",
        "planet4_png",
        "planet5_png",
        "planet6_png",
        "planet7_png",
    ];
    GamePlayingPanel.STAR_MAP = [
        "Vector1_png",
        "Vector2_png",
        "Vector3_png",
    ];
    GamePlayingPanel.VECTOR_MAP = [
        "Vector4_png",
        "Vector5_png",
        "Vector6_png",
    ];
    return GamePlayingPanel;
}(egret.Sprite));
__reflect(GamePlayingPanel.prototype, "GamePlayingPanel");
//# sourceMappingURL=GamePlayingPanel.js.map