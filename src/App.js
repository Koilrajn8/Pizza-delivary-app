import './App.css';

function App() {
  const pizzas = [
    {
        name: "Pizza Margherita",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 200,
                medium: 350,
                large: 400,
            },
        ],
        category: "veg",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTP3Xg98whHDBt-2EdLaoo9SLqCTJwlUmU3w&usqp=CAU",
        description:
            "Pizza margherita, as the Italians call it, is a simple pizza hailing from Naples. When done right, margherita pizza features a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt.",
    },
    {
        name: "Quick Tomato Pizza",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 150,
                medium: 250,
                large: 350,
            },
        ],
        category: "veg",
        image:"https://hips.hearstapps.com/wdy.h-cdn.co/assets/cm/15/09/54ef8b64366c1_-_fresh-tomato-pizza-kqgv52-xl.jpg",
        description:"The bakery tomato pie starts with pan-proofed, focaccia-like dough that's topped with a chunky tomato sauce, has little to no cheese, and is served at room temperature."
    },
    {
        name: "Mexican Green Wave",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 250,
                medium: 350,
                large: 450,
            },
        ],
        category: "veg",
        image:"https://5.imimg.com/data5/TJ/GN/MY-29540739/mexican-green-wave-500x500.png",
        description:"A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs."
    },
    {
        name: "Veg Extravaganza",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 250,
                medium: 300,
                large: 350,
            },
        ],
        category: "veg",
        image:"https://www.dominos.co.in//files/items/Veg_Extravaganz.jpg",
        description:"pepperoni, ham, Italian sausage, beef, fresh onions, fresh green peppers, fresh mushrooms, and black olives — all sandwiched between two layers of cheese made with 100% real mozzarella."
    },
    {
        name: "Pepper Barbecue Chicken",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 250,
                medium: 300,
                large: 350,
            },
        ],
        category: "non veg",
        image:"https://www.dominos.co.in//files/items/Pepper_Barbeque.jpg",
        description:" premium grilled chicken, crunchy fresh onions, and not one, not two, but three cheeses: mozzarella, provolone and cheddar on our hand-tossed crust. The result is a traditional summer cookout treat in one perfect pizza."
    },
    {
        name: "Chicken Golden Delight.",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 200,
                medium: 300,
                large: 400,
            },
        ],
        category: "non veg",
        image:"https://www.dominos.co.in//files/items/Chicken_Golden_Delight.jpg",
        description:"Barbeque chicken with a topping of golden corn loaded with extra cheese."
    },
    {
        name: "Chicken Dominator",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 300,
                medium: 400,
                large: 500,
            },
        ],
        category: "non veg",
        image:"https://www.dominos.co.in//files/items/Dominator.jpg",
        description:"Chicken Dominator – It has all types of pizza toppings – bbq chicken, grilled chicken rasher, hot & spicy chicken, chicken sausage. The crust was a little bit dry for me. Pizza was so meaty and if you love chicken more, then it can be a great option for you from their loaded pizza section."
    },
    {
        name: "CHICKEN FIESTA",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 350,
                medium: 450,
                large: 550,
            },
        ],
        category: "non veg",
        image:"https://www.dominos.co.in//files/items/chunky-chicken.png",
        description:"The Fiesta Chicken Pizza features a crispy, thin-crust topped with creamy garlic sauce, whole milk mozzarella, chicken raised without antibiotics, onion mix, Roma tomatoes, taco seasoning and fried onions."
    }
    
];
  return (
    <div className="App">
    <div className="navbar">
       <Navbar />
    </div>
    <div className="pizza-list">
    {pizzas.map((pz)=>(<Pizza pizza={pz}/> ))}
    </div>
    </div>
  );
}

function Navbar(){
  return(
    <nav className="navbar-list">
      
        <h1 className="navbar-header">PIZZA POINT</h1>
        <div>
        <button>Login</button>
        </div>
        <div>
        <button>Register</button>
        </div>
        
      
    </nav>
  )
}

function Pizza({pizza}){
  return (
    
    <div className="pizza-container">
      <img src={pizza.image} alt={pizza.name} className="pizza-poster"/>
      <h3 className="pizza-name">{pizza.name}</h3>
    </div>
    
    
  )
}

export default App;
