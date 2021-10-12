function selectOption(option) {
  switch (option) {
    case 'firstOption':
      document.getElementById(option).style.border = "8px solid #0FBFFF";
      document.getElementById('SecondOption').style.border = "";
      document.getElementById('thirdOption').style.border = "";
      document.getElementById('fourthOption').style.border = "";
      break;
    case 'SecondOption':
      document.getElementById(option).style.border = "8px solid #FF960F";
      document.getElementById('firstOption').style.border = "";
      document.getElementById('thirdOption').style.border = "";
      document.getElementById('fourthOption').style.border = "";
      break;
    case 'thirdOption':
      document.getElementById(option).style.border = "8px solid #1E91E8";
      document.getElementById('firstOption').style.border = "";
      document.getElementById('SecondOption').style.border = "";
      document.getElementById('fourthOption').style.border = "";
      break;
    case 'fourthOption':
      document.getElementById(option).style.border = "8px solid #3915B0";
      document.getElementById('firstOption').style.border = "";
      document.getElementById('SecondOption').style.border = "";
      document.getElementById('thirdOption').style.border = "";
      break;
    default:
      throw new Error("Invalid option");
  }
}