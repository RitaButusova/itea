class Goods{
    constructor(categories){
        this.categories = categories;
    }
}

class Table{
    constructor(container, imgSrc, title, price){
        this.container = container;
        this.imgSrc = imgSrc;
        this.title = title;
        this.price = price;
    }
    AddGoods() {
        var trElem = document.createElement('tr');
        var tdElem1 = document.createElement('td');
        var imgElem = document.createElement('img');
        imgElem.setAttribute('src', this.imgSrc);
        imgElem.setAttribute('width', "100px");
        imgElem.setAttribute('height', "100px");
        tdElem1.appendChild(imgElem);
        trElem.appendChild(tdElem1);
        var tdElem2 = document.createElement('td');
        tdElem2.innerHTML = this.title;
        trElem.appendChild(tdElem2);
        var tdElem3 = document.createElement('td');
        tdElem3.innerHTML = "$" + this.price;
        tdElem3.className = "price";
        trElem.appendChild(tdElem3);
        var tdElem4 = document.createElement('td');
        var inpElem4 = document.createElement('input');
        inpElem4.setAttribute('type', 'number');
        inpElem4.setAttribute('min', '1');
        inpElem4.setAttribute('max', '40');
        inpElem4.className = 'quantity';
        tdElem4.appendChild(inpElem4);
        trElem.appendChild(tdElem4);
        var tdElem5 = document.createElement('td');
        tdElem5.innerHTML = "$" + this.price;
        tdElem5.className = "total-price";
        trElem.appendChild(tdElem5);
        var tdElem6 = document.createElement('td');
        var aElem6 = document.createElement('a');
        aElem6.className = 'cross';
        var imgCanc = document.createElement('img');
        imgCanc.setAttribute('src', 'img/cancel.png');
        imgCanc.setAttribute('width', "30px");
        imgCanc.setAttribute('height', "30px");
        aElem6.appendChild(imgCanc);
        tdElem6.appendChild(aElem6);
        trElem.appendChild(tdElem6);
        var tB = this.container.lastElementChild;
        var last = tB.lastElementChild;
        tB.insertBefore(trElem, last);
    }

}  


var products = document.querySelectorAll('.product-box');
var product = [];
for (i = 0; i < products.length; i++){
    product[i] = new Goods(products[i]);
}

var category = document.getElementById('category');


category.addEventListener('click', function(event) {
	var target = event.target;
        var imgSrc = target.src.slice(-9);
        var valId = target.title;
        var elClick = document.getElementById(valId);
        var nameTitle = elClick.querySelector('.name-title');
        var nameTitle = nameTitle.innerHTML;
        var price = elClick.querySelector('.clr-txt');
        var price = price.innerHTML;
        var price = price.slice(1);
        var table = document.querySelector('table');
        var newElTable = new Table(table, imgSrc, nameTitle, price);
        newElTable.AddGoods();

        var inpVal = document.querySelectorAll(".quantity");
        for(i = 0; i < inpVal.length; i++){
            inpVal[i].addEventListener('change', function(event) {
                var target = event.target;
                var quant = target.value;
                var totalPrice = quant * (+price);
                var divTotalPrice = this.parentNode.parentNode.cells[4];
                divTotalPrice.innerHTML = "$" + totalPrice;
            });
        }
          
});

        