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
 * 游戏开始界面
 */
var GameStartPanel = (function (_super) {
    __extends(GameStartPanel, _super);
    function GameStartPanel() {
        var _this = _super.call(this) || this;
        _this.isdisplay = false;
        _this.init();
        return _this;
    }
    GameStartPanel.prototype.start = function () {
        var _this = this;
        var _a = this, stage = _a.stage, startBtn = _a.startBtn, onTouchTap = _a.onTouchTap, startPK = _a.startPK, img = _a.img, logo = _a.logo, PK = _a.PK, bottom = _a.bottom;
        img.width = stage.stageWidth;
        img.height = stage.stageHeight;
        logo.x = stage.stageWidth / 2 - logo.width / 2;
        logo.y = -logo.height;
        egret.Tween.get(logo).to({ y: 40 }, 500, egret.Ease.bounceOut);
        console.log('startBtn', startBtn);
        startBtn.x = -startBtn.width;
        startBtn.y = 650;
        startBtn.touchEnabled = true;
        startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.onTouchTap(1);
        }, this);
        egret.Tween.get(startBtn).to({ x: stage.stageWidth / 2 - startBtn.width / 2 }, 500, egret.Ease.bounceOut);
        // startPK.x = stage.stageWidth
        // startPK.y = 500
        // startPK.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        //   this.onTouchTap(2)
        // }, this)
        // egret.Tween.get(startPK).to({ x: stage.stageWidth / 2 - startPK.width / 2 }, 500, egret.Ease.bounceOut)
        // startPK.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => {
        //   PK.x = PK.x + 2
        //   PK.y = PK.y + 2
        // }, this)
        // startPK.addEventListener(egret.TouchEvent.TOUCH_END, () => {
        //   PK.x = PK.x - 2
        //   PK.y = PK.y - 2
        // }, this)
        // startPK.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, () => {
        //   PK.x = PK.x - 2
        //   PK.y = PK.y - 2
        // }, this)
        // PK.x = stage.stageWidth
        // egret.Tween.get(PK).to({ x: 105}, 500, egret.Ease.bounceOut)
        // bottom.y = stage.stageHeight
        // egret.Tween.get(bottom).to({ y: stage.stageHeight - bottom.height }, 500, egret.Ease.bounceOut)
    };
    GameStartPanel.prototype.init = function () {
        var stage = egret.MainContext.instance.stage;
        var img = new egret.Bitmap();
        img.texture = RES.getRes('1s_png');
        img.x = 0;
        img.y = 0;
        // img.alpha = .6
        this.img = img;
        this.addChildAt(this.img, 0);
        var logo = new egret.Bitmap();
        logo.texture = RES.getRes('logo2_png');
        logo.width = 751 * .5;
        logo.height = 599 * .5;
        this.logo = logo;
        this.addChild(this.logo);
        this.startBtn = new Buttons();
        this.addChild(this.startBtn);
        this.startBtn.init(1, '立即免费拿');
        // this.startPK = new Buttons()
        // this.addChild(this.startPK)
        // this.startPK.init(4, '疯狂模式')
        // const pk: egret.Bitmap = new egret.Bitmap()
        // pk.texture = RES.getRes('pk_png')
        // pk.width = 94 * .5
        // pk.height = 70 * .5
        // pk.y = 486
        // this.PK = pk
        // this.addChild(this.PK)
        // 生成底部
        // this.bottom = new Bottom()
        // this.addChild(this.bottom)
        // this.bottom.init()
        // this.bottom.addEventListener(Bottom.FRIENDS_RANK, this.friendsRank, this)
        // this.bottom.addEventListener(Bottom.SKIN, this.showSkinDialog, this)
        // this.btnClose = new egret.Bitmap(RES.getRes('close_png'));
        // this.btnClose.width = 25
        // this.btnClose.height = 25
        // this.btnClose.x = stage.stageWidth * 4 / 5 + 30
        // this.btnClose.y = 65
        // this.btnClose.touchEnabled = true
        // this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        //   this.friendsRank()
        //   this.removeChild(this.btnClose)
        // }, this);
    };
    GameStartPanel.prototype.onTouchTap = function (mode) {
        if (mode === void 0) { mode = 1; }
        // mode1：简单
        // mode2：疯狂
        if (mode === 1) {
            this.dispatchEventWith(GameStartPanel.GAME_START_1);
        }
        else if (mode === 2) {
            this.dispatchEventWith(GameStartPanel.GAME_START_2);
        }
    };
    GameStartPanel.prototype.end = function () {
        var _a = this, startBtn = _a.startBtn, onTouchTap = _a.onTouchTap;
        startBtn.$touchEnabled = false;
        if (startBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP)) {
            startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, onTouchTap, this);
        }
    };
    GameStartPanel.prototype.friendsRank = function () {
        var platform = window.platform;
        if (this.isdisplay) {
            this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
            this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
            this.isdisplay = false;
            platform.openDataContext.postMessage({
                isDisplay: this.isdisplay,
                text: 'hello',
                year: (new Date()).getFullYear(),
                command: "close"
            });
        }
        else {
            //处理遮罩，避免开放数据域事件影响主域。
            this.rankingListMask = new egret.Shape();
            this.rankingListMask.graphics.beginFill(0x000000, 1);
            this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
            this.rankingListMask.graphics.endFill();
            this.rankingListMask.alpha = 0.5;
            this.rankingListMask.touchEnabled = true;
            this.addChild(this.rankingListMask);
            //主要示例代码开始
            this.bitmap = platform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
            this.addChild(this.bitmap);
            //简单实现，打开这关闭使用一个按钮。
            this.addChild(this.btnClose);
            //主域向子域发送自定义消息
            platform.openDataContext.postMessage({
                isDisplay: this.isdisplay,
                text: 'hello',
                year: (new Date()).getFullYear(),
                command: "open"
            });
            //主要示例代码结束            
            this.isdisplay = true;
        }
    };
    GameStartPanel.prototype.showSkinDialog = function () {
        var stage = egret.MainContext.instance.stage;
        this.skinMask = new egret.Shape();
        this.skinMask.graphics.beginFill(0x000000, .2);
        this.skinMask.graphics.drawRoundRect(0, 0, stage.stageWidth, stage.stageHeight, 10);
        this.skinMask.graphics.endFill();
        this.skinMask.touchEnabled = true;
        this.addChild(this.skinMask);
        this.skinDialog = new SkinDialog();
        this.addChild(this.skinDialog);
        this.skinDialog.x = stage.stageWidth / 2 - this.skinDialog._width / 2;
        this.skinDialog.y = stage.stageHeight / 2 - this.skinDialog._height / 2;
        this.skinDialog.addEventListener(SkinDialog.CLOSE_SKIN, this.hideSkinDialog, this);
    };
    GameStartPanel.prototype.hideSkinDialog = function () {
        this.removeChild(this.skinMask);
        this.removeChild(this.skinDialog);
        this.skinDialog.removeEventListener(SkinDialog.CLOSE_SKIN, this.hideSkinDialog, this);
    };
    GameStartPanel.GAME_START_1 = 'gamestart1';
    GameStartPanel.GAME_START_2 = 'gamestart2';
    return GameStartPanel;
}(egret.Sprite));
__reflect(GameStartPanel.prototype, "GameStartPanel");
//# sourceMappingURL=GameStartPanel.js.map