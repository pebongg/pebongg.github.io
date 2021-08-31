let overlayBlog = document.getElementById('overlayBlog');
let blogContainer = document.getElementById('blogContainer');
let readThingsboard = document.getElementById('readThingsboard');
let readHeight = document.getElementById('readHeight');
let readVoting = document.getElementById('readVoting');
let readTrash = document.getElementById('readTrash');
let readEnglish = document.getElementById('readEnglish');
let closeBlog = document.getElementById('closeBlog');

readThingsboard.addEventListener('click', () => {
    openBlogContent();
    createThingsboardContent();
    });
readHeight.addEventListener('click', () => {
    openBlogContent();
    createHeightContent();
});
readVoting.addEventListener('click', () => {
    openBlogContent();
    createVotingContent();
});
readTrash.addEventListener('click', () => {
    openBlogContent();
    createTrashContent();
});
readEnglish.addEventListener('click', () => {
    openBlogContent();
    createEnglishContent();
});

    function openBlogContent() {
        overlayBlog.style.zIndex = "9999"
        overlayBlog.style.opacity = "100%";
        document.body.style.overflow = "hidden";

        document.addEventListener('keydown', function(event){
            if (event.key === 'Escape') {
                closeBlogContent();
            }
        });
    }

    function createThingsboardContent() {
        let div = document.createElement("div");                
        div.id = "overlayBlogContent";
        div.innerHTML = 
        `<div class = "blogContentHead">
            <div class = "headTags">
                <a>Microcontroller</a>
                <a>Application</a>
            </div>
            <h1>Water Quality Sensor Monitoring use ESP32 on Thingsboard Platform</h1>
            <div class = "headInfo">
                <a>August 2019</a>
                <a>Dwi Kurnia Putra</a>
            </div>
        </div>
        <div class = "thingsboardBody">
            <div class="thingsboardCover">
                <p>Wordpress URL :<br><a target="blank" href="https://pebongg.wordpress.com/2019/08/21/sistem-monitoring-kualitas-air-pada-platform-thingsboard-menggunakan-esp-32/">
                https://pebongg.wordpress.com/2019/08/21/sistem-monitoring..<a></p>
                <iframe src="https://www.youtube.com/embed/5_4b4S6GQu0" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <img>
            </div>
            <div class = "thingsboardContent">
                <p>Device to use :
                    <li>DOIT ESP32 V1</li>
                    <li>Turbidity Sensor</li>
                    <li>Water Temperature Sensor DS18B20 + Resistor</li>
                    <li>Buzzer</li>
                    <li>LED</li>
                    <li>Arduino IDE (Software)</li>
                    <li>Thingsboard (Free Platform IOT)</li>
                    <br>
                <p>*Input or output sensors can be replaced according to other needs or concepts</p>
                </p>
                <div class = "tbContent1">
                    <h3>Steps</h3>
                    <h4>1. Make Device in Thingsboard</h4>
                    <p>Access : <a target="blank" href="https://demo.thingsboard.io">https://demo.thingsboard.io</a>
                    <br><br>
                    Login according to the email and password that has been created. Then enter the device menu, create a new device as shown below</p>
                    <div class="deviceTb">
                        <img class = "deviceTb1">
                        <img class = "deviceTb2">                        
                    </div>
                    <p>After the device is created, then open the details of the device to see the access token. Please save this token for later use in the program</p>
                </div>
                <div class = "tbContent2">
                    <h4>2. Installing ESP32 Firmware on Arduino IDE</h4>
                    <p>Download and install Arduino IDE, then once installed open Arduino IDE and go to File->Preferences. Add ESP32 Board URL</p>
                    <input type="text" value="https://dl.espressif.com/dl/package_esp32_index.json" readonly></input>
                    <img class="tb2Img1">
                    <p>When finished select Tools->Board…->Board Manager. Search for esp32 and install it (here I'm using version 1.0.1)</p>
                    <img class="tb2Img2">
                </div>
                <div class = "tbContent3">
                    <h4>3. Installing Required Library in Arduino IDE</h4>
                    <p>Some of the libraries used in the Arduino IDE Software :
                        <br>
                        <li>Library Thingsboard by Thingsboard Team v0.2.0</li>
                        <li>Library PubSubClient by Nick O'Leary v2.7.0</li>
                        <li>Library ArduinoHttpClient by Arduino v0.3.2</li>
                        <li>Library ArduinoJson by Beniot Blanchon v6.9.1</li>
                        <br>
                        <p>*please adjust the version I use if an error occurs<br>
                        Go to Sketch->Include Libraries->Manage Libraries</p>
                        </p>
                        <div class="tbLibrary">
                            <img class="lib1">
                            <img class="lib2">
                            <img class="lib3">
                            <img class="lib4">
                        </div>
                </div>
                <div class = "tbContent4">
                    <h4>4. Code Program</h4>
                    <li>PIN 13 -> Input Water Temperature Sensor</li>
                    <li>PIN 34 -> Input Turbidity Sensor</li>
                    <li>PIN 14 -> Bazzer and LED Output</li>
                    <li>WIFI_AP_NAME -> Connected SSID Name</li>
                    <li>WIFI_PASSWORD -> Connected SSID Password</li>
                    <li>TOKEN -> Token from Device Created</li>
                    <li>THINGSBOARD_SERVER -> Server from Thingsboard</li>
                    <div class = "textCode">
                        #include<br>#include  //Sensor Suhu Air<br>
                        #include  //Sensor Suhu Air<br>
                        #include<br>#define WIFI_AP_NAME "xxxxxxxxxxx"<br>
                        #define WIFI_PASSWORD "xxxxxxxxxxx"<br>
                        #define TOKEN "xxxxxxxxxxx"<br>
                        #define THINGSBOARD_SERVER "demo.thingsboard.io"<br>
                        #define SERIAL_DEBUG_BAUD 115200<br>
                        #define ONE_WIRE_BUS 13 //Sensor Suhu Air<br><br>
                        OneWire oneWire(ONE_WIRE_BUS); //Sensor Suhu Air<br>
                        DallasTemperature sensors(&oneWire); //Sensor Suhu Air<br>
                        WiFiClient espClient;<br>
                        ThingsBoard tb(espClient);<br><br>
                        int status = WL_IDLE_STATUS;<br>
                        int quant = 20;<br>
                        int send_passed = 0;<br>
                        int send_delay = 2000;<br><br>
                        void setup() {<br>
                        // Initialize serial for debugging<br>
                        Serial.begin(SERIAL_DEBUG_BAUD);<br>
                        WiFi.begin(WIFI_AP_NAME, WIFI_PASSWORD); //ssid dan pw<br>
                        InitWiFi();<br>
                         pinMode(14, OUTPUT); //Bazzer dan LED<br>}<br>
                        void loop() {<br>
                        delay(quant);<br>
                        send_passed += quant;<br><br>
                        // Reconnect to ThingsBoard, if needed<br>
                        if (!tb.connected()) {<br>
                        // Connect to the ThingsBoard<br>
                        Serial.print("Connecting to: ");<br>
                        Serial.print(THINGSBOARD_SERVER);<br>
                        Serial.print(" with token ");<br>
                        Serial.println(TOKEN);<br>
                        if (!tb.connect(THINGSBOARD_SERVER, TOKEN)) {<br>
                        Serial.println("Failed to connect");<br>
                        return;<br>}<br>}<br>
                        if (send_passed > send_delay) {<br>
                        Serial.println("[DATA DIKIRIM KE THINGBOARD]");<br><br>
                        float ntu1 = (analogRead(34) *(-0.067)) + 146.65;<br>
                        float ntu = constrain(ntu1, 1, 100);<br><br>
                        sensors.requestTemperatures();<br>
                        float tempC = sensors.getTempCByIndex(0);<br>
                        if (isnan(tempC) || isnan(ntu)){<br>
                        Serial.println("failed to read sensor");<br>
                        } else {<br>
                        tb.sendTelemetryFloat("temperature", tempC);<br>
                        tb.sendTelemetryFloat("turbidity", ntu);<br>
                        }<br><br>
                        Serial.print("- Kekeruhan : ");<br>
                        Serial.print(ntu);<br>
                        Serial.println(" NTU");<br>
                        Serial.print("- Suhu : ");<br>
                        Serial.print(tempC);<br>
                        Serial.println(" *C");<br><br>
                        if ((tempC >= 35) || (ntu >= 27)) {<br>
                        digitalWrite(14, HIGH);<br>
                        }<br>else{<br>
                        digitalWrite(14, LOW);<br>
                        }<br><br>delay(2000);<br><br>send_passed = 0;<br>}<br><br>
                        // Process messages<br>tb.loop();<br>}<br><br>
                        void InitWiFi()<br>{<br>
                        Serial.println("Connecting to AP ...");<br>
                        // attempt to connect to WiFi network<br><br>
                        WiFi.begin(WIFI_AP_NAME, WIFI_PASSWORD);<br>
                        while (WiFi.status() != WL_CONNECTED) {<br>
                        delay(500);<br>
                        Serial.print(".");<br>
                        }<br>
                        Serial.println("Connected to AP");<br>
                        }<br><br>
                        void reconnect() {<br>
                        // Loop until we're reconnected<br>
                        status = WiFi.status();<br>
                        if ( status != WL_CONNECTED) {<br>
                        WiFi.begin(WIFI_AP_NAME, WIFI_PASSWORD);<br>
                        while (WiFi.status() != WL_CONNECTED) {<br>
                        delay(500);<br>
                        Serial.print(".");<br>
                        }<br>
                        Serial.println("Connected to AP");<br>
                        }<br>
                        }
                    </div>
                </div>
                <div class = "tbContent5">
                    <h4>5. Displaying Data on Thingsboard</h4>
                    <p>If the device is successfully connected,
                     the sensor data will be displayed on the telemetry on the device thingsboard. 
                     Then from this connected device, visualization data can be made on the thingsboard dashboard</p>
                     <div class ="displayTb">
                        <img class ="displayTb1">
                        <img class ="displayTb2">
                     </div>
                </div>
            </div>
        </div>
        `
        ;

        blogContainer.appendChild(div);
    }

    function createHeightContent() {
        let div = document.createElement("div");                
        div.id = "overlayBlogContent";
        div.innerHTML = 
        `<div class = "blogContentHead">
            <div class = "headTags">
                <a>Microcontroller</a>
            </div>
            <h1>Prototype Height Measuring Based Microcontroller using Serial Communication</h1>
            <div class = "headInfo">
                <a>November 2016</a>
                <a>Dwi Kurnia Putra</a>
            </div>
        </div>
        <div class = "HeightBody">
            <div>
            </div>
            <div>
            </div>
        </div>
        `
        ;

        blogContainer.appendChild(div);
    }

    function createVotingContent() {
        let div = document.createElement("div");                
        div.id = "overlayBlogContent";
        div.innerHTML = 
        `<div class = "blogContentHead">
            <div class = "headTags">
                <a>Application</a>
            </div>
            <h1>Simple Voting Application Based on Client-Server</h1>
            <div class = "headInfo">
                <a>November 2016</a>
                <a>Dwi Kurnia Putra</a>
            </div>
        </div>
        <div class = "VotingBody">
            <div>
            </div>
            <div>
            </div>
        </div>
        `
        ;

        blogContainer.appendChild(div);
    }

    function createTrashContent() {
        let div = document.createElement("div");                
        div.id = "overlayBlogContent";
        div.innerHTML = 
        `<div class = "blogContentHead">
            <div class = "headTags">
                <a>Microcontroller</a>
            </div>
            <h1>Smart Trash Box Based ATMega 8535</h1>
            <div class = "headInfo">
                <a>May 2016</a>
                <a>Dwi Kurnia Putra</a>
            </div>
        </div>
        <div class = "TrashBody">
            <div>
            </div>
            <div>
            </div>
        </div>
        `
        ;

        blogContainer.appendChild(div);
    }

    function createEnglishContent() {
        let div = document.createElement("div");                
        div.id = "overlayBlogContent";
        div.innerHTML = 
        `<div class = "blogContentHead">
            <div class = "headTags">
                <a>Application</a>
            </div>
            <h1>English Learning For Junior High School Children</h1>
            <div class = "headInfo">
                <a>May 2016</a>
                <a>Dwi Kurnia Putra</a>
            </div>
        </div>
        <div class = "EnglishBody">
            <div>
            </div>
            <div>
            </div>
        </div>
        `
        ;

        blogContainer.appendChild(div);
    }

closeBlog.addEventListener('click', closeBlogContent);

    function closeBlogContent() {
        overlayBlog.style.zIndex = "0"
        overlayBlog.style.opacity = "0";
        document.body.style.overflow = "visible";

        let overlayBlogContent = document.getElementById('overlayBlogContent');
        overlayBlogContent.remove();
    }