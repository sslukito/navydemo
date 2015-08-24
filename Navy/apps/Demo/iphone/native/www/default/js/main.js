
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	MQA.startSession({
		versionName: "1.0", // app release version
        android: {
            applicationKey: "1g0086d8a31b279f5deb9160b222e23af0ced9d31dg0g1g31fa0d42",
            versionNumber: "1" // app version number
        },
        ios: {
            applicationKey: "1g18918bcac819ed46bcdc0f33ce4a581619df630bg0g1g42890d80",
            versionNumber: "1.0" // app version number
        },
        // or "MARKET_MODE" or "SILENT_MODE"
        mode: "QA_MODE",        
        // Enable problem reporting with a shake.
        shake: true     
    });
}

/* JavaScript content from js/main.js in folder iphone */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}