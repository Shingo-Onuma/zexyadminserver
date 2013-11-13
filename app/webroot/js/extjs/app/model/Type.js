Ext.define('ZEXY.model.Type', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id'},
		{name: 'title'},
		{name: 'description'}
	],
	
	proxy:{
		type: 'rest',
		api: {
			read: '/content/content/listcatsjson'
		},
		reader: {
			type: 'json',
			messageProperty: 'message',
			root: 'data',
			totalProperty: 'total'
		}
	}
});
