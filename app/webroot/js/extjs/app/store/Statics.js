Ext.define('ZEXY.store.Statics', {
	extend: 'Ext.data.Store',
	model: 'ZEXY.model.Static',
	pageSize	: 25,
	totalProperty: 'total'
});