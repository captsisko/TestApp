Ext.define('Test.controller.TopBanner', {
	extend: 'Ext.app.Controller',

	config: {
		/*refs: {
			topBanner: 'topbanner'
		},*/
		control: {
			'button[action=UserBannerButton]': {
				tap: 'userbannerbutton'
			}
		}
	},

	userbannerbutton: function(event){
		console.log('user banner button responding: ' + event);
	}

});