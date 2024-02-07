document.querySelector('#getResult').addEventListener('click', function(e) {
    e.preventDefault();
    var modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Close",
        cssClass: ['custom-class-1', 'custom-class-2'],
        onOpen: function() {
            console.log('modal open');
        },
        onClose: function() {
            console.log('modal closed');
        },
        beforeClose: function() {
            // here's goes some logic
            // e.g. save content before closing the modal
            return true; // close the modal
            return false; // nothing happens
        }
    });

    let form = document.forms.questions;
    let data = new FormData(form);
    let profes = ["IT профессии",
        "Медицинские профессии",
        "Профессии в сфере искусства и культуры",
        "Инженерно-технические профессии",
        "Сфера финансов и бизнеса",
        "Профессии в сфере образования"
    ]
    let ans_discriptions = [
        "IT-специалисты, программисты, системные администраторы и т.д.",
        "врачи различных специальностей (терапевты, педиатры, хирурги, гинекологи, офтальмологи и др.), медсестры, фельдшеры, фармацевты и т.д.",
        "актеры, режиссеры, художники, музыканты, писатели, журналисты, дизайнеры и др.",
        "инженеры различных специальностей (связи, строительства, электротехники, авиационные, автомобильные и др.)",
        "экономисты, бухгалтеры, финансовые аналитики, менеджеры, маркетологи и др.",
        "учителя, преподаватели вузов и колледжей, детские садовники, педагоги-психологи, библиотекари и др."
    ]
    let inf = 0;
    let med = 0;
    let isc = 0;
    let inj = 0;
    let ec = 0;
    let obr = 0;
    for (const entry of data) {
        switch (entry[1]) {
            case "inf":
                inf += 1;
                break;
            case "med":
                med += 1;
                break;
            case "isc":
                isc += 1;
                break;
            case "inj":
                inj += 1;
                break;
            case "ec":
                ec += 1;
                break;
            case "obr":
                obr += 1;
                break;
        }
    }
    let profes_nums = [inf, med, isc, inj, ec, obr];
    let profe_id = profes_nums.indexOf(Math.max.apply(null, profes_nums))
    let ans = profes[profe_id];

    modal.setContent(`<h1>${ans}</h1><p>Вам подйдут такие профессии как ${ans_discriptions[profe_id]}</p>`);
    modal.addFooterBtn('Закрыть окно', 'tingle-btn tingle-btn--default tingle-btn--pull-right', function() {
        modal.close();
    });

    modal.open();
});