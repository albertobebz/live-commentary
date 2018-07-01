const date = new Date();
const day = date.getUTCDate();
const month = date.getUTCMonth() + 1;
const year = date.getUTCFullYear();
const todayDate = `${day}/${month}/${year}`;

export default todayDate;
