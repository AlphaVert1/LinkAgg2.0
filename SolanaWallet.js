// your-custom-script.js

// Define the network (Devnet or Mainnet)
const network = Network.Devnet; // or Network.Mainnet

// Initialize a wallet adapter
const wallet = new WalletAdapter({
    network,
});

// Function to render the wallet selector buttons
function renderWalletSelector() {
    const walletSelectorContainer = document.getElementById("wallet-selector");

    const walletButtons = new WalletSelectorButton(wallet);
    walletSelectorContainer.appendChild(walletButtons);
}

// Function to open the wallet selector when the button is clicked
function openWalletSelector() {
    wallet.connect(); // This will open the wallet selector
}

// Add an event listener to the "Connect Wallet" button
const connectWalletButton = document.getElementById("connect-wallet-button");
connectWalletButton.addEventListener("click", openWalletSelector);

// Function to initialize the wallet adapter and handle connections
async function initializeWallet() {
    try {
        await wallet.connect();
        console.log("Wallet connected:", wallet.publicKey.toBase58());
        // You can perform blockchain interactions here once connected
    } catch (error) {
        console.error("Error connecting wallet:", error);
    }
}

// Add an event listener to initialize the wallet when the page loads
window.addEventListener("load", async () => {
    await wallet.init();
    renderWalletSelector();
    initializeWallet();
});
