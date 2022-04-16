export function getPrevCurrNextYears() {
  const currentYear = getCurrentYear();
  return [currentYear - 1, currentYear, currentYear + 1];
}

function getCurrentYear() {
  let date = new Date();
  return date.getFullYear();
}


