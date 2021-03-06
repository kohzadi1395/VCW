/**
 * @return {string}
 */
export function NumFormatter(num) {
  let si = [
    {value: 1, symbol: ""},
    {value: 1E3, symbol: "k"},
    {value: 1E6, symbol: "M"},
    {value: 1E9, symbol: "G"},
    {value: 1E12, symbol: "T"},
    {value: 1E15, symbol: "P"},
    {value: 1E18, symbol: "E"}
  ];
  let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(1).replace(rx, "$1") + si[i].symbol;
}


export function Capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function EmailValidation() {
  return control => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(control.value) ? null : {invalidEmail: true};
  };
}

export function NewGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}





