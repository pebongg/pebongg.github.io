let overlayBlog = document.getElementById('overlayBlog');
let topBlogButton = document.getElementById('to-top-blog');
let blogContainer = document.getElementById('blogContainer');
let readThingsboard = document.getElementById('readThingsboard');
let readHeight = document.getElementById('readHeight');
let readVoting = document.getElementById('readVoting');
let readTrash = document.getElementById('readTrash');
let readEnglish = document.getElementById('readEnglish');
let closeBlog = document.getElementById('closeBlog');

overlayBlog.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (overlayBlog.scrollTop > 20) {
        topBlogButton.style.opacity = "1";
        topBlogButton.style.right = "20px";
    } else {
        topBlogButton.style.opacity = "0";
        topBlogButton.style.right = "-50vw";
    }
}

topBlogButton.addEventListener('click', toTopBlog);

    function toTopBlog() {
        overlayBlog.scrollTop = "0";
    }

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
        <div class = "heightBody">
            <div class = "wpBlog">
                <p>Wordpress URL :</p>
                <a target = "blank" href = "https://pebongg.wordpress.com/2016/11/25/prototipe-pengukur-tinggi-badan-berbasis-mikrokontroller-menggunakan-komunikasi-serial/">
                https://pebongg.wordpress.com/2016/11/25/prototipe..</a>
            </div>
            <img class = "demoHeight">
            <p>To measure human height is generally done manually. Measurement is important in the world of science. 
            Currently, the results of scale readings on manual height measuring instruments carried out by humans have a 
            low level of accuracy and accuracy so that human errors often occur. So it takes a height measuring device that 
            can work automatically, carry out the measurement process, read the measurement results, as well as notify the measurement 
            results with the display output on the ATMega16 Microcontroller-based LCD. For measuring height, a proximity sensor or 
            ultrasonic sensor is used with a height measuring limit of 100 cm. The height measurement device uses 2 ATMega16 microcontrollers 
            which are connected to each other using serial communication.</p>
            <img class = "smHeight">
            <p>So here I will share with you the documents and all the project files of this height measurement prototype, complete, 
            just download and edit if you want.</p>
            <div class = "dwnHeight">
                <p>Document : <a target = "blank" href = "https://drive.google.com/file/d/0B43f1GIQUaKZTmNTLWxETVBzWTA/view?resourcekey=0-Hd45QoSv8qSbZlm7DF9emA">
                https://drive.google.com/file/d/...</a></p>
                <p>Code and Design : <a target = "blank" href = "https://www.mediafire.com/file/w70xy5yidufb5ex/Code+%26+Desain+Sismin.rar" >
                https://www.mediafire.com/file/w70xy5...</a></p>
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
        <div class = "votingBody">
            <div class = "wpBlog">
                <p>Wordpress URL :</p>
                <a target = "blank" href = "https://pebongg.wordpress.com/2016/11/20/aplikasi-voting-pemilihan-umum-sederhana-berbasis-client-server/">
                https://pebongg.wordpress.com/2016/11/20/aplikasi-voting...</a>
            </div>
            <div class = "textVoting">
                <p>This software is made using the Java platform, namely using the Netbeans IDE. Here's what the interface looks like:</p>
                <b>Intreface Server</b>
            </div>
            <img class = "votingServer">
            <div class = "textVoting">
                <p>In the interface for the server there is a start button to start the voting system from the client and 3 labels to display the voting results.</p>
                <b>Interface Client</b>
            </div>
            <img class = "votingClient">
            <div class = "textVoting">
                <p>In the interface for the client there are 3 buttons to vote and there is a label as a description.</p>
                <b>Voting System Scheme</b>
            </div>
            <img class = "votingScheme">
            <div class = "textVoting">
                <p>The server starts to give the client access to vote. The client makes a vote, where there are 3 voting options and after voting, on the client side a 
                statement will appear "Thank you for voting" and the client can only vote 1x, if the client tries to vote again, the statement "Sorry" will appear You've 
                already voted." And also the client cannot vote if it has not been given access by the server, if the client tries to vote it will display the statement 
                "Voting is invalid". While on the server side, if the client has voted, the number of voting results will appear depending on the number of clients who voted.</p>
                <p>Here's the link to download the client-server voting :</p>
                <a target = "blank" href = "http://www.mediafire.com/file/i27sbixx3lsbgx3/skvote.rar/file">Download File</a>
                <div class = "listVoting">Notes :
                    <li>Extract the skvote File</li>
                    <li>Open the Netbeans IDE Program</li>
                    <li>Open Project</li>
                    <li>Select skvoteclient & skvoteserver</li>
                    <li>Second Running Project</li>
                    <li>Finished</li>
                </div>
                <p>Hopefully useful, success always</p>
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
        <div class = "trashBody">
            <div class = "wpBlog">
                <p>Wordpress URL :</p>
                <a target = "blank" href = "https://pebongg.wordpress.com/2016/05/01/kotak-sampah-pintar-berbasis-atmega-8535/">
                https://pebongg.wordpress.com/2016/05/01/kotak-sampah...</a>
            </div>
            <iframe src="https://www.youtube.com/embed/h4Yy1WR13kg" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img>
            <div class = "textTrash">
                <p>This automatic garbage box uses a minimum system series MA-8535 made by Ceative Vision, Ping Sensor HC-SR04 as input and Servo Motor as output</p>
                <p>Berikut Source Codenya :</p>
            </div>
            <div class = "textCode">
                /*****************************************************<br>
                This program was produced by the<br>
                CodeWizardAVR V2.05.0 Professional<br>
                Automatic Program Generator<br>
                © Copyright 1998-2010 Pavel Haiduc, HP InfoTech s.r.l.<br>
                http://www.hpinfotech.com<br>
                <br>
                Project :<br>
                Version :<br>
                Date : 27-Apr-2016<br>
                Author :<br>
                Company :<br>
                Comments:<br>
                Chip type : ATmega8535<br>
                Program type : Application<br>
                AVR Core Clock frequency: 8.000000 MHz<br>
                Memory model : Small<br>
                External RAM size : 0<br>
                Data Stack size : 128<br>
                *****************************************************/<br>
                <br>
                #include <mega8535.h><br>
                #include <delay.h><br>
                unsigned int i = 0;<br>
                unsigned int i;<br>
                unsigned int jarak,waktu;<br>
                unsigned char data;<br>
                #define servo PORTD.0<br>
                #define echo PINB.0<br>
                #define trigger PORTC.0<br>
                <br>
                // Timer 0 overflow interrupt service routine<br>
                interrupt [TIM0_OVF] void timer0_ovf_isr(void)<br>
                {<br>
                // Place your code here<br>
                if(i>624)<br>
                {<br>
                i=0;<br>
                }<br>
                else<br>
                {<br>
                i++;<br>
                }<br>
                if(i<data)<br>
                {<br>
                servo=1;<br>
                }<br>
                else<br>
                {<br>
                servo=0;<br>
                }<br>
                }<br>
                <br>
                // Declare your global variables here<br>
                void sensor()<br>
                {<br>
                <br>
                waktu = 0;<br>
                <br>
                trigger = 1;<br>
                delay_us(10);<br>
                trigger = 1 ;<br>
                delay_us(10);<br>
                trigger = 0;<br>
                while (echo == 0){};<br>
                while (echo == 1)<br>
                    <br>
                {<br>
                waktu++;<br>
                }<br>
                <br>
                jarak = ((waktu/58)*1);<br>
                }<br>
                void main(void)<br>
                {<br>
                // Declare your local variables here<br>
                    <br>
                // Input/Output Ports initialization<br>
                // Port A initialization<br>
                // Func7=In Func6=In Func5=In Func4=In Func3=In Func2=In Func1=In Func0=In<br>
                // State7=T State6=T State5=T State4=T State3=T State2=T State1=T State0=T<br>
                PORTA=0x00;<br>
                DDRA=0x00;<br>
                    <br>
                // Port B initialization<br>
                // Func7=In Func6=In Func5=In Func4=In Func3=In Func2=In Func1=In Func0=In<br>
                // State7=T State6=T State5=T State4=T State3=T State2=T State1=T State0=T<br>
                PORTB=0x00;<br>
                DDRB=0x00;<br>
                    <br>
                // Port C initialization<br>
                // Func7=Out Func6=Out Func5=Out Func4=Out Func3=Out Func2=Out Func1=Out Func0=Out<br>
                // State7=0 State6=0 State5=0 State4=0 State3=0 State2=0 State1=0 State0=0<br>
                PORTC=0x00;<br>
                DDRC=0xFF;<br>
                    <br>
                // Port D initialization<br>
                // Func7=In Func6=In Func5=In Func4=In Func3=In Func2=In Func1=In Func0=In<br>
                // State7=T State6=T State5=T State4=T State3=T State2=T State1=T State0=T<br>
                PORTD=0x00;<br>
                DDRD=0xFF;<br>
                    <br>
                // Timer/Counter 0 initialization<br>
                // Clock source: System Clock<br>
                // Clock value: 8000.000 kHz<br>
                // Mode: Normal top=0xFF<br>
                // OC0 output: Disconnected<br>
                TCCR0=0x01;<br>
                TCNT0=0x00;<br>
                OCR0=0x00;<br>
                    <br>
                // Timer/Counter 1 initialization<br>
                // Clock source: System Clock<br>
                // Clock value: Timer1 Stopped<br>
                // Mode: Normal top=0xFFFF<br>
                // OC1A output: Discon.<br>
                // OC1B output: Discon.<br>
                // Noise Canceler: Off<br>
                // Input Capture on Falling Edge<br>
                // Timer1 Overflow Interrupt: Off<br>
                // Input Capture Interrupt: Off<br>
                // Compare A Match Interrupt: Off<br>
                // Compare B Match Interrupt: Off<br>
                TCCR1A=0x00;<br>
                TCCR1B=0x00;<br>
                TCNT1H=0x00;<br>
                TCNT1L=0x00;<br>
                ICR1H=0x00;<br>
                ICR1L=0x00;<br>
                OCR1AH=0x00;<br>
                OCR1AL=0x00;<br>
                OCR1BH=0x00;<br>
                OCR1BL=0x00;<br>
                    <br>
                // Timer/Counter 2 initialization<br>
                // Clock source: System Clock<br>
                // Clock value: Timer2 Stopped<br>
                // Mode: Normal top=0xFF<br>
                // OC2 output: Disconnected<br>
                ASSR=0x00;<br>
                TCCR2=0x00;<br>
                TCNT2=0x00;<br>
                OCR2=0x00;<br>
                    <br>
                // External Interrupt(s) initialization<br>
                // INT0: Off<br>
                // INT1: Off<br>
                // INT2: Off<br>
                MCUCR=0x00;<br>
                MCUCSR=0x00;<br>
                    <br>
                // Timer(s)/Counter(s) Interrupt(s) initialization<br>
                TIMSK=0x01;<br>
                    <br>
                // USART initialization<br>
                // USART disabled<br>
                UCSRB=0x00;<br>
                    <br>
                // Analog Comparator initialization<br>
                // Analog Comparator: Off<br>
                // Analog Comparator Input Capture by Timer/Counter 1: Off<br>
                ACSR=0x80;<br>
                SFIOR=0x00;<br>
                    <br>
                // ADC initialization<br>
                // ADC disabled<br>
                ADCSRA=0x00;<br>
                    <br>
                // SPI initialization<br>
                // SPI disabled<br>
                SPCR=0x00;<br>
                    <br>
                // TWI initialization<br>
                // TWI disabled<br>
                TWCR=0x00;<br>
                    <br>
                // Global enable interrupts<br>
                #asm(“sei”)<br>
                    <br>
                while (1)<br>
                {<br>
                // Place your code here<br>
                /*<br>
                data=28;<br>
                delay_ms(1000);<br>
                    <br>
                data=90;<br>
                delay_ms(1000);<br>
                */<br>
                sensor();<br>
                    <br>
                if (jarak < 20)<br>
                {<br>
                data=28;<br>
                delay_ms(1000);<br>
                }<br>
                else<br>
                {<br>
                data=90;<br>
                delay_ms(1000);<br>
                }<br>
                }<br>
                }<br>
            </div>
            <div class = "textTrash">
                <p>Notes : </p>
                <p>Ports C and D are set as output, and the timer uses 8000khz</p>
                <p>Okay, that's my post this time, hopefully it can be useful for all of you. Don't forget to like the video ;)</p>
            // </div>
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
        <div class = "englishBody">
            <div class = "wpBlog">
                <p>Wordpress URL :</p>
                <a target = "blank" href = "https://pebongg.wordpress.com/2016/05/06/media-pembelajaran-bahasa-inggris-untuk-smp/">
                https://pebongg.wordpress.com/2016/05/06/media-pembelajaran...</a>
            </div>
            <div class = "textEnglish">
                <p>This application was made using Macromedia Flash 8 software. Just for fun, I share my work with all of my friends. 
                Here's what the application looks like as well as the flash file and flash document :</p>
            </div>
            <img class = "english1">
            <img class = "english2">
            <img class = "english3">
            <img class = "english4">
            <img class = "english5">
            <div class = "dwnEnglish">
                <a target = "blank" href = "https://drive.google.com/file/d/0B43f1GIQUaKZZGdYUGxoWW9ma0k/view?resourcekey=0-OTqme0sRnjnm4hFMb87BUA">Download File</a>
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