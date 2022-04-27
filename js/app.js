$(document).ready(function(){
    var i=1;
    $("#myBtn").click(function(){
        $("#myModal").modal()
    });
    
    function KiemTraMa(){
        var re = /^[0-9]{10}/;
        if($("#txtMa").val()==""){
            $("#tbMa").html("bắt buộc nhập");
            return false
        }
        if(!re.test($("#txtMa").val())){
            $("#tbMa").html("Nhap du 10 so");
            return false
        }
        $("#tbMa").html("*");
        return true;
    }
    $("#txtMa").blur(KiemTraMa);
    function KiemTraTen(){
        var re = /^[A-Za-z]{3,16}/;
        if($("#txtTen").val()==""){
            $("#tbTen").html("bắt buộc nhập");
            return false
        }
        if(!re.test($("#txtTen").val())){
            $("#tbTen").html("Nhap du 10 so");
            return false
        }
        $("#tbTen").html("*");
        return true;
    }
    $("#txtTen").blur(KiemTraTen);
    function KiemTraSDT(){
        var re = /^[0-9]{10}/;
        if($("#txtSDT").val()==""){
            $("#tbSDT").html("bắt buộc nhập");
            return false
        }
        if(!re.test($("#txtSDT").val())){
            $("#tbSDT").html("Nhap du 10 so");
            return false
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#txtSDT").blur(KiemTraSDT);
    
    function KiemtraNgay(){
        if($("#txtNgay").val()==""){
            $("#tbNgay").html("* bắt buộc nhập");
            return false;
        }
        var day = new Date($("#txtNgay").val());
        var today = new Date();
        today.setDate(today.getDate() + 30);
        if(day < today){
            $("#tbNgay").html("* Ngay tham gia phai sau ngay hien tai 7 ngay");
            return false;
        }
        $("#tbNgay").html("*");
        return true;
    }

    $("#txtNgay").blur(KiemtraNgay);
    $("#btnSave").click(function(){
        if(!KiemtraMa()||!KiemTraTen()||!KiemtraNgay()||!KiemTraSDT() ||!KiemTraEmail){
            $("#thongbao").html("Moi ban nhap dung du thong tin")
            return false;
        }
        var ma = $("#txtMa").val();
        var ten = $("#txtTen").val();
        var ngay = $("#txtNgay").val();
        var email = $("#txtEmail").val()
        var sdt = $("txtSDT").val()
        var them = "<tr><td>" + (i++) + "</td><td>" + ma + "</td><td>" + ten + "</td><td>" + ngay + "</td><td>" + email + "</td><td>" + sdt + "</td></tr>"
        $("table tbody").append(them);
        $("#myModal").modal("hide");
        return true;
    })
});
