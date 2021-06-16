const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                });
        },
    },
    mounted() {
        console.log(this);
    }
});

// const app = new Vue({
// 		el: '#app',
// 		data: {
// 			catalogUrl: '/catalogData.json',
// 			products: [],
// 			imgCatalog: 'https://via.placeholder.com/200x150',
// 			searchLine: '',
// 			isVisibleCart: false,
// 		},
// 		methods: {
// 			getJson(url){
// 				return fetch(url)
// 						.then(result => result.json())
// 						.catch(error => {
// 							console.log(error);
// 						});
// 			},
	
// 			addProduct(product) {
// 				console.log(product);
// 			},

// 			filterGoods(){
// 				// this.searchLine = this.searchLine.toLoverCase();
// 				const showItem = [];

// 				for(let i = 0; i < this.products.length; i++){

// 					if (this.products[i].product_name.includes(this.searchLine)){
// 						console.log(this.searchLine, this.products[i].product_name);  
// 						showItem.push(this.products[i].product_name);
// 					}else{
// 						console.log('Нет совпадений');
// 					}
// 				} 
				
// 				showItem.forEach(item => {
// 					console.log(item);
// 				});

// 			}
// 		},
		
// 		beforeCreate() {
	
// 		},
	
// 		created() {
// 			this.getJson(`${API + this.catalogUrl}`)
// 					.then((data) => {
// 						console.log(data);
// 						this.products = data;
// 					});
// 		},
	
// 		beforeMount() {
	
// 		},
	
// 		mounted() {
	 
// 		},
	
// 		beforeUpdate() {
	
// 		},
	
// 		updated() {
	
// 		},
	
// 		beforeDestroy() {
	
// 		},
	
// 		destroyed() {
	
// 		},
// });


