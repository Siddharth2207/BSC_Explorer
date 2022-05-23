const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/connect');
const Web3 = require('web3') 
const provider = new Web3.providers.HttpProvider("https://speedy-nodes-nyc.moralis.io/3505b990e9eb25a38d1c6556/bsc/testnet");
const web3 = new Web3(provider)    
const cors = require('cors');  
const TRANSACTIONS = require('./models/Transaction')
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())  



connectDB();  

app.get('/save', async (req, res) => {
  let transaction =await web3.eth.getTransactionReceipt(req.body.hash)  
  let data = await web3.eth.getTransaction(req.body.hash)   

  let save_event = await TRANSACTIONS.create({
    blockHash : transaction.blockHash,
    blockNumber : transaction.blockNumber,
    contractAddress : transaction.contractAddress, 
    cumulativeGasUsed : transaction.cumulativeGasUsed,
    gas : data.gas,
    gasPrice : data.gasPrice,
    input : data.input,
    nonce : data.nonce,
    from : transaction.from,
    gasUsed : transaction.gasUsed,
    logs : transaction.logs,
    logsBloom : transaction.logsBloom, 
    status : transaction.status,
    to : transaction.to,
    transactionHash : transaction.transactionHash,
    transactionIndex : transaction.transactionIndex, 
    type : transaction.type, 
    value : data.value,
    v : data.v, 
    r : data.r,
    s : data.s


  })

  res.send(transaction)
  
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SERVER RUNNING`);
});
 









