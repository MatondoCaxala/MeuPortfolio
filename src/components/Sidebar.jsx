import SocialNetworks from './SocialNetworks'
import InformetionContainer from './InformetionContainer'

import Avatar from '../img/Mista.jpg'

import "../style/components/Sidebar.sass"

const Sidebar = () =>{
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Matondo Caxala" />
            <p className="title">Desenvolvidor</p>
            <SocialNetworks/>
            <InformetionContainer/>
            <a href="" className="btn">
                Downlond Curriculo
            </a>
        </aside>
    )
}

export default Sidebar