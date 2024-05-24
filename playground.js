/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/
// Write some JS code that will an object that represents your NFT and will
//the Metadata. It has values like name etc.

// Enter your code below this line

// Step 1: Create a variable to hold your NFTs
let nftCollection = [];

// Step 2: Define the mintNFT function
function mintNFT(name, eyeColor, shirtType, bling, backgroundColor, accessories, rarity) {
    // Create an NFT object with the provided metadata
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling,
        backgroundColor: backgroundColor,
        accessories: accessories,
        rarity: rarity
    };
    // Store the NFT object in the nftCollection array
    nftCollection.push(nft);
}

// Step 3: Define the listNFTs function
function listNFTs() {
    // Loop through the nftCollection array and print the metadata of each NFT
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("NFT " + (i + 1) + ":");
        console.log("Name: " + nftCollection[i].name);
        console.log("Eye Color: " + nftCollection[i].eyeColor);
        console.log("Shirt Type: " + nftCollection[i].shirtType);
        console.log("Bling: " + nftCollection[i].bling);
        console.log("Background Color: " + nftCollection[i].backgroundColor);
        console.log("Accessories: " + nftCollection[i].accessories);
        console.log("Rarity: " + nftCollection[i].rarity);
        console.log("-------------------------");
    }
}

// Step 4: Define the getTotalSupply function
function getTotalSupply() {
    // Return the total number of NFTs minted
    return nftCollection.length;
}

// Step 5: Call the functions to test them
mintNFT("CoolCat", "Blue", "T-Shirt", "Gold Chain", "Red", "Hat", "Common");
mintNFT("FunkyMonkey", "Green", "Hoodie", "Diamond Ring", "Yellow", "Sunglasses", "Rare");
mintNFT("ChillDog", "Brown", "Sweater", "Silver Necklace", "Blue", "Watch", "Epic");

console.log("List of all NFTs:");
listNFTs();

console.log("Total NFTs minted: " + getTotalSupply());
