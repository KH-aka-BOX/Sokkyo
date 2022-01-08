main();

async function main() {
    let dist = document.getElementById("Ddist");
    //var i2cAccess = await navigator.requestI2CAccess();
    //var port = i2cAccess.ports.get(1);
    //var vl = new VL53L0X(port, 0x29);
    //await vl.init(); // for Long Range Mode (<2m) : await vl.init(true);
    window.Defaultdistance = 1000; //await vl.getRange();
    dist.innerHTML = Defaultdistance;
    //await sleep(200);
}
