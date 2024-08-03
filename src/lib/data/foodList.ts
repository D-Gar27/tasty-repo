export const foodList = [
    {
        id: 1,
        name: "Burger",
        description: "A delicious burger with customizable toppings.",
        price: 3.3,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Meat",
            type: "single",
            items: [
                { name: "Pork", price: 0.5 },
                { name: "Beef", price: 0.7 },
                { name: "Chicken", price: 0.6 }
            ]
        }
    },
    {
        id: 2,
        name: "Cheese Pizza",
        description: "A classic cheese pizza with a variety of cheese options.",
        price: 8.0,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Cheese",
            type: "multi",
            items: [
                { name: "Mozzarella", price: 0.8 },
                { name: "Cheddar", price: 0.9 },
                { name: "Parmesan", price: 1.0 }
            ]
        }
    },
    {
        id: 3,
        name: "Veggie Wrap",
        description: "A healthy veggie wrap with fresh ingredients.",
        price: 5.5,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Veggies",
            type: "multi",
            items: [
                { name: "Lettuce", price: 0.3 },
                { name: "Tomato", price: 0.4 },
                { name: "Onion", price: 0.2 }
            ]
        }
    },
    {
        id: 4,
        name: "BBQ Chicken",
        description: "BBQ chicken with customizable toppings.",
        price: 7.0,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Toppings",
            type: "multi",
            items: [
                { name: "BBQ Sauce", price: 0.5 },
                { name: "Grilled Chicken", price: 1.2 },
                { name: "Cheddar", price: 0.9 }
            ]
        }
    },
    {
        id: 5,
        name: "Fish Taco",
        description: "Delicious fish taco with fresh toppings.",
        price: 6.5,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Toppings",
            type: "multi",
            items: [
                { name: "Fish", price: 1.5 },
                { name: "Tartar Sauce", price: 0.4 },
                { name: "Lettuce", price: 0.3 }
            ]
        }
    },
    {
        id: 6,
        name: "Spicy Ramen",
        description: "Spicy ramen with a kick of heat.",
        price: 7.5,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Toppings",
            type: "multi",
            items: [
                { name: "Jalapenos", price: 0.5 },
                { name: "Hot Sauce", price: 0.3 },
                { name: "Pork", price: 1.0 }
            ]
        }
    },
    {
        id: 7,
        name: "Mushroom Risotto",
        description: "Creamy mushroom risotto.",
        price: 9.0,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Toppings",
            type: "multi",
            items: [
                { name: "Mushrooms", price: 1.0 },
                { name: "Parmesan", price: 1.0 },
                { name: "Garlic", price: 0.2 }
            ]
        }
    },
    {
        id: 8,
        name: "Bacon Sandwich",
        description: "A tasty bacon sandwich.",
        price: 6.0,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Toppings",
            type: "multi",
            items: [
                { name: "Bacon", price: 1.5 },
                { name: "Lettuce", price: 0.3 },
                { name: "Tomato", price: 0.4 }
            ]
        }
    },
    {
        id: 9,
        name: "Caesar Salad",
        description: "A fresh Caesar salad.",
        price: 5.5,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Toppings",
            type: "multi",
            items: [
                { name: "Croutons", price: 0.5 },
                { name: "Parmesan", price: 0.8 },
                { name: "Caesar Dressing", price: 0.4 }
            ]
        }
    },
    {
        id: 10,
        name: "Avocado Toast",
        description: "Healthy avocado toast.",
        price: 4.5,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Toppings",
            type: "multi",
            items: [
                { name: "Avocado", price: 1.0 },
                { name: "Lemon Juice", price: 0.2 },
                { name: "Chili Flakes", price: 0.1 }
            ]
        }
    },
    {
        id: 11,
        name: "Pasta Carbonara",
        description: "Rich and creamy pasta carbonara.",
        price: 9.5,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Toppings",
            type: "multi",
            items: [
                { name: "Bacon", price: 1.5 },
                { name: "Parmesan", price: 1.0 },
                { name: "Egg", price: 0.5 }
            ]
        }
    },
    {
        id: 12,
        name: "Greek Salad",
        description: "A refreshing Greek salad.",
        price: 6.0,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Toppings",
            type: "multi",
            items: [
                { name: "Feta", price: 0.8 },
                { name: "Olives", price: 0.6 },
                { name: "Cucumber", price: 0.4 }
            ]
        }
    },
    {
        id: 13,
        name: "Hawaiian Pizza",
        description: "A sweet and savory Hawaiian pizza.",
        price: 9.0,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Toppings",
            type: "multi",
            items: [
                { name: "Pineapple", price: 0.8 },
                { name: "Ham", price: 1.0 },
                { name: "Cheddar", price: 0.9 }
            ]
        }
    },
    {
        id: 14,
        name: "Beef Taco",
        description: "A flavorful beef taco.",
        price: 6.0,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Toppings",
            type: "multi",
            items: [
                { name: "Beef", price: 1.2 },
                { name: "Cheddar", price: 0.9 },
                { name: "Lettuce", price: 0.3 }
            ]
        }
    },
    {
        id: 15,
        name: "Breakfast Burrito",
        description: "A hearty breakfast burrito.",
        price: 7.5,
        imageUrl: "https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg",
        toppings: {
            label: "Choose Toppings",
            type: "multi",
            items: [
                { name: "Egg", price: 0.5 },
                { name: "Sausage", price: 1.0 },
                { name: "Cheddar", price: 0.9 }
            ]
        }
    }
];
