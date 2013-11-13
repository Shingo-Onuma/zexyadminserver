Ext.define('ZEXY.view.locationpopup', {
	extend: 'Ext.tab.Panel',
	title: 'Application',
	alias: 'widget.locationpopup',
	requires: [
		// 'ZEXY.view.locationphotos'
		'ZEXY.view.locationphotos',
		'ZEXY.view.locationdetails'
	],
	header: false,
	initComponent:function() {
		this.width = 640;
		this.height = 400;
		this.id = 'location-popup';

		var record = this.record;

		this.items = [
			{
				title: 'Details',
				xtype: 'locationdetails',
				record: record
			},
			{
				title: 'Photos',
				xtype: 'locationphotos',
				record: record
			}
		];

		this.setDockItems();

		this.callParent();
	},

	setDockItems:function(){
		var me = this;
		this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'center'
            },
            items: [
	            {
	                minWidth: 80,
	                text: 'Save',
	                handler: function(){
	                	console.log('Save');
	                	ZEXY.popups.hidden();
	                	//console.log(me);
	                	//console.log(me.parent);
	                	//me.parent.doSave();
	                	Ext.getCmp('locations-list').doSave();
	                }
	            },
	            {
	                minWidth: 80,
	                text: 'Cancel',
	                handler: function(){
	                	console.log('Cancel');
	                	ZEXY.popups.hidden();
	                }
	            }
            ]
        }];
	}
});