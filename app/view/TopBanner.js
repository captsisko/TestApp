Ext.define('Test.view.TopBanner', {
    // extend: 'Ext.tab.Panel',
    // extend: 'Ext.TabPanel',
    // extend: 'Ext.form.Panel',
    extend: 'Ext.Panel',
    xtype: 'topbanner',

    // requires: [
        // 'Ext.TabPanel',
    // ],

    config: {

    	docked: 'top',
        // xtype: 'titlebar',
        // title: 'testing top menu',
        items: [
            {
            	action: 'UserBannerButton',
                iconCls: 'user',
                xtype: 'button',
            	width: '50px',
            	// float: 'right',
                iconMask: true,
                // align: 'right',
            	// text: 'testing',
                // ui: 'action-square',
            }
        ]

    }//config

});