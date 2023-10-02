
const API_URL = 'https://dummyjson.com/carts';

const table = document.querySelector('#table');

const state = {
    data:[]
};

async function loadData(){
    try {
        const response = await fetch(API_URL)
        state.data = (await response.json()).carts;
    } catch (error) {
        console.error(error)
    }
}


const renderData = () =>{
    state.data.forEach(item => {
        const HTML = `
            <tr>
                <td>${item.id}</td>
                <td>${item.products.length}</td>
                <td>${item.total}</td>
                <td>${item.discountedTotal}</td>
                <td>${item.userId}</td>
                <td>${item.totalQuantity}</td>
            </tr>
        `;
        table.innerHTML += HTML;
    });

}



async function init (){
    await loadData()

    renderData();
}





init()
