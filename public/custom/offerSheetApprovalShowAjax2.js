$(document).ready(function()
{ 
  myId="";

  $(this).on('click', '.btnChoose',function(e)
  { 
    myId=$(this).val();
    if($(this).val()=='header')
    {
      $("#modal_remarks").val($("#header_remarks").val());
      info="Client's Remarks: " + header_remarks;
      $('#myInfo').append(info);
    }
    else
    {  
      $("#modal_remarks").val($("#remarks"+myId).val());
      $.get(mainUrl + '/' + $(this).val() + '/edit', function (data) 
      {
        console.log(data);
        $('#unit_img').attr('src', dir+"/"+data.picture);
        if(data.unit_type==0)
          type='Raw';
        else
          type='Shell';
        if(data.detail_remarks==null)
          remarks="";
        else
          remarks=data.detail_remarks;
        info="Offer Sheet Detail: " + data.offer_id + "<br>" +
        "Size offered: " + data.unit_size + "<br>" +
        "Unit Type: " + type + "<br>" +
        "Floor: " + data.floor + "<br>" +
        "Lessor's Remarks: " + remarks; + "<br>"
        ;
        $('#myInfo').append(info);
      }); 
    }
    setTimeout(function(){
      $('#modalChoose').modal('show');
    }, 1000);
  });


  $(this).on('click', '#btnAccept',function(e)
  { 
    if(myId=="header")
    {
      $("#header_remarks").val($("#modal_remarks").val());
      $("#header_is_active").val('1');
    }
    else
    { 
      $("#remarks"+myId).val($("#modal_remarks").val());
      $("#offer"+myId).val('1');
    }
    $('#modalChoose').modal('hide');
  });


  $(this).on('click', '#btnReject',function(e)
  { 
   if(myId=="header")
   {
    $("#header_remarks").val($("#modal_remarks").val());
    $("#header_is_active").val('2');
  }
  else
  { 
    $("#remarks"+myId).val($("#modal_remarks").val())
    $("#offer"+myId).val('2');
  }
  $('#modalChoose').modal('hide');
});


  $(document).on('hidden.bs.modal','#modalChoose', function () 
  { 
    $("#myInfo").empty();
    $("#modal_remarks").val("");
  });

});