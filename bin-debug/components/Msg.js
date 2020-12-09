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
/**
 * 统一提示
 */
var Msg = (function (_super) {
    __extends(Msg, _super);
    function Msg() {
        return _super.call(this) || this;
    }
    Msg.prototype.init = function (txt) {
        var _this = this;
        var stage = egret.MainContext.instance.stage;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x000000, .6);
        shape.graphics.drawRect(0, -100, stage.stageWidth, 100);
        shape.graphics.endFill();
        this.addChild(shape);
        egret.Tween.get(shape).to({ y: 100 }, 100, egret.Ease.bounceOut).call(function () {
            setTimeout(function () {
                _this.removeChild(shape);
            }, 3000);
        }, this);
        var text = new egret.TextField();
        text.size = 14;
        text.textColor = 0xffffff;
        text.text = txt;
        text.x = stage.stageWidth / 2 - text.width / 2;
        text.y = -100 / 2 - text.height / 2;
        this.addChild(text);
        egret.Tween.get(text).to({ y: 100 / 2 - text.height / 2 }, 100, egret.Ease.bounceOut).call(function () {
            setTimeout(function () {
                _this.removeChild(text);
            }, 3000);
        }, this);
    };
    return Msg;
}(egret.Sprite));
__reflect(Msg.prototype, "Msg");
//# sourceMappingURL=Msg.js.map