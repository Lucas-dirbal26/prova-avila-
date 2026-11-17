fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(dados => {

        const container = document.getElementById('usuarios');
        const usuariosExibidos = dados.slice(0, 6);

        usuariosExibidos.forEach(usuario => {
            container.innerHTML += `
                        <article class="usuario-card">
                            <div class="usuario-identificacao">
                                <h3>${usuario.name}</h3>
                                <p>@${usuario.username}</p>
                            </div>
                            <hr>
                            <div class="usuario-informacoes">
                                <p>Email: ${usuario.email}</p>
                                <p>Cidade: ${usuario.address.city}</p>
                                <p>Empresa: ${usuario.company.name}</p>
                            </div>
                        </article>
                    `;
        });

        document.getElementById('quantidadeCarregada').textContent =
            `${usuariosExibidos.length} usuários carregados com sucesso!`;

    })
    .catch(erro => {
        console.error('Erro ao buscar API:', erro);
    });
