// Função para formatar a data para o padrão brasileiro
function formatDate(us_date) {
  "2014-03-13T00:00:14Z";
  let date = us_date.replace("Z", "");
  date = date.replace("T", "-");
  date = date.split("-");
  date = date[2] + "/" + date[1] + "/" + date[0] + " " + date[3];

  return date;
}

export default formatDate;
