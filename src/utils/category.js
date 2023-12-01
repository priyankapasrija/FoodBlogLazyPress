const ctgryColor = (category) => {
    switch (category) {
        case "Dessert":
            return "bg-slate-500";
        case "Beef":
            return "bg-orange-500";
        case "Vegetarian":
            return "bg-red-700";
        case "Chicken":
            return "bg-blue-500";
        case "Seafood":
            return "bg-violet-400";
        case "Pork":
            return "bg-lime-500";
        case "Side":
            return "bg-fuchsia-700";
        case "Lamb":
            return "bg-yellow-400";
        case "Miscellaneous":
            return "bg-amber-700";
        case "Pasta":
            return "bg-pink-600";
        case "Breakfast":
            return "bg-yellow-900";
        case "Starter":
            return "bg-cyan-200";
        case "Vegan":
            return "bg-lime-700";
        case "Cool":
            return "bg-violet-800";
        case "Goat":
            return "bg-violet-950";
        case "Misc":
            return "bg-amber-900";
        default:
            return "bg-slate-700";
    }
};

export { ctgryColor };
