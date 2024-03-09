import BuyBtn from "../components/BuyBtn";
import Menu from "../components/Menu";

export default function VenteFako(){
    return (
        <>
            <Menu />
            <h1>vente fako</h1>
            <center>
                <div style={{margin:"10px" , display:"grid", gridTemplateColumns:"repeat(3, 1fr)"}}>
                    <div className="div" style={{margin:"10px"}}>
                        <BuyBtn id_produit ="buy_btn_1OsAvYFDP4bEYovMPIOPjZfX" />
                    </div>
                    <div className="div" style={{margin:"10px"}}>
                        <BuyBtn id_produit ="buy_btn_1OsCqKFDP4bEYovMH0NPhq5Q" />
                    </div>
                    <div className="div" style={{margin:"10px"}}>
                        <BuyBtn id_produit ="buy_btn_1OsAvYFDP4bEYovMPIOPjZfX" />
                    </div>
                    <div className="div" style={{margin:"10px"}}>
                        <BuyBtn id_produit ="buy_btn_1OsCqKFDP4bEYovMH0NPhq5Q" />
                    </div>
                    <div className="div" style={{margin:"10px"}}>
                        <BuyBtn id_produit ="buy_btn_1OsCgZFDP4bEYovMCAPRQ50X" />
                    </div>
                    <div className="div" style={{margin:"10px"}}>
                        <BuyBtn id_produit ="buy_btn_1OsAvYFDP4bEYovMPIOPjZfX" />
                    </div>
        
                </div>
            </center>
        </>
    )
}