var orm = require("./config/orm.js");


orm.displayAllNames("party_name", "parties");

orm.displayAllNames("client_name", "clients");

// * Console log all the parties that have a party-type of grown-up.

orm.displayGrownUpParties("party_name", "parties", "party_type", "grown-up");

orm.displayClientParties("client_name", "party_name", "clients", "parties", "client_id");

// * Console log all the clients and their parties.

// // Find all the pets ordering by the lowest price to the highest price.
// orm.selectAndOrder("animal_name", "pets", "price");

// // Find a pet in the pets table by an animal_name of Rachel.
// orm.selectWhere("pets", "animal_name", "Rachel");

// // Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
