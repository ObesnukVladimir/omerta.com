function check() {
    let data = document.getElementsByClassName("inp");
    for (let el of data) {
        if (el.value == "") {
            alert("Поле не заполнено!");
            break;

        }
    }
}