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
 * 游戏结束画面，未用到
 */
var GameEndPanel = (function (_super) {
    __extends(GameEndPanel, _super);
    function GameEndPanel() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    GameEndPanel.prototype.start = function () {
        var _a = this, restartBtn = _a.restartBtn, onTouchTap = _a.onTouchTap;
        restartBtn.touchEnabled = true;
        restartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, onTouchTap, this);
    };
    GameEndPanel.prototype.init = function () {
        this.restartBtn = new egret.TextField();
        this.restartBtn.text = '重新开始';
        this.restartBtn.x = 450 / 2 - this.restartBtn.width;
        this.restartBtn.y = 400;
        this.addChild(this.restartBtn);
    };
    GameEndPanel.prototype.onTouchTap = function () {
        this.dispatchEventWith(GameEndPanel.GAME_RESTART);
    };
    GameEndPanel.prototype.end = function () {
        var _a = this, restartBtn = _a.restartBtn, onTouchTap = _a.onTouchTap;
        restartBtn.$touchEnabled = false;
        if (restartBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            restartBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, onTouchTap, this);
        }
    };
    GameEndPanel.GAME_RESTART = 'gamerestart';
    return GameEndPanel;
}(egret.Sprite));
__reflect(GameEndPanel.prototype, "GameEndPanel");
//# sourceMappingURL=GameEndPanel.js.map