function jogar(escolhaUsuario) {
    const usuario = Number(escolhaUsuario);
    const pc = Math.floor(Math.random() * 3) + 1;

    document.getElementById('usa').textContent = EscEmojis(usuario);
    document.getElementById('pc').textContent = EscEmojis(pc);

    const resultadoTexto = document.getElementById('res');

    if (usuario === pc) {
        resultadoTexto.textContent = "🤝 Empate!";
    } else if (
        (usuario === 2 && pc === 1) || 
        (usuario === 3 && pc === 2) || 
        (usuario === 1 && pc === 3)    
    ) {
        resultadoTexto.textContent = "🏆 Você Ganhou!";
    } else {
        resultadoTexto.textContent = "😫 Você Perdeu!";
    }
}

function EscEmojis(valor) {
    switch (valor) {
        case 1: return "🗿";
        case 2: return "📄";
        case 3: return "✂️";
        default: return "❓";
    }
}