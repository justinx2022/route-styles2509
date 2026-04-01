// Import the footer component
import Footer from "./Footer";

//Import the MenuItem component
import MenuItem from "./Menuitem";

//Import the useLocation module
import { useLocation } from "react-router-dom";

//Menu item Details
const menuItems = [
    {
        //Pizza Details
        id: 100, type: 'pizza', name: 'Focaccia', ingredients: 'Flour, water, salt, yeast, olive oil',
        price: 1300.00, soldOut: false, image: '/images/pizzas/foccacia.jpg'
    },
    {
        id: 101, type: 'pizza', name: 'Margherita Pizza',
        ingredients: 'Flour, water, salt, yeast, olive oil, tomato sauce, mozzarella cheese, fresh basil',
        price: 1500.00, soldOut: false, image: '/images/pizzas/margherita.jpg'
    },
    {
        id: 102, type: 'pizza', name: 'Pizza Spinachi',
        ingredients: 'Flour, water, salt, yeast, olive oil, tomato sauce, mozzarella cheese, fresh spinach',
        price: 1700.00, soldOut: false, image: '/images/pizzas/spinachi.jpg'
    },
    {
        id: 103, type: 'pizza', name: 'Pizza Funghi',
        ingredients: 'Flour, water, salt, yeast, olive oil, tomato sauce, mozzarella cheese, mushrooms',
        price: 1800.00, soldOut: false, image: '/images/pizzas/funghi.jpg'
    },
    {
        id: 104, type: 'pizza', name: 'Pizza Tomato',
        ingredients: 'Flour, water, salt, yeast, olive oil, tomato sauce, mozzarella cheese, fresh tomatoes',
        price: 1600.00, soldOut: false, image: '/images/pizzas/tomato.jpg'
    },
    {
        id: 105, type: 'pizza', name: 'Pizza Prosciutto',
        ingredients: 'Flour, water, salt, yeast,  olive oil, tomato sauce, mozzarella cheese, prosciutto',
        price: 2000.00, soldOut: false, image: '/images/pizzas/prosciutto.jpg'
    },


    {
        //Drink Details
        id: 200, type: 'drinks', name: 'Blueberry coconut mojito',
        ingredients: 'Fresh blueberries, coconut cream, lime juice, mint leaves, and soda water',
        price: 200.00, soldOut: false, image: '/images/drinks/bcm.jpg'
    },
    {
        id: 201, type: 'drinks', name: 'Easy Fruit Punch',
        ingredients: 'Orange juice, pineapple juice and grenadine',
        price: 200.00, soldOut: false, image: '/images/drinks/efp.jpg'
    },
    {
        id: 202, type: 'drinks', name: 'Shirley Temple mocktail',
        ingredients: 'Ginger ale, lemon-lime soda, and a splash of grenadine',
        price: 200.00, soldOut: false, image: '/images/drinks/stm.jpg'
    },
    {
        id: 203, type: 'drinks', name: 'Strawberry Mojito',
        ingredients: 'Fresh strawberries, mint leaves, lime juice, sugar, and soda water',
        price: 200.00, soldOut: false, image: '/images/drinks/sm.jpg'
    },
    {
        id: 204, type: 'drinks', name: 'Virgin Pina Colada',
        ingredients: 'Pineapple juice, coconut cream, and a splash of lime juice',
        price: 200.00, soldOut: false, image: '/images/drinks/vpl.jpg'
    },
    {
        id: 205, type: 'drinks', name: 'Watermelon Slush',
        ingredients: 'Fresh watermelon, lime juice, and a hint of mint',
        price: 200.00, soldOut: false, image: '/images/drinks/ws.jpg'
    }
];

function Menu() {
    const Location = useLocation();
    const path = Location.pathname;

    //Filter the menu items based on the url paths
    const filteredItems = menuItems.filter((item) => {
        if (path === '/menu') return true; //show all items on the menu page
        if (path === '/menu/starters') return item.type === 'starters';
        if (path === '/menu/main-courses') return item.type === 'main-courses';
        if (path === '/menu/desserts') return item.type === 'desserts';
        if (path === '/menu/drinks') return item.type === 'drinks';
        if (path === '/menu/pizzas') return item.type === 'pizza';
        return true; //default case
    });

    return (
        <div id="container">
            <main className="menu">
                <h2 className="menu-heading">
                    {/* Our Menu Items */}
                    {path === '/menu' && 'Our Menu'}
                    {path === '/menu/starters' && 'Our Starters'}
                    {path === '/menu/main-courses' && 'Our Main Courses'}
                    {path === '/menu/desserts' && 'Our Desserts'}
                    {path === '/menu/drinks' && 'Our Drinks'}
                    {path === '/menu/pizzas' && 'Our Pizzas'}
                </h2>
                {/* Div to display the menu items*/}
                <div className="menu-items">
                    {filteredItems.map(item => (
                        <MenuItem
                            key={item.id}
                            name={item.name}
                            ingredients={item.ingredients}
                            image={item.image}
                            price={item.price}
                            soldOut={item.soldOut}
                            type={item.type}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Menu;