

function animateChild(e) {
    e.style.animationName = "send";
    setTimeout(function () {
        e.style.animationName = "none";
    },500);
}
document.body.onload = () => {
    document.getElementById('loading-body').style.display = 'none';
    setTimeout(() => {
        document.getElementById('loading-body').style.display = 'none';
    }, 2000);
    let platform = localStorage.getItem('choice');
    let srcs = document.querySelector('.circle3').firstElementChild.src;
    document.getElementById(`${platform}-circle`).firstElementChild.src = srcs;
    document.querySelector('.circle3').firstElementChild.src = `../assets/socials/${platform}.svg`;
    console.log(document.querySelector('.circle3').firstElementChild.src);
    let capitalise = () => {
        let it = platform[0].toUpperCase();
        for (let i = 1; i < platform.length; i++) {
            it = it + platform[i];
        }
        return it;
    }
    let title = capitalise();
    document.querySelector('.bigger-platform').innerText = title;
    document.getElementById('title').innerText = 'Fake ' + title;
    let type = localStorage.getItem('type');
    console.log(platform,type)
    if (platform == 'instagram' && type == 'chat') {
        document.getElementById('inserter').insertAdjacentHTML('afterend',instagram);
        document.getElementById('inserter').insertAdjacentHTML('beforebegin',instagramChatTools);
    } else if (platform == 'whatsapp' && type == 'chat') {
        document.getElementById('inserter').insertAdjacentHTML('afterend',whatsapp);
        document.getElementById('inserter').insertAdjacentHTML('beforebegin',whatsappChatTools);
    } else if (platform == 'whatsapp' && type == 'dash') {
        document.getElementById('inserter').insertAdjacentHTML('afterend', whatsappDash);
        document.getElementById('inserter').insertAdjacentHTML('beforebegin', whatsappDashTools);
        document.head.insertAdjacentHTML('beforeend', `
        <link rel="stylesheet" href="../snippets/styles/whatsapp-dash.css">
        `);
    } else if (platform == 'instagram' && type == 'post') {
        document.getElementById('inserter').insertAdjacentHTML('afterend',instagramPost);
        document.getElementById('inserter').insertAdjacentHTML('beforebegin',instagramPostTools);
        document.head.insertAdjacentHTML('beforeend', `
        <link rel="stylesheet" href="../snippets/styles/instagram-post.css">
        `);
    }
    loadScript(`scripts/${platform}-${type}-new.js`)
    .then( data  => {
        console.log("Script loaded successfully", data);
    })
    .catch( err => {
        console.error(err);
    });
    loadScript(`scripts/drag&drop.js`)
    .then( data  => {
        console.log("Script loaded successfully", data);
    })
    .catch( err => {
        console.error(err);
    });
}
const loadScript = (FILE_URL, async = true, type = "text/javascript") => {
    return new Promise((resolve, reject) => {
        try {
            const scriptEle = document.createElement("script");
            scriptEle.type = type;
            scriptEle.async = async;
            scriptEle.src =FILE_URL;

            scriptEle.addEventListener("load", (ev) => {
                resolve({ status: true });
            });

            scriptEle.addEventListener("error", (ev) => {
                reject({
                    status: false,
                    message: `Failed to load the script ${FILE_URL}`
                });
            });

            document.body.appendChild(scriptEle);
        } catch (error) {
            reject(error);
        }
    });
};