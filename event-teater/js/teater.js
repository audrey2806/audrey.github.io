const endpoint_url='https://51018015.p-web.click/event-teater/api';

function getTeaterList() {
  fetch(endpoint_url + "/events/eventlist")
    .then(status)
    .then(json)
    .then(function(data) {
      var daftarteater = "";
      data.event.forEach(function(daftar) {
        daftarteater += `
            <div class="col m4 s12">
            <div class="card">
              <a href="detailteater.html?id=${daftar.kode_event}">
                <div class="card-image waves-effect waves-block waves-light">
                  <img src="${daftar.poster}" />
                </div>
              </a>
              <div class="card-content center-align">
                <strong>${daftar.judul_teater}</strong><br><br>
                <a class="btn" href="detailteater.html?id=${daftar.kode_event}">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
            ` ;
        });
          document.getElementById("daftar_teater").innerHTML = daftarteater;
        })
    .catch(error);
}

function getTeaterDetail(id) {
  fetch( endpoint_url + "/teater/teaterdetail/id/" + id )
    .then(status)
    .then(json)
    .then(function(data) {
      var detailteater = "";
        data.teater.forEach(function(detail) {
        detailteater += `
                <div class="row" style="margin-top:50px;">
                  <div class="col s9" style="margin-left:12.5%;">
                    <div class="card">
                      <div class="card-image">
                          <img src="${detail.poster}">
                      </div>
                    </div>
                  </div>

                  <div class="col s12" style="margin-top:40px;margin-bottom:40px;">
                    <strong><b>Judul Teater: </b></strong> ${detail.judul_teater}<br><br>
                    <strong><b>Info Teater: </b><br> ${detail.info_teater}</strong><br><br>
                    <strong><b>Sinopsis: </b><br> ${detail.sinopsis}</strong><br><br>
                    <strong><b>Deskripsi: </b><br> ${detail.deskripsi}</strong>
                  </div>
                </div>
              `;
        });
              document.getElementById("detail_teater").innerHTML = detailteater;
        })
  .catch(error);
}
