function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var now = new Date();
  
  for (var i = 3; i < 100; i++) {
    var row = i;
    var col = 5;

    var vValue = SpreadsheetApp.getActiveSheet().getRange(row, col).getValue();
    
    if (vValue > now) {
      var range = sheet.getRange(row,1);
      sheet.setActiveRange(range);
      break
    }

  }
  
}