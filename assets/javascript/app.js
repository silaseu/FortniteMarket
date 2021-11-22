//made by Cranki

var _app = function () {
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 0.2;
    this.musicFadeIn = 4000;
    this.skippedIntro = false;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello"];
    this.brandDescription = [
        "All Inclusive Shop", 
        "Cheapest Prices", 
        "hhttps://discord.gg/hYTk4e5H",
        "🠕 click me 🠕", 
        "join hydro", 
        "https://discord.gg/hYTk4e5H",
        "westside"
    ];

    this.titleChanger = function (text, delay) {
        text = text ||
            ['All Inclusive Shop.', 'Cheapest Prices', 'All Inclusive Shop.', 'Cheapest Prices', 'https://discord.gg/hYTk4e5H'];
        delay = delay || 2000;

        var counter = 0;

        setInterval(function () {
            if(counter < text.length) 
                document.title = text[counter++]; 
            else 
                document.title = text[counter = 0];
        }, delay);
    }

    this.iconChanger = function (urls, delay) {
        if (!urls)
            return;

        delay = delay || 2000;

        var counter = 0;
        
        setInterval(function () {
            if(counter < urls.length) {
                var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = urls[counter];
                document.getElementsByTagName('head')[0].appendChild(link);
            }
            else 
                counter = 0;

           ++counter;
        }, delay);
    }
};

var app = new _app();
