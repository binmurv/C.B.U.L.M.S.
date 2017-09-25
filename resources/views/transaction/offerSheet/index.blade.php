@extends('layout.coreLayout')
@section('breadcrumbs')
<ol class="breadcrumb breadcrumb-col-brown">
  <li><a> Transaction</a></li>
  <li><a href="{{route("offersheets.index")}}"> Offer Sheets</a></li>
</ol>
@endsection
@section('content')
<div class="body">
  <table class="table table-hover dataTable" id="myTable">
    <thead>
      <tr>
        <th class="align-center">REGISTRATION CODE</th>
        <th class="align-center">Client</th>
        <th class="align-center">Business</th>
        <th class="align-center">Unit requested</th>
        <th class="align-center">Action</th>
      </tr>
    </thead>
    <tbody id="myList">
    </tbody>
  </table>
</div>
@endsection
@section('scripts')
{!!Html::script("custom/offerSheetAjax.js")!!}
<script type="text/javascript">
  var dataurl="{!!route('offerSheets.getData')!!}" ;
  var url="{!!route('offersheets.index')!!}" ;
</script>
@endsection
