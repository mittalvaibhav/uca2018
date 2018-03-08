function Insert()
{
  //alert('sad');
  fetch=document.getElementsByTagName("input")
  s_name=fetch[0].value
  s_rollno=fetch[1].value
  s_section=fetch[2].value
  trow=document.createElement("tr")
  butn=document.createElement("input")
  butn.setAttribute('type','checkbox')
  td_1=document.createElement("td")
  td_2=document.createElement("td")
  td_3=document.createElement("td")
  trow.appendChild(butn)
  trow.appendChild(td_1)
  trow.appendChild(td_2)
  trow.appendChild(td_3)
  //spaces= "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" 
  td_1.innerHTML= s_name
  td_2.innerHTML=s_rollno
  td_3.innerHTML=s_section
  trow.align="center"
  butn.align="center"
  td_1.align="center" 
  td_2.align="center"
  td_3.align="center"
             
  tabl=document.getElementById('tab')
  tabl.appendChild(trow)            
}

function Delete()
{
  
  $("#tab input:checkbox:checked").closest('tr').remove();

}
function Edit()
{
  check=document.getElementsByTagName('td')
  if(check)
  if($("#tab input:checkbox.checked"))
  {
    alert("yo");
    ExecuteEdit()
  }
  else
  {
    alert("selea");
  }
}

function ExecuteEdit()
{
  fetch=document.getElementsByTagName("input")
  s_name=fetch[0].value
  s_rollno=fetch[1].value
  s_section=fetch[2].value

  check=document.createElement("input")
  check.setAttribute('type','checkbox')

  trow=document.createElement("tr")
  td_1=document.createElement("td")
  td_2=document.createElement("td")
  td_3=document.createElement("td")
  trow.appendChild(check)
  trow.appendChild(td_1)
  trow.appendChild(td_2)
  trow.appendChild(td_3)
  // spaces= "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" 
  td_1.innerHTML= s_name
  td_2.innerHTML=s_rollno
  td_3.innerHTML=s_section
  trow.align="center"
  //butn.align="center"
  td_1.align="center" 
  td_2.align="center"
  td_3.align="center"
  tabl=document.getElementById('tab')
  tabl.appendChild(trow)
  td1=document.getElementsByTagName('td')
  td1_val=td1.value
  alert(td1_val); 

  //$("input:checkbox:checked").replaceWith(check);
 // $().replaceWith(s_name);
 // $(" td_2.innerHTML").replaceWith(s_rollno);
  //$(" td_3.innerHTML").replaceWith(s_section);
 
}