const bodyEle = document.body;

function myFunction() {
    let x;
    const message = document.getElementById("error");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
        bodyEle.classList.remove('error');
    } catch (err) {
        message.innerHTML = "Input is " + err;
        bodyEle.classList.add('error');
    } finally {
        document.getElementById("demo").value = "";
    }
}