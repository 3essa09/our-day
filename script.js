const weddingDate =
    new Date(
        "2026-09-09T18:30:00+03:00"
    ).getTime();


const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const messageElement =
    document.getElementById(
        "countdown-message"
    );

const lastSecondsScreen =
    document.getElementById(
        "last-seconds-screen"
    );

const lastNumber =
    document.getElementById(
        "last-number"
    );

const finalScreen =
    document.getElementById(
        "final-screen"
    );


let currentMessage = "";


function formatNumber(number) {

    return String(number)
        .padStart(
            2,
            "0"
        );
}


function changeMessage(newMessage) {

    if (
        newMessage === currentMessage
    ) {
        return;
    }


    currentMessage =
        newMessage;


    messageElement.style.opacity =
        "0";


    setTimeout(() => {

        messageElement.textContent =
            newMessage;

        messageElement.style.opacity =
            "1";

    }, 180);
}


function updateCountdown() {

    const now =
        Date.now();


    const distance =
        weddingDate - now;


    /* وصل الموعد */

    if (distance <= 0) {

        daysElement.textContent =
            "00";

        hoursElement.textContent =
            "00";

        minutesElement.textContent =
            "00";

        secondsElement.textContent =
            "00";


        lastSecondsScreen
            .classList
            .remove("active");


        finalScreen
            .classList
            .add("active");


        return;
    }


    const dayMS =
        1000 *
        60 *
        60 *
        24;


    const hourMS =
        1000 *
        60 *
        60;


    const minuteMS =
        1000 *
        60;


    const days =
        Math.floor(
            distance /
            dayMS
        );


    const hours =
        Math.floor(
            (
                distance %
                dayMS
            ) /
            hourMS
        );


    const minutes =
        Math.floor(
            (
                distance %
                hourMS
            ) /
            minuteMS
        );


    const seconds =
        Math.floor(
            (
                distance %
                minuteMS
            ) /
            1000
        );


    daysElement.textContent =
        formatNumber(days);

    hoursElement.textContent =
        formatNumber(hours);

    minutesElement.textContent =
        formatNumber(minutes);

    secondsElement.textContent =
        formatNumber(seconds);


    /* الرسائل */

    let message;


    if (days > 30) {

        message =
            "نعدّ الأيام حتى يومنا 🤍";

    }

    else if (days > 14) {

        message =
            "يومنا صار أقرب 🤍";

    }

    else if (days > 7) {

        message =
            "باقي القليل على يومنا 🤍";

    }

    else if (days > 3) {

        message =
            "قرب يومنا أكثر مما تتخيلين 🤍";

    }

    else if (days > 1) {

        message =
            "ما بقى إلا القليل 🤍";

    }

    else if (days === 1) {

        message =
            "باجر يومنا 🤍";

    }

    else {

        message =
            "اليوم… اليوم اللي كنا ننتظره 🤍";

    }


    changeMessage(message);


    /* آخر عشر ثواني */

    const totalSeconds =
        Math.ceil(
            distance /
            1000
        );


    if (
        totalSeconds <= 10 &&
        totalSeconds > 0
    ) {

        lastSecondsScreen
            .classList
            .add("active");


        lastNumber.textContent =
            totalSeconds;

    }

    else {

        lastSecondsScreen
            .classList
            .remove("active");
    }
}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);
