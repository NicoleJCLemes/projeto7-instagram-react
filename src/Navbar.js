import Icone from "./Icone";
export default function Navbar(){
    return(
        <div class="navbar">
            <div class="container">
                <Logo nomeLogo="logo-instagram" imagemLogo="assets/img/logo.png" />
                <Icone class="logo-mobile" nomeIcone="logo-instagram" />
                <InstagramMobile imagemInstagramMobile="assets/img/logo.png" />
                <Pesquisa />
                <Icones />
                <Icone class="icones-mobile" nomeIcone="paper-plane-outline" />
            </div>
        </div>
    )
}

function Logo(props){
    return (
        <div class="logo">
            <Icone nomeIcone={props.nomeLogo} />
            <div class="separador"></div>
            <img src={props.imagemLogo} alt="" />
        </div>
    )
}

function InstagramMobile(props){
    return (
        <div class="instagram-mobile">
            <img src={props.imagemInstagramMobile} alt="" />
        </div>
    )
}

function Pesquisa(){
    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    )
}

function Icones(){
    return (
        <div class="icones">
            <Icone nomeIcone="paper-plane-outline" />
            <Icone nomeIcone="compass-outline" />
            <Icone nomeIcone="heart-outline" />
            <Icone nomeIcone="person-outline" />
        </div>
    )
}
