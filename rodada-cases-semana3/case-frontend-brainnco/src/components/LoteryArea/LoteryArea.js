import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import Logo from "../../assets/images/logo.png"
import { LoteryField } from "../../assets/styles/LoteryArea/LoteryAreaStyle";

const LoteryArea = () => {
    
    const { lotteriesResult, lotteriesId, lotteries, setLotteriesId } = useContext(GlobalStateContext);

    const loteryOptions = lotteries.map((lotery) => {
        return (
            <option key={lotery.id} value={lotery.id}>
                {lotery.nome.toUpperCase()}
            </option>
        )
    });

    function onChangeLotery (event) {
        setLotteriesId(Number(event.target.value))
    };

    const loteryTitle = lotteries.map((lotery) => {
        if(lotery.id === lotteriesId){
            return(
                <div key={lotery.id}>
                    <img src={Logo} alt="Lotery logo" />
                    <h1>{lotery.nome.toUpperCase()}</h1>
                </div>
            )
        }
        
    });

    console.log(lotteriesResult)


    return(
        <LoteryField lotteriesId={lotteriesId}>
            <select onChange={onChangeLotery}>{loteryOptions}</select>
            {loteryTitle}
        </LoteryField>
    )
};

export default LoteryArea;