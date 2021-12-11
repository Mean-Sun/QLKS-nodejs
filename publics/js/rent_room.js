function rent_room_add_customer() {
    var table = document.getElementById('rent-room_form_customer-information');

    var num_of_cus = table.querySelectorAll('tr').length;
    var customer = document.createElement('tr');
    customer.innerHTML = `<th scope="row">${num_of_cus+1}</th>
    <td><input class="form-control" type="text"></td>
    <td>
        <select class="form-select" aria-label="Default select example" placeholder="Chọn loại khách hàng">
        <option value="001">Khách trong nước</option>
        <option value="002">Khách nước ngoài</option>
      </select>
    </td>
    <td><input class="form-control" type="text"></td>
    <td><input class="form-control" type="text"></td>
    <td><button type="button" class="btn btn-secondary"><i class="fas fa-trash-alt"></i></button></td>`

}