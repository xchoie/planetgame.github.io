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
 * 用弧形遮罩制作不同的木桩形状，用于制作结束动画
 */
var TimberMask = (function (_super) {
    __extends(TimberMask, _super);
    function TimberMask() {
        var _this = _super.call(this) || this;
        _this.ary = [];
        return _this;
    }
    TimberMask.prototype.init = function (skin) {
        var randomAry = [0, 360];
        randomAry.push(Tools.generateRandom(10, 350));
        randomAry.push(Tools.generateRandom(10, 350));
        randomAry.push(Tools.generateRandom(10, 350));
        randomAry.sort(function (a, b) {
            return a - b;
        });
        for (var i = 0; i < randomAry.length - 1; i++) {
            var r = 100;
            var next = i + 1;
            var startAngle = randomAry[i];
            var endAngle = next > randomAry.length ? 360 : randomAry[next];
            var m = new TimberMaskSprite();
            m.createMask(r, startAngle, endAngle, skin);
            this.addChild(m);
            this.ary.push(m);
        }
    };
    TimberMask.prototype.startAnimation = function () {
        var _this = this;
        var stage = egret.MainContext.instance.stage;
        this.ary.forEach(function (item) {
            item.rotation = Tools.generateRandom(30, 90);
            item.x = item.x + Tools.generateRandom(30, 90);
            item.y = item.y + Tools.generateRandom(30, 90);
            egret.Tween.get(item).to({ rotation: Tools.generateRandom(30, 90), y: stage.stageHeight, x: Tools.generateRandom(-stage.stageWidth * 2, stage.stageWidth * 2) }, 1000).call(function () {
                item.parent.removeChild(item);
            }, _this);
        });
    };
    return TimberMask;
}(egret.Sprite));
__reflect(TimberMask.prototype, "TimberMask");
//# sourceMappingURL=TimberMask.js.map