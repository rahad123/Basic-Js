//module.exports = (a,b) => console.log(a + b);

const myObj = {
     name : "rahad",
     option : {
        flowerName : "rose",
        color : "red"
     },
     fragrance: function() {
         return "amazing";
     }
}

function square(number) {
    return number * number;
}

export {myObj, square};

// let value = 5;
// export default value;