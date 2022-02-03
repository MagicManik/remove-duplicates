var names = ['Manik', 'Amena', 'Farjana', 'Farida', 'Monir', 'Manik', 'Farjana', 'Farida', 'Amena'];

function removeDuplicates(names) {
    var store = [];
    for (var element of names) {
        if (store.indexOf(element) == -1) {
            store.push(element);
        }
    }
    return store;
}
var result = removeDuplicates(names);
console.log(result);



// practice remove duplicates
/* function removeDuplicates(ages) {
    var store = [];
    for (let i = 0; i < ages.length; i++) {
        var element = ages[i];
        if (store.indexOf(element) == -1) {
            store.push(element);
        }
    }
    return store;
}
var candidatesAge = [20, 20, 84, 54, 39, 10, 30, 10];
var result = removeDuplicates(candidatesAge);
console.log(result); */



// practice one more remove duplicates
/* function removeDuplicates(names) {
    let store = [];
    for (let element of names) {
        if (store.indexOf(element) == -1) {
            store.push(element);
        }
    }
    return store;
}
var candidates = ['Manik', 'Amena', 'Manik', 'Amena', 'Manik', 'Amena'];
var result = removeDuplicates(candidates);
console.log(result); */
