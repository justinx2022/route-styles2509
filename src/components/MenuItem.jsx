// Create a reusable MenuItem component

function MenuItem({ name, ingredients, image, price, soldOut, type }) {
    return (
        <>
            <div className={`menu-item ${soldOut ? "sold-out" : ""}`}>
                <img src={image} alt={`${name} ${type}`} />
                <div>
                    <h2>{name}</h2>
                <p>
                    <strong>Ingredients: </strong> {ingredients}<br />
                    <span>{soldOut ? 'Sold out' : `Price: Kes. ${price}`}</span>
                </p>
            </div>
        </div >
        </>
    );
}

export default MenuItem;
