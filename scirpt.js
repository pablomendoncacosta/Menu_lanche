var list = document.getElementById('fan-menu')

var icon = document.getElementById('icon')
function Infmenu(){
if(list.style.display == 'block'){
    list.style.display = 'none'
    icon.innerHTML=` <span onclick="Infmenu()" class="material-symbols-outlined">
    menu
    </span>`
}else{
    list.style.display = 'block'
    icon.innerHTML=`<span onclick="Infmenu()" class="material-symbols-outlined">
    more_vert
    </span>`
}
}


var imagem = document.querySelector('.imagem')

function INFproduto(){
    if(infor.style.display == 'block'){
        infor.style.display= 'none'

    }else{
        infor.style.display = 'block'

    }
}
function INFproduto1(){
    if(infor1.style.display == 'block'){
        infor1.style.display= 'none'

    }else{
        infor1.style.display = 'block'

    }
}
function INFproduto2(){
    if(infor2.style.display == 'block'){
        infor2.style.display= 'none'

    }else{
        infor2.style.display = 'block'

    }
}
function INFproduto3(){
    if(infor3.style.display == 'block'){
        infor3.style.display= 'none'

    }else{
        infor3.style.display = 'block'

    }
}
const addToCartButtons = document.querySelectorAll('#Comprar');
const cartCounts = document.querySelectorAll('#quantidade');

for (let i = 0; i < addToCartButtons.length; i++) {
  let itemCount = 0;

  addToCartButtons[i].addEventListener('click', function() {
    itemCount++;
    cartCounts[i].textContent = itemCount;
  });
}
function Carrinho(){
    if(window.innerWidth <= 768){
        document.location.href ='carrinhoCell.php'
    }else if(prodCarrinho.style.display == 'block'){
        prodCarrinho.style.display = 'none'
    }else{
        prodCarrinho.style.display = 'block'
    }
}
const itens=[
    {
        id:0,
        Podinf:'infor',
        carregar:'INFproduto()',
        imagem:'imagem/burrito.jpg',
        nome:'Burrito',
        descricao1:'Pão folhado',
        descricao2:'Molho de frango de casa',
        descricao3:'Catupiry',
        descricao4:'muçarela',
        preco:'95.00',
        quantidade:0
    },
    {
        id:1,
        Podinf:'infor1',
        carregar:'INFproduto1()',
        imagem:'imagem/burrito.jpg',
        nome:'Burrito',
        descricao1:'Pão folhado',
        descricao2:'Molho de frango de casa',
        descricao3:'Catupiry',
        descricao4:'muçarela',
        preco:'80.00',
        quantidade:0
    },
    {
        id:2,
        Podinf:'infor2',
        carregar:'INFproduto2()',
        imagem:'imagem/burrito.jpg',
        nome:'Burrito',
        descricao1:'Pão folhado',
        descricao2:'Molho de frango de casa',
        descricao3:'Catupiry',
        descricao4:'muçarela',
        preco:'75.00',
        quantidade:0
    },
    {
        id:3,
        Podinf:'infor3',
        carregar:'INFproduto3()',
        imagem:'imagem/burrito.jpg',
        nome:'Hanburgue',
        descricao1:'Pão folhado',
        descricao2:'Molho de frango de casa',
        descricao3:'Catupiry',
        descricao4:'muçarela',
        preco:'65.00',
        quantidade:0
    },
]
incializarLoja = ()=>{
    var ConteinerProduto = document.querySelector('.fanprodutos')
  
    itens.map((val)=>{ 
        var valor = val.preco.toLocaleString('pt-BR', { style: 'currency', currency:'BRL'}); 
     ConteinerProduto.innerHTML+=`
    <div  class='fan-produtos'>
    <img class='imagem'  onclick="`+val.carregar+`" src='`+val.imagem+`' alt=''> 
    <div id='`+val.Podinf+`' class='fan-informacao' >
    <h1>`+val.nome+`</h1>
    <h4>`+val.descricao1+`</h4>
    <h4>`+val.descricao2+`</h4>
    <h4>`+val.descricao3+`</h4>
    <h4>`+val.descricao4+`</h4>
    <p>`+valor+`</p>
    <a class='btn' onclick="calcularTotal()" key="`+val.id+`" href="#" >Compar</a>
   </div>
   </div>
    
      `;})
    }
    incializarLoja();


    atualuziarCArrinho=()=>{
        var containerCarrinho = document.getElementById('addProduto') 
         containerCarrinho.innerHTML='';
        itens.map((val)=>{
            if(val.quantidade > 0){    
                containerCarrinho.innerHTML+=`
                    <p>`+val.nome+`<br><hr>
                    `+val.descricao1+`<br>`+val.descricao2+`<br>`+val.descricao3+`<br>`+val.descricao4+`
                   <h5>valor:`+val.preco+`</h5>|<h6>quantidade:`+val.quantidade+`<h6></p>
                `;}
        })
    }
    atualuziarCArrinho();
    var links = document.getElementsByTagName('a')

    for(var i = 0; i < links.length; i++){
        links[i].addEventListener("click" , function(){
            let key = this.getAttribute('key');
            itens[key].quantidade++;
            atualuziarCArrinho();
            return false;
        })
    }
    function calcularTotal() {
        // Seleciona todas as linhas da tabela
        const linhas = document.querySelectorAll('h5');
        const quantidade = document.querySelectorAll('h6')
        linhas.innertext
        console.log(linhas)
        console.log(quantidade)
        let total = 0;
        
        // Itera sobre cada linha da tabela, exceto a primeira (cabeçalho)
        for (let i = 1; i < linhas.length; i++) {
          const linha = linhas[i];
          
          // Obtém o preço e a quantidade do produto
          const preco = parseFloat(linha.children[1].textContent);
          const quantidade = parseInt(quantidade.children[2].children[0].value);
          
          // Calcula o subtotal para este produto e adiciona ao total
          const subtotal = preco * quantidade;
          total += subtotal;
        }
        console.log(total)
        // Exibe o total na página
        const totalElement = document.createElement('p');
        totalElement.textContent = `Total da compra: R$${total.toFixed(2)}`;
        document.body.appendChild(totalElement);
      }