/*
 0 Obter um usuário
 1 Obter o número de telefone de um usuário a partir de seu ID
 2 Obter o endereço do usuário pelo ID
*/

function getUser() {
    setTimeout(function () {
        return {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        }
    }, 1000)
}

function getPhone(idUser) {

}

function getAddress(idUser) {

}

const user = getUser()
const phone = getPhone(user.id)

console.log('usuario', usuario)
console.log('telefone', telefone)