(() => {
    const TampaCoords = {
        latitude: 27.9506, // Tampa, FL
        longitude: -82.4572,
        accuracy: 100
    };

    function mockGeolocation() {
        console.log("Running location override")
        navigator.geolocation.getCurrentPosition = (success, error) => {
            success({ coords: TampaCoords, timestamp: Date.now() });
        };

        navigator.geolocation.watchPosition = (success, error) => {
            success({ coords: TampaCoords, timestamp: Date.now() });
        };
    }

    mockGeolocation();
})();
