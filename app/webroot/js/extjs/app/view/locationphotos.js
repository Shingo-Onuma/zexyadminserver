Ext.define('ZEXY.view.locationphotos', {
	extend: 'Ext.panel.Panel',
	// extend: 'Ext.grid.GridPanel',
	title: 'Application',
	alias: 'widget.locationphotos',
	requires: [
	
	],
	header: false,
	initComponent:function() {
		var me = this;
		me.id = 'location-photo';

		var record = this.record;

		if(record){
			me.jsonData = record.data;
		}else{
			me.jsonData = {};
		}

		var imagesStore = Ext.getStore("Images");

		var store = imagesStore.load({
			scope: this,
			params: { 'content_id': me.jsonData.id },
			callback: function(records, operation, success) {
				console.log(records);
			}
		});

		this.items = [
			{
				xtype: 'gridpanel',
				store: store,
				columns: [
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
								var view = Ext.create('ZEXY.view.locationdetails',{
									xtype				: "locationdetails",
								});

								ZEXY.popups.show('Edit Location', view, function(obj, callback) {
								
								});

							}
						}
					},
					{
						text		: 'path',
						sortable	: true,
						flex		: 1,
						draggable 	: false,
						dataIndex	: 'address'
					}
				]
			}
		];

		this.setDockItems();

		this.callParent();
	},

	setDockItems:function(){
		var me = this;
		this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            ui: 'footer',
            layout: {
                pack: 'right'
            },
            items: [
	            {
	                minWidth: 80,
	                text: 'Add Photo',
	                handler: function(){
	                	console.log('Add photos');
	                }
	            }
            ]
        }];
	}
});