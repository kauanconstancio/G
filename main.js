let dados = [
    {
        nome: "Não sei ao certo",
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
        nome: "Em outra vida..",
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
        nome: "Tudo em Você..",
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
        nome: "Não da..",
        link: "https://www.instagram.com/reel/DGJlwMURcIK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Nunca",
        link: "https://www.instagram.com/reel/DJ42ZLzOrfn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Talvez não entenda",
        link: "https://www.instagram.com/reel/DGiyBj1BH_D/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Se você visse",
        link: "https://www.instagram.com/reel/DJXhrY1Jlng/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Coração e alma",
        link: "https://www.instagram.com/reel/DHGvBN2vMOL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Caso amanhã..",
        link: "https://www.instagram.com/reel/DJ7toCUPtrc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Como a noite",
        link: "https://www.instagram.com/reel/DEix3o8JTAW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Hey you..",
        link: "https://www.instagram.com/reel/DE-vd2XRh84/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Em 100 vidas",
        link: "https://www.instagram.com/reel/DFY3v5DseLJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Sempre estarei..",
        link: "https://www.instagram.com/reel/DEXoWIYuOgn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Sempre foi você",
        link: "https://www.instagram.com/reel/DDH2N8bx2H1/?utm_source=ig_web_copy_link",
    },
    {
        nome: "Oh Darling..",
        link: "https://www.instagram.com/reel/DG1QgTKpqiu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Porque?",
        link: "https://www.instagram.com/reel/C2_A1JGtXcM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        nome: "Faz parte deles",
        link: "https://www.instagram.com/reel/DFMC_ucuXg0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
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