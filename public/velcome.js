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

// set content
modal.setContent('<h1>Тест на вашу проф ориентацию</h1><p>Вам предстоит пройти тест по результатам которого можно подобрать интерестные для вас профессии</p>');

// add a button
modal.addFooterBtn('Закрыть окно', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
});

// open modal
modal.open();