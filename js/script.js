$(function(){
    
    var client = new WindowsAzure.MobileServiceClient(
    "https://khojfeedback.azure-mobile.net/",
    "xLuBwOcfllhqvphlQZQGCHNObpfsFw12");
    
    $('#happy').click(function(){
        $('#mood').html('happy');
        //$('#happy').css('background', '#eee');
        $('#happy').css('background', '#f5f5f5');
        //$('#happy').css('border-color', '#1abc9c');
        $('#happy').css('border-color', '#428bca');
        $('#sad').css('border-color', '#fff');
        $('#sad').css('background', '#fff');
    });
    
    $('#sad').click(function(){
        $('#mood').html('sad');
        $('#happy').css('background', '#fff');
        //$('#sad').css('background', '#eee');
        $('#sad').css('background', '#f5f5f5');
        //$('#sad').css('border-color', '#1abc9c');
        $('#sad').css('border-color', '#428bca');
        $('#happy').css('border-color', '#fff');
    });
    
    $('#submit-btn').click(function(){
        var item = { feedback: $('#text-detail').val(), 
                     mood: $("#mood").html(),
                     name: $('#name').val()};
        client.getTable("npsfeedbacktable").insert(item).done(function(){
            alert("Thank you for your feedback!");
        });
    });
});