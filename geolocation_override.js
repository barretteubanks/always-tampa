// Immediately Invoked Function Expression (IIFE) to avoid polluting global scope
(() => {
    // Tampa, Florida coordinates to return for all geolocation requests
    const TampaCoords = {
        latitude: 27.9506, // Tampa, FL
        longitude: -82.4572,
        accuracy: 100
    };

    // Override browser's geolocation API to always return Tampa coordinates
    function mockGeolocation() {
        console.log("Running location override")

        // Override one-time location requests
        navigator.geolocation.getCurrentPosition = (success, error) => {
            success({ coords: TampaCoords, timestamp: Date.now() });
        };

        // Override continuous location monitoring
        navigator.geolocation.watchPosition = (success, error) => {
            success({ coords: TampaCoords, timestamp: Date.now() });
        };
    }

    mockGeolocation();
})();
