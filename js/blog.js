let overlayBlog = document.getElementById('overlayBlog');
let readThingsboard = document.getElementById('readThingsboard');
let readHeight = document.getElementById('readHeight');
let readVoting = document.getElementById('readVoting');
let readTrash = document.getElementById('readTrash');
let readEnglish = document.getElementById('readEnglish');
let closeBlog = document.getElementById('closeBlog');

readThingsboard.addEventListener('click', openBlogContent);
readHeight.addEventListener('click', openBlogContent);
readVoting.addEventListener('click', openBlogContent);
readTrash.addEventListener('click', openBlogContent);
readEnglish.addEventListener('click', openBlogContent);

    function openBlogContent() {
        overlayBlog.style.zIndex = "9999"
        overlayBlog.style.opacity = "100%";
        document.body.style.overflow = "hidden";
    }

closeBlog.addEventListener('click', closeBlogContent);

    function closeBlogContent() {
        overlayBlog.style.zIndex = "0"
        overlayBlog.style.opacity = "0";
        document.body.style.overflow = "visible";
    }
