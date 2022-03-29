// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
//   ask('Do you agree?', 
//     function () { alert('You agreed.'); },
//     function () { alert('You canceled the execution.'); }
//   );

let askArrowForm = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}
askArrowForm('Do you agree? (Arrow)', 
function () { alert('You agreed. (Arrow)'); },
function () { alert('You canceled the execution. (Arrow)'); }
);