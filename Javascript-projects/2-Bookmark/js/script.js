// crud
//  c=> create
//  r=> retrive (display)
//  u => update
//  d=>delete
// s => search
let productName = document.getElementById('pName');
let productCategory = document.getElementById('pCat');
let productPrice = document.getElementById('pPrice');
let productDescription = document.getElementById('desc');

let productList = [];

function createProudct() {
    const product = {
        pName: productName.value,
        pCat: productCategory.value,
        pPrice: productPrice.value,
        desc: productDescription.value,
    };

    productList.push(product);

    display();
    Reset();
}

function display() {
    let trs = '';
    // console.log(productList);
    for (let i = 0; i < productList.length; i++) {
        trs += `
            <tr>
                <td>${i + 1}</td>
                <td>${productList[i].pName}</td>
                <td>${productList[i].pCat}</td>
                <td>${productList[i].pPrice}</td>
                <td>${productList[i].desc}</td>
                <td><button class="btn btn-outline-warning" onClick="updateProudct(${i})"><i class="fa-solid fa-edit"></i></button></td>
                <td><button class="btn btn-outline-danger" onClick="delte(${i})"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        `;
    }


    document.getElementById('tableBody').innerHTML = trs;
}


function delte(index) {
    productList.splice(index, 1);
    display()
}

let productSearch = document.getElementById('prodSearch');
function searchProudct() {
    let trs = '';
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].pName.includes(productSearch.value)) {

            let heightlightText = heightlight(productSearch.value, i);
            // <td>${productList[i].pName}</td>
            trs += `
            <tr>
                <td>${i + 1}</td>
                <td>${heightlightText}</td>
                <td>${productList[i].pCat}</td>
                <td>${productList[i].pPrice}</td>
                <td>${productList[i].desc}</td>
                <td><button class="btn btn-outline-warning" onClick="updateProudct(${i})"><i class="fa-solid fa-edit"></i></button></td>
                <td><button class="btn btn-outline-danger" onClick="delte(${i})"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        `;
        }
    }
    document.getElementById('tableBody').innerHTML = trs;
}

function Reset() {
    productName.value = '';
    productCategory.value = '';
    productPrice.value = '';
    productDescription.value = '';
}

// update
function updateProudct(index) {
    productName.value = productList[index].pName;
    productCategory.value = productList[index].pCat;
    productPrice.value = productList[index].pPrice;
    productDescription.value = productList[index].desc;

    document.getElementById('addBtn').style.display = 'none';
    document.getElementById('btns').innerHTML = `
    <button class="btn btn-primary" id="updateBtn" onclick="update(${index})">
        Update product
    </button>
    <button class="btn btn-danger" onclick="Reset()">Reset</button>
    `;
}

function update(index) {
    productList[index].pName = productName.value;
    productList[index].pCat = productCategory.value;
    productList[index].pPrice = productPrice.value;
    productList[index].desc = productDescription.value;
    document.getElementById('updateBtn').style.display = 'none';
    document.getElementById('btns').innerHTML = `
    <button class="btn btn-primary" onclick="createProudct()" id="addBtn">
        Add product
    </button>
    <button class="btn btn-danger" onclick="Reset()">Reset</button>
    `;
    display();
    Reset();
}

// heightlight

function heightlight(searchWord, index) {
    // console.log(`fullWord = ${productList[index].pName}`);
    // console.log(`searchWord = ${searchWord}`);
    // console.log(`searchWord.length = ${searchWord.length}`);
    let helightedChars = productList[index].pName.slice(index, searchWord.length);
    let restOfWord = productList[index].pName.slice(index + searchWord.length);
    // console.log(`helightedChars = ${helightedChars}`);
    // console.log(`restOfWord = ${restOfWord}`);

    if (searchWord.length !== 0) {
        return `
        <mark>${helightedChars}</mark>${restOfWord}
    `;
    } else {
        return productList[index].pName
    }

}
