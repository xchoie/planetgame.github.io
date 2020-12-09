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
 * 不同的木桩弧形遮罩
 */
var TimberMaskSprite = (function (_super) {
    __extends(TimberMaskSprite, _super);
    function TimberMaskSprite() {
        return _super.call(this) || this;
    }
    TimberMaskSprite.prototype.createMask = function (r, startAngle, endAngle, skin) {
        var img = skin === 1 ? 'earth_png' : 'earth_png';
        var t = new egret.Bitmap(RES.getRes(img));
        t.width = r * 2;
        t.height = r * 2;
        this.addChild(t);
        var m = new egret.Shape();
        m.graphics.beginFill(0x000000);
        m.graphics.moveTo(r, r);
        m.graphics.lineTo(r * 2, r);
        m.graphics.drawArc(r, r, r, startAngle * Math.PI / 180, endAngle * Math.PI / 180);
        m.graphics.lineTo(r, r);
        m.graphics.endFill();
        this.addChild(m);
        t.mask = m;
    };
    return TimberMaskSprite;
}(egret.Sprite));
__reflect(TimberMaskSprite.prototype, "TimberMaskSprite");
//# sourceMappingURL=TimberMaskSprite.js.map