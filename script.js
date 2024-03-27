  function myMenu() {
    document.getElementById('mymenu').classList.toggle('open');
    document.getElementById('menuButton').classList.toggle('close');
  }

  function menuclose() {
    document.getElementById('mymenu').classList.remove('open');
    document.getElementById('menuButton').classList.remove('close');
  }