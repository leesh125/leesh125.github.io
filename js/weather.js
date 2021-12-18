 // 성공했을때의 함수는 GeolocationPosition 객체를 넘겨줌
 // 그 객체에서 위도와 경도를 추출할 수 있음..ㄷ
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in ", lat, lng);
    console.log(position);
}

function onGeoError() {
    alert("Can't fint you.");
}

// 브라우저에서 위치 좌표를 줌(wifi, 위치, GPS 등등);;
// 첫번째 인자는 위치를 얻는걸 성공했을 때 실행될 함수
// 두번째 인자는 위치를 얻는걸 실패했을 때 실행될 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);