export function getLocation() {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      }, () => {      
        resolve(fetch('https://ipapi.co/json')
          .then(res => res.json())
          .then(location => {
            return {
              lat: location.latitude,
              long: location.longitude
            };
          }));
      });
    });
}