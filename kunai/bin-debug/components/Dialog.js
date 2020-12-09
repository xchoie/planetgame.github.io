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
 * 游戏结束弹窗
 */
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super.call(this) || this;
        _this._width = 280;
        _this._height = 400;
        _this.GAME_RESTART = 'gamerestart';
        _this.GAME_SHARE = 'gameshare';
        _this.GAME_AD = 'gamead';
        _this.init();
        return _this;
    }
    Dialog.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, maskBlack, tip, homeBtn, restartBtn, shareBtn, adBtn, data, that, url, imgLoader, nickname;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, maskBlack = _a.maskBlack, tip = _a.tip, homeBtn = _a.homeBtn, restartBtn = _a.restartBtn, shareBtn = _a.shareBtn, adBtn = _a.adBtn;
                        maskBlack = new egret.Shape();
                        maskBlack.graphics.beginFill(0x000000, .8);
                        maskBlack.graphics.drawRoundRect(0, 0, this._width, this._height, 10);
                        this.addChild(maskBlack);
                        tip = new egret.TextField();
                        tip.y = 15;
                        tip.text = '本次得分';
                        tip.textColor = 0xffffff;
                        tip.size = 18;
                        tip.x = this._width / 2 - tip.width / 2;
                        this.addChild(tip);
                        homeBtn = new Buttons();
                        homeBtn.init(3, '回到首页');
                        homeBtn.scaleX = .5;
                        homeBtn.scaleY = .5;
                        this.addChild(homeBtn);
                        homeBtn.x = 30;
                        homeBtn.y = 300;
                        homeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                            _this.dispatchEventWith(Dialog.GO_HOME);
                        }, this);
                        restartBtn = new Buttons();
                        restartBtn.init(1, '再玩一次');
                        this.addChild(restartBtn);
                        restartBtn.x = 160;
                        restartBtn.y = 300;
                        restartBtn.scaleX = .5;
                        restartBtn.scaleY = .5;
                        restartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                            _this.dispatchEventWith(Dialog.RESTART);
                        }, this);
                        shareBtn = new Buttons();
                        shareBtn.init(2, '炫耀战绩');
                        this.addChild(shareBtn);
                        shareBtn.x = 30;
                        shareBtn.y = 350;
                        shareBtn.scaleX = .5;
                        shareBtn.scaleY = .5;
                        shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                            platform.share();
                        }, this);
                        adBtn = new Buttons();
                        adBtn.init(4, '免费复活');
                        this.addChild(adBtn);
                        adBtn.x = 160;
                        adBtn.y = 350;
                        adBtn.scaleX = .5;
                        adBtn.scaleY = .5;
                        adBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                            var date = new Date();
                            var key = "" + date.getFullYear() + date.getMonth() + date.getDate();
                            var that = _this;
                            platform.getData(key, function (res) {
                                if (!res || !res.data) {
                                    that.dispatchEventWith(Dialog.REBIRTH);
                                    platform.setData({ key: key, value: 1 });
                                }
                                else if (res.data) {
                                    var num = res.data;
                                    num += 1;
                                    if (num <= 3) {
                                        that.dispatchEventWith(Dialog.REBIRTH);
                                        platform.setData({ key: key, value: num });
                                    }
                                    else {
                                        that.dispatchEventWith(Dialog.NOCHANCE);
                                    }
                                }
                            });
                        }, this);
                        this.scores = new egret.TextField();
                        this.scores.text = '0';
                        this.scores.textAlign = egret.HorizontalAlign.CENTER;
                        this.scores.size = 22;
                        this.scores.textColor = 0xffffff;
                        this.scores.y = 40;
                        this.scores.x = this._width / 2 - this.scores.width / 2;
                        this.addChild(this.scores);
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 1:
                        data = _b.sent();
                        console.log(111, data);
                        that = this;
                        url = data.avatarUrl;
                        imgLoader = new egret.ImageLoader();
                        imgLoader.crossOrigin = '';
                        imgLoader.load(url);
                        imgLoader.once(egret.Event.COMPLETE, function (e) {
                            if (e.currentTarget.data) {
                                var texture = new egret.Texture();
                                texture.bitmapData = e.currentTarget.data;
                                var img = new egret.Bitmap(texture);
                                img.width = 100;
                                img.height = 100;
                                that.addChild(img);
                                img.x = that._width / 2 - img.width / 2;
                                img.y = 100;
                            }
                        }, this);
                        nickname = new egret.TextField();
                        nickname.size = 14;
                        nickname.textColor = 0xffffff;
                        nickname.text = data.nickName;
                        nickname.x = this._width / 2 - nickname.width / 2;
                        nickname.y = 220;
                        this.addChild(nickname);
                        return [2 /*return*/];
                }
            });
        });
    };
    Dialog.prototype.setScores = function (text) {
        this.scores.text = "" + text;
        this.scores.x = this._width / 2 - this.scores.width / 2;
    };
    Dialog.GO_HOME = 'gohome';
    Dialog.RESTART = 'restart';
    Dialog.SHARE_WX = 'sharewx';
    Dialog.VIEW_AD = 'viewad';
    Dialog.REBIRTH = 'rebirth';
    Dialog.NOCHANCE = 'nochance';
    return Dialog;
}(egret.Sprite));
__reflect(Dialog.prototype, "Dialog");
//# sourceMappingURL=Dialog.js.map