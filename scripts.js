var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var result1 = dinosaur.toUpperCase();
var result2 = text.replace('Velociraptor', result1);

console.log(result2.split(0, result2.length / 2));
