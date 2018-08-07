<!DOCTYPE html>
<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $("button").click(function () {
                $.getJSON("https://api.ipify.org?format=json", function (result) {
                    var d = new Date();
                    var mm = ("0" + (d.getMonth() + 1)).slice(-2);
                    var dd = ("0" + d.getDate()).slice(-2);
                    var yy = d.getFullYear();

                    $("div").prepend(d + " ");

                    $.each(result, function (i, field) {

                        $("div").prepend(field + " ");
                    });
                    $("div").prepend("<br>");

                });
            });
        });
    </script>
</head>

<body>

    <button>Get JSON data</button>

    <div></div>

</body>

</html>
