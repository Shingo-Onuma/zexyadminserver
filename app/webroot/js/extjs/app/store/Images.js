Ext.define('ZEXY.store.Images', {
	extend: 'Ext.data.Store',
	model: 'ZEXY.model.Image',
	pageSize	: 10,
	totalProperty: 'total'
});