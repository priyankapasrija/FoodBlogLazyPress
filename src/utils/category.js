const ctgryColor = (category) => {
    if (category === "Dessert") {
        return "bg-slate-500";
    }
    if (category === "Beef") {
        return "bg-orange-500";
    }
    if (category === "Vegetarian") {
        return "bg-red-700";
    }
    if (category === "Chicken") {
        return "bg-blue-500";
    }
    if (category === "Seafood") {
        return "bg-violet-400";
    }
    if (category === "Pork") {
        return "bg-lime-500";
    }
    if (category === "Side") {
        return "bg-fuchsia-700";
    }
    if (category === "Lamb") {
        return "bg-yellow-400";
    }
    if (category === "Miscellaneous") {
        return "bg-amber-700";
    }
    if (category === "Pasta") {
        return "bg-pink-600";
    }
    if (category === "Breakfast") {
        return "bg-yellow-900";
    }
    if (category === "Starter") {
        return "bg-cyan-200";
    }
    if (category === "Vegan") {
        return "bg-lime-700";
    }
    if (category === "Cool") {
        return "bg-violet-800";
    }
    if (category === "Goat") {
        return "bg-violet-950";
    }
    if (category === "Misc") {
        return "bg-amber-900";
    } else {
        return "bg-slate-700";
    }
};

export {ctgryColor};