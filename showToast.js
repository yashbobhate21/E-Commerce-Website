export function showToast(operation, id) {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if(operation === "add"){
        toast.textContent = "product has been added to the cart.";
    }else{
        toast.textContent = "product has been deleted from the cart.";
    }

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    },2000);
}