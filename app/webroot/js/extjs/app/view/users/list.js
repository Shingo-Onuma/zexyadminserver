Ext.define('ZEXY.view.users.list', {
	// extend: 'Ext.grid.GridPanel',
	extend: 'Ext.ux.LiveSearchGridPanel',
	title: 'Application',
	alias: 'widget.userslist',
	requires: [
		'Ext.grid.*',
		'Ext.data.*',
		'Ext.util.*',
		'Ext.state.*',
		'Ext.form.*',
		'Ext.ux.CheckColumn',
	],
	header: false,
	viewConfig: {
		loadMask: true
	},
	initComponent:function() {
		var me = this;

		me.id = 'users-list';
		
		var usersStore = Ext.getStore("Users");
		var listLocations = usersStore.load({
			scope: me,
			callback: function(records, operation, success) {
				console.log("load users completed");
			}
		});

		me.store = usersStore;
		me.columns = [
			{
				text		: 'id',
				sortable	: true,
				flex		: 1,
				draggable 	: false,
				dataIndex	: 'id'
			},
			{
				text		: 'username',
				sortable	: true,
				flex		: 4,
				draggable 	: false,
				dataIndex	: 'username',
				listeners	: {
					click: function(grid){
						// var selectedRecord = grid.selModel.selected.items[0];
						// console.log(selectedRecord);

						// var view = Ext.create('ZEXY.view.locationpopup',{
						// 	xtype				: "locationpopup",
						// 	parent 				: me,
						// 	record 				: selectedRecord
						// });

						// ZEXY.popups.show('Edit Location', view, function(obj, callback) {
						
						// });

					}
				}
			},
			{
				text		: 'email',
				sortable	: true,
				flex		: 4,
				draggable 	: false,
				dataIndex	: 'email'
			},
			{
				text		: 'created',
				sortable	: true,
				flex		: 2,
				draggable 	: false,
				dataIndex	: 'created'
			},
		];

		// paging bar on the bottom
		me.fbar = Ext.create('Ext.PagingToolbar', {
			store		: usersStore,
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