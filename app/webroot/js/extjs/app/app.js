Ext.Loader.setConfig({
	enabled:true,
	disableCaching: true
});

Ext.Loader.setPath('Ext.ux', '/js/extjs/app/ux');
Ext.application({
	name: 'ZEXY',
	appFolder: '/js/extjs/app',
	autoCreateViewport: true,
	controllers: [
		'AppController',
		// 'Commons',
		// 'Providers'
	],
	requires: [
		//'Ext.ux.LiveSearchGridPanel'

	],
	launch: function() {

	}
});

Ext.onReady(function() {
	ZEXY.popups = function(){
		return{
			hidden: function() {
				var currentPoppup = Ext.getCmp('form-widgets-popup-container');
				if (currentPoppup) {
					currentPoppup.hide();
				}
			},
			addItems: function(popup, title, component, callback) {
				if (popup) {
					popup.removeAll();
					popup.add(component);
					popup.setTitle(title);
					return callback(popup, true);
				}
			},
			callBackShow : function(title, component, callback){
				if (!title) {
					title	= "Popup Title";
				}
				if (component) {
					items	= component;
				} else {
					items	= {
						xtype		: 'panel',
						border		: false,
						html		:'Empty content...'
					}
				}
				var currentPoppup = Ext.getCmp('form-widgets-popup-container');
				if (currentPoppup) {
					ZEXY.popups.addItems(currentPoppup, title, component, function(newPopup, reCallback) {
						if (reCallback) {
							return callback(newPopup, true);
						}
					});
				} else {
					var popup = Ext.widget('window', {
						id			: 'form-widgets-popup-container',
						title		: title,
						modal		: true,
						border		: false,
						layout		: 'fit',
						autoShow	: true,
						resizable	: true,
						closeAction	: 'hide',
						items		: [
							items
						]
					});
					return callback(popup, true);
				}
			},
			show: function(title, component, callback){
				this.callBackShow(title, component, function(obj, objCallback) {
					if (objCallback) {
						obj.show();
						if(typeof callback != 'undefined' && callback != '' && callback != null) {
							return callback(obj, objCallback);
						}
					};
				});
			}
		}
	}();
});