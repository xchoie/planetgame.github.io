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
 * 皮肤切换窗口
 */
var SkinDialog = (function (_super) {
    __extends(SkinDialog, _super);
    function SkinDialog() {
        var _this = _super.call(this) || this;
        _this._width = 300;
        _this._height = 400;
        _this.init();
        return _this;
    }
    SkinDialog.prototype.init = function () {
        var _this = this;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x000000, .8);
        shape.graphics.drawRoundRect(0, 0, this._width, this._height, 10);
        shape.graphics.endFill();
        this.addChild(shape);
        var closeBtn = new egret.Bitmap(RES.getRes('close_png'));
        closeBtn.width = 25;
        closeBtn.height = 25;
        closeBtn.x = this._width - 13;
        closeBtn.y = -13;
        this.addChild(closeBtn);
        closeBtn.touchEnabled = true;
        closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEventWith(SkinDialog.CLOSE_SKIN);
        }, this);
        var title = new egret.TextField();
        title.textColor = 0xffffff;
        title.size = 24;
        title.text = '皮肤选择';
        title.x = this._width / 2 - title.width / 2;
        title.y = 20;
        this.addChild(title);
        var skinList = [{ text: '默认皮肤', value: 1 }, { text: '无限月读', value: 2 }];
        skinList.forEach(function (item, index) {
            var text = new egret.TextField();
            text.textColor = 0xffffff;
            text.size = 16;
            text.y = 40 * index + 70;
            text.x = 20;
            text.text = item.text;
            text.touchEnabled = true;
            text.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                platform.setData({ key: 'skin', value: item.value });
                _this.dispatchEventWith(SkinDialog.CLOSE_SKIN);
            }, _this);
            _this.addChild(text);
        });
    };
    SkinDialog.CLOSE_SKIN = 'closeskin';
    return SkinDialog;
}(egret.Sprite));
__reflect(SkinDialog.prototype, "SkinDialog");
//# sourceMappingURL=SkinDialog.js.map