Ext.define('ZEXY.store.Users', {
	extend: 'Ext.data.Store',
	model: 'ZEXY.model.User',
	pageSize	: 10,
	totalProperty: 'total'
});