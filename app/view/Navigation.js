Ext.define('Test.view.Main', {
	extend: 'Ext.List',
	requires: ['Ext.data.Store'],
	xtype: 'navigation',

	config: {
		cls: 'nav-list',
		itemTpl: '{title}',
		data: [
			{
				title: 'Item#1'
			},
			{
				title: 'Item#2'
			},
			{
				title: 'Item#3'
			},
			{
				title: 'Item#4'
			}
		]
	}

});
