function getAzureDevices() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Intune Tracker");
  var range = sheet.getDataRange();
  var values = range.getValues();
  var headers = values[0];
  var primaryUserUPNIndex = headers.indexOf("Primary user UPN");
  var devicesIndex = headers.indexOf("Devices");

  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var primaryUserUPN = row[primaryUserUPNIndex];

    if (primaryUserUPN) {
      var url = "https://graph.microsoft.com/v1.0/users/" + encodeURIComponent(primaryUserUPN) + "/registeredDevices";
      var response = UrlFetchApp.fetch(url, {
        headers: {
          Authorization: "Bearer " + ScriptApp.getOAuthToken()
        }
      });

      var data = JSON.parse(response.getContentText());

      if (data.value.length > 0) {
        var deviceName = data.value[0].displayName;
        sheet.getRange(i + 1, devicesIndex + 1).setValue(deviceName);
      }
    }
  }
}
