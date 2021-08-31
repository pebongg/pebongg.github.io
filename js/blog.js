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
            <div>
            </div>
            <div>
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