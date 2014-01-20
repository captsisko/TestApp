Ext.define('Test.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar',
        // 'Ext.Video'
    ],

    config: {
        tabBarPosition: 'bottom',

        items: [//bottom items
            /*{
                xtype: 'topbanner'
            },*/
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    }/*,
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }*/
                ]
            },{
                xtype: 'topbanner'
                /*docked: 'top',
                xtype: 'topbanner',
                title: 'testing top menu',
                items: [
                    {
                        iconCls: 'user',
                        align: 'right',
                        ui: 'plain',
                        iconMask: true,
                        html: '<p>testing#1 ... testing#1</p>',
                    },
                    {
                        iconCls: 'star',
                        align: 'left',
                        html: '<p>testing#2 ... testing#2</p>',
                    }
                ]*/
            },{
                xtype: 'titlebar',
                title: 'Slide Nav',
                docked: 'top',
                items: [
                    {
                        align: 'left',
                        name: 'nav_btn',
                        iconCls: 'list',
                        ui: 'plain'
                    }
                ]
            }//close navigation

        ]//close bottom items
    }
});
