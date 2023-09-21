const application = {
    
    data : {
        title : 'NextJS - BoilerPlate Domkoumentation',
        description : '...',
        videos : [
            {
                chapter : "chapter-1",
                duration : "07m.48s",
                title : "Kom igang",
                video : "https://player.vimeo.com/progressive_redirect/playback/862931539/rendition/1080p/file.mp4?loc=external&log_user=0&signature=d6338626080a842e6f84474ec6cc9046fb7424e7a4fe970a5eee5767f3a4b0b2",
                description : "Introduktion til at arbejde med NextJS."
            },
            {
                chapter : "chapter-2",
                duration : "07m.17s",
                title : "Installation af NextJS projekt.",
                video : "https://player.vimeo.com/progressive_redirect/playback/862931809/rendition/1080p/file.mp4?loc=external&log_user=0&signature=7ce1e38ebd3808564aa00015a9a923ae3d85f700cb921c5dec34a0aa5c8e7866",
                description : "Installation af nextJS projektet."
            },
            {
                chapter : "chapter-3",
                duration : "10m.07s",
                title : "Byg, Start og udvikling af vores NEXT projekt.",
                video : "https://player.vimeo.com/progressive_redirect/playback/862931910/rendition/1080p/file.mp4?loc=external&log_user=0&signature=a86aa57c7e37e7fffde50c5f41a4b2bee235c4ce9083abf7eed2ea24c4ecd14a",
                description : "Hvordan vi bygger, starter og udvikler vores NEXT projekt."
            },
            {
                chapter : "chapter-4",
                duration : "20m.53s",
                title : "Fil struktur i et NextJS projekt 1",
                video : "https://player.vimeo.com/progressive_redirect/playback/862931963/rendition/1080p/file.mp4?loc=external&log_user=0&signature=747e446757add1d30d3e867a8ae7fdaa881d7dd62a35fbed64ccf09491cb7e5f",
                description : "Hvordan vi bygger, starter og udvikler vores NEXT projekt."
            },
            {
                chapter : "chapter-5",
                duration : "17m.08s",
                title : "Mere om struktur imens vi starter en ren NextJS boilerplate vi kan bruge til vores projekter.",
                video : "https://player.vimeo.com/progressive_redirect/playback/862931998/rendition/1080p/file.mp4?loc=external&log_user=0&signature=bb93c3c524371faa042196d27c37fc76acd35e0f37fa3d1be86566495363c506",
                description : "Hvordan vi bygger, starter og udvikler vores NEXT projekt."
            },
            {
                chapter : "chapter-6",
                duration : "14m.55s",
                title : "Vi bygger vores boilerplate færdig imens vi lære lidt om struktur og react. ",
                video : "https://player.vimeo.com/progressive_redirect/playback/862937202/rendition/1080p/file.mp4?loc=external&log_user=0&signature=bc19acc247be9807ef60cc62d00fa8467a0b4d0f2bdeff86a66b7933cf7f5888",
                description : "Hvordan vi bygger, starter og udvikler vores NEXT projekt."
            },
            {
                chapter : "chapter-7",
                duration : "08m.06s",
                title : "Projektet på GitHub så vi kan holde det opdateret og hente den når vi skal starte et nyt projekt.",
                video : "https://player.vimeo.com/progressive_redirect/playback/862937218/rendition/1080p/file.mp4?loc=external&log_user=0&signature=77e2c20510e0454711ef320636af062a342fb7cb01c47bf258299197b6bed7d9",
                description : "Hvordan vi bygger, starter og udvikler vores NEXT projekt."
            }
        ]
    },

    bodyTmpl : (location) => {

        let applicationRoot =  'hf-nextjs-intro-boilerplate';
        let gitHubPageIODomain = 'mcdm-viborg-documentation.github.io';

        let path = (location.host === gitHubPageIODomain) ? location.origin + '/' + applicationRoot + '/' : '/';

        return `<div>
            <h1><img src="./assets/square_logo.png" width="50px">${application.data.title}</h1>
            <p>${application.data.description}</p>
            <h3>Index</h3>
            <ol>
                ${application.data.videos.map((video, index) => { return `<li><a href="${path}?chapter=${video.chapter}">${video.title}</a></li>` }).join('')}
            </ol>
        
            <div id="video"></div>
        </div>`

    },

    indexTmpl : () => {

        return `<p>...</p>`

    },

    videoTmpl : (obj) => {

        return `<div class="video">
            <h2>${obj.title}</h2>
            <video width="650" src="${obj.video}" controls></video>    
            <p>${obj.description}</p>
        </div>`

    },

    init : () => {

        const body = document.querySelector('body');
        const index = new URLSearchParams(location.search).get('index');
        const chapter = new URLSearchParams(location.search).get('chapter');

        document.title = application.data.title;
        
        // Adding the body template.
        body.insertAdjacentHTML('afterbegin', application.bodyTmpl(location))
        let video = chapter ? application.data.videos.find((video) => video.chapter === chapter) : application.data.videos[index];

        // Adding the video template.
        let videoContainer = document.querySelector('#video');
        if(video) {
           
            videoContainer.insertAdjacentHTML('beforebegin', application.videoTmpl(video))
    
        } else {

            videoContainer.insertAdjacentHTML('beforebegin', application.indexTmpl())

        }

    }

};

application.init();

