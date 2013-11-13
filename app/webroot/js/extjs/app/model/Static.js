Ext.define('ZEXY.model.Static', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id'},
		{name: 'type'},
		{name: 'content'}
	],
	
	proxy:{
		type: 'rest',
		api: {
			read: '/statics'
		},
		reader: {
			type: 'json',
			messageProperty: 'message',
			root: 'data',
			totalProperty: 'total'
		}
	}
});
