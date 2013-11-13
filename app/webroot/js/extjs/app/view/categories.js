Ext.define('ZEXY.view.categories', {
	// extend: 'Ext.grid.GridPanel',
	extend: 'Ext.ux.LiveSearchGridPanel',
	title: 'Application',
	alias: 'widget.categorieslist',
	requires: [
		'Ext.grid.*',
		'Ext.data.*',
		'Ext.util.*',
		'Ext.state.*',
		'Ext.form.*',
		'Ext.ux.CheckColumn',
		'ZEXY.view.locationdetails'
	],
	header: false,
	viewConfig: {
		loadMask: true
	},
	initComponent:function() {
		var me = this;

		me.id = 'categories-list';
		
		var locationsStore = Ext.getStore("Types");
		var listLocations = locationsStore.load({
			scope: me,
			callback: function(records, operation, success) {
				console.log("load location completed");
			}
		});

		me.store = locationsStore;
		me.columns = [
			{
				text		: 'id',
				sortable	: true,
				flex		: 1,
				draggable 	: false,
				dataIndex	: 'id'
			},
			{
				text		: 'title',
				sortable	: true,
				flex		: 1,
				draggable 	: false,
				dataIndex	: 'title',
				listeners	: {
					click: function(grid){
						var selectedRecord = grid.selModel.selected.items[0];
						console.log(selectedRecord);

						var view = Ext.create('ZEXY.view.typepopup',{
							xtype				: "typepopup",
							parent 				: me,
							record 				: selectedRecord
						});

						ZEXY.popups.show('Edit Category', view, function(obj, callback) {
						
						});

					}
				}
			},
			{
				text		: 'description',
				sortable	: true,
				flex		: 1,
				draggable 	: false,
				dataIndex	: 'description'
			}
		];

		// paging bar on the bottom
		me.fbar = Ext.create('Ext.PagingToolbar', {
			store		: locationsStore,
			displayInfo	: true,
			displayMsg	: 'Displaying topics {0} - {1} of {2}',
			emptyMsg	: 'No topics to display'
		});

		me.callParent();
	},

	addLocation: function(){
		console.log("I am calling add Locations");
		var me = this;

		var view = Ext.create('ZEXY.view.locationpopup',{
			xtype				: "locationpopup",
			parent 				: me
			// record 				: selectedRecord
		});

		ZEXY.popups.show('Add Location', view, function(obj, callback) {
		
		});
	},

	doCreate: function(jsonData){
		var me = this;

		var urlCreate = '/content/content/createjson';

		Ext.Ajax.request({
			scope: me,
			url: urlCreate,
			method: 'POST',
			params: {

			},
			jsonData: jsonData,
			success:function(response, options) {
				console.log('Save success');
				var locationsStore = Ext.getStore("Locations");
				var listLocations = locationsStore.load({
					scope: me,
					callback: function(records, operation, success) {
						console.log("load location completed");
					}
				});
			}
		});
	},

	doUpdate: function(jsonData){
		var me = this;

		var urlUpdate = '/content/content/updatejson';

		Ext.Ajax.request({
			scope: me,
			url: urlUpdate,
			method: 'POST',
			params: {

			},
			jsonData: jsonData,
			success:function(response, options) {
				console.log('Save success');
				var locationsStore = Ext.getStore("Locations");
				var listLocations = locationsStore.load({
					scope: me,
					callback: function(records, operation, success) {
						console.log("load location completed");
					}
				});
			}
		});
	},

	doSave: function(){
		var me = this;
		console.log("doSave");

		var locationDetail = Ext.getCmp('location-detail');
		var jsonData = locationDetail.jsonData;

		if (jsonData.id) {
			me.doUpdate(jsonData);
		}else{
			me.doCreate(jsonData);
		}

		
	}
});