//  Inmediately Invoqued Function Expression

function noIIFE() {
  console.log("IIFE");
}

(function IIFE() {
  console.log("IIFE");
})();
