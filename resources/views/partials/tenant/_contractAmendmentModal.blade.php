<!-- Contract Amendment Modal -->
<div class="modal fade" id="modal-alter-contract">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Contract Amendment Form</h4>
            </div>
            <div class="modal-body">
                <form action="" role="form">
                    <div class="row">
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div class="form-group">
                                <button type="button" class="btn btn-primary" data-toggle='modal' data-target= '#createRequestModal' >Edit Unit Requests</button>
                                <div id = "requests" class = "accordion">
                                    <h4> Units to requested </h4>
                                </div>
                                <div class="checkbox checkbox-primary">
                                    <input id="durationToggle" type="checkbox">
                                    <label class = "unselectable" for="durationToggle">
                                         Change Contract Duration
                                    </label>
                                </div>
                                <label for="duration">Contract duration change:</label>
                                <input id="duration" name="value" readonly>
                            </div>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div class = "accordion" id = "sortable1">
                                <h4> Units to be kept </h4>
                            </div>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div class="accordion" id = "sortable2">
                                <h4> Units to discarded </h4>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <label class = "unselectable" for="tenantRemark">
                                         Remarks
                                    </label>
                            <textarea name="tenantRemark" id="tenantRemark" class="form-control" rows="3" required="required"></textarea>
                        </div>
                    </div>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type = "button" class="btn btn-primary" data-toggle="modal" data-target="#confirm-dialog">Submit</button>
            </div>
            </form>
        </div>
    </div>
</div>

<!-- Unit Request Modal  -->
<div class="modal fade" id="createRequestModal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h2 class="modal-title">Unit Request Specifications</h2>
            </div>
            <div class="modal-body">
                <div class="card">
                    <div class="header">
                        <a href="#" class="btn btn-primary btn-primary" onclick="fields();"><span class="glyphicon glyphicon-plus"></span> Add unit</a>
                    </div>
                    <div class="body">
                        <form action="" method="POST" role="form" id = 'testform'>
                        <fieldset>
                            <div class="panel-body" id = "fields">
                                
                </div>
            </fieldset>
        </form>
        </div>
    </div>
</div>
<div class="modal-footer" id = "requestFooter">
    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary"  id = "btnSubmitUnitRequest"  onclick="addUnitRequest()" >Save changes</button>

</div>
</div>
</div>
</div>

<!-- Confirmation Modal -->
<div class="modal fade" id="confirm-dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <b> Are you sure? </b>
            </div>
            <div class="modal-body">
                <span>This will send a request</span>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary"  id = "btnAmendmentSubmit" data-dismiss="modal" >Yes</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
            </div>
        </div>
    </div>
</div>