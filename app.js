
function cal(){
    let sAmount = parseInt(document.getElementById("s").value);
    let mAmount = parseInt(document.getElementById("m").value);
    let lAmount = parseInt(document.getElementById("l").value);
    let xlAmount = parseInt(document.getElementById("xl").value);
  

    sAmount = isNaN(sAmount) ? 0 : sAmount ;
    mAmount = isNaN(mAmount) ? 0 : mAmount ;
    lAmount = isNaN(lAmount) ? 0 : lAmount ;
    xlAmount = isNaN(xlAmount) ? 0 : xlAmount ;
    

    let sPrice = 2 ;
    let mPrice = 4;
    let lPrice = 6;
    let xlPrice = 8 ;

    let quantity = sAmount + mAmount + lAmount + xlAmount ;
    let subtotal = `${ sPrice * sAmount + mAmount * mPrice + lPrice * lAmount + xlAmount * xlPrice} $ `;

    document.getElementById("quantity").innerText = quantity;
    document.getElementById("total").innerText = subtotal
}


