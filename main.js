let dados = [
    {
        nome: "Se soubesse",
        link: "https://www.instagram.com/reel/DGDEdiBxY-0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Nao sei ao certo",
        link: "https://www.instagram.com/reel/DHr7c-OgVKD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Saudade",
        link: "https://www.instagram.com/reel/DGUnFUbusHT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Mochi..",
        link: "https://www.instagram.com/reel/DHtPgKgOQaJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Para Sempre",
        link: "https://www.instagram.com/reel/DIkI5QKSd8A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Seus Olhos",
        link: "https://www.instagram.com/reel/DJNKOMXSWtE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Para Sempre",
        link: "https://www.instagram.com/reel/DI-GLZVRgHn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Sim...",
        link: "https://www.instagram.com/reel/DFokkUSAUht/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Eu Prometi..",
        link: "https://www.instagram.com/reel/DH25vCpurmE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Eu te Amo",
        link: "https://www.instagram.com/reel/DHuM11bPXQ3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Sou Grato",
        link: "https://www.instagram.com/reel/DIPsCggSRZh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Tudo em Voce..",
        link: "https://www.instagram.com/reel/DB7pvATAmgU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Sei Exatamente",
        link: "https://www.instagram.com/reel/DGtLm1pv-7G/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Minha Vida",
        link: "https://www.instagram.com/reel/DJo25dquGvl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Nao da..",
        link: "https://www.instagram.com/reel/DGJlwMURcIK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
]

let linksButtons = document.getElementById('linksButtons');

for (let video of dados) {
    linksButtons.innerHTML += `
    <div class="link-button">
        <a href="${video.link}">${video.nome}</a>
    </div>
    `
}