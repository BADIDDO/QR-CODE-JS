const wrapper = document.querySelector(".wrapper");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const qr = document.querySelector(".qr img");
const icon = document.querySelector(".icon")

btn.addEventListener("click" , () => {
    let vl = input.value ;
if (vl === "") {
     
} else {
    btn.textContent = "Generate Your QR Code..." ;
    wrapper.classList.add("active");
    qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${vl}`
}
qr.addEventListener("load" , () => {
    wrapper.classList.add("active")
})
});

icon.addEventListener("click" , () => {
    location.reload();
})