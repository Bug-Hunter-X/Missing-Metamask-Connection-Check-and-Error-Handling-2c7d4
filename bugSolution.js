async function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('MetaMask is not installed!');
    return;
  }

  let accounts = await ethereum.request({ method: 'eth_accounts' });

  if (accounts.length !== 0) {
    const account = accounts[0];
    console.log('Found an authorized account:', account);
  } else {
    console.log('No authorized account found');
  }

  ethereum.on('accountsChanged', (accounts) => {
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log('Account changed', account);
    } else {
      console.log('No accounts found');
    }
  });

  ethereum.on('chainChanged', (chainId) => {
    window.location.reload();
  });
} 