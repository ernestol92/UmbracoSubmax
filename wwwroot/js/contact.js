addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector(".btn-whatsapp");

    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        const name = document.getElementById("nome").value;
        const mensagem = document.getElementById("mensagem").value;
        const interesse = document.getElementById("interesse").value;

        const phoneNumber = "5582996606790";
        const text = `Olá, meu nome é ${name}. Tenho interesse em ${interesse}. ${mensagem}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    })

});