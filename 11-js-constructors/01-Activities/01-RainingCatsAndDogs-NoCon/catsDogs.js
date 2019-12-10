var dogs = {
    raining: true,
    noise: "woof",
    makeNoise: function() {
        if (dogs.raining) {
            console.log(this.noise);
        }
    }
}

var cats = {
    raining: false,
    noise: "meow",
    makNoise: function() {
        if (cats.raining) {
            console.log(this.noise);
        }
    }
}

function meyham() {
    if (dogs.raining && cats.raining) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!")
    }
}

dogs.makeNoise();
cats.raining = true;
cats.makNoise();
meyham();

