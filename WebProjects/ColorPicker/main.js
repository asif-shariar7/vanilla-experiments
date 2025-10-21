const colorInput = document.getElementById('colorInput');
const hex = document.getElementById('hex');
const rgb = document.getElementById('rgb');
const msg = document.getElementById('msg');

let currentHex = colorInput.value;
let currentRGB = HextoRGB(currentHex);

colorInput.addEventListener('input', () => {
    currentHex = colorInput.value;
    currentRGB = HextoRGB(currentHex);

    hex.textContent = `HEX: ${currentHex}`;
    rgb.textContent = `RGB: ${currentRGB}`;
    msg.textContent = '';
});

function HextoRGB(hex) {
    const r = parseInt(hex.substr(1,2),16);
    const g = parseInt(hex.substr(3,2),16);
    const b = parseInt(hex.substr(5,2),16);
    return `rgb(${r},${g},${b})`;
}

function copyHex() {
    navigator.clipboard.writeText(currentHex).then(() => {
        msg.textContent = '✅ HEX Copied!';
    });
}

function copyRGB() {
    navigator.clipboard.writeText(currentRGB).then(() => {
        msg.textContent = '✅ RGB Copied!';
    });
}