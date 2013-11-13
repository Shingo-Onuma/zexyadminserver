Ext.define('ZEXY.view.viewport.ContainerMainArea', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.containermainarea',

	requires: [
		'Ext.tab.*',
		'ZEXY.view.users.list',
		'ZEXY.view.statics.list'
	],
	// layout: 'fit',
	// autoScroll: true,

	initComponent:function(){
		var me = this;
		
		this.items = [
			{
				title	: 'Users Management',
				layout  : 'fit',
				items   : [
					{
						xtype: 'container',
						autoScroll: true,
						title: 'Users Management',
						layout: 'fit',
						padding: 5,
						items:[
							{
								xtype: 'userslist',
								layout: 'fit'
							}
						]
					}
				]
			},
			{
				title	: 'Static Pages Management',
				layout  : 'fit',
				items   : [
					{
						xtype: 'container',
						autoScroll: true,
						title: 'Static Pages Management',
						layout: 'fit',
						padding: 5,
						items:[
							{
								xtype: 'staticslist', 
								layout: 'fit'
							}
						]
					}
				]
			},
		];

		this.listeners = {
			afterrender: function() {
				
			},
			deactive: function(thisTab, eOpts) {

			}
		};

		this.callParent();
	}

});