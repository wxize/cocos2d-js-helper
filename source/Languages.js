var game = game || {}
game.language = window.location.href.indexOf('bookor')==-1?'en':'ch'

// test resource code
res = {
	startScene_bg_png : "res/start/"+lcocos.language+"/bg.png",
    startScene_play_png : "res/start/pub/play.png",
}
// 
var testLanguage = cc.Scene.extend({
	ctor:function(){
		this._super()

		var size = cc.winSize
		// start
		
		var bg = new cc.Sprite(res.startScene_bg_png)
		this.addChild(bg)
		
		// end
		return true
	}
})