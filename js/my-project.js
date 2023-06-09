// let namaSiswa1 = "Rizki";
// let namaSiswa2 = "Ipul";
// let namaSiswa3 = "Daeng";

// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);

// Array menampung lebih dari satu value
// let namaSiswa = ["Fahrul", "Faris", "Fira", "Fais"]
// console.log(namaSiswa)
// di dalam array ada namanya indeks, jadi ketika kita memanggil salah satu data di array kita panggil lagi dengan []
// console.log(namaSiswa[0])
// array selalu mulai dari indeks 0

// object
// let nama = "Erna"
// let alamat = "Jakarta Barat"
// let umur = 21

// console.log(nama);
// console.log(alamat);
// console.log(umur);
// object itu pake curly bracket
// let dataPersonal1 = {
//     nama: "Aqilah", 
//     alamat: "Jakarta Barat",
//     umur: 6
// }

// let dataPersonal2 = {
//     nama: "Ernawati",
//     alamat: "Kayu Besar",
//     umur: 21
// }

// let dataPersonal3 = {
//     nama: "Arif Rahman",
//     alamat: "Bekasi",
//     umur: 24
// }


// console.log(dataPersonal1)
// console.log(dataPersonal2)
// console.log(dataPersonal3)
// console.log(dataPersonal2.nama)
// kalau mau ambil namanya saja

// array of object
// let dataCapres = [
//     {nama: "Anies Baswedan", alamat: "Jakarta"},
//     {nama: "Ganjar Pranowo", alamat: "Jawa Tengah"}
// ];

// console.log(dataCapres);
// console.log(dataCapres[1].nama)

let dataProject = [];

function addProject(event) {
    event.preventDefault();

    let projectName = document.getElementById("input-project-title").value;
    let startDate = new Date(document.getElementById("input-project-start-date").value);
    let endDate = new Date (document.getElementById("input-project-end-date").value);
    let description = document.getElementById("input-project-content").value;
    let image = document.getElementById("input-project-image").files;

    // durasi
    function getDifferenceTime() {
    let distance = endDate - startDate; // hasilnya milidetik
    console.log(distance);
  
    let milisecond = 1000;
    let secondInHours = 3600; 
    let hoursInDays = 24; 
    let daysInMonth = 30; 
    let monthInYear = 12; 
    
    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDays) 
    ); 
    let distanceMonth = Math.floor(distance / (milisecond * secondInHours * hoursInDays * daysInMonth)
    );
    let distanceYear = Math.floor(distance /(milisecond * secondInHours * hoursInDays * daysInMonth * monthInYear)
    );

    if (distanceDay < distanceMonth) {
        distanceDay = distanceMonth - distanceDay
    } else if (distanceMonth < distanceYear) {
        distanceMonth = distanceYear - distanceMonth
    }

    
    if (distanceYear > 0) {
        return `${distanceYear} Tahun`;
      } else if (distanceMonth > 0) {
        return `${distanceMonth} Bulan`;
      } else if (distanceDay > 0) {
        return `${distanceDay} Hari`
      }
    }

    let durasi = getDifferenceTime();
    
    // checkbox tech
    const javaIcon = '<i class="fa-brands fa-java"></i>';
    const javascriptIcon = '<i class="fa-brands fa-python"></i>';
    const pythonIcon = '<i class="fa-brands fa-square-js"></i>';
    const phpIcon = '<i class="fa-brands fa-php"></i>';

    let checkboxJava = document.getElementById("ini-java").checked ? javaIcon : "";
    let checkboxJavascript = document.getElementById("ini-javascript").checked ? javascriptIcon : "";
    let checkboxPython = document.getElementById("ini-python").checked ? pythonIcon : "";
    let checkboxPhp = document.getElementById("ini-php").checked ? phpIcon: "";

    // untuk membuat url gambar agar tampil
    image = URL.createObjectURL(image[0]);
    console.log(image);

    let project = {
        projectName,
        startDate,
        endDate,
        durasi,
        description,
        image,
        checkboxJava,
        checkboxJavascript,
        checkboxPython,
        checkboxPhp,
        postAt: new Date(),
        author: "Muhammad Rizki B",
    }

    dataProject.push(project)
    console.log(dataProject)

    renderProject()
}

function renderProject() {
    document.getElementById("gridd").innerHTML = "";
    for (let index = 0; index < dataProject.length; index++)
    document.getElementById("gridd").innerHTML += `

    <article>
    <img class="project-image" src="${dataProject[index].image}" alt="apps" />
    <div class="project-content">
    <h1>
    <a href="project-detail.html" target="_blank">
    ${dataProject[index].projectName}</a>
    </h1>
    <div class="detail-project-content">
    <p>Durasi: ${dataProject[index].durasi} </p>
    <p style="font-size: 10px">${getFullTime(dataProject[index].postAt)} | ${
            dataProject[index].author
        } </p>
        <p>
        ${dataProject[index]. description}
        </p>
        <div class="tech-icon">
        ${dataProject[index].checkboxJava}
        ${dataProject[index].checkboxJavascript}
        ${dataProject[index].checkboxPython}
        ${dataProject[index].checkboxPhp}
      </div>
        <div class="btn-group">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
        </div>
        <div style="float: right; margin: 10px">
                <p style="font-size: 15px; color: grey">${getDistanceTime(dataProject[index].postAt)}
                </p>
    </div>
    </div>
    </div>
    </article>
    </main>
`
}
// untuk menambah interval
// {/* <div style= "float: right;margin: 10px">
// <p style="font-size: 10px; color: grey">${getDistanceTime(dataProject[index].postAt)}
// </p>
// </div> */}

function getFullTime (time) {
    // console.log ("get full time");
    // let time = newDate();
    // console.log(time)

    let monthName = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    // console.log(monthName[5]);

    let date = time.getDate();
    let monthIndex = time.getMonth();
    let year = time.getFullYear();
    let hours = time.getHours();
    let minutes = time.getMinutes();

    if (hours <= 9) {
        hours = "0" + hours;
    } else if (minutes <= 9) {
        minutes = "0" + minutes;
    }

    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceTime(time) {
    let timeNow = new Date();
    let timePost = time;

    // waktu sekarang
    let distance = timeNow - timePost;  //dia hasilnya milidetik
    console.log(distance);

    let milisecond = 1000; //milisecond
    let secondInHours = 3600 // 1 Jam itu 3600 detik
    let hoursInDays = 24; //1 Hari itu 24 Jam

    let distanceDay = Math.floor(
        distance / (milisecond * secondInHours * hoursInDays)); //jadi ini 1/86400000
    let distanceHours = Math.floor(
        distance / (milisecond * 60 * 60)); //jadi 1/3600000
    let distanceMinutes = Math.floor(
        distance / (milisecond * 60)); //jadi 1/60000
    let distanceSeconds = Math.floor(
        distance / milisecond);
    
        if (distanceDay > 0) {
            return `${distanceDay} Day Ago`
        } else if (distanceHours > 0) {
            return `${distanceHours} Hours Ago`
        } else if (distanceMinutes > 0) {
            return `${distanceMinutes} Minutes Ago`
        } else if (distanceSeconds > 0) {
            return `${distanceSeconds} Seconds Ago`
        }
}

setInterval(function () {
    renderProject();
}, 10000);

