let createFilterStatus = (currentStatus) => {
    let statusFilter = [
        {name: 'Danh mục sản phẩm', value:'',link:'#', class: 'white'},
        {name: 'Thời trang nam', value:'thoi-trang-nam',link:'#', class: 'white'},
        {name: 'Thời trang nữ', value:'thoi-trang-nu',link:'#', class: 'white'},
        {name: 'Thời trang trẻ em', value:'thoi-trang-tre-em',link:'#', class: 'white'},
        {name: 'Giày thể thao', value:'giay-the-thao',link:'#', class: 'white'},
        {name: 'Phụ kiện đi kèm', value:'phu-kien-di-kem',link:'#', class: 'white'},
        {name: 'Đồ cũ', value:'do-cu',link:'#', class: 'white'},
      // {name: 'Thời trang và phụ kiện', value:'thoi-trang-va-phu-kien',link:'#', class: 'white'},
      // {name: 'Thiết bị điện tử', value:'thiet-bi-dien-tu',link:'#', class: 'white'},
      // {name: 'Đồ gia dụng', value:'do-gia-dung',link:'#', class: 'white'}
      ];
    
      statusFilter.forEach((item, index) => {  
            //if(item.value !== 'danh-muc-san-pham') condition = {status: item.value};
            if(item.value === currentStatus)  statusFilter[index].class = 'danger text-white';
            
      });

      return statusFilter;
}

module.exports = {
    createFilterStatus
};