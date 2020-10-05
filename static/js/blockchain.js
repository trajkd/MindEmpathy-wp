AWS.config.update({
  region: "us-east-2",
  endpoint: 'https://dynamodb.us-east-2.amazonaws.com',
  accessKeyId: 'AKIAIOIM2YOIK2Z34HNA',
  secretAccessKey: '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'
});

var docClient = new AWS.DynamoDB.DocumentClient();

function createItem(address, balance) {
    var params = {
        TableName :"Balances",
        Item:{
            "address": address,
            "balance": balance
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.log("Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2));
        }
    });
}

function updateItem(address, balance) {
    var params = {
        TableName: "Balances",
        Key:{
            "address": address
        },
        UpdateExpression: "set balance = :b",
        ExpressionAttributeValues:{
            ":b": balance
        },
        ReturnValues:"UPDATED_NEW"
    };

    docClient.update(params, function(err, data) {
        if (err) {
            console.log("Unable to update item: " + "\n" + JSON.stringify(err, undefined, 2));
        }
    });
}

var readItem = function(address) {
    return new Promise(function(resolve) {
        var params = {
            TableName: "Balances",
            Key:{
                "address": address
            }
        };
        docClient.get(params, function(err, data) {
            if (err) {
                console.log("Unable to read balances: " + "\n" + JSON.stringify(err, undefined, 2));
            } else {
                resolve(data.Item);
            }
        });
    });
}

var scanData = new Promise(function(resolve) {
    var params = {
        TableName: "Balances"
    };

    docClient.scan(params, onScan);

    function onScan(err, data) {
        if (err) {
            console.log("Unable to scan balances: " + "\n" + JSON.stringify(err, undefined, 2));
        } else {
        	resolve(data.Items);         
        }
    }
});

function Coin(Contract) {
    this.web3 = null;
    this.instance = null;
    this.Contract = Contract;
};

Coin.prototype.init = function() {
    this.web3 = new Web3(
        (window.web3 && window.web3.currentProvider) ||
        new Web3.providers.HttpProvider(this.Contract.endpoint));

    ethereum.enable();

    var contract_interface = this.web3.eth.contract(this.Contract.abi);

    this.instance = contract_interface.at(this.Contract.address);
};

Coin.prototype.showAddressBalance = function(hash, cb) {
    var that = this;
    var address = $("#balance-address").val();

    if(!isValidAddress(address)) {
        console.log("Invalid address");
        return;
    }

    this.getBalance(address, function(error, balance) {
        if(error) {
            console.log(error)
        }
        else {
            console.log(balance.toNumber());
                $("#message").text(balance.toNumber());
		}
	})
};

Coin.prototype.getBalance = function(address, cb) {
    this.instance.showbalances(address, function(error, result) {
        cb(error, result);
    })
}

Coin.prototype.createTokens = function() {
    var that = this;
    
    var address = $("#create-address").val();
    var amount = $("#create-amount").val();
    console.log(amount);

    if(!isValidAddress(address)) {
        console.log("Invalid address");
        return;
    }

    if(!isValidAmount(amount)) {
        console.log("Invalid amount");
        return;
    }

    this.instance.mint(address, amount, { from:
window.web3.eth.accounts[0], gas: 100000, gasPrice: 100000, gasLimit: 100000 }, 
                function(error, txHash) {
            if(error) {
                console.log(error);
            }
            else {
                that.waitForReceipt(txHash, function(receipt) {
                    if(receipt.status) {
                        $("#create-address").val("");
                        $("#create-amount").val("");
                        readItem(address).then(function(balanceindb) {
                            if (!balanceindb) {
                                that.getBalance(address, function(error, newbalance) {
                                    if(error) {
                                        console.log(error)
                                    }
                                    else {
                                        createItem(address, newbalance.toNumber());
                                    }
                                });
                            }
                        });
                    }
                    else {
                        console.log("error");
                    }
                });
            }
        }
    )
};

Coin.prototype.sendTokens = function() {
    var that = this;
    
    var address = $("#send-address").val();
    var amount = $("#send-amount").val();
    console.log(amount);

    if(!isValidAddress(address)) {
        console.log("Invalid address");
        return;
    }

    if(!isValidAmount(amount)) {
        console.log("Invalid amount");
        return;
    }

    this.instance.send(address, amount, { from:
window.web3.eth.accounts[0], gas: 100000, gasPrice: 100000, gasLimit: 100000 }, 
                function(error, txHash) {
            if(error) {
                console.log(error);
            }
            else {
                that.waitForReceipt(txHash, function(receipt) {
                    if(receipt.status) {
                        $("#send-address").val("");
                        $("#send-amount").val("");
                        readItem(address).then(function(balanceindb) {
                            if (!balanceindb) {
                                that.getBalance(address, function(error, newbalance) {
                                    if(error) {
                                        console.log(error)
                                    }
                                    else {
                                        createItem(address, newbalance.toNumber());
                                    }
                                });
                            }
                        });
                    }
                    else {
                        console.log("error");
                    }
                });
            }
        }
    )
};

Coin.prototype.waitForReceipt = function(hash, cb) {
    var that = this;

    this.web3.eth.getTransactionReceipt(hash, function(err, receipt) {
        if (err) {
            error(err);
        }
        if (receipt !== null) {
            //Transaction went through
            if (cb) {
                cb(receipt);
            }
        } else {
            window.setTimeout(function() {
                that.waitForReceipt(hash, cb);
            }, 2000);
        }
    });
};

function isValidAddress(address) {
    return /^(0x)?[0-9a-f]{40}$/i.test(address);
};

function isValidAmount(amount) {
    return amount > 0 && typeof Number(amount) == 'number';    
};

Coin.prototype.bindButtons = function() {
    var that = this;

    $(document).on("click", "#button-create", function() {
        that.createTokens();
    });

    $(document).on("click", "#button-send", function() {
        that.sendTokens();
    });

    $(document).on("click", "#button-check", function() {
        that.showAddressBalance();
    });

    window.setInterval(function(){
    	scanData.then(function(balances) {
    		if(balances.length > 0) {
	    		balances.forEach(function(oldbalance) {
					that.getBalance(oldbalance.address, function(error, newbalance) {
				        if(error) {
				            console.log(error)
				        }
				        else {
				            updateItem(oldbalance.address, newbalance.toNumber())
						}
					});
				});
				scanData.then(function(balances) {
                    var realtime = '';
    				balances.forEach(function(updatedbalance) {
    					realtime += updatedbalance.address + ": " + updatedbalance.balance + "<br>";
    				});
                    $(".realtime-data").get(0).innerHTML = realtime;
                });
	    	}
    	});
    }, 10000);
};

Coin.prototype.onReady = function() {
    this.bindButtons();
    this.init();
};

var coin = new Coin({
				abi: [
				{
					"inputs": [],
					"stateMutability": "nonpayable",
					"type": "constructor"
				},
				{
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"internalType": "address",
							"name": "from",
							"type": "address"
						},
						{
							"indexed": false,
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"indexed": false,
							"internalType": "uint256",
							"name": "amount",
							"type": "uint256"
						}
					],
					"name": "Sent",
					"type": "event"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "",
							"type": "address"
						}
					],
					"name": "balances",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "",
							"type": "uint256"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "receiver",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "amount",
							"type": "uint256"
						}
					],
					"name": "mint",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "minter",
					"outputs": [
						{
							"internalType": "address",
							"name": "",
							"type": "address"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "receiver",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "amount",
							"type": "uint256"
						}
					],
					"name": "send",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "_account",
							"type": "address"
						}
					],
					"name": "showbalances",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "",
							"type": "uint256"
						}
					],
					"stateMutability": "view",
					"type": "function"
				}
			],
				address: "0xeF3ced5fccCFd8E5a32cAE58f68892CA56d68934",
				endpoint: "https://rinkeby.infura.io/v3/4e927f8390b043e6bc52c6c30e9c3d01"
				});

$(document).ready(function() {
    coin.onReady();
});