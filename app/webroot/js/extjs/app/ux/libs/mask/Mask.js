Ext.onReady(function() {

DASH.mask = function(){
	/**
	 *------------------------------------------------------------------------------------
	 * @Usage {Method using to create new container msg}
	 * @params {object options}
	 * @return {void}
	 * @author {MinhNC}
	 *------------------------------------------------------------------------------------
	 */
	function createMask(message){
		var maskLoading = '<div class="wd-xware-mask-loading-component"></div><div class="wd-content-mask-loading"><div class="wd-ico-loading"></div><div class="wd-ico-message">'+message+'</div></div>';

		return maskLoading;
	}

	return{

		/**
		 *------------------------------------------------------------------------------------
		 * @Usage {Method using to set loading to component}
		 * @params {object component, string message, boolean isLoadBody}
		 * @return {void}
		 * @author {MinhNC}
		 *------------------------------------------------------------------------------------
		 */
		setLoading: function(component, message, isLoadBody) {
			if (component) {
				//Handle set loading is false
				if (message == 'false' || message == false) {
					DASH.mask.removeLoading(component);
				} else {

					var getContainer = Ext.get(component.id);

					if (getContainer) {
						var currentMask = getContainer.select('.wd-xware-mask-loading-component');

						if (currentMask.elements.length <= 0) {
							Ext.DomHelper.append(getContainer, createMask(message), true);

							DASH.mask.settingPosition(getContainer);

						} else {
							var contentMessage = getContainer.select('.wd-ico-message');

							contentMessage.elements[0].innerText = message;
							DASH.mask.settingPosition(getContainer);
						}
					}
				}
			}
		},

		/**
		 *------------------------------------------------------------------------------------
		 * @Usage {Method using to setting position for mask loading}
		 * @params {object getContainer}
		 * @return {void}
		 * @author {MinhNC}
		 *------------------------------------------------------------------------------------
		 */
		settingPosition: function(getContainer) {
			if (getContainer) {
				var widthContainer = getContainer.getWidth(),
					heightContainer = getContainer.getHeight(),
					content = Ext.select('.wd-content-mask-loading'),
					widthContent = content.elements[0].offsetWidth,
					heightContent = content.elements[0].offsetHeight,
					newLeft = widthContainer/2 - widthContent/2,
					newTop = heightContainer/2 - heightContent/2;

				content.setLeft(newLeft);
				content.setTop(newTop);
			}
		},

		/**
		 *------------------------------------------------------------------------------------
		 * @Usage {Method using to remove mask Loading for component}
		 * @params {}
		 * @return {void}
		 * @author {MinhNC}
		 *------------------------------------------------------------------------------------
		 */
		removeLoading: function(component) {
			if (component) {
				var getContainer = Ext.get(component.id);

				getContainer.select('.wd-xware-mask-loading-component').remove();

				getContainer.select('.wd-content-mask-loading').remove();
			}
		}
	}
}();

});