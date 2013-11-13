Ext.define('ZEXY.store.Locations', {
	extend: 'Ext.data.Store',
	model: 'ZEXY.model.Location',
	pageSize	: 25,
	totalProperty: 'total'
});