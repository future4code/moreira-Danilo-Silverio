import React, { useContext } from "react";
import { Numbers, ResultContent, SortingResults } from "../../assets/styles/SortingNumber/SortingNumberStyle";
import GlobalStateContext from "../../global/GlobalStateContext";

const SortingNumber = () => {
    
    const { lotteriesResult } = useContext(GlobalStateContext);
    
    const resultNumbers = () => {
        return (
            lotteriesResult &&
            lotteriesResult.numeros &&
            lotteriesResult.numeros.map((number) => {
                return <Numbers key={number}> {number}</Numbers>;
          })
        );
      };


    console.log(lotteriesResult);
    
    return (
        <SortingResults>
            <ResultContent>
                {resultNumbers()}
            </ResultContent>
        </SortingResults>
    )
};

export default SortingNumber;