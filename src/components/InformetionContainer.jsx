import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai '

import "../style/components/informetioncontainer.sass"

const InformetionContainer = () =>{
    return (
        <section id="informetion">
            <div className="info-card">
                <AiFillPhone id="phone-icon"/>
                <div>
                    <h3>Telefone</h3>
                    <p>(+244)925467107</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon"/>
                <div>
                    <h3>E-mail</h3>
                    <p>matondocaxala@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon"/>
                <div>
                    <h3>Localização</h3>
                    <p>Luanda-cassenda</p>
                </div>
            </div>
        </section>
    )
}

export default InformetionContainer