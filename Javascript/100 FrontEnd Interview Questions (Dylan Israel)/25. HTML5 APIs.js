// Geolocation API

if (navigator.geolocation) {
  // navigator object gives you access to location, check first if exist, some browsers block it
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log("Location", pos);
    },
    () => {
      console.log("No location");
    }
  );
}

// Drang and Drop API
// Wep Workers API
// and more...
