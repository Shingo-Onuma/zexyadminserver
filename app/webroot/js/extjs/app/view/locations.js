Ext.define('ZEXY.view.locations', {
	// extend: 'Ext.grid.GridPanel',
	extend: 'Ext.ux.LiveSearchGridPanel',
	title: 'Application',
	alias: 'widget.locationslist',
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

		me.id = 'locations-list';
		
		var locationsStore = Ext.getStore("Locations");
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

						var view = Ext.create('ZEXY.view.locationpopup',{
							xtype				: "locationpopup",
							parent 				: me,
							record 				: selectedRecord
						});

						ZEXY.popups.show('Edit Location', view, function(obj, callback) {
						
						});

					}
				}
			},
			{
				text		: 'address',
				sortable	: true,
				flex		: 1,
				draggable 	: false,
				dataIndex	: 'address'
			},
			{
				text		: 'type',
				sortable	: true,
				flex		: 1,
				draggable 	: false,
				dataIndex	: 'type'
			},
		];

		// paging bar on the bottom
		me.fbar = Ext.create('Ext.PagingToolbar', {
			store		: locationsStore,
			displayInfo	: true,
			displayMsg	: 'Displaying topics {0} - {1} of {2}',
			emptyMsg	: 'No topics to display'
		});

		me.listeners = {
			afterrender: function() {
				var container = me,
					dockedItems = container.dockedItems,
					items = dockedItems.items;

				if (items && items.length > 0) {
					for (var i = 0; i < items.length; i++) {
						if (items[i].xtype == 'toolbar') {
							me.callbackAddItemToolbar(items[i]);
							//break;
						};
					};
				};
			},
		};

		me.callParent();
	},

	callbackAddItemToolbar: function(toolbar) {
		var me = this;

		var items = toolbar.items;

		me.toolbarItems = toolbar;

		if (items.items && items.items[0]) {
			items.items[0].hide();
		};

		if (items.items && items.items[3]) {
			items.items[3].setText(Translation['Frequency Keywords']);
		};

		me.recentSearch = [];

		toolbar.insert(2, {
			width	: 80,
			height	: 25,
			xtype	: 'button',
			text	: Translation['Search'],
			handler	: Ext.bind(me.handleSearch, me)
		});
	},

	handleSearch: function(){
		console.log('handling search');
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