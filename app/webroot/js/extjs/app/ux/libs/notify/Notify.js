Xware.notify = function(){
	var msgCt;
	var topmsgCt;

	/**
	 *------------------------------------------------------------------------------------
	 * @Usage {Method using to create new container msg}
	 * @params {object options}
	 * @return {void}
	 * @author {MinhNC}
	 *------------------------------------------------------------------------------------
	 */
	function createBox(options){
		var message = '<div class="wd-msg-notify '+options.clsType+'"><h3 class="wd-notify-title">' + options.title + '</h3><a href="#" class="wd-notify-close" title="Close" alt="Close"></a><p class="wd-notify-message">' + options.message + '</p></div>';

		return message;
	}

	return{

		/**
		 *------------------------------------------------------------------------------------
		 * @Usage {Method using to }
		 * @params {}
		 * @return {void}
		 * @author {MinhNC}
		 *------------------------------------------------------------------------------------
		 */
		topmsg : function(options){
			if(!topmsgCt){
				topmsgCt = Ext.DomHelper.insertFirst(document.body, {id:'xware-notify-topmsg'}, true);
			}

			var body = Ext.getBody(),
				container = topmsgCt,
				newLeft	= body.getWidth()/2 - container.getWidth()/2;

			topmsgCt.setLeft(newLeft);

			Xware.notify.settingOptions(options, topmsgCt, 'topmsg')
		},
		/**
		 *------------------------------------------------------------------------------------
		 * @Usage {Method using to }
		 * @params {}
		 * @return {void}
		 * @author {MinhNC}
		 *------------------------------------------------------------------------------------
		 */
		msg : function(options){
			if (options) {
				//Define properties for message
				if(!msgCt){
					msgCt = Ext.DomHelper.insertFirst(document.body, {id:'xware-notify-msg'}, true);
				}

				Xware.notify.settingOptions(options, msgCt, 'msg');
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
		show: function(options) {
			var message		= options.message;
			var	component	= Ext.DomHelper.append(options.modeView, createBox(options), true);

			component.hide();

			//Call function to proccess begin show notify
			Xware.notify.beginShow(options, component);

			var task = new Ext.util.DelayedTask(function(){
				//Call function to proccess hidden show notify
				Xware.notify.endShow(options, component);
			});

			//Set dedlay to hidden notify
			if (options.autoHide) {
				task.delay(options.duration);

			} else {
				task.cancel();
			}

			//Set ico to close notify
			if (!options.isIcoClose) {
				component.select('.wd-notify-close').hide();
			}

			//Proccess if handle click ico close notify
			component.select('.wd-notify-close').on('click', function(){
				task.delay(0);

				return false;

			}, this, {
				single: true,
				delay: 0,
				stopEvent : true
			});
		},

		/**
		 *------------------------------------------------------------------------------------
		 * @Usage {Method using to proccess begin show notify}
		 * @params {object options, obecjt component}
		 * @return {void}
		 * @author {MinhNC}
		 *------------------------------------------------------------------------------------
		 */
		beginShow: function(options, component) {
			if (options && component) {
				switch(options.typeMsg) {
					case 'topmsg': {
						component.slideIn('l');

						break;
					}
					case 'msg': {
						component.slideIn('b');

						break;
					}
					default:{
						component.slideIn('b');

						break;
					}
				}
			}
		},

		/**
		 *------------------------------------------------------------------------------------
		 * @Usage {Method using to proccess end hidden notify}
		 * @params {object options, obecjt component}
		 * @return {void}
		 * @author {MinhNC}
		 *------------------------------------------------------------------------------------
		 */
		endShow: function(options, component) {
			if (options && component) {

				switch(options.typeMsg) {
					case 'topmsg': {
						component.ghost("r", {remove: true});

						break;
					}
					case 'msg': {
						component.ghost("t", {remove: true});

						break;
					}
					default: {
						component.ghost("t", {remove: true})

						break;
					}
				}
			}
		},

		/**
		 *------------------------------------------------------------------------------------
		 * @Usage {Method using to fadeOut and remove component}
		 * @params {object component}
		 * @return {void}
		 * @author {MinhNC}
		 *------------------------------------------------------------------------------------
		 */
		callbackShow: function(component) {
			component.fadeOut({
				endOpacity	: 0,
				duration	: 350,
				remove		: true,
				useDisplay	: false
			});
		},

		/**
		 *------------------------------------------------------------------------------------
		 * @Usage {Method using to }
		 * @params {}
		 * @return {void}
		 * @author {MinhNC}
		 *------------------------------------------------------------------------------------
		 */
		settingOptions: function(options, modeView, typeMsg) {
			var type		= (options.type) ? options.type : 'info',
				clsType		= Xware.notify.configCls(type),
				title		= (options.title) ? options.title : 'Title Notify',
				message		= (options.message) ? options.message : 'Message Notify',
				duration	= (options.duration) ? options.duration : 3000,
				isRemove	= (options.isRemove!=false && !options.isRemove) ? true : options.isRemove,
				isIcoClose	= (options.isIcoClose!=false && !options.isIcoClose) ? true : options.isIcoClose,
				autoHide	= (options.autoHide!=false && !options.autoHide) ? true : options.autoHide;

			var newOption = {
				title		: title,
				message		: message,
				duration	: duration,
				clsType		: clsType,
				modeView	: modeView,
				isIcoClose	: isIcoClose,
				autoHide	: autoHide,
				typeMsg		: typeMsg
			};

			Xware.notify.show(newOption);
		},
		/**
		 *------------------------------------------------------------------------------------
		 * @Usage {Method using to }
		 * @params {}
		 * @return {void}
		 * @author {MinhNC}
		 *------------------------------------------------------------------------------------
		 */
		configCls: function(type) {
			switch(type) {
				case 'info': {
					return 'wd-xware-notify-info';

					break;
				}
				case 'error': {
					return 'wd-xware-notify-error';

					break;
				}
				case 'message': {
					return 'wd-xware-notify-message';

					break;
				}
				case 'success': {
					return 'wd-xware-notify-success';

					break;
				}
				default: {
					return 'wd-xware-notify-info';

					break;
				}
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
		init : function(){
			if(!msgCt){
				msgCt = Ext.DomHelper.insertFirst(document.body, {id:'xware-notify-msg'}, true);
			}
			if(!topmsgCt){
				topmsgCt = Ext.DomHelper.insertFirst(document.body, {id:'xware-notify-topmsg'}, true);
			}
		}
	}
}();

Ext.onReady(Xware.notify.init);