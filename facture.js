$(document).ready(function() {
    $("#client").click(function() {
        $('.ui.modal.cl')
            .modal('show');
    });
});

$(document).ready(function() {
    $("#docs").click(function() {
        $('.ui.modal.docs')
            .modal('show');
    });
});

$(document).ready(function() {
    $("#prod").click(function() {
        $('.ui.modal.pro')
            .modal('show');
    });
});



$(document).ready(function() {
    $("#subCl").click(function() {
        let entr = $("#ent").val();
        let mat = $("#mat").val();
        let res = $("#res").val();
        let email = $("#email").val();
        $("#1").text(entr);
        $("#2").text(mat);
        $("#3").text(res);
        $("#4").text(email);
    });
});

$(document).ready(function() {
    $("#subdocs").click(function() {
        let date = $("#date").val();
        let pr = $("#Projet").val();
        let note = $("#note").val();
        $("#5").text(date);
        $("#6").text(pr);
        $("#7").text(note);

    });
});
let Cls = 0;
let sumHT = 0;
let totTVA = 0;
let x = 0;
$(document).ready(function() {
    $("#subPro").click(function() {

        Cls += 1;
        let pro = $("#nomP").val();
        let qt = $("#qt").val();
        let pHT = $("#pHT").val();
        let unite = $("#unite").val();
        let TVA = $("#TVA").val();

        let P = $("<td></td>").text(pro);
        let qte = $("<td></td>").text(qt);
        let pht = $("<td></td>").text(pHT);
        let unit = $("<td></td>").text(unite);
        let totht = $("<td></td>").text(pHT * qt);
        let tva = $("<td></td>").text(TVA);
        let close = $("<td></td>").html('<i class="close link red icon"></i>');
        close.addClass(String(Cls));
        let tr = $("<tr></tr>");
        //close.classList.add("hey");
        tr.append(P);
        tr.append(qte);
        tr.append(pht);
        tr.append(unit);
        tr.append(tva);
        tr.append(tva)
        tr.append(totht);
        tr.append(close);
        //tableau droit
        $("#tbody").append(tr);
        totTVA += ((pHT * qt) * TVA) / 100;
        sumHT += (pHT * qt);
        $("#D1").text(sumHT + " TND");
        $("#D2").text(totTVA + " TND");
        $("#D3").text(sumHT + totTVA + " TND");
        $("#D5").text(sumHT + totTVA + 0.600 + " TND").css("color", "green")


        let rowG = $("<tr></tr>");
        let col1 = $("<td></td>").text(TVA + " %");
        let col2 = $("<td></td>").text(pHT * qt + " TND");
        let col3 = $("<td></td>").text((((pHT * qt) * TVA) / 100) + " TND");
        rowG.append(col1)
        rowG.addClass(String(Cls));
        rowG.append(col2);
        rowG.append(col3);
        $(".tgauche").append(rowG);


        $(".close").unbind('click').bind('click', function(e) {
            var Tv = $(this).parent().prev().prev().text();
            var pt = $(this).parent().prev().text();
            //alert(typeof(Tv))



            sumHT = sumHT - pt;
            //alert(typeof(sumHT))
            totTVA = totTVA - ((pt * Tv) / 100);


            $(this).parent().parent().remove();
            cls = ($(this).parent().attr("class"));
            $("." + cls).remove()

            $("#D1").text(sumHT + " TND");
            $("#D2").text(totTVA + " TND");
            $("#D3").text(sumHT + totTVA + " TND");
            $("#D5").text(sumHT + totTVA + 0.6 + " TND").css("color:green");

        });





    });
});


$(document).ready(function() {
    $("#sep").click(function() {
        let mid = $("<div></div>").css({ "width": "100%", "display": "flex", "align-items": "baseline" });
        let line = $("<hr></hr>");
        line.addClass("line");
        mid.append(line);
        let close2 = $("<span></span>").html('<i class="close link red icon"></i>');
        mid.append(close2);
        $(".sep").append(mid);

        close2.click(function() {
            $(this).parent().remove();
        });
    });



});

$(document).ready(function() {
    $("#text").click(function() {
        let box = $("<div></div>").addClass("ui input focus").css({ "width": "100%", "display": "flex", "align-items": "baseline", "margin-top": "1.5%" });
        let input = $("<input>")
        let close3 = $("<span></span>").html('<i class="close link red icon"></i>');
        box.append(input);
        box.append(close3);
        $(".sep").append(box);

        close3.click(function() {
            $(this).parent().remove();
        });

    });
});