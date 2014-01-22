Ext.define('ZEXY.view.typepopup', {
	extend: 'Ext.panel.Panel',
	title: 'Application',
	alias: 'widget.typepopup',
	requires: [
	],
	header: false,
	initComponent:function() {
		var me = this;
		me.width = 400;
		me.height = 220;
		me.id = 'type-popup';

		var record = me.record;

		console.log(record);

		if (record) {
			me.jsonData = record.data;
		}else{
			me.jsonData = {};
		}

		me.items = [
			{
				xtype:"textfield",
				fieldLabel:"Id",
				labelWidth: 30,
				width: '100%',
				name:'id',
				value: me.jsonData.id,
				listeners:{
					blur:function(){
						me.jsonData[this.name] = this.rawValue;
					}
				}
			},
			{
				xtype:"textfield",
				fieldLabel:"Title",
				labelWidth: 30,
				width: '100%',
				name:'title',
				value: me.jsonData.title,
				listeners:{
					blur:function(){
						me.jsonData[this.name] = this.rawValue;
					}
				}
			},
			{
				xtype:"textareafield",
				fieldLabel:"Description",
				labelWidth: 30,
				width: '100%',
				name:'description',
				value: me.jsonData.description,
				listeners:{
					blur:function(){
						me.jsonData[this.name] = this.rawValue;
					}
				}
			},
			
		];

		me.setDockItems();

		me.callParent();
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