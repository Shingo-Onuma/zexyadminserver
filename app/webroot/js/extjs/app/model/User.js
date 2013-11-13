Ext.define('ZEXY.model.User', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id'},
		{name: 'username'},
		{name: 'email'},
		{name: 'created'},
	],
	
	proxy:{
		type: 'rest',
		api: {
			read: '/users'
		},
		reader: {
			type: 'json',
			messageProperty: 'message',
			root: 'data',
			totalProperty: 'total'
		}
	}
});
