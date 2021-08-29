const loadScript = async (url) => {
    const response = await fetch(url)
    const script = await response.text()
    Function(script)
}

const scriptUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAgIN_dYU7niTPM8Wj9gRq8tkNue4-mPIE&callback=myMap"
loadScript(scriptUrl)

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(-3.485860, 102.531254),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}