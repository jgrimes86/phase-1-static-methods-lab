class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }
  static titleize(string) {
    let array = string.toLowerCase().split(' ');
    let newArray = array.map(item => {
      if (`${item}` != 'a' && `${item}` != 'an' && `${item}` != 'but' && `${item}` != 'of' && `${item}` != 'and' && `${item}` != 'for' && `${item}` != 'at' && `${item}` != 'by' && `${item}` != 'from' && `${item}` != 'the') {
        return item.charAt(0).toUpperCase() + item.slice(1);
      } else {return item}  
    });
    let firstNewString = newArray.join(' ');
    let secondNewString = firstNewString.charAt(0).toUpperCase() + firstNewString.slice(1);
    return secondNewString;
  }
}

// console.log(Formatter.titleize('a test And very good'))