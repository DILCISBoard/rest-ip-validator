/**
* JavaScript wrapper for Information Package validation
*/
var ipValidator = {
  result : null,
  status : null,
  validate : function (formData, callback, contentType = 'text') {
    $.ajax({
      url         : 'api/sha1',
      type        : 'POST',
      data        : formData,
      dataType    : contentType,
      contentType : false,
      processData : false,
      success     : function (data, textStatus, jqXHR) {
        ipValidator.result = jqXHR.responseText;
        callback();
      },
      // HTTP Error handler
      error       : function (jqXHR, textStatus, errorThrown) {
        // Log full error to console
        console.log('Validation Error: ' + textStatus + errorThrown);
        console.log(jqXHR);
        // Alert the user with details
        alert('Something has gone wrong!!\n\nHTTP ' + jqXHR.status + ': ' + jqXHR.statusText);
      }
    });
  }
};
