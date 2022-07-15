function showHideRow(row) {
    $('#' + row).toggle();
}

function searchTableColumns() {
    // Declare variables 
    var input, filter, table, tr, i, j, column_length, count_td;
    column_length = document.getElementById("historico_tabela").rows[0].cells.length;
    input = document.getElementById("input-pesq");
    filter = input.value.toUpperCase();
    table = document.getElementById("historico_tabela");
    tr = table.getElementsByClassName("parentRow");
    for (i = 0; i < tr.length; i++) { // except first(heading) row
      count_td = 0;
      for(j = 0; j < column_length+1; j++){ // except first column
          td = tr[i].getElementsByTagName("td")[j];
          /* ADD columns here that you want you to filter to be used on */
          if (td) {
            if ( td.innerHTML.toUpperCase().indexOf(filter) > -1)  {            
              count_td++;
            }
          }
      }
      if(count_td > 0){
          tr[i].style.display = "";
      } else {
          tr[i].style.display = "none";
      }
    }
    
  }



