Ext.define('ZEXY.view.statics.list', {
	extend: 'Ext.container.Container',
	title: 'Static',
	alias: 'widget.staticslist',

	initComponent:function() {
		var me = this;

		me.id = 'statics-list';
		
		var staticsStore = Ext.getStore("Statics");
		var listStatics = staticsStore.load({
			scope: me,
			callback: function(records, operation, success) {

				me.jsonData = {};

				var info_data, contact_data;
				for (var i = 0; i < records.length; i++) {
					if(records[i].get('type') == 'info'){
						console.log(records[i])
						me.jsonData['info'] = records[i].data;
						info_data = records[i].get('content');
					}else{
						me.jsonData['contact'] = records[i].data;
						contact_data = records[i].get('content');
					}
				};

				var txtarea_info = Ext.getCmp('textareafield-content-information');
				txtarea_info.setValue(info_data);

				var txtarea_contact = Ext.getCmp('textareafield-content-contact-information');
				txtarea_contact.setValue(contact_data);


			}
		});
		me.items = [
			{
				xtype: 'tabpanel',
				items:[
					{
			            title: 'Information',
			            xtype: 'panel',
			            layout: 'fit',
			            dockedItems:[
			            	{
						        xtype: 'toolbar',
						        id: 'toolbar1',
						        ui: 'light',
						        dock: 'bottom',
						        items: [
						        	'->',
						        	{
						        		xtype: 'button',
						        		text: 'save',
						        		handler: function(){
						        			me.doUpdate(me.jsonData);
						        		}
						        	}
						        ]
						    }
			            ],
			            items:[
			            	{
			            		margin: 10,
			            		labelWidth: 250,
			            		fieldLabel: '(html) Content of Information',
			            		id: 'textareafield-content-information',
			            		xtype: 'textareafield',
			            		listeners: {
			            			blur : function(){
			            				me.renderJsonData('info', this.rawValue);
			            			}
			            		}
			            	}
			            ]
			        },
			        {
			            title: 'Contact Information',
			            xtype: 'panel',
			            layout: 'fit',
			            dockedItems:[
			            	{
						        xtype: 'toolbar',
						        id: 'toolbar2',
						        ui: 'light',
						        dock: 'bottom',
						        items: [
						        	'->',
						        	{
						        		xtype: 'button',
						        		text: 'save',
						        		handler: function(){
						        			me.doUpdate(me.jsonData);
						        		}
						        	}
						        ]
						    }
			            ],
			            items: [
			            	{
			            		margin: 10,
			            		labelWidth: 250,
			            		fieldLabel: '(html) Content of Contact Information',
			            		id: 'textareafield-content-contact-information',
			            		xtype: 'textareafield',
			            		listeners: {
			            			blur : function(){
			            				me.renderJsonData('contact', this.rawValue);
			            			}
			            		}
			            	}
			            ]
			        }
				]
			}
		];

		me.callParent();
	},

	renderJsonData: function(type, rawValue){
		var me = this;

		me.jsonData[type].content = rawValue;

	},

	doUpdate: function(jsonData){
		var me = this;

		var urlUpdate = '/statics/edit';

		if(me.jsonData['info'] || me.jsonData['contact']){
			Ext.Ajax.request({
				scope: me,
				url: urlUpdate,
				method: 'POST',
				params: {

				},
				jsonData: me.jsonData,
				success:function(response, options) {
					console.log('Save success');

				}
			});
		}else{
			return;
		}

		
	}

});