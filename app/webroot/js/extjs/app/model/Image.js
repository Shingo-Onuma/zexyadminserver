Ext.define('ZEXY.model.Image', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'id'},
		{name: 'title'},
		{name: 'latitude'},
		{name: 'longitude'},
		{name: 'created'},
		{name: 'address'},
		{name: 'type'},
		{name: 'phone'},
		{name: 'website'},
		{name: 'description'},
		{name: 'popular_point'},
		{name: 'user_id'},
	],
	
	proxy:{
		type: 'rest',
		api: {
			read: '/content/content/listimagejson'
		},
		reader: {
			type: 'json',
			messageProperty: 'message',
			root: 'data',
			totalProperty: 'total'
		}
	}
});
