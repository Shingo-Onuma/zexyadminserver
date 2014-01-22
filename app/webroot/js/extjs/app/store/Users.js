Ext.define('ZEXY.store.Users', {
	extend: 'Ext.data.Store',
	model: 'ZEXY.model.User',
	pageSize	: 15,
	totalProperty: 'total'
});