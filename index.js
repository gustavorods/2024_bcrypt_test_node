const bcrypt = require('bcrypt');

const senha = 'minhaSenhaSecreta';
const saltRounds = 10;

bcrypt.hash(senha, saltRounds, (err, hash) => {
    if (err) {
        console.error('Erro ao gerar o hash:', err);
        return;
    }
    console.log('Hash gerado:', hash);

    // Agora, você pode testar a validação da senha
    bcrypt.compare(senha, hash, (err, result) => {
        if (err) {
            console.error('Erro ao comparar:', err);
            return;
        }
        console.log('Senha correta:', result); // true
    });
});
