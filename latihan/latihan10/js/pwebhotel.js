const endpoint_url = 'https://51018015.p-web.click/prak8/api';

function getRoomRate() {
  fetch(endpoint_url + "/rooms/roomlist")
    .then(status)
    .then(json)
    .then(function(data) {

    var tb_header = `
                      <table id="tb_roomrate">
                        <thead>
                          <tr>
                            <th>Room Type</th>
                            <th>Room Rate</th>
                            <th>Available</th>
                          </tr>
                      </thead>
                      <tbody></tbody>
                      </table>
                    `;

    $("#dttable").html( tb_header );
    $("#tb_title").html( "Room Rate" );

    $('#tb_roomrate').DataTable({
        "data": data.rooms,
        "columns": [
          { "data": "rtype" },
          { "data": "rate" },
          { "data": "jumlah_kamar" }
        ]
    });

      $('select').formSelect();
    })
    .catch(error);
}

function getRoomList() {
  fetch(endpoint_url + "/rooms/daftarkamar")
    .then(status)
    .then(json)
    .then(function(data) {

      var tb_header = `
          <table id="tb_roomrate">
          <thead>
            <tr>
              <th>Room#</th>
              <th>Type</th>
              <th>View</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody></tbody>
          </table>
          `;

          $("#dttable").html( tb_header );
          $("#tb_title").html( "Rooms" );

          $('#tb_roomrate').DataTable({
              "data": data.rooms,
              "columns": [
                  { "data": "room" },
                  { "data": "rtype" },
                  { "data": "dview" },
                  { "data": "vrate" }
              ]
          });

          $('select').formSelect();
        })
        .catch(error);
}

function getGuestsList() {
  fetch(endpoint_url + "/guests/daftartamu")
    .then(status)
    .then(json)
    .then(function(data) {

      var tb_header = `
          <table id="tb_guestslist">
          <thead>
            <tr>
              <th>Member ID</th>
              <th>Date In</th>
              <th>Date Out</th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody></tbody>
          </table>
          `;

          $("#dttable").html( tb_header );
          $("#tb_title").html( "Guests" );

          $('#tb_guestslist').DataTable({
              "data": data.guests,
              "columns": [
                  { "data": "member_ID" },
                  { "data": "date_in" },
                  { "data": "date_out" },
                  { "data": "room" }
              ]
          });

          $('select').formSelect();
        })
        .catch(error);
}


function getmembersList() {
  fetch(endpoint_url + "/members/daftarmember")
    .then(status)
    .then(json)
    .then(function(data) {

      var tb_header = `
          <table id="tb_member">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Kota</th>
              <th>Telepon</th>
            </tr>
          </thead>
          <tbody></tbody>
          </table>
          `;

          $("#dttable").html( tb_header );
          $("#tb_title").html( "Members" );

          $('#tb_member').DataTable({
              "data": data.members,
              "columns": [
                  { "data": "nama" },
                  { "data": "alamat" },
                  { "data": "kota" },
                  { "data": "telepon" }
              ]
          });

          $('select').formSelect();
        })
        .catch(error);
}
