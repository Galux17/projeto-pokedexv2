const listadeSelecaodeCards = document.querySelectorAll('.pokemon');
const pokemonsCards = document.querySelectorAll('.cartao-pokemon');


listadeSelecaodeCards.forEach( pokemon =>{
    
    pokemon.addEventListener('click', () =>{
         
        const cartaoPokemonOpen = document.querySelector('.aberto');
        cartaoPokemonOpen.classList.remove('aberto')
        
        
        const infomacoesPokemonSelecionado = pokemon.attributes.id.value;
        
        const pokemonParaAbrir = 'cartao-' + infomacoesPokemonSelecionado;
        const cartaoPokemonAberto = document.getElementById(pokemonParaAbrir);
        cartaoPokemonAberto.classList.add('aberto');

        const pokemonAtivo = document.querySelector('.ativo');
        pokemonAtivo.classList.remove('ativo');

        const pokemonDesativado = document.getElementById(infomacoesPokemonSelecionado);
        pokemonDesativado.classList.remove('ativo');
    })
})