let data = require('./bands');
const bands = "bands"

console.log(data);

for (const key in data.bands) {
    console.log(`${data[bands][key]} is a ${key} band`);
}