console.log("LibraryX Loaded");
// Book Search

let bookSearch = document.getElementById("bookSearch");

if(bookSearch){

bookSearch.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let rows = document.querySelectorAll("#bookTable tr");


rows.forEach(function(row,index){

if(index === 0) return;


let data = row.innerText.toLowerCase();


if(data.includes(value)){

row.style.display="";

}
else{

row.style.display="none";

}

});


});

}



// Student Search

let studentSearch = document.getElementById("studentSearch");


if(studentSearch){

studentSearch.addEventListener("keyup", function(){

let value = this.value.toLowerCase();


let rows = document.querySelectorAll("#studentTable tr");


rows.forEach(function(row,index){

if(index === 0) return;


let data = row.innerText.toLowerCase();


if(data.includes(value)){

row.style.display="";

}
else{

row.style.display="none";

}

});


});

}
function addBook(){

let name = document.getElementById("bookName").value;

let author = document.getElementById("authorName").value;

let category = document.getElementById("category").value;

let quantity = document.getElementById("quantity").value;


if(name=="" || author=="" || category==""){

alert("Please fill all details");

return;

}


let book = {

name:name,

author:author,

category:category,

quantity:quantity

};


let books = JSON.parse(localStorage.getItem("books")) || [];


books.push(book);


localStorage.setItem("books",JSON.stringify(books));


alert("Book Added Successfully");


window.location.href="books.html";


}

window.onload=function(){

let table=document.getElementById("bookTable");


if(table){

let books=JSON.parse(localStorage.getItem("books")) || [];


books.forEach(function(book,index){


let row=table.insertRow();


row.innerHTML=

`
<td>${index+1}</td>

<td>${book.name}</td>

<td>${book.author}</td>

<td>${book.category}</td>

<td class="available">
Available
</td>
`;

});


}

}
function addStudent(){

let name = document.getElementById("studentName").value;

let course = document.getElementById("course").value;

let email = document.getElementById("email").value;

let mobile = document.getElementById("mobile").value;



if(name=="" || course=="" || email==""){

alert("Please fill all details");

return;

}



let student={

name:name,

course:course,

email:email,

mobile:mobile

};



let students = JSON.parse(localStorage.getItem("students")) || [];


students.push(student);


localStorage.setItem("students",JSON.stringify(students));


alert("Student Added Successfully");


window.location.href="students.html";


}
function loadStudents(){

let table=document.getElementById("studentTable");


if(table){

let students=JSON.parse(localStorage.getItem("students")) || [];


students.forEach(function(student,index){


let row=table.insertRow();


row.innerHTML=

`
<td>${index+1}</td>

<td>${student.name}</td>

<td>${student.course}</td>

<td>${student.email}</td>

<td class="available">
Active
</td>
`;

});


}

}


window.addEventListener("load",loadStudents);

function issueBook(){

let student = document.getElementById("issueStudent").value;

let book = document.getElementById("issueBook").value;

let date = document.getElementById("issueDate").value;


if(student=="" || book=="" || date==""){

alert("Please fill all details");

return;

}


let issueData={

student:student,

book:book,

date:date,

status:"Issued"

};


let issuedBooks =
JSON.parse(localStorage.getItem("issuedBooks")) || [];


issuedBooks.push(issueData);


localStorage.setItem(
"issuedBooks",
JSON.stringify(issuedBooks)
);


alert("Book Issued Successfully");


window.location.href="issue.html";


}

function loadIssuedBooks(){

let table=document.getElementById("issueTable");


if(table){

let data=
JSON.parse(localStorage.getItem("issuedBooks")) || [];


data.forEach(function(book,index){


let row=table.insertRow();


row.innerHTML=

`
<td>${index+1}</td>

<td>${book.student}</td>

<td>${book.book}</td>

<td>${book.date}</td>

<td class="issued">
${book.status}
</td>
`;

});


}

}


window.addEventListener("load",loadIssuedBooks);
function returnBook(){

let student =
document.getElementById("returnStudent").value;


let book =
document.getElementById("returnBook").value;


let date =
document.getElementById("returnDate").value;



if(student=="" || book=="" || date==""){

alert("Please fill all details");

return;

}



let returned={

student:student,

book:book,

date:date,

status:"Returned"

};



let returns =
JSON.parse(localStorage.getItem("returnedBooks")) || [];


returns.push(returned);


localStorage.setItem(
"returnedBooks",
JSON.stringify(returns)
);



alert("Book Returned Successfully");


window.location.href="return.html";


}
function loadReturnedBooks(){

let table = document.getElementById("returnTable");


if(table){

let data = JSON.parse(localStorage.getItem("returnedBooks")) || [];


data.forEach(function(book,index){


let row = table.insertRow();


row.innerHTML = `

<td>${index+1}</td>

<td>${book.student}</td>

<td>${book.book}</td>

<td>${book.date}</td>

<td class="available">
${book.status}
</td>

`;

});


}

}


window.addEventListener("load",loadReturnedBooks);

function loadReturnedBooks(){

    let table = document.getElementById("returnTable");

    if(table){

        let data = JSON.parse(localStorage.getItem("returnedBooks")) || [];


        // Old records clear (heading सोडून)
        table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Book</th>
            <th>Return Date</th>
            <th>Status</th>
        </tr>
        `;


        data.forEach(function(book,index){

            let row = table.insertRow();


            row.innerHTML = `
            
            <td>${index+1}</td>

            <td>${book.student}</td>

            <td>${book.book}</td>

            <td>${book.date}</td>

            <td class="available">
            ${book.status}
            </td>

            `;

        });

    }

}


window.addEventListener("load",loadReturnedBooks);
function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username=="admin" && password=="1234"){

        window.location.href="dashboard.html";

    }else{

        alert("Invalid Username or Password");

    }

    return false;
}
// ===============================
// ISSUE BOOK
// ===============================

function issueBook() {

    let student = document.getElementById("student").value.trim();
    let book = document.getElementById("book").value.trim();
    let date = document.getElementById("date").value;

    if (student === "" || book === "" || date === "") {
        alert("Please fill all fields");
        return;
    }

    let issuedBooks =
        JSON.parse(localStorage.getItem("issuedBooks")) || [];

    issuedBooks.push({
        student: student,
        book: book,
        date: date,
        status: "Issued"
    });

    localStorage.setItem(
        "issuedBooks",
        JSON.stringify(issuedBooks)
    );

    alert("Book Issued Successfully");

    document.getElementById("student").value = "";
    document.getElementById("book").value = "";
    document.getElementById("date").value = "";

    window.location.href = "issue.html";
}


// ===============================
// LOAD ISSUED BOOKS
// ===============================

function loadIssuedBooks() {

    let table = document.getElementById("issueTable");

    if (!table) {
        return;
    }

    // Remove old rows except heading
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    let issuedBooks =
        JSON.parse(localStorage.getItem("issuedBooks")) || [];

    issuedBooks.forEach(function(book, index) {

        let row = table.insertRow(-1);

        row.insertCell(0).innerHTML = index + 1;
        row.insertCell(1).innerHTML = book.student;
        row.insertCell(2).innerHTML = book.book;
        row.insertCell(3).innerHTML = book.date;
        row.insertCell(4).innerHTML = book.status;

    });
}


// ===============================
// FILTER ISSUED BOOKS BY DATE
// ===============================

function filterIssuedBooks() {

    let selectedDate = document.getElementById("date").value;
    let table = document.getElementById("issueTable");

    if (!table) {
        return;
    }

    // Date select केलेली नसेल तर सर्व records दाखवा
    if (selectedDate === "") {

        for (let i = 1; i < table.rows.length; i++) {
            table.rows[i].style.display = "";
        }

        return;
    }

    // Table मधील date YYYY-MM-DD format मध्ये आहे
    for (let i = 1; i < table.rows.length; i++) {

        let issueDate =
            table.rows[i].cells[3].innerText.trim();

        if (issueDate === selectedDate) {

            table.rows[i].style.display = "";

        } else {

            table.rows[i].style.display = "none";

        }
    }
}
// ===============================
// RETURN BOOK
// ===============================

function returnBook() {

    let student =
        document.getElementById("student").value.trim();

    let book =
        document.getElementById("book").value.trim();

    let date =
        document.getElementById("date").value;

    if (student === "" || book === "" || date === "") {
        alert("Please fill all fields");
        return;
    }

    

    let returnedBooks =
        JSON.parse(localStorage.getItem("returnedBooks")) || [];

    returnedBooks.push({
        student: student,
        book: book,
        date: date,
        status: "Returned"
    });

    localStorage.setItem(
        "returnedBooks",
        JSON.stringify(returnedBooks)
    );

    alert("Book Returned Successfully");

    document.getElementById("student").value = "";
    document.getElementById("book").value = "";
    document.getElementById("date").value = "";

    window.location.href = "return.html";
}


// ===============================
// LOAD RETURNED BOOKS
// ===============================

function loadReturnedBooks() {

    let table =
        document.getElementById("returnTable");

    if (!table) {
        return;
    }

    // Remove old rows except heading
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    let returnedBooks =
        JSON.parse(localStorage.getItem("returnedBooks")) || [];

    returnedBooks.forEach(function(book, index) {

        let row = table.insertRow(-1);

        row.insertCell(0).innerHTML = index + 1;
        row.insertCell(1).innerHTML = book.student;
        row.insertCell(2).innerHTML = book.book;
        row.insertCell(3).innerHTML = book.date;
        row.insertCell(4).innerHTML = book.status;

    });
}


// ===============================
// FILTER RETURNED BOOKS BY DATE
// ===============================

function filterReturnedBooks() {

    let selectedDate = document.getElementById("date").value;
    let table = document.getElementById("returnTable");

    if (!table) {
        return;
    }

    // Date select केली नसेल तर सर्व records दाखवा
    if (selectedDate === "") {

        for (let i = 1; i < table.rows.length; i++) {
            table.rows[i].style.display = "";
        }

        return;
    }

    // Table मधील date YYYY-MM-DD format मध्ये आहे
    for (let i = 1; i < table.rows.length; i++) {

        let returnDate =
            table.rows[i].cells[3].innerText.trim();

        if (returnDate === selectedDate) {

            table.rows[i].style.display = "";

        } else {

            table.rows[i].style.display = "none";

        }
    }
}

// ===============================
// PAGE LOAD
// ===============================

window.addEventListener("load", function () {

    loadIssuedBooks();
    loadReturnedBooks();

});
// =====================================
// STAFF MANAGEMENT
// =====================================

// ADD STAFF
function addStaff() {

    let name = document.getElementById("staffName").value.trim();
    let staffId = document.getElementById("staffId").value.trim();
    let mobile = document.getElementById("staffMobile").value.trim();
    let email = document.getElementById("staffEmail").value.trim();
    let role = document.getElementById("staffRole").value.trim();

    // Check required fields
    if (name === "" || staffId === "" || mobile === "") {

        alert("Please fill Staff Name, Staff ID and Mobile Number");

        return;
    }

    // Get existing staff
    let staffList =
        JSON.parse(localStorage.getItem("staffList")) || [];

    // Add new staff
    staffList.push({
        name: name,
        staffId: staffId,
        mobile: mobile,
        email: email,
        role: role,
        status: "Active"
    });

    // Save staff
    localStorage.setItem(
        "staffList",
        JSON.stringify(staffList)
    );

    alert("Staff Details Added Successfully!");

    // Clear form
    document.getElementById("staffName").value = "";
    document.getElementById("staffId").value = "";
    document.getElementById("staffMobile").value = "";
    document.getElementById("staffEmail").value = "";
    document.getElementById("staffRole").value = "";

    // Show updated list
    loadStaff();
}


// =====================================
// DISPLAY STAFF
// =====================================

function loadStaff() {

    let tableBody =
        document.getElementById("staffTableBody");

    if (!tableBody) {
        return;
    }

    tableBody.innerHTML = "";

    let staffList =
        JSON.parse(localStorage.getItem("staffList")) || [];

    if (staffList.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align:center;">
                    No Staff Added
                </td>
            </tr>
        `;

        return;
    }

    staffList.forEach(function(staff, index) {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>

            <td>${staff.name}</td>

            <td>${staff.staffId}</td>

            <td>${staff.mobile}</td>

            <td>${staff.email || "-"}</td>

            <td>${staff.role || "-"}</td>

            <td>${staff.status}</td>

            <td>
                <button
                    class="delete-btn"
                    onclick="deleteStaff(${index})">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);

    });
}


// =====================================
// SEARCH STAFF
// =====================================

function searchStaff() {

    let search =
        document.getElementById("searchStaff")
        .value
        .toLowerCase();

    let rows =
        document.getElementById("staffTableBody")
        .getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {

        let text =
            rows[i].innerText.toLowerCase();

        if (text.includes(search)) {

            rows[i].style.display = "";

        } else {

            rows[i].style.display = "none";

        }
    }
}


// =====================================
// DELETE STAFF
// =====================================

function deleteStaff(index) {

    if (!confirm("Are you sure you want to delete this staff?")) {
        return;
    }

    let staffList =
        JSON.parse(localStorage.getItem("staffList")) || [];

    staffList.splice(index, 1);

    localStorage.setItem(
        "staffList",
        JSON.stringify(staffList)
    );

    alert("Staff Deleted Successfully!");

    loadStaff();
}


// =====================================
// LOAD WHEN PAGE OPENS
// =====================================

window.addEventListener("load", function() {

    loadStaff();

});

// SEARCH ISSUED BOOKS BY STUDENT

function searchIssuedStudent() {

    let search = document.getElementById("issueStudentSearch")
        .value.trim().toLowerCase();

    let table = document.getElementById("issueTable");

    if (!table) return;

    for (let i = 1; i < table.rows.length; i++) {

        let student =
            table.rows[i].cells[1].innerText.toLowerCase();

        if (student.includes(search)) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }
    }
}

// =====================================
// RETURN STUDENT SEARCH
// =====================================

function searchReturnedStudent() {

    let searchBox = document.getElementById("returnStudentSearch");
    let table = document.getElementById("returnTable");

    if (searchBox === null || table === null) {
        return;
    }

    let searchValue = searchBox.value.toLowerCase().trim();

    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {

        let studentName = rows[i]
            .getElementsByTagName("td")[1]
            .innerText
            .toLowerCase()
            .trim();

        if (studentName.includes(searchValue)) {

            rows[i].style.display = "";

        } else {

            rows[i].style.display = "none";

        }
    }
}