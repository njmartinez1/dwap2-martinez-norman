const hbs = require('hbs');

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./data/productos.json', 'utf8'));

hbs.registerHelper('getProduct',function(){
    var pro = "";
    obj.forEach(Object => {
        pro += '<div class="img-tercera">';
        pro += '<img src="'+ Object.url +'"alt="">';
        pro += '<h6>'+Object.nombre+ '</h6>';
        pro += ' <p>'+Object.precio+'</p>';
        pro += '<a href="" class="btn-rojo">Comprar</a>';
        pro += '</div>';
    });
    return new hbs.SafeString(pro);
});