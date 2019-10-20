$(document).ready(function (){
  $("#clear").click(function () {
    $("#itog").html("");
  });
  $("#get").click(function () {
    $("#itog").html('');
    var percent = Number($("#percent").val());
    $("#percent").val("");
    var monthPer = Number(0);
    var srok = Number($("#srok").val());
    $("#srok").val("")
    var summ = Number($("#summ").val());
    $("#summ").val("");
    var itog = Number(0);
    var ret = Number(0);
    var firstMessage = "Сумма займа: <strong>"+summ+" грн.</strong><br>Годовой процент: <strong>"+percent+"%</strong><br>Срок займа: <strong>"+srok+" месяцев</strong><br>";
    $("#itog").html(firstMessage);
    for (i = 1; i <= srok; i++) {
      monthPer = summ*((percent/12)/100);
      //itog = summ / 12;
      itog = Math.round(monthPer * 100) / 100;
      $("#itog").html($("#itog").html() + "<br>"+i+" месяц = "+itog+" грн.");
      ret = ret + itog;
    }
    ret = Math.round(ret + summ);
    $("#itog").html($("#itog").html() + "<br> <h3>Итого: "+ret+" грн</h3>");
  });
});