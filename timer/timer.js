window.addEventListener('load', function () {
    let user_date;
    let span = document.getElementById('span');
    this.document.getElementById("button").addEventListener('click', function (event) {
        event.preventDefault();
        let age = document.getElementById("age").value;
        user_date = new Date(age);
        document.getElementById("age").value = "";
            let div = document.getElementById("start");
            div.remove();
            console.log(age);
            time();
            setInterval(time, 100);

    });

    function time() {
        let t = Math.abs(new Date() - user_date);
        let years = Math.floor(t / (1000 * 60 * 60 * 24 * 365));
        console.log(years);
        t = t - years * 1000 * 60 * 60 * 24 * 365;
        let millis = t;
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        t = t - days * 1000 * 60 * 60 * 24;
        let hours = Math.floor(t / (1000 * 60 * 60));
        t = t - hours * 1000 * 60 * 60;
        let minutes = Math.floor(t / (1000 * 60));
        t = t - minutes * 1000 * 60;
        let seconds = Math.floor(t / (1000));
        t = t - seconds * 1000;



        span.textContent = years + " Years " + Math.floor(millis / 1000) + ":" + ("00" + (millis % 1000)).slice(-3);
      }

});




