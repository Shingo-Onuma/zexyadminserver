Ext.define('ZEXY.view.locationdetails', {
	extend: 'Ext.panel.Panel',
	title: 'Application',
	alias: 'widget.locationdetails',
	requires: [
		'ZEXY.view.locationphotos'
	],
	header: false,
	initComponent:function() {
		var me = this;
		me.id = 'location-detail';

		var record = this.record;

		if(record){
			me.jsonData = record.data;
		}else{
			// var data = {};
			// data.title = "";
			// data.address = "";
			// data.latitude = "";
			// data.longitude = "";
			// data.title = "";
			// data.title = "";
			me.jsonData = {};
		}

		this.items = [
			{
				xtype:'panel',
				margin: 10,
				// frame: false,
				border: false, 
				items:[
					{
						xtype:"textfield",
						fieldLabel:"Title",
						labelWidth: 30,
						width: '100%',
						margin: '5 0',
						name:'title',
						value: me.jsonData.title,
						listeners:{
							blur:function(){
								me.jsonData[this.name] = this.rawValue;
							}
						}
					},
					{
						xtype:"textfield",
						fieldLabel:"Address",
						labelWidth: 30,
						width: '100%',
						margin: '5 0',
						value: me.jsonData.address,
						name: 'address',
						listeners:{
							blur:function(){
								me.jsonData[this.name] = this.rawValue;
							}
						}
					},
					{
						xtype: 'container',
						layout: 'hbox',
						margin: '5 0',
						items:[
							{
								xtype:"textfield",
								fieldLabel:"Latitude",
								name: 'latitude',
								flex: 1,
								margin: '0 5',
								value: me.jsonData.latitude,
								listeners:{
									blur:function(){
										me.jsonData[this.name] = this.rawValue;
									}
								}
							},
							{
								xtype:"textfield",
								fieldLabel:"Longitude",
								flex: 1,
								margin: '0 5',
								value: me.jsonData.longitude,
								name: 'longitude',
								listeners:{
									blur:function(){
										me.jsonData[this.name] = this.rawValue;
									}
								}
							}
						]
					},
					{
						xtype: 'container',
						layout: 'hbox',
						margin: '5 0',
						items:[
							{
								xtype:"textfield",
								fieldLabel:"Website",
								flex: 1,
								margin: '0 5',
								value: me.jsonData.website,
								name: 'website',
								listeners:{
									blur:function(){
										me.jsonData[this.name] = this.rawValue;
									}
								}
							},
							{
								xtype:"textfield",
								fieldLabel:"Phone",
								flex: 1,
								margin: '0 5',
								value: me.jsonData.phone,
								name: 'phone',
								listeners:{
									blur:function(){
										me.jsonData[this.name] = this.rawValue;
									}
								}
							}
						]
					},
					{
						xtype: 'container',
						layout: 'hbox',
						margin: '5 0',
						items:[
							{
								xtype:"combo",
								fieldLabel:"Type",
								flex: 1,
								margin: '0 5',
								value: me.jsonData.type,
								name:'type',

								listeners:{
									blur:function(){
										console.log(this);
										me.jsonData[this.name] = this.rawValue;
									}
								}
							},
							{
								xtype:"textfield",
								fieldLabel:"Popular Point",
								flex: 1,
								margin: '0 5',
								value: me.jsonData.popular_point,
								name: 'popular_point',
								listeners:{
									blur:function(){
										me.jsonData[this.name] = this.rawValue;
									}
								}
							}
						]
					},
					{
						xtype:"textareafield",
						fieldLabel:"Description",

						labelWidth: 30,
						width: '100%',
						margin: '5 0',
						value: me.jsonData.description,
						name: 'description',
						listeners:{
							blur:function(){
								me.jsonData[this.name] = this.rawValue;
							}
						}
					},
					{
						xtype: 'container',
						layout: 'hbox',
						margin: '5 0',
						items:[
							{
								xtype:"textfield",
								fieldLabel:"How get there 1",
								name: 'get_there_info',
								value: me.jsonData.get_there_info,
								flex: 1,
								margin: '0 5',
								listeners:{
									blur:function(){
										me.jsonData[this.name] = this.rawValue;
									}
								}
							},
							{
								xtype:"textfield",
								fieldLabel:"phone",
								name: 'get_there_number',
								value: me.jsonData.get_there_number,
								flex: 1,
								margin: '0 5',
								listeners:{
									blur:function(){
										me.jsonData[this.name] = this.rawValue;
									}
								}
							}
						]
					},
					{
						xtype: 'container',
						layout: 'hbox',
						margin: '5 0',
						items:[

							{
								xtype:"textfield",
								fieldLabel:"How get there 2",
								name: 'get_there_1_info',
								value: me.jsonData.get_there_1_info,
								flex: 1,
								margin: '0 5',
								listeners:{
									blur:function(){
										me.jsonData[this.name] = this.rawValue;
									}
								}
							},
							{
								xtype:"textfield",
								fieldLabel:"phone",
								name: 'get_there_1_number',
								value: me.jsonData.get_there_1_number,
								flex: 1,
								margin: '0 5',
								listeners:{
									blur:function(){
										me.jsonData[this.name] = this.rawValue;
									}
								}
							}
						]
					}
				]
			}
		];

		this.callParent();
	}
});