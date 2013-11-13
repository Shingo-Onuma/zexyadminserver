Ext.define('ZEXY.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires: [
		'ZEXY.view.viewport.ContainerMainArea',
		'ZEXY.view.viewport.ContainerHeader',
		'ZEXY.view.viewport.ContainerMenu',
		'ZEXY.view.viewport.ContainerFooter',
	],

	layout: 'border',
	initComponent: function() {
		console.log("Viewport is initComponent");
		var items = [
			{
				xtype: 'container',
				region: 'north',
				layout: 'hbox',
				items:[
					{
						html: "ZEXY ADMINISTRATION MANAGEMENT",
						padding: 5,
						flex: 1

					},{
						margin: 5,
						xtype: 'button',
						text: 'Log out',
						width: 100,
						handler: function(){
							window.open("/users/logout","_self")							
						}
					}
				]
			},
			{
				xtype: 'containermainarea',
				region: 'center',
				padding: 5,
			},
			{
				xtype: 'container',
				region: 'south',
				items:[
					{
						html: "Copyright @2014, GMO TECH",
						padding: 5,
					}
				]
			}
		];
		var me = this;
		this.items = items;
		this.callParent();
	}
});