var navbar = "<nav><ul>";

navbar = navbar+ "<aside class="sidebar">
<nav>
    <div class="logo">
        <img src="imgs/logo.svg" alt="Logo" width="172px" height="48px">
    </div>
    <div class="perfil">
        <a href="#">
            <img id="fotoPerfil" src="imgs/minha_fota.png" alt="Foto de Perfil">
        </a> 
        <div class="nome-sino">
            <a href="#" id="userName">Débora Amaral</a>
            <div class="sino-notificacao">
                <a href="#"><img src="imgs/notificacao.svg" alt="Sino de Notificação" id="iconSino"></a>
            </div>
        </div>
        <div class="nivel-engrenagem">
            <p2 id="userLevel">Administrador</p2>
            <div class="engrenagem">
                <a href="#"><img src="imgs/engrenagem.svg" alt="Engrenagem" id="iconEngrenagem"></a>
            </div>
        </div>
    </div>
    <div class="menu">
        <ul>
            <li id="inicio">
                <div class="inicio">
                    <img id="icons" src="imgs/home.svg" alt="Início" width="32px" height="32px">
                </div>
                <a href="../main_content/index.html" id="menu-a">Início</a>
            </li>
            <li>
                <div>
                    <img id="icons" src="imgs/equipamento.svg" alt="Equipamentos" width="32px" height="32px">
                </div>
                <div>
                    <a href="#" id="menu-a">Equipamentos</a>
                </div>
                <div class="submenu">
                    <a href="#">Meu Histórico</a>
                </div>
            </li>
            <li>
                <div>
                    <img id="icons" src="imgs/brinde.svg" alt="Brindes" width="32px" height="32px">
                </div>
                <div>
                    <a href="#" id="menu-a">Brindes</a>
                </div>
                <div class="submenu">
                    <a href="#" id="kits-margin-left">Kits</a>
                </div>
            </li>
            <li>
                <div>
                    <img id="icons" src="imgs/usuarios.svg" alt="Usuários" width="29px" height="29px">
                </div>
                <a href="#" id="menu-a">Usuários</a>
            </li>
        </ul>
    </div>
    <div class="logout">
        <div class="sair">
            <img src="imgs/sair.svg" alt="Sair" width="32px" height="32px">
        </div>  
        <a href="#" id="menu-a">Sair</a>
    </div>
</nav>
</aside>
<div class="designedBy-footer">
<footer class="senac-sobreNos">
    <p id="ano-designedBy"> 2022 | Designed By&nbsp;</p>
    <a href="#" id="fabricaSoftware">Fábrica de Software T.57&#160;</a>
    <a href="https://www.ms.senac.br/" target="_blank" id="fabricaSoftware"> Senac MS</a>
</footer>
</div>";

$('#sidebar').html(navbar);