$(document).ready(function(){
    $('.data').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('__');
        let id_b = rid[1];
        let name = $('#namae'+id_b).text();

        if(isi=='Hapus'){
            let konfirmasi = confirm(`Apakah anda yakin ingin menghapus data atas nama ${name}??`);
            if(!konfirmasi) return;

            $('#b'+id_b).fadeOut();
        }else{
            alert("Anda mengklik kolom yang berisi : " +$(this).html() + "!");
        }
    })
})
