function format(date) {
    const dateObject = new Date(date);
  
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
  
    // Construct an ISO-8601 formatted date
    const isoFormattedDate = `${year}-${month}-${day}T00:00:00.000Z`;
  
    return isoFormattedDate;
  }
  
  module.exports = format;
  