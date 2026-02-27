class DiscountApp extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = `
            <div class="container">
                <form id="form">
                    <input type="number" id="price" placeholder="Precio" required>
                    
                    <select id="discount">
                        <option value="">Seleccione descuento</option>
                        <option value="10">10%</option>
                        <option value="20">20%</option>
                        <option value="30">30%</option>
                    </select>
                    
                    <button type="submit">Calcular</button>
                </form>
                
                <h3 id="result"></h3>
            </div>
        `;
    }

    connectedCallback() {
        const form = this.querySelector("#form");
        const result = this.querySelector("#result");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const price = parseFloat(this.querySelector("#price").value);
            const discount = parseFloat(this.querySelector("#discount").value);

            if (!price || !discount) {
                result.textContent = "⚠️ Complete todos los campos correctamente.";
                return;
            }

            const total = price - (price * discount / 100);
            result.textContent = `Total con descuento: $${total.toFixed(2)}`;
        });
    }
}

customElements.define("discount-app", DiscountApp);