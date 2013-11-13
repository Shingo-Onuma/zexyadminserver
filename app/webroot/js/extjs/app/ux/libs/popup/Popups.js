Ext.onReady(function() {

	DASH.popups = function(){
		return{
			/**
			 *------------------------------------------------------------------------------------
			 * @Usage {Method using to }
			 * @params {}
			 * @return {void}
			 * @author {MinhNC}
			 *------------------------------------------------------------------------------------
			 */
			hidden: function() {
				var currentPoppup = Ext.getCmp('form-widgets-popup-container');

				if (currentPoppup) {
					currentPoppup.hide();
				}
			},

			/**
			 *------------------------------------------------------------------------------------
			 * @Usage {Method using to }
			 * @params {}
			 * @return {void}
			 * @author {MinhNC}
			 *------------------------------------------------------------------------------------
			 */
			addItems: function(popup, title, component, callback) {
				if (popup) {
					popup.removeAll();
					popup.add(component);
					popup.setTitle(title);

					return callback(popup, true);
				}
			},

			/*
			 *------------------------------------------------------------------------------------
			 * @Usage {Method using to }
			 * @params {}
			 * @return {void}
			 * @author {MinhNC}
			 *------------------------------------------------------------------------------------
			 */
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
						html		:'Empty content...',
						bodyPadding	: '20px 80px 80px 20px'
					}
				}

				var currentPoppup = Ext.getCmp('form-widgets-popup-container');

				if (currentPoppup) {
					DASH.popups.addItems(currentPoppup, title, component, function(newPopup, reCallback) {
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
						bodyPadding	: '20px',
						items		: [
							items
						]
					});

					return callback(popup, true);
				}
			},

			/**
			 * This class is used to call after process show
			 * @params :
			 * @version  1.0
			 * @author : Minh N.
			 * @created: 30:26 PM 3
			 *
			 */
			show: function(title, component, callback){
				this.callBackShow(title, component, function(obj, objCallback) {
					if (objCallback) {
						obj.show();

						if(typeof callback != 'undefined' && callback != '' && callback != null) {
							return callback(obj, objCallback);
						}
					};
				});

				//Call back
				/*if (callback) {
					popup.show();
					popup.setPosition(100, 50);
				}*/
			}
		}
	}();
});