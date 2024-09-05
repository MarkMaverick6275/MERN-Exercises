let img = document.querySelector('.img');
let dur = document.querySelector('.duration');
let titl = document.querySelector('#titl');
let cnlName = document.querySelector('#cnlName');
let vws = document.querySelector('.vws');
let mons = document.querySelector('.mons');




let title = prompt("Enter the Title for Your Video: ");
let chennelName = prompt("Enter the Name of Your Channel: ");
let views = prompt("Enter the Number of Views on this Video: ");
views = Number(views);
let duration = prompt("Enter the Duration of Your Video (Minutes:Seconds): ");
let thumbnail = prompt("Enter the Link to the Thumbnail of this Video: ");
let month = prompt("Video Uploaded ____ Months Ago: ");

function viewsCal(views) {
    if (views <= 999) {
        return views.toString();
    } else if (views >= 1000 && views < 1000000) {
        views = views / 1000;
        views = Math.ceil(views);
        return "•" + views + 'K views';

    } else if (views >= 1000000 && views < 1000000000) {
        views = views / 1000000;
        views = Math.ceil(views);
        return "•" + views + 'M views';

    } else {
        views = views / 1000000000;
        views = Math.ceil(views);
        return "•" + views + 'B views';
    }
}

function generateCard(title, chennelName, views, duration, thumbnail, month) {
    let thumb = document.createElement('img');
    thumb.src = thumbnail;
    thumb.alt = 'Video Thumbnail';


    img.style.background = `url(${thumbnail})`;
    img.style.backgroundSize = 'contain';
    titl.innerText = `${title}`;
    cnlName.innerText = `${chennelName}`;
    vws.innerText = `${viewsCal(views)}`;
    dur.innerText = `${duration}`;
    mons.textContent = `• ${month} months ago`;
}

generateCard(title, chennelName, views, duration, thumbnail, month);
