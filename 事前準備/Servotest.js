main();

async function main() {
  let AngleID = document.getElementById("AngleID");
  /*
  var i2cAccess = await navigator.requestI2CAccess();
  var port = i2cAccess.ports.get(1);
  var pca9685 = new PCA9685(port, 0x40);
  */
  var angle = 0;
  // console.log("angle"+angle);
  // servo setting for sg90
  // Servo PWM pulse: min=0.0011[sec], max=0.0019[sec] angle=+-60[deg]
  //await pca9685.init(0.001, 0.002, 30);
  //for (;;) {
    angle = 30;
    // console.log("angle"+angle);
    //await pca9685.setServo(0, angle);
    // console.log('value:', angle);
    AngleID.innerHTML = angle;
    //await sleep(1000);
  //}
}
