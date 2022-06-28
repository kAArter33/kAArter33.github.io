$('#data').click(function () {

    let httpReq = new XMLHttpRequest;

    httpReq.open('GET', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');

    httpReq.onreadystatechange = () => {
        console.log(httpReq.readyState)
        if (httpReq.readyState == 4) {

            if (httpReq.status == 200) {

                console.log(httpReq.status);

                let data = httpReq.responseText;
                let dataJson = JSON.parse(data);

                $('#data').after($('<div id=Database></div>'))
                $('#Database').after($("<p>"));
                $('p').append('Imie: ' + dataJson.imie + '<br>');
                $('p').append('Nazwisko: ' + dataJson.nazwisko + '<br>');
                $('p').append('Zawód: ' + dataJson.zawod + '<br>');
                $('p').append('Firma: ' + dataJson.firma + '<br>');

                httpReq = null;

            }

        }

    }
    httpReq.send();






})

