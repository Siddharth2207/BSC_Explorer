const mongoose = require('mongoose')
const Schema = mongoose.Schema; 


const transactionSchema = new Schema({
    blockHash: {
      type: String,
      default : ''
    },
    blockNumber: {
      type: Number, 
      default : 0
    },
    contractAddress: {
        type: String,
        default : ''
    },
    cumulativeGasUsed: {
        type: Number, 
        default : 0
    },
    gas: {
        type: Number, 
        default : 0
    }, 
    gasPrice: {
        type: String,
        default : ''
    },
    input: {
        type: String,
        default : ''
    }, 
    nonce: {
        type: Number, 
        default : 0
    },
    from: {
        type: String,
        default : ''
    },
    gasUsed: {
        type: Number, 
        default : 0
    },
    logs: {
        type:Array, 
        default:[]
    },
    logsBloom: {
        type: String,
        default : ''
    },
    status: {
      type: Boolean,
      default : false
    },
    to: {
      type: String,  
      default : ''
    }, 
    transactionHash: {
        type: String,  
        default : '',
        required:true
      }, 
    transactionIndex: {
        type: Number, 
        default : 0
    }, 
    type: {
        type: String,  
        default : ''
      },  
    value: {
        type: String,  
        default : '' ,

    }, 
    v: {
        type: String,  
        default : ''
    },
    r: {
        type: String,  
        default : ''
    }, 
    s: {
        type: String,  
        default : ''
    }

  });





module.exports = mongoose.model('TRANSACTIONS', transactionSchema, 'TRANSACTIONS');