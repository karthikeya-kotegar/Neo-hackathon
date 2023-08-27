let neoline;
let neolineN3;

export function initDapi() {
    console.log("initialise neooo")
    const initCommonDapi = new Promise((resolve, reject) => {
        window.addEventListener('NEOLine.NEO.EVENT.READY', () => {
            if (window.NEOLine) {
                neoline = new window.NEOLine.Init();
                if (neoline) {
                    resolve(neoline);
                } else {
                    reject('common dAPI method failed to load.');
                }
            }
        });
    });
    const initN3Dapi = new Promise((resolve, reject) => {
        window.addEventListener('NEOLine.N3.EVENT.READY', () => {
            if (window.NEOLineN3) {
                neolineN3 = new window.NEOLineN3.Init();
                if (neolineN3) {
                    resolve(neolineN3);
                } else {
                    reject('N3 dAPI method failed to load.');
                }
            }
        });
    });
    initCommonDapi.then(() => {
        console.log('The common dAPI method is loaded.');
        return initN3Dapi;
    }).then(() => {
        console.log('The N3 dAPI method is loaded.');
    }).catch((err) => {
        console.log(err);
    })
};

export function getProvider() {
    neolineN3.getProvider()
        .then(provider => {
            const {
                name,
                website,
                version,
                compatibility,
                extra
            } = provider;

            console.log('Provider name: ' + name);
            console.log('Provider website: ' + website);
            console.log('Provider dAPI version: ' + version);
            console.log('Provider dAPI compatibility: ' + JSON.stringify(compatibility));
            console.log('Extra provider specific atributes: ' + JSON.stringify(compatibility));
        })
        .catch((error) => {
            const { type, description, data } = error;
            switch (type) {
                case 'NO_PROVIDER':
                    console.log('No provider available.');
                    break;
                case 'CONNECTION_DENIED':
                    console.log('The user rejected the request to connect with your dApp.');
                    break;
                default:
                    // Not an expected error object.  Just write the error to the console.
                    console.error(error);
                    break;
            }
        });
}

export function getBalance() {
    neolineN3.getBalance()
        .then((results) => {
            Object.keys(results).forEach(address => {
                const balances = results[address];
                balances.forEach(balance => {
                    const { contract, symbol, amount } = balance

                    console.log('Address: ' + address);
                    console.log('contract: ' + contract);
                    console.log('Asset symbol: ' + symbol);
                    console.log('Amount: ' + amount);
                });
            });
        })
        .catch((error) => {
            const { type, description, data } = error;
            switch (type) {
                case 'NO_PROVIDER':
                    console.log('No provider available.');
                    break;
                case 'CONNECTION_DENIED':
                    console.log('The user rejected the request to connect with your dApp');
                    break;
                default:
                    // Not an expected error object.  Just write the error to the console.
                    console.error(error);
                    break;
            }
        });
}

export function send(from, to, amount) {
    neolineN3.send({
        // fromAddress: 'Ne6szxHuvk2LCHBTBJLf4XHXP4n1bmGSPf',
        fromAddress: from,
        toAddress: to,
        // asset: 'GAS',
        asset: 'NEO',
        amount: amount,
        fee: '0.0001',
        broadcastOverride: false
    })
        .then(result => {
            console.log('Send transaction success!');
            console.log('Transaction ID: ' + result.txid);
            console.log('RPC node URL: ' + result.nodeURL);
        })
        .catch((error) => {
            const { type, description, data } = error;
            switch (type) {
                case 'NO_PROVIDER':
                    console.log('No provider available.');
                    break;
                case 'RPC_ERROR':
                    console.log('There was an error when broadcasting this transaction to the network.');
                    break;
                case 'MALFORMED_INPUT':
                    console.log('The receiver address provided is not valid.');
                    break;
                case 'CANCELED':
                    console.log('The user has canceled this transaction.');
                    break;
                case 'INSUFFICIENT_FUNDS':
                    console.log('The user has insufficient funds to execute this transaction.');
                    break;
                default:
                    // Not an expected error object.  Just write the error to the console.
                    console.error(error);
                    break;
            }
        });

}

export function addToScript() {
    let scriptHashVal;

    neolineN3.AddressToScriptHash({ address: 'NQUN2zkzwpypEi6kvGYexy8cQKN2ycyJjF' })
        .then(result => {
            const { scriptHash } = result;
            console.log('scriptHash' + scriptHash);
            scriptHashVal = scriptHash;
            
        })
        .catch((error) => {
            const { type, description, data } = error;
            switch (type) {
                case 'NO_PROVIDER':
                    console.log('No provider available.');
                    break;
                case 'MALFORMED_INPUT':
                    console.log('Please check your input');
                    break;
                default:
                    // Not an expected error object.  Just write the error to the console.
                    console.error(error);
                    break;
            }
        });

    return scriptHashVal


}

export function invokeMintNew(to) {
    // get script
    // let scriptHashVal = addToScript();

    // let scriptHashVal;

    console.log("signer out scriptHashVal", "f0a33d62f32528c25e68951286f238ad24e30032")
    console.log("to", to);

    neolineN3.invoke({
        scriptHash: '0x6983b66e6d4f69469bc5adf998305576a6ba1ad5',
        operation: 'mint',
        args: [
            {
                type: "Address",
                value: to,
            }
        ],
        fee: '0.0001',
        broadcastOverride: false,
        signers: [
            {
                account: "f0a33d62f32528c25e68951286f238ad24e30032",
                scopes: 128,
            }
        ]
    })
        .then(result => {
            console.log('Invoke transaction success!');
            console.log('Transaction ID: ' + result.txid);
            console.log('RPC node URL: ' + result.nodeURL);
        })
        .catch((error) => {
            const { type, description, data } = error;
            switch (type) {
                case 'NO_PROVIDER':
                    console.log('No provider available.');
                    break;
                case 'RPC_ERROR':
                    console.log('There was an error when broadcasting this transaction to the network.');
                    break;
                case 'CANCELED':
                    console.log('The user has canceled this transaction.');
                    break;
                default:
                    // Not an expected error object.  Just write the error to the console.
                    console.error(error);
                    break;
            }
        });

}


export function sendToken() {

    neolineN3.invoke({
        scriptHash: '0x6983b66e6d4f69469bc5adf998305576a6ba1ad5',
        operation: 'transfer',
        args: [
            {
                type: "Address",
                value: "NbrUYaZgyhSkNoRo9ugRyEMdUZxrhkNaWB",
            },
            {
                type: "Address",
                value: "Ne6szxHuvk2LCHBTBJLf4XHXP4n1bmGSPf",
            },
            {
                type: "Integer",
                value: "1000",
            },
            {
                type: "Any",
                value: null,
            }
        ],
        fee: '0.0001',
        broadcastOverride: false,
        signers: [
            {
                account: "2cab903ff032ac693f8514581665be534beac39f",
                scopes: 16,
                allowedContracts: ["0x1415ab3b409a95555b77bc4ab6a7d9d7be0eddbd", "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"],
                allowedGroups: []
            }
        ]
    })
    .then(result => {
        console.log('Invoke transaction success!');
        console.log('Transaction ID: ' + result.txid);
        console.log('RPC node URL: ' + result.nodeURL);
    })
    .catch((error) => {
        const {type, description, data} = error;
        switch(type) {
            case 'NO_PROVIDER':
                console.log('No provider available.');
                break;
            case 'RPC_ERROR':
                console.log('There was an error when broadcasting this transaction to the network.');
                break;
            case 'CANCELED':
                console.log('The user has canceled this transaction.');
                break;
            default:
                // Not an expected error object.  Just write the error to the console.
                console.error(error);
                break;
        }
    });
}