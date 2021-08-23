$(window).scroll(function() {

    if ($(this).scrollTop()>10){
        $('#ArrowUp').fadeOut();
     }else{
      $('#ArrowUp').fadeIn();
     }
 });

 

//Abrir nav MENU MOBILE

$(document).ready(function(){
    $('.open-nav').click(function(){
        $('.menu').toggleClass('active');
        $('.open-menu').toggleClass('open');
    });
});
function myFunction(x) {
    x.classList.toggle("change");
  }



var ContainerHeader = document.getElementById("ContainerHeader")
var LetsGo = document.getElementById("LetsGo")

  LetsGo.addEventListener("click", function(){

    if(ContainerHeader.style.display === "block"){
        ContainerHeader.style.display = "none";
    } else {
        ContainerHeader.style.display = "none"
    }
})
  
  
  function CloseContainer(botao) {
    ContainerHeader.style.display = "none";
}

var ContainerShare = document.getElementById("container-popup")
function BtnHeader(botao) {
    ContainerShare.style.display = "block";
}


var  ContainerMenssages = document.getElementById("ContainerMenssage")
function SendMenssage(botao) {
    ContainerMenssages.style.display = "block";
}
function CloseSendMenssage(botao) {
    ContainerMenssages.style.display = "none";
}

//Profile---------------------------------------------

//mostrar perfil
var ContainerProfile = document.getElementById("ContainerProfile")
var CloseProfile = document.getElementById("CloseProfile")
var ShowProfile = document.getElementById("BtnProfile")


ShowProfile.addEventListener("click", function(){

    if(ContainerProfile.style.marginRight === "-200%"){
        ContainerProfile.style.marginRight = "0%";
        ContainerSearch.style.display = "none"
    } else {
        ContainerProfile.style.marginRight = "0%"
        ContainerSearch.style.display = "none"
    }
})

CloseProfile.addEventListener("click", function(){

    if(ContainerProfile.style.marginRight === "0%"){
        ContainerProfile.style.marginRight = "-200%";
    } else {
        ContainerProfile.style.marginRight = "-200%"
    }
})

//Dados
var ShowDados = document.getElementById("BtnDados")
var ContainerDados = document.getElementById("ContainerDados")
var CloseDados = document.getElementById("CloseDados")

ShowDados.addEventListener("click", function(){
    if(ContainerDados.style.display === "none"){
        ContainerDados.style.display ="block"
    } else {
        ContainerDados.style.display ="block"
    }
})
CloseDados.addEventListener("click", function(){
    if(ContainerDados.style.display === "block"){
        ContainerDados.style.display ="none"
    } else {
        ContainerDados.style.display ="none"
    }
})

//Pedidos
var ShowPedidos = document.getElementById("BtnPedidos")
var ContainerPedidos = document.getElementById("ContainerPedidos")
var ClosePedidos = document.getElementById("ClosePedidos")

ShowPedidos.addEventListener("click", function(){
    if(ContainerPedidos.style.display === "none"){
        ContainerPedidos.style.display ="block"
    } else {
        ContainerPedidos.style.display ="block"
    }
})
ClosePedidos.addEventListener("click", function(){
    if(ContainerPedidos.style.display === "block"){
        ContainerPedidos.style.display ="none"
    } else {
        ContainerPedidos.style.display ="none"
    }
})

//Fidelidade
var ShowFidelidade = document.getElementById("BtnFidelidade")
var ContainerFidelidade = document.getElementById("ContainerFidelidade")
var CloseFidelidade = document.getElementById("CloseFidelidade")

ShowFidelidade.addEventListener("click", function(){
    if(ContainerFidelidade.style.display === "none"){
        ContainerFidelidade.style.display ="block"
    } else {
        ContainerFidelidade.style.display ="block"
    }
})
CloseFidelidade.addEventListener("click", function(){
    if(ContainerFidelidade.style.display === "block"){
        ContainerFidelidade.style.display ="none"
    } else {
        ContainerFidelidade.style.display ="none"
    }
})


//Cupons
var ShowCupons = document.getElementById("BtnCupons")
var ContainerCupons = document.getElementById("ContainerCupons")
var CloseCupons = document.getElementById("CloseCupons")

ShowCupons.addEventListener("click", function(){
    if(ContainerCupons.style.display === "none"){
        ContainerCupons.style.display ="block"
    } else {
        ContainerCupons.style.display ="block"
    }
})
CloseCupons.addEventListener("click", function(){
    if(ContainerCupons.style.display === "block"){
        ContainerCupons.style.display ="none"
    } else {
        ContainerCupons.style.display ="none"
    }
})

//FormaDePagamento
var ShowFormaDePagamento = document.getElementById("BtnFormaDePagamento")
var ContainerFormaDePagamento = document.getElementById("ContainerFormaDePagamento")
var CloseFormaDePagamento = document.getElementById("CloseFormaDePagamento")

ShowFormaDePagamento.addEventListener("click", function(){
    if(ContainerFormaDePagamento.style.display === "none"){
        ContainerFormaDePagamento.style.display ="block"
    } else {
        ContainerFormaDePagamento.style.display ="block"
    }
})
CloseFormaDePagamento.addEventListener("click", function(){
    if(ContainerFormaDePagamento.style.display === "block"){
        ContainerFormaDePagamento.style.display ="none"
    } else {
        ContainerFormaDePagamento.style.display ="none"
    }
})


//Search
var ContainerSearch = document.getElementById("ContainerSearch")
var CloseSearch = document.getElementById("CloseSearch")
var ShowSearch = document.getElementById("BtnSearch")

function AbrirPesquisa(botao) {
    ContainerSearch.style.display = "block"
}

CloseSearch.addEventListener("click", function(){

    if(ContainerSearch.style.display === "block"){
        ContainerSearch.style.display = "none";
    } else {
        ContainerSearch.style.display = "none"
    }
})

//Fechar menu moble
var btn_close_menu = document.getElementById("btn-close-menu")


//popup
var btn_close_popup = document.getElementById("close-popup")
var container_popup = document.getElementById("container-popup")

btn_close_popup.addEventListener("click", function(){
    if(container_popup.style.display === "block"){
        container_popup.style.display ="none"
    } else {
        container_popup.style.display ="none"
    }
})

//Avancar para o container complementos
var ContainerComplementos = document.getElementById("section-complementos")


//acai
function proximoListAcai(botao) {
    listaacai.style.display = "none";
    ContainerComplementos.style.display = "block"
}
//Morango
function proximoListMorango(botao) {
    listamorango.style.display = "none";
    ContainerComplementos.style.display = "block"
}
//ninho
function proximoListNinho(botao) {
    listaninho.style.display = "none";
    ContainerComplementos.style.display = "block"
}
//Maracuja
function proximoListMaracuja(botao) {
    listamaracuja.style.display = "none";
    ContainerComplementos.style.display = "block"
}
//Choconute
function proximoListChoconute(botao) {
    listachoconute.style.display = "none";
    ContainerComplementos.style.display = "block"
}
//Mix
function proximoListMix(botao) {
    listamix.style.display = "none";
    ContainerComplementos.style.display = "block"
}
//Cupuacu
function proximoListCupuacu(botao) {
    listacupuacu.style.display = "none";
    ContainerComplementos.style.display = "block"
}
//Casadinho
function proximoListCasadinho(botao) {
    listacasadinho.style.display = "none";
    ContainerComplementos.style.display = "block"
}

//Avancar para o container Adicionais
var SectionAdicionais = document.getElementById("SectionAdicionais")

function proximoComplementos(botao) {
    ContainerComplementos.style.display = "none";
    SectionAdicionais.style.display = "block"
}

//Avancar para o container Talheres
var SectionTalher = document.getElementById("SectionTalher")
//acai
function proximoAdicionais(botao) {
    SectionAdicionais.style.display = "none";
    SectionTalher.style.display = "block"
}

//Avancar para o container que pergunta ao cliente se ele vai querer fazer mais outro pedido
var SectionQuestion = document.getElementById("SectionQuestion")

function proximoTalher(botao) {
    SectionTalher.style.display = "none";
    SectionQuestion.style.display = "block"
}

//Escolher outro produto
function CloseQuestion(botao) {
    SectionQuestion.style.display = "none";
}

//Avancar para o checkout
function proximoQuestion(botao) {
    SectionQuestion.style.display = "none";
    conatiner_checkout.style.marginRight = "0%";
    FundoCheckout.style.display = "block"
}


//Fechar container de complementos
function CloseContainerComplementos(botao) {
    ContainerComplementos.style.display = "none";
}

//Fechar container de adicionais
function CloseContainerAdicionais(botao) {
    SectionAdicionais.style.display = "none";
    ContainerComplementos.style.display = "block"
}

//Fechar container de talheres
function CloseContainerTalher(botao) {
    SectionTalher.style.display = "none";
    SectionAdicionais.style.display = "block"
}

//Fechar container de Question
function CloseContainerQuestion(botao) {
    SectionQuestion.style.display = "none";
    SectionTalher.style.display = "block"
}



//escolher lista de produtos na barra de pesquisa do site
var closebtn_acai = document.getElementById("btn-acai")
var closebtn_cupuacu = document.getElementById("btn-cupuacu")
var closebtn_casadinho = document.getElementById("btn-casadinho")
var closebtn_mix = document.getElementById("btn-mix")

var closebtn_choconute = document.getElementById("btn-choconute")
var closebtn_maracuja = document.getElementById("btn-maracuja")
var closebtn_morango = document.getElementById("btn-morango")
var closebtn_ninho = document.getElementById("btn-ninho")


var listacremes = document.getElementById("SubCategorias")

var listaacai = document.getElementById("list-acai")
var listacupuacu = document.getElementById("list-cupuacu")
var listacasadinho = document.getElementById("list-casadinho")
var listamix = document.getElementById("list-mix")
var listachoconute = document.getElementById("list-choconute")
var listamaracuja = document.getElementById("list-maracuja")
var listamorango = document.getElementById("list-morango")
var listaninho = document.getElementById("list-ninho")

function ListAcai(botao) {
    listaacai.style.display = "block";
    ContainerSearch.style.display = "none"
}
function ListNinho(botao) {
    listaninho.style.display = "block";
    ContainerSearch.style.display = "none"
}
function ListMorango(botao) {
    listamorango.style.display = "block";
    ContainerSearch.style.display = "none"
}
function ListMaracuja(botao) {
    listamaracuja.style.display = "block";
    ContainerSearch.style.display = "none"
}
function ListChoconute(botao) {
    listachoconute.style.display = "block";
    ContainerSearch.style.display = "none"
}
function ListMix(botao) {
    listamix.style.display = "block";
    ContainerSearch.style.display = "none"
}
function ListCasadinho(botao) {
    listacasadinho.style.display = "block";
    ContainerSearch.style.display = "none"
}
function ListCupuacu(botao) {
    listacupuacu.style.display = "block";
    ContainerSearch.style.display = "none"
}





closebtn_acai.addEventListener("click", function(){

    if(listaacai.style.display === "none"){
        listaacai.style.display = "block";
    } else {
        listaacai.style.display = "block"
    }
})
closebtn_choconute.addEventListener("click", function(){

    if(listachoconute.style.display === "none"){
        listachoconute.style.display = "block";
    } else {
        listachoconute.style.display = "block"
    }
})

closebtn_maracuja.addEventListener("click", function(){

    if(listamaracuja.style.display === "none"){
        listamaracuja.style.display = "block";
    } else {
        listamaracuja.style.display = "block"
    }
})

closebtn_morango.addEventListener("click", function(){

    if(listamorango.style.display === "none"){
        listamorango.style.display = "block";
    } else {
        listamorango.style.display = "block"
    }
})

closebtn_ninho.addEventListener("click", function(){

    if(listaninho.style.display === "none"){
        listaninho.style.display = "block";
    } else {
        listaninho.style.display = "block"
    }
})

closebtn_cupuacu.addEventListener("click", function(){

    if(listacupuacu.style.display === "none"){
        listacupuacu.style.display = "block";
    } else {
        listacupuacu.style.display = "block"
    }
})
closebtn_casadinho.addEventListener("click", function(){

    if(listacasadinho.style.display === "none"){
        listacasadinho.style.display = "block";
    } else {
        listacasadinho.style.display = "block"
    }
})
closebtn_mix.addEventListener("click", function(){

    if(listamix.style.display === "none"){
        listamix.style.display = "block";
    } else {
        listamix.style.display = "block"
    }
})


var Closelistaacai = document.getElementById("CloseListAcai")
var Closelistacupuacu = document.getElementById("CloseListCupuacu")
var Closelistacasadinho = document.getElementById("CloseListCasadinho")
var Closelistamix = document.getElementById("CloseListMix")
var Closelistachoconute = document.getElementById("CloseListChoconute")
var Closelistamorango = document.getElementById("CloseListMorango")
var Closelistamaracuja = document.getElementById("CloseListMaracuja")
var Closelistaninho = document.getElementById("CloseListNinho")


Closelistaacai.addEventListener("click", function(){

    if(listaacai.style.display === "block"){
        listaacai.style.display = "none";
    } else {
        listaacai.style.display = "none"
    }
})

Closelistachoconute.addEventListener("click", function(){

    if(listachoconute.style.display === "block"){
        listachoconute.style.display = "none";
    } else {
        listachoconute.style.display = "none"
    }
})

Closelistamorango.addEventListener("click", function(){

    if(listamorango.style.display === "block"){
        listamorango.style.display = "none";
    } else {
        listamorango.style.display = "none"
    }
})

Closelistamaracuja.addEventListener("click", function(){

    if(listamaracuja.style.display === "block"){
        listamaracuja.style.display = "none";
    } else {
        listamaracuja.style.display = "none"
    }
})

Closelistaninho.addEventListener("click", function(){

    if(listaninho.style.display === "block"){
        listaninho.style.display = "none";
    } else {
        listaninho.style.display = "none"
    }
})



Closelistacupuacu.addEventListener("click", function(){

    if(listacupuacu.style.display === "block"){
        listacupuacu.style.display = "none";
    } else {
        listacupuacu.style.display = "none"
    }
})



Closelistacasadinho.addEventListener("click", function(){

    if(listacasadinho.style.display === "block"){
        listacasadinho.style.display = "none";
    } else {
        listacasadinho.style.display = "none"
    }
})



Closelistamix.addEventListener("click", function(){

    if(listamix.style.display === "block"){
        listamix.style.display = "none";
    } else {
        listamix.style.display = "none"
    }
})


//Funções para quando abrir uma categoria... Fechar a outra----------------

//açaí

closebtn_acai.addEventListener("click", function(){

    if(listacupuacu.style.display === "block"){
        listacupuacu.style.display = "none";
    } else {
        listacupuacu.style.display = "none"
    }
})
closebtn_acai.addEventListener("click", function(){

    if(listacasadinho.style.display === "block"){
        listacasadinho.style.display = "none";
    } else {
        listacasadinho.style.display = "none"
    }
})
closebtn_acai.addEventListener("click", function(){

    if(listamix.style.display === "block"){
        listamix.style.display = "none";
    } else {
        listamix.style.display = "none"
    }
})
closebtn_acai.addEventListener("click", function(){

    if(listamorango.style.display === "block"){
        listamorango.style.display = "none";
    } else {
        listamorango.style.display = "none"
    }
})
closebtn_acai.addEventListener("click", function(){

    if(listamaracuja.style.display === "block"){
        listamaracuja.style.display = "none";
    } else {
        listamaracuja.style.display = "none"
    }
})
closebtn_acai.addEventListener("click", function(){

    if(listaninho.style.display === "block"){
        listaninho.style.display = "none";
    } else {
        listaninho.style.display = "none"
    }
})
closebtn_acai.addEventListener("click", function(){

    if(listachoconute.style.display === "block"){
        listachoconute.style.display = "none";
    } else {
        listachoconute.style.display = "none"
    }
})

//choconute
closebtn_choconute.addEventListener("click", function(){

    if(listamorango.style.display === "block"){
        listamorango.style.display = "none";
    } else {
        listamorango.style.display = "none"
    }
})
closebtn_choconute.addEventListener("click", function(){

    if(listamaracuja.style.display === "block"){
        listamaracuja.style.display = "none";
    } else {
        listamaracuja.style.display = "none"
    }
})
closebtn_choconute.addEventListener("click", function(){

    if(listaninho.style.display === "block"){
        listaninho.style.display = "none";
    } else {
        listaninho.style.display = "none"
    }
})
closebtn_choconute.addEventListener("click", function(){

    if(listaacai.style.display === "block"){
        listaacai.style.display = "none";
    } else {
        listaacai.style.display = "none"
    }
})
closebtn_choconute.addEventListener("click", function(){

    if(listacupuacu.style.display === "block"){
        listacupuacu.style.display = "none";
    } else {
        listacupuacu.style.display = "none"
    }
})
closebtn_choconute.addEventListener("click", function(){

    if(listacasadinho.style.display === "block"){
        listacasadinho.style.display = "none";
    } else {
        listacasadinho.style.display = "none"
    }
})
closebtn_choconute.addEventListener("click", function(){

    if(listamix.style.display === "block"){
        listamix.style.display = "none";
    } else {
        listamix.style.display = "none"
    }
})



//morango
closebtn_morango.addEventListener("click", function(){

    if(listachoconute.style.display === "block"){
        listachoconute.style.display = "none";
    } else {
        listachoconute.style.display = "none"
    }
})
closebtn_morango.addEventListener("click", function(){

    if(listamaracuja.style.display === "block"){
        listamaracuja.style.display = "none";
    } else {
        listamaracuja.style.display = "none"
    }
})
closebtn_morango.addEventListener("click", function(){

    if(listaninho.style.display === "block"){
        listaninho.style.display = "none";
    } else {
        listaninho.style.display = "none"
    }
})
closebtn_morango.addEventListener("click", function(){

    if(listaacai.style.display === "block"){
        listaacai.style.display = "none";
    } else {
        listaacai.style.display = "none"
    }
})
closebtn_morango.addEventListener("click", function(){

    if(listacupuacu.style.display === "block"){
        listacupuacu.style.display = "none";
    } else {
        listacupuacu.style.display = "none"
    }
})
closebtn_morango.addEventListener("click", function(){

    if(listacasadinho.style.display === "block"){
        listacasadinho.style.display = "none";
    } else {
        listacasadinho.style.display = "none"
    }
})
closebtn_morango.addEventListener("click", function(){

    if(listamix.style.display === "block"){
        listamix.style.display = "none";
    } else {
        listamix.style.display = "none"
    }
})

//maracuja
closebtn_maracuja.addEventListener("click", function(){

    if(listachoconute.style.display === "block"){
        listachoconute.style.display = "none";
    } else {
        listachoconute.style.display = "none"
    }
})
closebtn_maracuja.addEventListener("click", function(){

    if(listamorango.style.display === "block"){
        listamorango.style.display = "none";
    } else {
        listamorango.style.display = "none"
    }
})
closebtn_maracuja.addEventListener("click", function(){

    if(listaninho.style.display === "block"){
        listaninho.style.display = "none";
    } else {
        listaninho.style.display = "none"
    }
})
closebtn_maracuja.addEventListener("click", function(){

    if(listaacai.style.display === "block"){
        listaacai.style.display = "none";
    } else {
        listaacai.style.display = "none"
    }
})
closebtn_maracuja.addEventListener("click", function(){

    if(listacupuacu.style.display === "block"){
        listacupuacu.style.display = "none";
    } else {
        listacupuacu.style.display = "none"
    }
})
closebtn_maracuja.addEventListener("click", function(){

    if(listacasadinho.style.display === "block"){
        listacasadinho.style.display = "none";
    } else {
        listacasadinho.style.display = "none"
    }
})
closebtn_maracuja.addEventListener("click", function(){

    if(listamix.style.display === "block"){
        listamix.style.display = "none";
    } else {
        listamix.style.display = "none"
    }
})


//ninho
closebtn_ninho.addEventListener("click", function(){

    if(listachoconute.style.display === "block"){
        listachoconute.style.display = "none";
    } else {
        listachoconute.style.display = "none"
    }
})
closebtn_ninho.addEventListener("click", function(){

    if(listamorango.style.display === "block"){
        listamorango.style.display = "none";
    } else {
        listamorango.style.display = "none"
    }
})
closebtn_ninho.addEventListener("click", function(){

    if(listamaracuja.style.display === "block"){
        listamaracuja.style.display = "none";
    } else {
        listamaracuja.style.display = "none"
    }
})
closebtn_ninho.addEventListener("click", function(){

    if(listaacai.style.display === "block"){
        listaacai.style.display = "none";
    } else {
        listaacai.style.display = "none"
    }
})
closebtn_ninho.addEventListener("click", function(){

    if(listacupuacu.style.display === "block"){
        listacupuacu.style.display = "none";
    } else {
        listacupuacu.style.display = "none"
    }
})
closebtn_ninho.addEventListener("click", function(){
    if(listacasadinho.style.display === "block"){
        listacasadinho.style.display = "none";
    } else {
        listacasadinho.style.display = "none"
    }
})
closebtn_ninho.addEventListener("click", function(){

    if(listamix.style.display === "block"){
        listamix.style.display = "none";
    } else {
        listamix.style.display = "none"
    }
})

//cupuacu----
closebtn_cupuacu.addEventListener("click", function(){

    if(listaacai.style.display === "block"){
        listaacai.style.display = "none";
    } else {
        listaacai.style.display = "none"
    }
})
closebtn_cupuacu.addEventListener("click", function(){

    if(listacasadinho.style.display === "block"){
        listacasadinho.style.display = "none";
    } else {
        listacasadinho.style.display = "none"
    }
})
closebtn_cupuacu.addEventListener("click", function(){

    if(listamix.style.display === "block"){
        listamix.style.display = "none";
    } else {
        listamix.style.display = "none"
    }
})
closebtn_cupuacu.addEventListener("click", function(){

    if(listamorango.style.display === "block"){
        listamorango.style.display = "none";
    } else {
        listamorango.style.display = "none"
    }
})
closebtn_cupuacu.addEventListener("click", function(){

    if(listamaracuja.style.display === "block"){
        listamaracuja.style.display = "none";
    } else {
        listamaracuja.style.display = "none"
    }
})
closebtn_cupuacu.addEventListener("click", function(){

    if(listaninho.style.display === "block"){
        listaninho.style.display = "none";
    } else {
        listaninho.style.display = "none"
    }
})
closebtn_cupuacu.addEventListener("click", function(){

    if(listachoconute.style.display === "block"){
        listachoconute.style.display = "none";
    } else {
        listachoconute.style.display = "none"
    }
})

//casadinho
closebtn_casadinho.addEventListener("click", function(){

    if(listaacai.style.display === "block"){
        listaacai.style.display = "none";
    } else {
        listaacai.style.display = "none"
    }
})
closebtn_casadinho.addEventListener("click", function(){

    if(listacupuacu.style.display === "block"){
        listacupuacu.style.display = "none";
    } else {
        listacupuacu.style.display = "none"
    }
})
closebtn_casadinho.addEventListener("click", function(){

    if(listamix.style.display === "block"){
        listamix.style.display = "none";
    } else {
        listamix.style.display = "none"
    }
})
closebtn_casadinho.addEventListener("click", function(){

    if(listamorango.style.display === "block"){
        listamorango.style.display = "none";
    } else {
        listamorango.style.display = "none"
    }
})
closebtn_casadinho.addEventListener("click", function(){

    if(listamaracuja.style.display === "block"){
        listamaracuja.style.display = "none";
    } else {
        listamaracuja.style.display = "none"
    }
})
closebtn_casadinho.addEventListener("click", function(){

    if(listaninho.style.display === "block"){
        listaninho.style.display = "none";
    } else {
        listaninho.style.display = "none"
    }
})
closebtn_casadinho.addEventListener("click", function(){

    if(listachoconute.style.display === "block"){
        listachoconute.style.display = "none";
    } else {
        listachoconute.style.display = "none"
    }
})

//mix----
closebtn_mix.addEventListener("click", function(){

    if(listaacai.style.display === "block"){
        listaacai.style.display = "none";
    } else {
        listaacai.style.display = "none"
    }
})
closebtn_mix.addEventListener("click", function(){

    if(listacupuacu.style.display === "block"){
        listacupuacu.style.display = "none";
    } else {
        listacupuacu.style.display = "none"
    }
})
closebtn_mix.addEventListener("click", function(){

    if(listacasadinho.style.display === "block"){
        listacasadinho.style.display = "none";
    } else {
        listacasadinho.style.display = "none"
    }
})
closebtn_mix.addEventListener("click", function(){

    if(listamorango.style.display === "block"){
        listamorango.style.display = "none";
    } else {
        listamorango.style.display = "none"
    }
})
closebtn_mix.addEventListener("click", function(){

    if(listamaracuja.style.display === "block"){
        listamaracuja.style.display = "none";
    } else {
        listamaracuja.style.display = "none"
    }
})
closebtn_mix.addEventListener("click", function(){

    if(listaninho.style.display === "block"){
        listaninho.style.display = "none";
    } else {
        listaninho.style.display = "none"
    }
})
closebtn_mix.addEventListener("click", function(){

    if(listachoconute.style.display === "block"){
        listachoconute.style.display = "none";
    } else {
        listachoconute.style.display = "none"
    }
})



//checkout mobile FundoCheckout

var FundoCheckout = document.getElementById("FundoCheckout") 
var container_checkout = document.getElementById("section-carrinho") 
var mostrar_checkout = document.getElementById("carrinho")
var mostrar_checkoutMobile = document.getElementById("CarrinhoMobile")
var conatiner_checkout = document.getElementById("container-checkout")
var close_checkout = document.getElementById("close-checkout")


function Checkout(botao) {
        conatiner_checkout.style.marginRight = "0%";
        FundoCheckout.style.display = "block"
        ContainerSearch.style.display = "none"
}
function CloseCheckout(botao) {
    conatiner_checkout.style.marginRight = "-250%";
    FundoCheckout.style.display = "none"
}



//Lozalização do cliente

/*var btnLocalização = document.getElementById("btn-localização")
var containerlocalização = document.getElementById("container-localização")

btnLocalização.addEventListener("click", function(){

    if(containerlocalização.style.display === "none"){
        containerlocalização.style.display = "block";
    } else {
        containerlocalização.style.display = "block"
    }
})

containerlocalização.addEventListener("click", function(){

    if(containerlocalização.style.display === "block"){
        containerlocalização.style.display = "none";
    } else {
        containerlocalização.style.display = "none"
    }
})*/


//slide
var slider = new KeenSlider("#my-keen-slider", {
    created: function (instance) {
      document
        .getElementById("arrow-left")
        .addEventListener("click", function () {
          instance.prev()
        })
  
      document
        .getElementById("arrow-right")
        .addEventListener("click", function () {
          instance.next()
        })
      var dots_wrapper = document.getElementById("dots")
      var slides = document.querySelectorAll(".keen-slider__slide")
      slides.forEach(function (t, idx) {
        var dot = document.createElement("button")
        dot.classList.add("dot")
        dots_wrapper.appendChild(dot)
        dot.addEventListener("click", function () {
          instance.moveToSlide(idx)
        })
      })
      updateClasses(instance)
    },
    slideChanged(instance) {
      updateClasses(instance)
    },
  })
  
  function updateClasses(instance) {
    var slide = instance.details().relativeSlide
    var arrowLeft = document.getElementById("arrow-left")
    var arrowRight = document.getElementById("arrow-right")
    slide === 0
      ? arrowLeft.classList.add("arrow--disabled")
      : arrowLeft.classList.remove("arrow--disabled")
    slide === instance.details().size - 1
      ? arrowRight.classList.add("arrow--disabled")
      : arrowRight.classList.remove("arrow--disabled")
  
    var dots = document.querySelectorAll(".dot")
    dots.forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("dot--active")
        : dot.classList.remove("dot--active")
    })
  }


// Evento dos complementos


class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }
    salvar() {
       let produto = this.lerDados1();
       let imgBag = document.getElementById('imgBag')
       imgBag.style.display= "none"

        if(this.validaCampos(produto)) {
            this.adicionar(produto)
        }
      
       this.listaTabela()
    }

    salvar2() {
        let produto = this.lerDados2();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar3() {
        let produto = this.lerDados3();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar4() {
        let produto = this.lerDados4();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }
   
     salvar5() {
        let produto = this.lerDados5();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar6() {
        let produto = this.lerDados6();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar7() {
        let produto = this.lerDados7();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar8() {
        let produto = this.lerDados8();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar9() {
        let produto = this.lerDados9();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }

     salvar10() {
        let produto = this.lerDados10();
        let imgBag = document.getElementById('imgBag')
        imgBag.style.display= "none"
 
         if(this.validaCampos(produto)) {
             this.adicionar(produto)
         }
       
        this.listaTabela()
     }





   listaTabela() {
       let tbody = document.getElementById('tbody')
       tbody.innerText = ''
       

       for (let i = 0; i < this.arrayProdutos.length; i++) {
          let tr = tbody.insertRow();
          
          let td_id = tr.insertCell()
          let td_produto = tr.insertCell()
          let td_valor = tr.insertCell()
          let td_acoes = tr.insertCell()

          td_id.innerText = this.arrayProdutos[i].id
          td_produto.innerText = this.arrayProdutos[i].nomeProduto
          td_valor.innerText = this.arrayProdutos[i].preco

          td_id.classList.add('center')
          td_acoes.classList.add('center')


          let imgDelete = document.createElement('img')
          imgDelete.src = 'imagens/lixeira-de-reciclagem.png'
          imgDelete.setAttribute("onclick", "produto.deletar("+this.arrayProdutos[i].id+")")

          td_acoes.appendChild(imgDelete)

          
       }
   }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }
    
    lerDados1() {
        let produto = {}
        let nome = ' Açaí 250ml'
        let preco = 'R$12,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados2() {
        let produto = {}
        let nome = 'Açaí 330ml'
        let preco = 'R$15,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados3() {
        let produto = {}
        let nome = 'Açaí 500ml'
        let preco = 'R$23,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados4() {
        let produto = {}
        let nome = 'Açaí 770ml'
        let preco = 'R$35,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados5() {
        let produto = {}
        let nome = 'Açaí 1kg'
        let preco = 'R$45,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados6() {
        let produto = {}
        let nome = 'Cremes 250ml'
        let preco = 'R$14,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados7() {
        let produto = {}
        let nome = '330ml +7 complementos'
        let preco = 'R$17,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados8() {
        let produto = {}
        let nome = '500ml +7 complementos'
        let preco = 'R$23,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados9() {
        let produto = {}
        let nome = '770ml +10 complementos'
        let preco = 'R$35,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }

    lerDados10() {
        let produto = {}
        let nome = '1kg +10 complementos'
        let preco = 'R$45,00'
        produto.id = this.id;
        produto.nomeProduto = nome
        produto.preco = preco

        return produto;
    }


    

    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == ''){
           
        }
        if(produto.preco == ''){
           
        }

        if(msg != ''){
            alert(msg);
            return false
        }
        return true;
    }

    cancelar() {
        
    }
    deletar(id) {

        let tbody = document.getElementById('tbody')

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)
            }
            
        }

        
    }
}
var produto = new Produto()

//Quando marca a opção de pagamento dinheiro

var SelectMoney = document.getElementById("CheckMoney")
var SectionTroco = document.getElementById("DinheiroHide")
var SelectCartao = document.getElementById("CheckCartao")

SelectMoney.addEventListener("click", function(){
    if(SectionTroco.style.display === "none"){
        SectionTroco.style.display ="block"
    } else {
        SectionTroco.style.display ="block"
    }
})
SelectCartao.addEventListener("click", function(){
    if(SectionTroco.style.display === "block"){
        SectionTroco.style.display ="none"
    } else {
        SectionTroco.style.display ="none"
    }
})