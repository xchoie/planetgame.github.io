/**
 * 首页底部
 */
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
var Bottom = (function (_super) {
    __extends(Bottom, _super);
    function Bottom() {
        var _this = _super.call(this) || this;
        _this.height = 100;
        _this._width = 1000;
        return _this;
    }
    Bottom.prototype.init = function () {
        var _this = this;
        var bg = new egret.Shape();
        bg.graphics.beginFill(0x000000, .5);
        bg.graphics.drawRect(0, 0, this._width, this.height);
        bg.graphics.endFill();
        this.bg = bg;
        this.addChild(this.bg);
        var b1 = new egret.Bitmap();
        b1.texture = RES.getRes('b1_png');
        b1.width = 53 * .5;
        b1.height = 52 * .5;
        b1.x = 30;
        b1.y = 20;
        this.addChild(b1);
        b1.touchEnabled = true;
        b1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEventWith(Bottom.FRIENDS_RANK);
        }, this);
        var t1 = new egret.TextField();
        t1.text = '好友排行';
        t1.size = 12;
        t1.textColor = 0xffffff;
        t1.x = 20;
        t1.y = 60;
        this.addChild(t1);
        t1.touchEnabled = true;
        t1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEventWith(Bottom.FRIENDS_RANK);
        }, this);
        var b2 = new egret.Bitmap();
        b2.texture = RES.getRes('b2_png');
        b2.width = 47 * .5;
        b2.height = 46 * .5;
        b2.x = 130;
        b2.y = 20;
        this.addChild(b2);
        b2.touchEnabled = true;
        b2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEventWith(Bottom.FRIENDS_RANK);
        }, this);
        var t2 = new egret.TextField();
        t2.text = '群内排行';
        t2.size = 12;
        t2.textColor = 0xffffff;
        t2.x = 120;
        t2.y = 60;
        this.addChild(t2);
        t2.touchEnabled = true;
        t2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEventWith(Bottom.FRIENDS_RANK);
        }, this);
        var b3 = new egret.Bitmap();
        b3.texture = RES.getRes('b4_png');
        b3.width = 60 * .5;
        b3.height = 48 * .5;
        b3.x = 230;
        b3.y = 20;
        this.addChild(b3);
        b3.touchEnabled = true;
        b3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEventWith(Bottom.SKIN);
        }, this);
        var t3 = new egret.TextField();
        t3.text = '皮肤';
        t3.size = 12;
        t3.textColor = 0xffffff;
        t3.x = 235;
        t3.y = 60;
        this.addChild(t3);
        t3.touchEnabled = true;
        t3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEventWith(Bottom.SKIN);
        }, this);
        var miniObj = {
            appId: 'wx18a2ac992306a5a4',
            path: 'pages/apps/largess/detail?id=waQKNtmC5mk%3D'
        };
        var b4 = new egret.Bitmap();
        b4.texture = RES.getRes('like_png');
        b4.width = 70 * .4;
        b4.height = 65 * .4;
        b4.x = 330;
        b4.y = 20;
        this.addChild(b4);
        b4.touchEnabled = true;
        b4.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEventWith(Bottom.ZAN);
            platform.openMini(miniObj);
        }, this);
        var t4 = new egret.TextField();
        t4.text = '给攒';
        t4.size = 12;
        t4.textColor = 0xffffff;
        t4.x = 331;
        t4.y = 60;
        this.addChild(t4);
        t4.touchEnabled = true;
        t4.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEventWith(Bottom.ZAN);
            platform.openMini(miniObj);
        }, this);
    };
    Bottom.FRIENDS_RANK = 'friendsrank';
    Bottom.GROUP_RANK = 'grouprank';
    Bottom.WORLD_RANK = 'worldrank';
    Bottom.SKIN = 'skin';
    Bottom.ZAN = 'ZAN';
    return Bottom;
}(egret.Sprite));
__reflect(Bottom.prototype, "Bottom");
//# sourceMappingURL=Bottom.js.map