// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for


const search = process.argv[2];
const term = process.argv.slice(3).join(" ");

switch(search) {
    case 'show':
        console.log(`searching for SHOW, ${term}`);
        break;
    case 'actor':
        console.log(`searching for ACTOR, ${term}`);
        break;
    default:
        console.log(`Sorry, we did not understand. Please use 'show' to search for a show, or 'actor' to search for an actor.`);
}