import React from "react";
import { ethers } from "ethers";
import DigitalWill from "../artifacts/contracts/DigitalWill.sol/DigitalWill";

function RevertPayment() {
  const handleButtonClick = async () => {
    let provider = new ethers.providers.Web3Provider(window.ethereum);

    const Signer = provider.getSigner();

    const digitalWill = new ethers.Contract(
      "0xDd3330863ecEa52a146f001f6330F2EA24931173",
      DigitalWill.abi,
      Signer
    );

    const tx = await digitalWill.revertToOwner();
    await tx.wait();
    console.log(" payment reverted: ", tx);

    alert(" payment revertedd to ur wallet..");
  };

  return (
    <div>
      <h3> Revert Payment: </h3>
      <label> click the button and sign from ur connected wallet: </label>
      <button onClick={handleButtonClick}> Revet Payment</button>
      <p>
        {" "}
        get your money back in the wallet from which you send the payment and
        speccifed the user. Any other wallet will not work.
      </p>
    </div>
  );
}

export default RevertPayment;
