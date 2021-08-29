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
        
        let totalCode = data.HTML + data.CSS + data.JavaScript;
        let html = data.HTML / totalCode * 100;
        let css = data.CSS / totalCode * 100;
        let javaScript = data.JavaScript / totalCode * 100;
        
        document.getElementById("apiHTML").innerHTML = "HTML : " + formatNumber(html) + " %";
        document.getElementById("apiCSS").innerHTML = "CSS : " + formatNumber(css) + " %";
        document.getElementById("apiJavaScript").innerHTML = "Javascript : " + formatNumber(javaScript) + " %";
    }
}