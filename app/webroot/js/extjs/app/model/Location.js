Ext.define('ZEXY.model.Location', {
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
		{name: 'photos'},
		{name: 'get_there_number'},
		{name: 'get_there_info'},
		{name: 'get_there_1_number'},
		{name: 'get_there_1_info'},
	],
	
	proxy:{
		type: 'rest',
		api: {
			read: '/content/content/listjson'
		},
		reader: {
			type: 'json',
			messageProperty: 'message',
			root: 'data',
			totalProperty: 'total'
		}
	}
});
