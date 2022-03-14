import Icone from "./Icone";
export default function Corpo(){
    return (
        <div class="corpo">
			<Esquerda />
			<Sidebar />
		</div>
    )
}


function Esquerda(){
    const storiesBox = [
        <Story imagem="assets/img/9gag.svg" usuario="9gag" />,
        <Story imagem="assets/img/meowed.svg" usuario="meowed" />,
        <Story imagem="assets/img/barked.svg" usuario="barked" />,
        <Story imagem="assets/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet" />,
        <Story imagem="assets/img/wawawicomics.svg" usuario="wawawicomics" />,
        <Story imagem="assets/img/respondeai.svg" usuario="respondeai" />,
        <Story imagem="assets/img/filomoderna.svg" usuario="filomoderna" />,
        <Story imagem="assets/img/memeriagourmet.svg" usuario="memeriagourmet" />
    ]
    const postsBox = [
        <Post imagem="assets/img/meowed.svg" usuario="meowed" imgConteudo="assets/img/gato-telefone.svg" imgCurtidas="assets/img/respondeai.svg" curtidoPor="respondeai" numCurtidas="101.523" />,
        <Post imagem="assets/img/barked.svg" usuario="barked" imgConteudo="assets/img/dog.svg" imgCurtidas="assets/img/adorable_animals.svg" curtidoPor="adorable_animals" numCurtidas="99.159" />
    ]
    return (
        <div class="esquerda">
            <div class="stories">
                {storiesBox.map(story => story)}
                <Icone class="setinha" nomeIcone="chevron-forward-circle" />
            </div>
            <div class="posts">
                {postsBox.map(post => post)}
            </div>
		</div>
    )
}

function Story(props){
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} alt="" />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    )
}

function Post(props) {
    return (
        <div class="post">
            <TopoPost imagemPost={props.imagem} usuarioPost={props.usuario} />
            <ConteudoPost imgConteudoPost={props.imgConteudo}/>
            <FundoPost imgCurtidasPost={props.imgCurtidas} curtidoPorPost={props.curtidoPor} numCurtidasPost={props.numCurtidas} />
        </div>
    )
}

function TopoPost(props){
    return (
        <div class="topo">
            <div class="usuario">
                  <img src={props.imagemPost} alt="" />
                  {props.usuarioPost}
            </div>
            <div class="acoes">
                  <Icone nomeIcone="ellipsis-horizontal" />
            </div>
        </div>
    )
}

function ConteudoPost(props){
    return(
        <div class="conteudo">
            <img src={props.imgConteudoPost} alt="" />
        </div>
    )
}

function FundoPost(props){
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <Icone nomeIcone="heart-outline" />
                    <Icone nomeIcone="chatbubble-outline" />
                    <Icone nomeIcone="paper-plane-outline" />
                </div>
                <div>
                    <Icone nomeIcone="bookmark-outline" />
                </div>
            </div>

            <div class="curtidas">
                <img src={props.imgCurtidasPost} alt="" />
                <div class="texto">
                    Curtido por <strong>{props.curtidoPorPost}</strong> e <strong>outras {props.numCurtidasPost} pessoas</strong>
                </div>
            </div>
        </div>
    )
}

function Sidebar(){
    return (
        <div class="sidebar">
            <Usuario imagem="assets/img/catanacomics.svg" perfil="catanacomics" nome="Catana" />
            <Sugestoes />
            <Links />
            <Copyright />
        </div>

    )
}

function Usuario(props){
    return (
        <div class="usuario">
            <img src={props.imagem} alt="" />
            <div class="texto">
              <strong>{props.perfil}</strong>
              {props.nome}
            </div>
        </div>
    )
}

function Sugestoes(){
    const sugestoesBox = [
        <Sugestao imagem="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você" />,
        <Sugestao imagem="assets/img/chibirdart.svg" nome="chibirdart" razao="Segue você" />,
        <Sugestao imagem="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" razao="Novo no Instagram" />,
        <Sugestao imagem="assets/img/adorable_animals.svg" nome="adorable_animals" razao="Segue você" />,
        <Sugestao imagem="assets/img/smallcutecats.svg" nome="smallcutecats" razao="Segue você" />
    ]
    return (
        <div class="sugestoes">
            <Titulo />
            {sugestoesBox.map(sugestao => sugestao)}
        </div>
    )
}

function Titulo(){
    return(
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    )
}

function Sugestao(props){
    return(
        <div class="sugestao">
            <div class="usuario">
            <img src={props.imagem} alt="" />
            <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">{props.razao}</div>
            </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

function Links(){
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    )
}

function Copyright(){
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}
