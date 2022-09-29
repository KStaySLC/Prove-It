import React from 'react'
import '../static/bank.css'
const width = {width: '25%'};

function Bank() {
  return (
    <div>
        <div class="bankContainer">
                <div class="bankBalance">
                    <p class="balance">Balance:</p>
                    <p class="amount">$4000 USD</p>
                </div>
        </div>
        <div class="funds">
            <button class="addFunds" type="button" style={width}>Add funds</button>
            <button class="transferFunds" type="button" style={width}>Transfer funds</button>
        </div>
        <div class="history">
            <div class="historyHeader">
                <h1>Transaction history:</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae illo deleniti dicta reprehenderit, eos ipsum pariatur fugiat expedita atque quam illum veniam voluptatem unde quasi voluptatum eligendi laudantium. Dolor, necessitatibus.</p>
            </div>
        </div>
    </div>
  )
}

export default Bank