const HTTP = new XMLHttpRequest();

function formatNumber(num) {
    return num
        .toString()
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

HTTP.open('GET', 'https://api.github.com/repos/pebongg/pebongg.github.io/languages');
HTTP.send();
HTTP.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        //console.log(this.responseText)
        document.getElementById("apiHTML").innerHTML = "HTML : " + formatNumber(data.HTML) + " %";
        document.getElementById("apiCSS").innerHTML = "CSS : " + formatNumber(data.CSS) + " %";
        document.getElementById("apiJavaScript").innerHTML = "Javascript : " + formatNumber(data.JavaScript) + " %";
    }
}