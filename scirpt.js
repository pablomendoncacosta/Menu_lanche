var list = document.getElementById('fan-menu')

var icon = document.getElementById('icon')
// Menu interativo "block" "none"
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


// ce a resolução for 768px vai redirecionar pra outra pagina
function Carrinho(){
    if(window.innerWidth <= 768){
        document.location.href ='carrinhoCell.php'
    }else if(prodCarrinho.style.display == 'block'){
        prodCarrinho.style.display = 'none'
    }else{
        prodCarrinho.style.display = 'block'
    }
}
// Informação dos produtos da loja....
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
        Pcar:'Quantidade1',
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
        Pcar:'Quantidade2',
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
        Pcar:'Quantidade3',
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
        Pcar:'Quantidade4',
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
    <p class="`+val.Pcar+`">`+valor+`</p>
    <a class="btn" id="`+val.Pcar+`" onclick="calcularTotal()" key="`+val.id+`" href="#" >Compar</a>
   </div>
   </div>
    
      `;})
    }
    incializarLoja();

//Atualização dos produtos do carrinho
    atualuziarCArrinho=()=>{
        var containerCarrinho = document.getElementById('addProduto') 
       containerCarrinho.innerHTML='';
        itens.map((val)=>{ 
            
            if(val.quantidade > 0){     
                
                containerCarrinho.innerHTML+=`
                    <p>`+val.nome+`<br><hr>
                    `+val.descricao1+`<br>`+val.descricao2+`<br>`+val.descricao3+`<br>`+val.descricao4+`
                   <h5>valor:`+val.preco+`</h5><h6>quantidade:`+val.quantidade+`<h6></p>
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


    //Atualização da quantidade de produto que esta no carrinho
    var btn = document.getElementById('Quantidade1')

    var contaieneQuantidade = document.getElementById('quantidade')
    var valorContador = 0
    btn.addEventListener("click", function() {
        valorContador++; 
        contaieneQuantidade.innerHTML="";
        contaieneQuantidade.innerHTML += `<p>`+valorContador+`</p>`; 

      });

      var btn = document.getElementById('Quantidade2')
      btn.addEventListener("click", function() {
        valorContador++; 
        contaieneQuantidade.innerHTML="";
        contaieneQuantidade.innerHTML += `<p>`+valorContador+`</p>`; 

      });


      var btn = document.getElementById('Quantidade3')
      btn.addEventListener("click", function() {
        valorContador++; 
        contaieneQuantidade.innerHTML="";
        contaieneQuantidade.innerHTML += `<p>`+valorContador+`</p>`; 
   
      });
      var btn = document.getElementById('Quantidade4')
      btn.addEventListener("click", function() {
        valorContador++; 
        contaieneQuantidade.innerHTML="";
        contaieneQuantidade.innerHTML += `<p>`+valorContador+`</p>`; 
       
      });
    

    var b=0
    var containerSoma = document.getElementById('FinalizarCompra')    
    var btn = document.getElementById('Quantidade1')
    btn.addEventListener("click", function() {    

    var Fvalor = document.querySelector('.Quantidade1')
    var valor = parseInt(Fvalor.textContent);
    var a= valor
    b++;
    
    var resultado = a * b
    console.log(valor)
    console.log(b)
    containerSoma.innerHTML="";
    containerSoma.innerHTML+=`<p>`+resultado+`</p>`;
    });
  
    var btn = document.getElementById('Quantidade2')
    var Fvalor = document.querySelector('.Quantidade2')
    var valor = parseInt(Fvalor.textContent);
    var a= valor
    console.log(res)
    btn.addEventListener("click", function() {  

    b++;
    var resultado =  a* b
    console.log(resultado)
    containerSoma.innerHTML="";
    containerSoma.innerHTML+=`<p>`+resultado+`</p>`;
    }) ;




/*var conteinerSoma = docuemnt.getElementById('FinalizarCompra')
var btn = document.getElementById('quantidade3')
var Fvalor = document.querySelector('.quantidade3')
var valor = parseInt(Fvalor,textContent);
console.log(valor)
b=0
btn.addEventListener("click",function(){
    var a = valor 
    b++;
    var resultado = a * b
    conteinerSoma="";
    conteinerSoma+=`<p>`+resultado+`</p>`;
})*/