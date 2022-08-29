import AboutContainer from "./AboutContainer"
import TecnologiasContainer from "./TecnologiasContainer"
import ProjetosContainer from "./ProjetosContainer"


import "../style/components/maincontant.sass"

const MainContant = () =>{
    return (
        <main id="main-contant">
            <AboutContainer/>
            <TecnologiasContainer/>
            <ProjetosContainer/>
        </main>
    )
}

export default MainContant