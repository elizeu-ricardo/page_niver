
const dataDoNiver = new Date("Jan 02, 2026, 19:00:00");
const timesStampDoNiver = dataDoNiver.getTime();

const contagem = setInterval(function() {
    const agora = new Date();
    const timesStampAtual = agora.getTime();

    const distanciaDoNiver = timesStampDoNiver - timesStampAtual;

    const diasMs = 1000 * 60 * 60 * 24;
    const horasMs = 1000 * 60 * 60;
    const minutosMs = 1000 * 60;

    const diaNiver = Math.floor(distanciaDoNiver / diasMs);
    const horasNiver = Math.floor((distanciaDoNiver % diasMs) / horasMs);
    const minAteNiver = Math.floor((distanciaDoNiver % horasMs) / minutosMs);
    const segundsNiver = Math.floor((distanciaDoNiver % minutosMs) / 1000);

    document.querySelector('.contador').innerText = `${diaNiver}d ${horasNiver}h ${minAteNiver}m ${segundsNiver}s`;

    if (distanciaDoNiver < 0) {
        clearInterval(contagem);
        document.querySelector('.contador').innerText = "A data expirou:(";
    }

}, 1000)

