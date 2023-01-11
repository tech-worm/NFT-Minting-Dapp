import ContractAbi from "../erc20abi.json";
import Web3 from "web3";
import { useState } from "react";
const BuyToken = () => {

    let myContract;
    let provider = window.ethereum;
    let ContractAddress = '0x06786C5F20Fc03817F40E011697b4dA8D3cc445b';
    const web3 = new Web3(provider);
    const networkId = web3.eth.net.getId();
    myContract = new web3.eth.Contract(ContractAbi, ContractAddress);
    console.log(myContract);
    console.log(networkId)


    const [amount, setAmount] = useState();
    const [tokens, setTokens] = useState();
    const HandleBuyToken = async () => {
        let _allownce = await myContract.methods.buyTokens(amount).send({ from: window.ethereum.selectedAddress });
        setTokens(_allownce);
    }

    return (
        <div className="Buy Token">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Buy Token
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="newFeeParameters">
                                <h5 className="card-header">buyToken</h5>
                                <div className="card-body">
                                    <p className="card-text">{tokens}</p>
                                    <br /><input type="text" placeholder="_newAddress" onChange={e => setAmount(e.target.value)} />
                                    <br /><button style={{ marginTop: "5px" }} onClick={HandleBuyToken}>Query</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyToken;