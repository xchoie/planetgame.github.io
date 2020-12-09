/**
 * 创建不同颜色的button
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
var Buttons = (function (_super) {
    __extends(Buttons, _super);
    function Buttons() {
        return _super.call(this) || this;
    }
    Buttons.prototype.init = function (type, text, size, width, height) {
        var _this = this;
        if (type === void 0) { type = 1; }
        if (size === void 0) { size = 24; }
        if (width === void 0) { width = 180; }
        if (height === void 0) { height = 64; }
        this.img = new egret.Bitmap();
        this.txt = new egret.TextField();
        this.width = width;
        this.height = height;
        if (type === 1) {
            this.img.texture = RES.getRes('Button_png');
            // this.txt.strokeColor = 0x42a605
        }
        else if (type === 2) {
            this.img.texture = RES.getRes('btn_bg_blue_png');
            this.txt.strokeColor = 0x2582c3;
        }
        else if (type === 3) {
            this.img.texture = RES.getRes('btn_bg_purple_png');
            this.txt.strokeColor = 0x810fb5;
        }
        else if (type === 4) {
            this.img.texture = RES.getRes('btn_bg_pink_png');
            this.txt.strokeColor = 0xc30835;
        }
        else if (type === 5) {
            this.img.texture = RES.getRes('btn_bg_brown_png');
            this.txt.strokeColor = 0x8e4926;
        }
        else {
            this.img.texture = RES.getRes('btn_bg_grey_png');
            this.txt.strokeColor = 0x656565;
        }
        this.img.scale9Grid = new egret.Rectangle(10, 10, 14, 103);
        this.img.width = width;
        this.img.height = height;
        this.addChild(this.img);
        this.txt.size = size;
        this.txt.textColor = 0xffffff;
        this.txt.text = text;
        this.txt.stroke = 0;
        this.txt.x = this.img.width / 2 - this.txt.width / 2;
        this.txt.y = this.img.height / 2 - this.txt.height / 2;
        this.addChild(this.txt);
        this.img.touchEnabled = true;
        this.img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            _this.img.x = _this.img.x + 2;
            _this.img.y = _this.img.y + 2;
            _this.txt.x = _this.txt.x + 2;
            _this.txt.y = _this.txt.y + 2;
        }, this);
        this.img.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            _this.img.x = _this.img.x - 2;
            _this.img.y = _this.img.y - 2;
            _this.txt.x = _this.txt.x - 2;
            _this.txt.y = _this.txt.y - 2;
        }, this);
        this.img.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
            _this.img.x = _this.img.x - 2;
            _this.img.y = _this.img.y - 2;
            _this.txt.x = _this.txt.x - 2;
            _this.txt.y = _this.txt.y - 2;
        }, this);
    };
    return Buttons;
}(egret.Sprite));
__reflect(Buttons.prototype, "Buttons");
//# sourceMappingURL=Buttons.js.map