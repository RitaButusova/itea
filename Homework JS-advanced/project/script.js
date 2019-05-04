class Fruit{
    constructor(id, img, title, name, price){
        this.id = id;
        this.img = img,
        this.title = title;
		this.name = name,
		this.price = price
	}
}

var fruits = [
	new Fruit('tomato', 'img/1.png', 'tomato', 'Tomato', '$50.00' ),
	new Fruit('cabbage', 'img/2.png', 'cabbage', 'Cabbage', '$50.00'),
	new Fruit('cherry', 'img/3.png', 'cherry', 'Cherry', '$50.00'),
	new Fruit('salad', 'img/4.png', 'salad', 'Salad', '$50.00'),
	new Fruit('pinapple', 'img/5.png', 'pinapple', 'Pinapple', '$50.00'),
	new Fruit('onion', 'img/6.png', 'onion', 'Onion', '$50.00'),
	new Fruit('mushroom', 'img/7.png', 'mushroom', 'Mushroom', '$50.00'),
	new Fruit('pepper', 'img/8.png', 'pepper', 'Pepper', '$50.00')
];

for(fruit of fruits){
	document.getElementById("category").innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6" id="${fruit.id}"> 
    <div class="product-box">
        <img class="prod-img" alt="" src="${fruit.img}" title="${fruit.title}"/>
        <a href="#" class="icon"><img src="img/hand.png" width="30px" height="30px"/></a>
    </div>                                           
    <div class="product-caption"> 
        <h3 class="product-title">
            <a href="#"> <span class="light-font"> organic </span>  <strong class = 'name-title'>${fruit.name}</strong></a>
        </h3>
        <div class="price"> 
        <strong class="clr-txt">${fruit.price}</strong>
        </div>
    </div>
    </div>`
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

    SummPrice(){
        var listPrice = document.querySelectorAll('.total-price');
        var arrPrice = [].slice.call(listPrice);
        var totalSumm = 0;
        for(i = 0; i < arrPrice.length; i++){
            var valArr = arrPrice[i].innerHTML;
            totalSumm += +(valArr.slice(1));
            
        }
        var total = document.getElementById('total');
        total.innerHTML = totalSumm;
}

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
                newElTable.SummPrice();
            });
        }

        var deleteVal = document.querySelectorAll('.cross');
        for(i = 0; i < deleteVal.length; i++){
            deleteVal[i].addEventListener('click', function() {
                var divDel = this.parentNode.parentNode;
                divDel.remove();
                newElTable.SummPrice();
            });

        }
          
       
          
});
    