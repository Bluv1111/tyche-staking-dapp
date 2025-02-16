window.addEventListener('load', function() {
    let provider;

    document.getElementById('connectButton').addEventListener('click', connectWallet);

    function connectWallet() {
        if (typeof window.ethereum !== 'undefined') {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            provider.send("eth_requestAccounts", []).then(() => {
                document.getElementById('status').innerText = 'Wallet Connected!';
            }).catch(error => {
                console.error('Error connecting wallet:', error);
                document.getElementById('status').innerText = 'Error connecting wallet!';
            });
        } else {
            document.getElementById('status').innerText = 'Please install MetaMask!';
        }
    }
});
