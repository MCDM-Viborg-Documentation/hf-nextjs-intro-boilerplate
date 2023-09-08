const application = {
    applicationRoot : 'hf-nextjs-intro-boilerplate',
    documentationPath : 'https://github.com/MCDM-Viborg-Documentation/hf-nextjs-intro-boilerplate',
    gitHubPageIODomain : 'mcdm-viborg-documentation.github.io',
    data : {
        title : 'NextJS - MCDM Viborg',
        description : `NextJS vidoer til MCDM Viborg : <a href="${application.documentationPath}#readme" target="_blank">https://github.com/MCDM-Viborg-Documentation/hf-nextjs-intro-boilerplate</a>`,
        videos : [
            {
                chapter : "chapter-1",
                duration : "07m.48s",
                title : "Kom igang",
                video : "https://mcdm-resources.ams3.cdn.digitaloceanspaces.com/tutorials/nextjs/NEXTJS_Intro_2023.mp4",
                description : "Introduktion til at arbejde med NextJS."
            },
            {
                chapter : "chapter-2",
                duration : "07m.17s",
                title : "Installation af NextJS projekt.",
                video : "https://mcdm-resources.ams3.digitaloceanspaces.com/tutorials/nextjs/NEXTJS_installation_2023.mp4",
                description : "Installation af nextJS projektet."
            },
            {
                chapter : "chapter-3",
                duration : "10m.07s",
                title : "Byg, Start og udvikling af vores NEXT projekt.",
                video : "https://mcdm-resources.ams3.cdn.digitaloceanspaces.com/tutorials/nextjs/NEXTJS_BygStart.mp4",
                description : "Hvordan vi bygger, starter og udvikler vores NEXT projekt."
            },
            {
                chapter : "chapter-4",
                duration : "20m.53s",
                title : "Fil struktur i et NextJS projekt 1",
                video : "https://mcdm-resources.ams3.cdn.digitaloceanspaces.com/tutorials/nextjs/NEXTJS_structure_intro_01.mp4",
                description : "Hvordan vi bygger, starter og udvikler vores NEXT projekt."
            },
            {
                chapter : "chapter-5",
                duration : "17m.08s",
                title : "Mere om struktur imens vi starter en ren NextJS boilerplate vi kan bruge til vores projekter.",
                video : "https://mcdm-resources.ams3.cdn.digitaloceanspaces.com/tutorials/nextjs/NEXTJS_structure_intro_02.mp4",
                description : "Hvordan vi bygger, starter og udvikler vores NEXT projekt."
            },
            {
                chapter : "chapter-6",
                duration : "14m.55s",
                title : "Vi bygger vores boilerplate færdig imens vi lære lidt om struktur og react. ",
                video : "https://mcdm-resources.ams3.cdn.digitaloceanspaces.com/tutorials/nextjs/NEXTJS_structure_intro_03.mp4",
                description : "Hvordan vi bygger, starter og udvikler vores NEXT projekt."
            },
            {
                chapter : "chapter-7",
                duration : "08m.06s",
                title : "Projektet på GitHub så vi kan holde det opdateret og hente den når vi skal starte et nyt projekt.",
                video : "https://mcdm-resources.ams3.cdn.digitaloceanspaces.com/tutorials/nextjs/NEXTJS_git.mp4",
                description : "Hvordan vi bygger, starter og udvikler vores NEXT projekt."
            }
        ]
    },

    bodyTmpl : (location) => {

        let path = (location.host === application.gitHubPageIODomain) ? location.origin + '/' + application.applicationRoot + '/' : '/';

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

