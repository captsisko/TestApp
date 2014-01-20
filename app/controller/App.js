Ext.define('Test.controller.App', {
    extend: 'Ext.app.Container',

    config: {
    	refs: {
    		main: 'main',
    		navigation: 'navigation',

    		navBtn: 'button[name="nav_btn"]'
    	},

    	control: {
    		navBtn: {
    			tap: 'toggleNav'
    		},

    		navigation: {
    			itemtap: function(list, index, target, record){
    				this.toggleNav();
    			}
    		}
    	}//control
    },//config

    /**
     * Toggle the slide navigation view
     */
     toggleNav: function(){
     	var me = this, mainEl = me.getMain().element;

     	if(mainEl.hasCls('out')){
     		mainEl.removeCls('out').addCls('in');
     	}else{
     		mainEl.removeCls('in').addCls('out');
     	}
     }

});