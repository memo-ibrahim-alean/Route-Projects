const bookmarkName = document.getElementById("bookmarkName");
const bookmarkURL = document.getElementById("bookmarkURL");

let bookmarks;

if (localStorage.getItem('Bookmarks') === null) {
    bookmarks = [];
} else {
    bookmarks = JSON.parse(localStorage.getItem('Bookmarks'));
    displayUrl();
}


function createUrl() {
    let bookmark = {
        name: bookmarkName.value,
        url: bookmarkURL.value
    }

    if (bookmarks.length >= 0 && bookmark.name !== "" && bookmark.url !== "" && checkUrlInput()) {
        for (let i = 0; i < bookmarks.length; i++) {
            if ((bookmarks[i].name).toLowerCase() === (bookmark.name).toLowerCase() && (bookmarks[i].url).toLowerCase() === (bookmark.url).toLowerCase()) {
                swal({
                    title: "Warning",
                    text: "Bookmark already exists",
                    type: "warning",
                });
                restUrl();
                return;
            } else if ((bookmarks[i].url).toLowerCase() === (bookmark.url).toLowerCase()) {
                swal({
                    title: "Warning",
                    text: "Bookmark URL already exists",
                    type: "warning",
                });
                restUrl();
                return;
            }
            else if ((bookmarks[i].name).toLowerCase() === (bookmark.name).toLowerCase()) {
                // alert("Bookmark name already exists");
                swal({
                    title: "Warning",
                    text: "Bookmark name already exists",
                    type: "warning",
                });
                restUrl();
                return;
            } else if ((bookmarks[i].url).toLowerCase() === (bookmark.url).toLowerCase()) {
                // alert("Bookmark URL already exists");
                swal({
                    title: "Warning",
                    text: "Bookmark URL already exists",
                    type: "warning",
                });
                restUrl();
                return;
            }
        }
        bookmarks.push(bookmark);
        localStorage.setItem('Bookmarks', JSON.stringify(bookmarks));
        displayUrl();
        restUrl();
        console.log(bookmarks);
    } else {
        swal({
            title: "Warning",
            text: "Site Name or Url is not valid, Please click on 'check rules' button to know them",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "check rules",
            closeOnConfirm: false
        },
            function () {
                swal("Rules", `1- Site URL must be a valid one
                (ex https://www.google.com)
                2- Site name must contain at least 3 characters`, "success");
            });
    }

}

function displayUrl() {
    let tableContent = document.getElementById("tableContent");

    let trs = '';

    for (let i = 0; i < bookmarks.length; i++) {
        trs += `
        <tr>
            <td>${i + 1}</td>
            <td class="text-capitalize">${bookmarks[i].name}</td>
            <td>
                <button class="btn btn-visit" data-index="0" >
                    <i class="fa-solid fa-eye pe-2"></i><a href="${bookmarks[i].url}" target="_blank">Visit</a>
                </button>
            </td>
            <td>
                <button class="btn btn-delete pe-2" onClick="removeUrl(${i})" data-index="0">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                </button>
            </td>
        </tr>
    `;
    }


    tableContent.innerHTML = trs;
}

function restUrl() {
    bookmarkName.value = "";
    bookmarkURL.value = "";
    bookmarkURL.classList.remove('is-valid');
    bookmarkName.classList.remove('is-valid');
    bookmarkName.classList.remove('is-invalid');
    bookmarkURL.classList.remove('is-invalid');
}

function removeUrl(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem('Bookmarks', JSON.stringify(bookmarks));
    displayUrl(bookmarks);
    restUrl();
}

function checkNameInput() {
    if (bookmarkName.value === "") {
        bookmarkName.classList.remove('is-invalid');
        bookmarkName.classList.remove('is-valid');
    }
    else if (bookmarkName.value.length < 4) {
        bookmarkName.classList.add('is-invalid');
    } else {
        bookmarkName.classList.remove('is-invalid');
        bookmarkName.classList.add('is-valid');
    }
}

function checkUrlInput() {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    const url = bookmarkURL.value.trim();
    if (url === "") {
        bookmarkURL.classList.remove('is-invalid');
        bookmarkURL.classList.remove('is-valid');
    } else if (!urlPattern.test(url)) {
        bookmarkURL.classList.add('is-invalid');
        return false;
    } else {
        bookmarkURL.classList.remove('is-invalid');
        bookmarkURL.classList.add('is-valid');
        return true;
    }
}
