const HTTP = new XMLHttpRequest();

HTTP.open('GET', 'https://api.github.com/repos/pebongg/pebongg.github.io/languages');
HTTP.send();
HTTP.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        function formatNumber(num) {
            return num
                .toFixed(1)
        }
        let convert = 0.000902;
        document.getElementById("apiHTML").innerHTML = "HTML : " + formatNumber(data.HTML*convert) + " %";
        document.getElementById("apiCSS").innerHTML = "CSS : " + formatNumber(data.CSS*convert) + " %";
        document.getElementById("apiJavaScript").innerHTML = "Javascript : " + formatNumber(data.JavaScript*convert) + " %";
    }
}