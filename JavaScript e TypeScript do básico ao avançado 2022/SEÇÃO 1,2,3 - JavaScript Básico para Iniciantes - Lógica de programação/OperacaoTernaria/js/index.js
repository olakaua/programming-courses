// ? Recebe
// : -> else

const pontuacaoUsuario = 999;


// Método normal
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}

// Na operação ternária

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';